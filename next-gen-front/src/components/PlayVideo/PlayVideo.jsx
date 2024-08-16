import React from "react";
import "./PlayVideo.css"
import video1 from "../../assets/intro-video.mp4"
import profilePic from "../../assets/profile.png"

const PlayVideo = () => {

    let description1 = "Are you ready to embark on a journey into the world of real estate? " +
        "Whether you’re a newcomer eager to make your mark or " +
        "a professional looking to elevate your career, " +
        "this comprehensive real estate mentorship program is your gateway to success. " +
        "Led by a seasoned mentor with years of experience and a track record of excellence, " +
        "this course offers unparalleled insights, hands-on guidance, " +
        "and expert strategies to help you achieve your real estate goals.";

    let description2 = "What You Will Learn:";

    let description3 = "In this comprehensive mentorship program, you will gain a deep understanding of the fundamentals of real estate, " +
        "including the essential principles, market dynamics, and key investment strategies. " +
        "You’ll learn how to analyze market trends, evaluate properties, and " +
        "make informed decisions based on thorough market data. " +
        "The course will equip you with the skills to assess residential and commercial properties, " +
        "develop investment strategies that align with your financial goals, and " +
        "understand the legal and financial aspects of real estate transactions. " +
        "You’ll also discover the secrets of successful real estate marketing, " +
        "including how to create compelling property listings, leverage digital marketing tools, " +
        "and develop persuasive sales pitches. Master negotiation skills through practical exercises" +
        " and real-world scenarios, enabling you to negotiate favorable terms, " +
        "handle objections, and build strong client relationships. " +
        "Additionally, you will learn how to build and manage a diverse real estate portfolio, " +
        "with insights into diversification, risk management, and long-term planning. " +
        "Networking and relationship-building are critical in this industry, " +
        "and you’ll learn how to cultivate a powerful network of industry professionals " +
        "to open doors to new opportunities. " +
        "The course also emphasizes the importance of ethical practices and professionalism, " +
        "ensuring you build a reputable career with integrity. " +
        "Throughout the program, you’ll receive personalized coaching, tailored advice, and feedback from your mentor, " +
        "alongside exploring real-world case studies that provide valuable insights into successful real estate deals. " +
        "This program is designed to transform your understanding of real estate and equip you with the tools needed to excel in this competitive field.";


    return(
        <div className="play-video">
            <video src={video1} controls autoPlay></video>
            <h3>Take real estate mentorship from the best mentor.</h3>
            <div className="publisher">
                <img src={profilePic} alt="" />
                <div>
                    <p>Rich Dad</p>
                </div>
            </div>
            <div className="video-description">
                <p>{description1}</p>
                <p>{description2} <br/>
                {description3}</p>
            </div>
        </div>
    );
}
export default PlayVideo