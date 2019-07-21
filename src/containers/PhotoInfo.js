import { connect } from 'react-redux';
import PhotoInfo from '../components/PhotoInfo';
import { push } from 'connected-react-router';

const mapStatetoProps = function(state) {
    return {
        selectedAlbum : state.selectedAlbum,
        selectedPhoto: state.selectedPhoto
    };
}

const mapDispatchtoProps = function(dispatch) {
    return {
        handlerClickBackBtn: function(e, albumId, albumTitle) {
            e.preventDefault();
            dispatch(push(`/album/${albumId}/${albumTitle}`));
        }
    };
}

export default connect(mapStatetoProps, mapDispatchtoProps)(PhotoInfo);