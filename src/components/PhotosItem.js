import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './PhotosItem.css';
import flag from '../assets/flag.png'

function PhotosItem({ photo, handlerSelectPhoto, handlerMouseOverPhotoItem, handlerMouseOutPhotoItem }) {
    return(
        <div className='photo-item-wrapper'>
            <img className='photo' src={photo.photo_130} alt='Превью фото' onMouseOver={(e) => handlerMouseOverPhotoItem(e, photo)} onMouseOut={handlerMouseOutPhotoItem}/>
            <img className="flag-icon" src={flag} alt='Галочка'/>
            <Link to={`/photo/${photo.id}`} className='link-select-photo' onClick={(e) => handlerSelectPhoto(e, photo)}>
                <span>Select</span>
            </Link>
        </div>
    );
}

PhotosItem.propTypes = {
    photo: PropTypes.object.isRequired,
    handlerSelectPhoto: PropTypes.func.isRequired,
    handlerMouseOverPhotoItem: PropTypes.func.isRequired,
    handlerMouseOutPhotoItem: PropTypes.func.isRequired
};

export default PhotosItem;