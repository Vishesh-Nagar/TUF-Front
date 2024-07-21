import React from 'react';
import SubmitForm from './components/SubmitForm';
import DisplaySnippets from './components/DisplaySnippets';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>Code Snippet Manager</h1>
      <SubmitForm />
      <DisplaySnippets />
    </div>
  );
};

export default App;
