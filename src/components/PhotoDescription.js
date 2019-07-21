import React from 'react';
import PropTypes from 'prop-types';
import './PhotoDescription.css';

function PhotoDescription({ textColor, photo }) {
    return (
        <table>
            <tbody>
                <tr style={{ color: textColor }}>
                    <th className='title-info-photo'><b>Описание:</b></th>
                    <td className='info-photo'>{photo.text ? photo.text : 'Нет данных'}</td>
                </tr>
            </tbody>
        </table>
    );
}

PhotoDescription.propTypes = {
    textColor: PropTypes.string,
    photo: PropTypes.object.isRequired
};

export default PhotoDescription;