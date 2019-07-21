import { connect } from 'react-redux';
import { loginViaVK } from '../actions/ActionTypes'; 
import Header from '../components/Header';

const mapDispatchToProps = function(dispatch) {
    return {
        handlerAuth: function() {
            dispatch(loginViaVK());
        }
    }
}

export default connect(null, mapDispatchToProps)(Header);