import React from 'react';
import PhotoDescription from './PhotoDescription';
import './PhotoTooltip.css';

function PhotoTooltip({ tooltip }) {
    let style = {
        tooltip: {
            visibility: tooltip.visibility ? 'visible' : 'hidden',
            position: 'absolute',
            top: `${tooltip.position.top}px`,
            left: `${tooltip.position.left}px`
        }
    }

    return(
        <div style={style.tooltip} className='photo-tooltip-wrapper'>
            <div className='photo-tooltip'>
                <PhotoDescription textColor='white' photo={tooltip.photo}/>
            </div>
        </div>
    );
}

export default PhotoTooltip;