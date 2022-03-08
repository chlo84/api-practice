import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [dogImage, setDogImage] = useState()
  const [dogList, setDogList] = useState()
  // const [dogBreeds, setDogBreeds] = useState()
  const onDogClick = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(res => setDogImage(res.message))
  }
  const onDogListClick = () => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(res => setDogList(res.message))
  }
  // const onDogBreedsClick = () => {
  //   fetch('https://dog.ceo/api/breeds/list/all')
  // }
  return (
    <div className="App">
      <h1>Click this button for doggo:</h1>
      <button onClick={onDogClick}>Doggo</button>
      {dogImage && <div>
        <h1>Here is your dog photo:</h1>
        <img src={dogImage} alt='random dog' />
        <h1>Click this button for list of dog breeds</h1>
        <button onClick={onDogListClick}>Click this</button>
        {dogList}
      </div>
      }
    </div>
  );
}

export default App;
