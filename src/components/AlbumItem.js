import React from 'react';
import PropTypes from 'prop-types';
import './AlbumItem.css';
import floppy from '../assets/floppy.png';
import clock from '../assets/clock.png';
import arrowOpen from '../assets/arrow-open.png';

function AlbumItem({ album }) {
    return (
        <div className='wrapper-album-item'>
            <div className='album-item'>
                <div className='album-item-photo'>
                    <img className='preview-album' src={album.thumb_src} alt='Обложка альбома'/> 
                </div>
                <div className='album-item-info'>
                    <h2 className='album-item-title'>{album.title}</h2>
                    <p>
                        <img className='floppy-icon' src={floppy} alt='Количество фотографий'/> 
                        {album.size} files
                    </p>
                    <p>
                        <img className='clock-icon' src={clock} alt='Последнее обновление альбома'/> 
                        {CalculateElapsedTimeSinceLastAlbumUpdate(album.updated)}
                    </p>
                </div>
                <div className='arrow-open'>
                    <img className='arrow-open-icon' src={arrowOpen} alt='Назад'/>
                </div>
            </div>
        </div>
    );
    
    function CalculateElapsedTimeSinceLastAlbumUpdate(lastUpdateTime) {
        const lastUpdateDate = new Date(lastUpdateTime * 1000);

        const dayPassed = Math.floor((new Date(Date.now()) - lastUpdateDate) / (1000 * 3600 * 24));
        if (dayPassed) return `${dayPassed} days ago`;

        const hoursPassed = Math.floor((new Date(Date.now()) - lastUpdateDate) / (1000 * 3600));
        if (hoursPassed) return `${hoursPassed} hours ago`;

        const minutesPassed = Math.floor((new Date(Date.now()) - lastUpdateDate) / (1000 * 60));
        if (minutesPassed) return `${minutesPassed} minutes ago`;

        const secondPassed = Math.floor((new Date(Date.now()) - lastUpdateDate) / 1000);
        if (secondPassed) return `${secondPassed} seconds ago`;
        
        return 0;
    }
}

AlbumItem.propTypes = {
    album: PropTypes.object.isRequired
};

export default AlbumItem;