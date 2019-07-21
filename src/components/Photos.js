import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PhotosItem from './PhotosItem';
import PhotoTooltip from './PhotoTooltip';
import './Photos.css';
import folderIcon from '../assets/folder.png';
import arrowBack from '../assets/arrow-back.png';

function Photos({ match, photos, tooltip, totalCountPhotos, isFetchingPhotos,
        handlerSelectPhoto, handlerMouseOverPhotoItem, handlerMouseOutPhotoItem, handlerScrollPhoto }) {
    return(
        <div className='photos-wrapper'>
            <div className='photos-header'>
                <Link to='/'>
                    <img className='arrow-back' src={arrowBack} alt='Назад'/>
                </Link>
                <img className='folder-icon' src={folderIcon} alt='Иконка альбома'/>
                <span className='parent-album-title'>{match.params.title}</span>
            </div>
            <div className='photos-item' onScroll={() => handlerScrollPhoto(totalCountPhotos, photos.length, isFetchingPhotos)}>
                {
                    photos.map(photo => { 
                        return <PhotosItem photo={photo} key={photo.id} handlerSelectPhoto={handlerSelectPhoto} handlerMouseOverPhotoItem={handlerMouseOverPhotoItem} handlerMouseOutPhotoItem={handlerMouseOutPhotoItem}/> 
                    })
                }
            </div>
            <PhotoTooltip tooltip={tooltip} />
        </div>
    );
}

Photos.propTypes = { 
    photos: PropTypes.array.isRequired,
    tooltip: PropTypes.object.isRequired,
    totalCountPhotos: PropTypes.number.isRequired,
    isFetchingPhotos: PropTypes.bool.isRequired,
    handlerMouseOverPhotoItem: PropTypes.func.isRequired,
    handlerMouseOutPhotoItem: PropTypes.func.isRequired,
    handlerScrollPhoto: PropTypes.func.isRequired,
    handlerSelectPhoto: PropTypes.func.isRequired
};

export default Photos;
