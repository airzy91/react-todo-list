import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ToDos from '../../presentation/todoList/toDos';

class ToDosContainer extends Component {
  render(){
    return(
      <ToDos toDos={this.props.toDos}/>
    );
  }
}

ToDosContainer.propTypes = {
  toDos: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    toDos: state.todos
  };
};

export default connect(mapStateToProps)(ToDosContainer);
