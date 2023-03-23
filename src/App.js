import React from 'react';
import NavigationBar from './NavigationBar';
import "./App.css";
import myImage from './image2.jpg';

const App = () => {
  return (
    <div className='App'>
      <NavigationBar />
      <h1>Welcome to My Website</h1>
      <img src={myImage} alt="My Image" className="full-width"/>
    </div>
  );
}

export default App;

