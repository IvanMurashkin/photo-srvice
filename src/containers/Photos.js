import { connect } from 'react-redux';
import { selectPhoto, cursorOverPhoto, fetchPhotosBySelectedAlbum, requestPhotosCompleted, cursorOutPhoto } from '../actions/ActionTypes';
import Photos from '../components/Photos';
import { push } from 'connected-react-router';

const mapStateToProps = function(state) {
    return {
        photos: state.photos.items,
        totalCountPhotos: state.photos.totalCount,
        isFetchingPhotos: state.photos.isFetching,
        tooltip: state.tooltip
    };
}

const mapDispatchToProps = function(dispatch) {
    return {
        
        handlerSelectPhoto: function(e, photo) {
            e.preventDefault();
            dispatch(selectPhoto(photo));
            dispatch(push(`/photo/${photo.id}`));
        },

        handlerScrollPhoto: function(totalCountPhotos, countUploadedPhotos, isFetchingPhotos) {
            if(!isFetchingPhotos) return;
            
            dispatch(requestPhotosCompleted());

            let offset = countUploadedPhotos;
            let count = 50;

            if(offset < totalCountPhotos) {
                dispatch(fetchPhotosBySelectedAlbum(offset, count));
            }
        },

        handlerMouseOutPhotoItem: function() {
            dispatch(cursorOutPhoto(false));
        },

        handlerMouseOverPhotoItem: function(e, photo) {
            const position = { left: 0, top: 0 };
            const arrowTooltipSizePx = 15;
            const coordsPhotosItem = e.target.parentElement.getBoundingClientRect();
            const tooltip = document.getElementsByClassName('photo-tooltip-wrapper')[0];
            
            position.top = coordsPhotosItem.top + window.pageYOffset + e.target.parentElement.clientHeight + arrowTooltipSizePx;
            position.left = coordsPhotosItem.left;

            if((coordsPhotosItem.left + tooltip.clientWidth) > window.innerWidth) {
                position.left = coordsPhotosItem.left - ((coordsPhotosItem.left + tooltip.clientWidth) - window.innerWidth);
            }

            dispatch(cursorOverPhoto(photo, true, position));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos);