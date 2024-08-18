package com.example.next_gen_back.filter;

import com.example.next_gen_back.model.Role;
import com.example.next_gen_back.model.User;
import com.example.next_gen_back.service.UserDetailsServiceImpl;
import com.example.next_gen_back.service.JWTService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.Nonnull;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Arrays;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JWTService jwtService;
    private final UserDetailsServiceImpl userDetailsService;

    // Constructor to initialize the JWT service and user details service
    public JwtAuthenticationFilter(JWTService jwtService, UserDetailsServiceImpl userDetailsService) {
        this.jwtService = jwtService;
        this.userDetailsService = userDetailsService;
    }

    @Override
    protected void doFilterInternal(
            @Nonnull HttpServletRequest request,
            @Nonnull HttpServletResponse response,
            @Nonnull FilterChain filterChain) throws ServletException, IOException {

        // Extract the Authorization header from the request
        String authHeader = request.getHeader("Authorization");

        // If the Authorization header is missing or doesn't start with "Bearer ", continue the filter chain
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        // Extract the JWT token from the Authorization header
        String token = authHeader.substring(7);
        String username = jwtService.extractUsername(token); // Extract the username from the token

        // If a username is found in the token
        if (username != null) {
            // Load the user details using the username
            User user = userDetailsService.loadUserByUsername(username);
            Role role = user.getRole(); // Get the user's role

            System.out.println(user.getAuthorities()); // Debugging: print user authorities

            // Validate the token
            if (jwtService.validateToken(token, user)) {
                // Create an authentication token with the user's authorities
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        user, user.getId(), Arrays.asList(new SimpleGrantedAuthority("ROLE_" + role)));

                // Set the authentication details from the request
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                // Create a new security context and set the authentication token
                SecurityContext securityContext = SecurityContextHolder.createEmptyContext();
                securityContext.setAuthentication(authToken);

                // Set the security context in the SecurityContextHolder
                SecurityContextHolder.setContext(securityContext);
            }
        }

        // Continue the filter chain
        filterChain.doFilter(request, response);
    }
}
