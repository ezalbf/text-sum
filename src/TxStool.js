import React, { useState } from 'react';
import './App.css';

const TxStool = () => {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [mode, setMode] = useState('Paragraph');
  const [length, setLength] = useState('Concise');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSummarize = () => {
    setSummary(`Summarized text in ${mode} mode with ${length} length.`);
  };

  return (
    <>
      <header>
        <h1>Text Summarizer Tool</h1>
        <p>Why read more when you can read less?</p>
      </header>
      <div className="summarizer-tool">
        <div className="controls">
          <div className="modes">
            <label>
              Modes:
              <select value={mode} onChange={(e) => setMode(e.target.value)}>
                <option value="Paragraph">Paragraph</option>
                <option value="Bullet Points">Bullet Points</option>
              </select>
            </label>
          </div>
          <div className="length">
            <label>
              Length:
              <select value={length} onChange={(e) => setLength(e.target.value)}>
                <option value="Concise">Concise</option>
                <option value="Standard">Standard</option>
              </select>
            </label>
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
            <div className="icon-buttons">
              <button>&#128465;</button> {/* Delete Icon */}
              <button>&#128194;</button> {/* Save Icon */}
            </div>
          </div>
          <div className="textarea-wrapper">
            <textarea readOnly value={summary} className="summary-output" />
            <div className="icon-buttons">
              <button>&#128465;</button> {/* Delete Icon */}
              <button>&#128194;</button> {/* Save Icon */}
              <button onClick={handleSummarize} className="summarize-button">Summarize</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TxStool;
