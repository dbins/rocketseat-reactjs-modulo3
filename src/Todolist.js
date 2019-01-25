import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActions from "./store/actions/todos";
//Stateless component
//Desestruturand o props (antes era (props))
const TodoList = ({ todos, addTodo, removeTodo }) => {
  //Usar uma div ou fragment para devolver o conteudo
  return (
    <Fragment>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addTodo("Entrar na comunidade")}>Adicionar</button>
    </Fragment>
  );
};

TodoList.PropTypes = {
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string
    })
  ).isRequired
};

//Converte o state obtido do reducer em props
const mapStateToProps = state => ({
  todos: state.todos //nome do reducer
});

//Converte as actions em props
//const MapDispatchToProps = dispatch => ({
//  addTodo: text => dispatch({ type: "ADD_TODO", payload: { text } }) //Conteudo a ser enviado para o reducer
//});
const MapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

//High order function
export default connect(
  mapStateToProps,
  MapDispatchToProps
)(TodoList);
