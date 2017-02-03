import React, { Component, PropTypes } from 'react';
import ToDoContainer from '../../container/toDoList/toDo';

class ToDos extends Component{
  render(){
    return(
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.props.toDos.ids.map(id => <ToDoContainer key={id} {...this.props.toDos.data[id]} />)}
        </tbody>
      </table>
    );
  }
}

ToDos.propTypes = {
  toDos: PropTypes.object.isRequired
};

export default ToDos;
