import React, { useState } from 'react';
import axios from 'axios';
import './SubmitForm.css';

const SubmitForm = () => {
  const [username, setUsername] = useState('');
  const [codeLanguage, setCodeLanguage] = useState('');
  const [stdin, setStdin] = useState('');
  const [sourceCode, setSourceCode] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    // e.preventDefault();
    const snippetData = { username, codeLanguage, stdin, sourceCode };

    try {
      await axios.post('https://codesnips-back-vishesh-nagars-projects.vercel.app/submit', snippetData);
      setMessage('Snippet submitted successfully!');
      setUsername('');
      setCodeLanguage('');
      setStdin('');
      setSourceCode('');
    } catch (error) {
      setMessage('Error submitting snippet.');
      console.error('There was an error submitting the snippet!', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Submit Code Snippet</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <select
          value={codeLanguage}
          onChange={(e) => setCodeLanguage(e.target.value)}
          required
        >
          <option value="">Select Language</option>
          <option value="C++">C++</option>
          <option value="Java">Java</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
        </select>
        <textarea
          placeholder="Standard Input"
          value={stdin}
          onChange={(e) => setStdin(e.target.value)}
        />
        <textarea
          placeholder="Source Code"
          value={sourceCode}
          onChange={(e) => setSourceCode(e.target.value)}
          required
        />
        <button type="submit">Submit Snippet</button>
      </form>
      {message && <p className="form-message">{message}</p>}
    </div>
  );
};

export default SubmitForm;
