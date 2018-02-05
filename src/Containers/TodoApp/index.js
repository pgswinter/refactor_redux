import React from 'react';
import AddTodo from '../../Components/TodoApp/AddTodo'
import VisibleTodoList from '../../Components/TodoApp/VisibleTodoList'
import Footer from '../../Components/TodoApp/Footer'

const TodoApp = () => (
	<div>
		<AddTodo/>
		<VisibleTodoList
		/>
		<Footer/>
	</div>
);

export default TodoApp