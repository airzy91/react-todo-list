import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import User from '../../presentation/user/index.js';
import * as userActions from '../../../actionCreators/user_action_creator';

class UserContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      newUsername: ''
    };
  }

  _onNewUsernameChange = (event) =>{
    this.setState({newUsername: event.target.value});
  }

  _onLogin = (event) => {
    this.props.login(this.state.newUsername);
    this.setState({newUsername: ''});
    event.preventDefault();
  }

  render(){
    return(
      <User
        isLoggedIn={this.props.isLoggedIn}
        onLogout={this.props.logout}
        onLogin={this._onLogin}
        username={this.props.user.username}
        newUsername={this.state.newUsername}
        onNewUsernameChange={this._onNewUsernameChange} />
    );
  }
}

UserContainer.propTypes = {
  user: PropTypes.object,
  isLoggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    //Moved this hear as it could be moved out to a selector
    isLoggedIn: !!state.user.username
  };
};

const mapActionCreatorsToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(userActions.logoutUser());
    },
    login: (username) => {
      dispatch(userActions.loginUser(username));
    }
  };
};

export default connect(mapStateToProps, mapActionCreatorsToProps)(UserContainer);
