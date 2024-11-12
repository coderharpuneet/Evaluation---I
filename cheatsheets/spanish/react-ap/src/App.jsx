import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'

function App() {
    const flashcardsData = [
        { front: "What is the Dutch for 'Hello'?", back: "Hallo" },
        { front: "What is the Dutch for 'Thank you'?", back: "Dank je wel" },
        { front: "What is the Dutch for 'Goodbye'?", back: "Tot ziens" },
        { front: "What is the Dutch for 'Please'?", back: "Alstublieft" },
        { front: "What is the Dutch for 'Good morning'?", back: "Goedemorgen" },
        { front: "What is the Dutch for 'Good night'?", back: "Goedenacht" },
        { front: "What is the Dutch for 'How are you?'", back: "Hoe gaat het met je?" },
        { front: "What is the Dutch for 'I love you'?", back: "Ik hou van je" },
        { front: "What is the Dutch for 'Excuse me'?", back: "Excuseer me" },
        { front: "What is the Dutch for 'See you later'?", back: "Tot later" },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      function handlePrev() {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
      }
    
      function handleNext() {
        setCurrentIndex((prevIndex) => (prevIndex < flashcardsData.length - 1 ? prevIndex + 1 : prevIndex));
      }
  return (
    <>
      <div>
      <div className="nav">
        <input type="checkbox" id="nav-check"/>
        <div className="nav-header">
        </div>
        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Languages</a>
          <a href="#">Login</a>
          <a href="#">Signup</a>
          <a href="#">Contact Us</a>
        </div>
      </div>


      <div className="head">
        <h1>Quick Reference: Dutch Alphabet & Common Phrases</h1>
    </div> 
    <hr/>
    <div className="alphabets">
        <img src="/Images/alphabets.jpg"/>
    </div>
    <div className="text">
        <h2>Here are 10 of the most common phrases that are a must learn as a beginner.</h2>
    </div>
    <div className="container">
        <ul className="responsive-table">
            <li className="table-header">
                <div className="col col-1">DUTCH</div>
                <div className="col col-2">ENGLISH</div>
            </li>
            <li className="table-row">
                <div className="col col-1" data-label="Job Id">Hallo</div>
                <div className="col col-2" data-label="Customer Name">Hello</div>
            </li>
            <li className="table-row">
                <div className="col col-1" data-label="Job Id">Hoe gaat het?</div>
                <div className="col col-2" data-label="Customer Name">How are you?</div>
            </li>
            <li className="table-row">
                <div className="col col-1" data-label="Job Id">Goedemorgen</div>
                <div className="col col-2" data-label="Customer Name">Good morning</div>
            </li>
            <li className="table-row">
                <div className="col col-1" data-label="Job Id">Goedemiddag</div>
                <div className="col col-2" data-label="Customer Name">Good afternoon</div>
            </li>
            <li className="table-row">
                <div className="col col-1" data-label="Job Id">Goedenacht</div>
                <div className="col col-2" data-label="Customer Name">Good night</div>
            </li>
            <li className="table-row">
                <div className="col col-1" data-label="Job Id">Dank je</div>
                <div className="col col-2" data-label="Customer Name">Thank you</div>
            </li>
            <li className="table-row">
                <div className="col col-1" data-label="Job Id">Alsjeblieft</div>
                <div className="col col-2" data-label="Customer Name">Please</div>
            </li>
            <li className="table-row">
                <div className="col col-1" data-label="Job Id">Waar is de badkamer?</div>
                <div className="col col-2" data-label="Customer Name">Where is the bathroom?</div>
            </li>
            <li className="table-row">
                <div className="col col-1" data-label="Job Id">Het spijt me</div>
                <div className="col col-2" data-label="Customer Name">I'm sorry</div>
            </li>
            <li className="table-row">
                <div className="col col-1" data-label="Job Id">Tot ziens</div>
                <div className="col col-2" data-label="Customer Name">See you later</div>
            </li>
        </ul>
    </div>




      
    <div className="flashcard-container">
          {flashcardsData.map((card, index) => (
            <Flashcard
              key={index}
              frontText={card.front}
              backText={card.back}
              isActive={index === currentIndex}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          ))}
        </div>
        </div>
    </>
  )
}

export default App
