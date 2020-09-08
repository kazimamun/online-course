import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CourseCollection from './Components/CourseCollection/CourseCollection';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <CourseCollection></CourseCollection>
    </div>
  );
}

export default App;
