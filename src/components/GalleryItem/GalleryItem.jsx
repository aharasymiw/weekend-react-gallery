// represents a single image in the gallery with the ability to click the image to toggle between image and description as well as the ability to like an image.
import { useState } from 'react';
import axios from 'axios';

function GalleryItem(props) {

    const item = props.item;
    const [clicked, setClicked] = useState(false);

    const likeIt = (id) => {

        axios({
            method: 'PUT',
            url: `/gallery/like/${id}`,
        }).then((response) => {
            console.log('PUT response:', response);
            props.fetchGallery();
        }).catch((error) => {
            console.log('whoopsie:', error);
        })
    }

    return (
        <span className='unit'>
            <div className="item" onClick={() => { setClicked(!clicked) }}>
                {!clicked && <img src={item.path} alt={item.description} height={100} width={100} />}
                {clicked && <p>{item.description}</p>}
            </div>

            <button onClick={() => { likeIt(item.id) }}>love it!</button>

            {/* {!item.is_bought && <span><button onClick={() => { buy(item.id) }}>Buy</button> <button onClick={() => { remove(item.id) }}>Remove</button></span>}
            {item.is_bought && <p>Purchased</p>} */}

            {item.likes > 1 && <p>{item.likes} people love this!</p>}
            {item.likes === 1 && <p>1 person loves this!</p>}
            {item.likes === 0 && <p>No people love this :(</p>}
        </span>
    );
}

export default GalleryItem;
