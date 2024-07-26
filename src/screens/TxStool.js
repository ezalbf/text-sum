import React, { useState } from 'react';
import '../App.css';
import NavBar from '../components/navbar'
import axios from 'axios';

const TxStool = () => {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [mode, setMode] = useState('Paragraph');
  const [length, setLength] = useState('Concise');
  const [isLoading, setIsLoading] = useState(false);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  
  const handleSummarize = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:8000/summarize', {
        text: text,
        max_length: length === 'Concise' ? 100 : 200,
        min_length: length === 'Concise' ? 30 : 50,
      });
      setSummary(response.data.summary);
    } catch (error) {
      console.error('Error summarizing text:', error);
      setSummary('An error occurred while summarizing the text.');
    }
    setIsLoading(false);
  };
  
  return (
    <>
    <NavBar />
    <div className='container'>
        
    <h1 class='top-sec'>Text Summarizer Tool</h1>
    <p class='top-secp'>Why read more when you can read less?</p>
      
      <div className="summarizer-tool">
        <div className="controls">
          <div className="modes">
            <p><b>Modes:</b></p>
            <p>Paragraph</p>
            <p>Bullet Points</p>
          </div>
          <div className="length">
            <p><b>Lengths:</b></p>
            <p>Concise</p>
            <p>Standard</p>
          </div>
        </div>
        <div className="textareas-container">
          <div className="textarea-wrapper">
            <textarea
              placeholder="Enter / paste your text"
              value={text}
              onChange={handleTextChange}
              className="text-input"
            />
            <div className="input-buttons">
              <div className='icons'>
                <lord-icon className='upload'
                  src="https://cdn.lordicon.com/smwmetfi.json"
                  trigger="hover"></lord-icon> {/* Upload Icon */}

                <lord-icon className='upload image'
                    src="https://cdn.lordicon.com/baxknfaw.json"
                    trigger="hover">
                </lord-icon> {/* Upload Image Icon */}

                <lord-icon className='delete'
                    src="https://cdn.lordicon.com/wpyrrmcq.json"
                    trigger="morph"
                    state="morph-trash-full-to-empty"> 
                </lord-icon> {/* Delete Icon */}
              </div>
              
              <button onClick={handleSummarize} className="summarize-button" disabled={isLoading}>
              {isLoading ? 'Summarizing...' : 'Summarize'}</button>
            </div>
          </div>

          <div className="textarea-wrapper">
            <textarea readOnly value={summary} className="summary-output" />

            <div className="sum-icons">
            <lord-icon className='delete'
                  src="https://cdn.lordicon.com/wpyrrmcq.json"
                  trigger="morph"
                  state="morph-trash-full-to-empty"> 
              </lord-icon> {/* Delete Icon */}

              
              {/*<button>&#128194;</button> {/* Copy Icon */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default TxStool;
