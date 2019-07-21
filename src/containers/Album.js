import { connect } from 'react-redux';
import { selectAlbum, fetchPhotosBySelectedAlbum, fetchAlbumsCurrentUser, clearPhotos } from '../actions/ActionTypes';
import Album from '../components/Album';
import { push } from 'connected-react-router';

const mapStateToProps = function(state) {
    return {
        albums: state.albums,
        userName: state.authUser.userName
    };
}

const mapDispatchToProps = function(dispatch) {
    return {
        handlerSelectedAlbum: function(e, albumId, albumTitle) {
            e.preventDefault();

            const offsetPhoto = 0;
            const countPhoto = 50;
            
            dispatch(selectAlbum(albumId, albumTitle));
            dispatch(clearPhotos());
            dispatch(fetchPhotosBySelectedAlbum(offsetPhoto, countPhoto));
            dispatch(push(`/album/${albumId}/${albumTitle}`));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);