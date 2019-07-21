import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Album from '../containers/Album';
import Photos from '../containers/Photos';
import PhotoInfo from '../containers/PhotoInfo';
import './MenuItem.css';
import albumsIcon from '../assets/albums-icon.png';

function MenuItem() {
    return(
        <div style={{width:'100%'}}>
            <div className='menu-item'>
                <img className='icon-menu-item' src={albumsIcon} alt='Галерея'/>
            </div>
            <Switch>
                <Route exact path='/' component={ Album }/>
                <Route path='/album/:id/:title' component={ Photos }/>
                <Route path='/photo/:id' component={ PhotoInfo }/>
            </Switch>
        </div>
    );
}

export default MenuItem;