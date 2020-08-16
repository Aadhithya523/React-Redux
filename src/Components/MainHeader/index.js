import React from 'react';
import logo from '../../../public/img/mail-logo.png';
import photo from '../../../public/img/profile-image.png';
class MainHeaderBlock extends React.Component {
    render() {
        return (
            <header class="main-header">
                <div class="main-header__logo">
                    <img src={logo} />
                </div>
                <div class="main-header__signout">
                    <a>
                        <span class="image">
                            <img src={photo} alt="imager" />
                        </span>
                        <span>Logout</span>
                    </a>
                </div>
            </header>
        );
    }
}

export default MainHeaderBlock;