package com.example.next_gen_back.service;

import com.example.next_gen_back.model.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.Nonnull;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.function.Function;

@Service
public class JWTService {

    // Secret key used for signing and verifying the JWT tokens
    private static final String SECRET_KEY = "532ba6d6f9b27d46872ac09c3826be68443f7427044e1e91f1572d3ebc358466";

    /**
     * Generates a JWT token for a given user.
     *
     * @param user The user for whom the token is being generated.
     * @return A JWT token string.
     */
    public String generateToken(User user) {
        return Jwts.builder()
                .setSubject(user.getUsername()) // Set the username as the subject of the token
                .setIssuedAt(new Date(System.currentTimeMillis())) // Set the current time as the issue time
                .claim("roles", user.getAuthorities()) // Add user roles as claims
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10)) // Set token expiration to 10 hours
                .signWith(SignatureAlgorithm.HS256, getSignInKey()) // Sign the token using the HS256 algorithm and the secret key
                .compact(); // Build the token
    }

    /**
     * Validates a JWT token against a user's details.
     *
     * @param token The JWT token to validate.
     * @param userDetails The user details to validate against.
     * @return True if the token is valid, false otherwise.
     */
    public Boolean validateToken(String token, UserDetails userDetails) {
        final String username = extractUsername(token); // Extract the username from the token
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token)); // Check if the username matches and the token is not expired
    }

    /**
     * Extracts the username from a JWT token.
     *
     * @param token The JWT token.
     * @return The username extracted from the token.
     */
    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject); // Extract the subject (username) from the token
    }

    /**
     * Extracts the expiration date from a JWT token.
     *
     * @param token The JWT token.
     * @return The expiration date extracted from the token.
     */
    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration); // Extract the expiration date from the token
    }

    /**
     * Extracts a specific claim from a JWT token.
     *
     * @param token The JWT token.
     * @param claimsResolver A function to extract the claim.
     * @param <T> The type of the claim.
     * @return The extracted claim.
     */
    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token); // Extract all claims from the token
        return claimsResolver.apply(claims); // Apply the function to extract the specific claim
    }

    /**
     * Extracts all claims from a JWT token.
     *
     * @param token The JWT token.
     * @return The claims extracted from the token.
     */
    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSignInKey()) // Set the signing key for parsing the token
                .build()
                .parseClaimsJws(token) // Parse the token
                .getBody(); // Get the body of the token which contains the claims
    }

    /**
     * Checks if a JWT token is expired.
     *
     * @param token The JWT token.
     * @return True if the token is expired, false otherwise.
     */
    private Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date()); // Check if the token's expiration date is before the current date
    }

    /**
     * Decodes a JWT token to extract its claims.
     *
     * @param token The JWT token.
     * @return The claims extracted from the token.
     */
    private Claims decodeToken(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSignInKey()) // Set the signing key for parsing the token
                .build()
                .parseClaimsJws(token) // Parse the token
                .getBody(); // Get the body of the token which contains the claims
    }

    /**
     * Gets the signing key for JWT tokens.
     *
     * @return The signing key.
     */
    @Nonnull
    private Key getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY); // Decode the secret key from Base64
        return Keys.hmacShaKeyFor(keyBytes); // Create a Key object from the decoded bytes
    }
}
