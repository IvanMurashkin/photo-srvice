import React from 'react';
import { Link } from 'react-router-dom';
import PhotoDescription from './PhotoDescription';
import PropTypes from 'prop-types';
import './PhotoInfo.css';
import arrowBack from '../assets/arrow-back.png';

function PhotoInfo({ selectedAlbum, selectedPhoto, handlerClickBackBtn }) {
    return(
        <div className='photo-info-wrapper'>
            <div className='photo-info-header'>
                <Link to={`/album/${selectedAlbum.albumId}/${selectedAlbum.albumTitle}`} onClick={
                        (e) => handlerClickBackBtn(e, selectedAlbum.albumId, selectedAlbum.albumTitle)
                    }>
                    <img className='arrow-back' src={arrowBack} alt='Назад'/>
                </Link>
            </div>
            <div className='photo-wrapper'>
                <img style={{ maxWidth: '100%' }} src={selectedPhoto.photo_604} alt='Фото'/>
            </div>
            <div className='photo-data'>
                <PhotoDescription textColor='black' photo={selectedPhoto}/>
            </div>
        </div>
    );
}

PhotoInfo.propTypes = {
    selectedAlbum: PropTypes.object.isRequired,
    selectedPhoto: PropTypes.object.isRequired,
    handlerClickBackBtn: PropTypes.func.isRequired
};

export default PhotoInfo;