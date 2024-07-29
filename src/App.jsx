import HomeButtons from './Components/HomeButtons/HomeButtons.jsx';
import './App.css';
import { useState } from 'react';
import HomeContent from './Components/HomeContent/HomeContent.jsx';

const App = () => {
  const [content, setContent] = useState('document');

  const handleButtonClick = (type) => {
    setContent(type);
  };

  return (
    <div className="container">
      <div id="home-page">
        <div className="page">
          <HomeContent content={content} />
        </div>
        <HomeButtons onClick={handleButtonClick} />
      </div>
    </div>
  );
};

export default App;
