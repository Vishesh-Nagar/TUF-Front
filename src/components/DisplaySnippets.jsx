import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DisplaySnippets.css';

const DisplaySnippets = () => {
  const [snippets, setSnippets] = useState([]);
  const [error, setError] = useState(null);

  const fetchSnippets = async () => {
    try {
      const response = await axios.get('https://tuf-back.onrender.com/snippets');
      setSnippets(response.data);
    } catch (error) {
      setError('Error fetching snippets.');
      console.error('There was an error fetching the snippets!', error);
    }
  };

  useEffect(() => {
    fetchSnippets();
  }, []);

  return (
    <div className="table-container">
      <h2>Code Snippets</h2>
      {error && <p className="error-message">{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Code Language</th>
            <th>Standard Input</th>
            <th>Source Code</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {snippets.map((snippet, index) => (
            <tr key={index}>
              <td>{snippet.username}</td>
              <td>{snippet.codeLanguage}</td>
              <td>{snippet.stdin}</td>
              <td>{snippet.sourceCode.substring(0, 100)}...</td>
              <td>{new Date(snippet.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplaySnippets;
