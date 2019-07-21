import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AlbumItem from './AlbumItem';
import './Album.css'

function Album({ albums, userName, handlerSelectedAlbum }) {
    return (
        <div className='alub-wrapper'>
            <div className='album-header'>
                <span>{userName ? `Welcom, ${userName}.` : 'Welcom, anonim.'}</span>
            </div>
            <div className='album-content'>
                {albums.length > 0 ? albums.map(album => {
                    return <Link to={`/album/${album.id}/${album.title}`} key={album.id} onClick={
                                (e) => handlerSelectedAlbum(e, album.id, album.title)
                            }>
                                <AlbumItem album={album}/>
                           </Link>
                }) : <b>Авторизуйтесь!!!</b>}
            </div>
        </div>
    );
}

Album.propTypes = {
    albums: PropTypes.array.isRequired,
    userName: PropTypes.string.isRequired,
    handlerSelectedAlbum: PropTypes.func.isRequired
};

export default Album;