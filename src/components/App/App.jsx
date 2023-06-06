import { useState, useEffect } from 'react';
import axios from 'axios';

import GalleryList from '../GalleryList/GalleryList.jsx'

import './App.css';

function App() {

  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetchGallery();
  }, [])

  const fetchGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      const gallery = response.data;
      console.log('gallery:', gallery);
      setGallery(gallery);

    }).catch((error) => {
      console.log('whoopsie:', error);
    })
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <section className='grid'>
        <GalleryList gallery={gallery} fetchGallery={fetchGallery} />
      </section>

    </div>
  );
}

export default App;
