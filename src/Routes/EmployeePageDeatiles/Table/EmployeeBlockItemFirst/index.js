import React from 'react';
import image1 from '../../../../../public/img/profile-image.png';

class EmployeeblockItem extends React.Component {
    render() {
        return (
            <div class="grid-block__item">
                <div class="porofile-block">
                    <div class="porofile-block__image">
                        <span><img src={image1} alt="imager" /></span>
                    </div>
                    <div class="porofile-block__text">
                        <h3>{this.props.data.name}</h3>
                        <p>{this.props.data.designation}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeeblockItem;