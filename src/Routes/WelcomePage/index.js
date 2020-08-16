// import {connect} from 'react-redux';
// import {formChange} from '../../Redux/actions';
// import {SelectState} from './Selector';

// import WelcomePage from './WelcomePage';
// import './index.scss';

// const mapStateToProps = state => {
//     return {...SelectState(state)};
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         formChange: params => {
//             dispatch(formChange(params));
//         }
//     };
// };

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(WelcomePage);
import React from 'react';
class WelcomePage extends React.Component {
    render() {
        return (
            <h1>Welcome</h1>
        );
    }
}
export default WelcomePage;
