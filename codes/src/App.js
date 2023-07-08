// Importing the CSS file for styling
import './index.css';

// Importing the axios library for making HTTP requests
import axios from 'axios';

// Importing React, useEffect, and useState from the 'react' library
import React, { useEffect, useState } from 'react';

// Defining the main component named 'App'
function App() {

  // Using the useState hook to define a state variable named 'text' and its initial value as undefined
  const [text, setText] = useState();

  // Defining an asynchronous function named 'getText'
  const getText = async () => {
    // Making an HTTP GET request to the joke API and storing the response in the 'res' variable
    const res = await axios.get("https://v2.jokeapi.dev/joke/Dark?type=single");
    
    // Updating the 'text' state with the fetched joke from the response
    setText(res.data.joke);
  };

  // Using the useEffect hook to execute the 'getText' function when the component mounts (empty dependency array)
  useEffect(() => {
    getText();
  }, []);

  // Returning the JSX (the user interface) of the component
  return (
    <div className="App">
      <h2>Dark Jokes</h2>
      {/* Displaying the value of the 'text' state within an 'h1' element */}
      <h1 className='box-container'>{text}</h1>

      {/* Creating a button that triggers the 'getText' function when clicked */}
      <button onClick={getText}>Create Text</button>
    </div>
  );
}

// Exporting the 'App' component as the default export of this module
export default App;
