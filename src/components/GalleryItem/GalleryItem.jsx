// represents a single image in the gallery with the ability to click the image to toggle between image and description as well as the ability to like an image.
import axios from 'axios';

function ItemList(props) {


    const buy = (id) => {

        axios({
            method: 'PUT',
            url: `/items/${id}`,
        }).then((response) => {
            console.log('PUT response:', response);
            props.fetchItems();
        }).catch((error) => {
            console.log('whoopsie:', error);
        })
    }

    const remove = (id) => {

        axios({
            method: 'DELETE',
            url: `/items/${id}`,
        }).then((response) => {
            console.log('DELETE response:', response);
            props.fetchItems();
        }).catch((error) => {
            console.log('whoopsie:', error);
        })
    }

    return (
        props.itemList.map((item) => {
            return (
                <span key={item.id} className="item">
                    <p>{item.name}</p>
                    <p>{item.quantity} {item.unit}</p>
                    {!item.is_bought && <span><button onClick={() => { buy(item.id) }}>Buy</button> <button onClick={() => { remove(item.id) }}>Remove</button></span>}
                    {item.is_bought && <p>Purchased</p>}
                    <p>{item.is_bought}</p>
                </span>
            );
        })
    );
}

export default ItemList;
