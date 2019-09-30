import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import Button from '@material-ui/core/Button';

class App extends React.Component {
    
    render() {
        return (
            <div>
                <Button onClick={() => this.props.increment()}>Inc</Button>
                <Button onClick={() => this.props.decrement()}>Dec</Button>
                <Button onClick={async () => {await this.props.fetchUser();}}>Fetch User</Button>
                {this.props.value} <br/>
                {
                    JSON.stringify(this.props.users)
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        value: state.toggleReducer.value,
        users: state.userReducer.users,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: 'INC', payload: 1 }),
        decrement: () => dispatch({ type: 'DEC', payload: 1 }),
        fetchUser: () => dispatch({type: 'FETCH_USERS', payload: axios.get('http://dummy.restapiexample.com/api/v1/employees')})
    };
};

App.propTypes = {
    value: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func,
    users: PropTypes.object,
    fetchUser: PropTypes.func
};

export default connect(
    mapStateToProps, 
    mapDispatchToProps)(App);