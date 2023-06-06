// represents the gallery of images. By componentizing, we could reuse this component in different applications
import GalleryItem from '../GalleryItem/GalleryItem.jsx'

function GalleryList(props) {
    return (
        props.gallery.map((item) => {
            return (
                <GalleryItem key={item.id} item={item} fetchGallery={props.fetchGallery} />
            );
        })
    );
}

export default GalleryList;
