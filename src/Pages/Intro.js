import React from "react";
import { Link } from "react-router-dom";
import "../Css/Intro.css";

export default function Intro() {
  return (
    <div className="intro-page">
      {/* First Section */}
      <div className="intro-container">
        {/* Left Section - Text */}
        <div className="intro-text">
          <h1>Quiz Maker: Create a quiz to challenge your audience</h1>
          <p>
            Make fun interactive quizzes to test your colleagues' knowledge, run a
            quiz night with friends, or help students study.
          </p>
          <Link className="btn create-quiz-btn" to="/add">
            Create a quiz
          </Link>
        </div>

        {/* Right Section - Video */}
        <div className="intro-image">
          <video
            className="intro-video"
            src="https://videos.ctfassets.net/rvt0uslu5yqp/5bKGkwBBGcEVv48xoJlk45/dfffafc68a60b63d12b95fd429ef38ae/Features_Quiz_small.mp4"
            alt="Quiz Preview"
            autoPlay
            loop
            muted
          />
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero-container">
        <h1>Host a quiz to energize your audience</h1>
        <p>
          Looking to level up your presentations? Add excitement and interaction with a live quiz! 
          Whether serious or casual, our free quiz maker ensures it’s fun and engaging.
        </p>
      </div>

      {/* New Section - How to create your own quiz */}
      <div className="quiz-guide-container">
        <div className="quiz-guide-content">
          <h1>How to create your own quiz</h1>
          <ul>
            <li>Designing a Mentimeter quiz is easy! Enter your questions, mark the correct answers, and you're set.</li>
            <li>Use your quiz within a larger presentation, mix it with other Menti questions, or let it stand alone.</li>
            <li>Combine quiz slides with content slides to add anecdotes or extra info.</li>
          </ul>
        </div>
        <div className="quiz-guide-image">
          <img
            src="https://images.ctfassets.net/rvt0uslu5yqp/7FI47EbYWgjYdYAlV8PLVY/e5ac6ee913ad9723a039f8f4c96676d6/Mentimeter_Web_Quiz_2020-03.png?fm=webp&w=828&q=75"
            alt="Character with Headphones"
            className="guide-image"
          />
        </div>
      </div>
    </div>
  );
}
