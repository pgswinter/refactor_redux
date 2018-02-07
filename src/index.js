// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
/* --------------------- SPLIT PART --------------------- */

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

/* --------------------- SPLIT PART --------------------- */

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore,combineReducers} from 'redux';
import {Provider,connect} from 'react-redux';
import deepFreeze from 'deep-freeze';
import expect from 'expect';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {registerAPI} from './Api/postUser'
// const counter = (state = 1, action) => {
//   switch (action.type){
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// }

const register = (state=[],action) => {
	const data = {
		"firstName": "Long",
		"lastName": "Nguyen",
		"email": "longnguyen@gmail.com",
		"age": 18,
		"companyId": "1",
	}
	const {insertData} = action
	switch(action.type){
		case 'REGISTER':
			return {
				...state,
				insertData: registerAPI(data)
			}
	}
}

// const Counter = ({
//   value,
//   onIncrement,
//   onDecrement
// }) => 
// 	<div className="">
// 		<h1>{value}</h1>
// 		<button onClick={onIncrement}>+</button>
// 		<button onClick={onIncrement}>-</button>
// 	</div>

const InsertButton = ({
	onInsert
}) =>
	<div className="">
		<button onClick={onInsert}>Add</button>
	</div>

// const store = createStore(counter);
const store = createStore(register);

// const render = () => {
// 	ReactDOM.render(
// 		<Counter
// 	      value={store.getState()}
// 	      onIncrement={()=>
// 	        store.dispatch({
// 	          type: 'INCREMENT'
// 	        })
// 	      }
// 	      onDecrement={()=>
// 	        store.dispatch({
// 	          type: 'DECREMENT'
// 	        })
// 	      }
// 	    />
// 		, document.getElementById('root'));	
// }

const render = () => {
	ReactDOM.render(
		<InsertButton
	      onInsert={()=>
	      	store.dispatch({
	      		type: 'REGISTER'
	      	})
	      }
	    />
		, document.getElementById('root'));	
}

store.subscribe(render);
render();

registerServiceWorker();

/* --------------------- SPLIT PART --------------------- */

// const todo = (state, action) => {
// 	switch(action.type){
// 		case 'ADD_TODO':
// 			return {
// 				id: action.id,
// 				text: action.text,
// 				completed: false
// 			};
// 		case 'TOGGLE_TODO':
// 			if(state.id !== action.id){
// 				return state;
// 			}
// 			return{
// 				...state,
// 				completed: !state.completed
// 			}
// 		default:
// 			return state;
// 	}
// }

// const todos = (state, action) => {
// 	switch(action.type){
// 		case 'ADD_TODO':
// 			return [
// 				...state,
// 				// {
// 				// 	id: action.id,
// 				// 	text: action.text,
// 				// 	completed: false
// 				// }
// 				todo(undefined, action)
// 			];
// 		case 'TOGGLE_TODO':
// 			// return state.map(todo => {
// 			// 	if(todo.id !== action.id){
// 			// 		return todo;
// 			// 	}
// 			// 	return{
// 			// 		...todo,
// 			// 		completed: !todo.completed
// 			// 	}
// 			// })
// 			return state.map(t=>todo(t,action));
// 		default:
// 			return state;
// 	}
// }

// // const testAddTodo = () => {
// // 	const stateBefore = [];
// // 	const action = {
// // 		type: 'ADD_TODO',
// // 		id: 0,
// // 		text: 'Learn Redux'
// // 	};
// // 	const stateAfter = [
// // 		{
// // 			id: 0,
// // 			text: 'Learn Redux',
// // 			completed: false
// // 		}
// // 	];

// // 	deepFreeze(stateBefore);
// // 	deepFreeze(action);

// // 	expect(
// // 		todos(stateBefore,action)
// // 	).toEqual(stateAfter)
// // }

// const testToggleTodo = () => {
// 	const stateBefore =  [
// 		{
// 			id: 0,
// 			text: 'Learn Redux',
// 			completed: false
// 		},
// 		{
// 			id: 1,
// 			text: 'Go Shopping',
// 			completed: false
// 		}
// 	];
// 	const action = {
// 		type: 'TOGGLE_TODO',
// 		id: 1
// 	};
// 	const stateAfter = [
// 		{
// 			id: 0,
// 			text: 'Learn Redux',
// 			completed: false
// 		},
// 		{
// 			id: 1,
// 			text: 'Go Shopping',
// 			completed: true
// 		}
// 	];

// 	deepFreeze(stateBefore);
// 	deepFreeze(action);

// 	expect(
// 		todos(stateBefore,action)
// 	).toEqual(stateAfter)
// }

// // testAddTodo();
// testToggleTodo();
// console.log('All test passed');

/* --------------------- SPLIT PART --------------------- */

// const todo = (state, action) => {
// 	switch(action.type){
// 		case 'ADD_TODO':
// 			return {
// 				id: action.id,
// 				text: action.text,
// 				completed: false
// 			};
// 		case 'TOGGLE_TODO':
// 			if(state.id !== action.id){
// 				return state;
// 			}
// 			return{
// 				...state,
// 				completed: !state.completed
// 			}
// 		default:
// 			return state;
// 	}
// }

// const todos = (state = [], action) => {
// 	switch(action.type){
// 		case 'ADD_TODO':
// 			return [
// 				...state,
// 				todo(undefined, action)
// 			];
// 		case 'TOGGLE_TODO':
// 			return state.map(t=>todo(t,action));
// 		default:
// 			return state;
// 	}
// }

// const visibilityFilter = (state = 'SHOW_ALL', action) => {
// 	switch(action.type){
// 		case 'SET_VISIBILITY_FILTER':
// 			return action.filter;
// 		default:
// 			return state;
// 	}
// };

// // *** The way to program combine reducers with function {combineReducers}
// // const todoApp = combineReducers({
// // 	todos: todos,
// // 	visibilityFilter: visibilityFilter
// // })

// // *** Create reducer without from Redux
// const combineReducersNotRedux = (reducers => {
// 	return (state = {}, action) => {
// 		return Object.keys(reducers).reduce(
// 			(nextState, key) => {
// 				nextState[key] = reducers[key](
// 					state[key],
// 					action
// 				);
// 				return nextState
// 			},
// 			{}
// 		)
// 	}
// })

// // *** The way to program ES6 SHORTHAND combine reducers with function {combineReducersNotRedux}
// const todoApp = combineReducersNotRedux({
// 	todos,
// 	visibilityFilter
// })

// // *** The way to program ES6 SHORTHAND combine reducers with function {combineReducers}
// // const todoApp = combineReducers({
// // 	todos,
// // 	visibilityFilter
// // })

// // *** The way to program NORMALLY combine reducers
// // const todoApp = (state = {}, action) => {
// // 	return {
// // 		todos: todos(
// // 			state.todos,
// // 			action
// // 		),
// // 		visibilityFilter: visibilityFilter(
// // 			state.visibilityFilter,
// // 			action
// // 		)
// // 	};
// // };

// // const store = createStore(todos);
// const store = createStore(todoApp);

// console.log('Initial state:');
// console.log(store.getState());
// console.log('------------------');

// console.log('Dispatch ADD_TODO');
// store.dispatch({
// 	type: 'ADD_TODO',
// 	id: 0,
// 	text: 'Learn Redux'
// });
// console.log('Current State:');
// console.log(store.getState());
// console.log('------------------');

// console.log('Dispatch ADD_TODO');
// store.dispatch({
// 	type: 'ADD_TODO',
// 	id: 1,
// 	text: 'Go Shopping'
// })
// console.log('Current State:');
// console.log(store.getState());
// console.log('------------------');

// console.log('Dispatch TOGGLE_TODO');
// store.dispatch({
// 	type: 'TOGGLE_TODO',
// 	id: 0
// })
// console.log('Current State:');
// console.log(store.getState());
// console.log('------------------');

// console.log('Dispatch SET_VISIBILITY_FILTER');
// store.dispatch({
// 	type: 'SET_VISIBILITY_FILTER',
// 	filter: 'SHOW_COMPLETED'
// })
// console.log('Current State:');
// console.log(store.getState());
// console.log('------------------');

/* --------------------- SPLIT PART --------------------- */

// const todo = (state, action) => {
// 	switch(action.type){
// 		case 'ADD_TODO':
// 			return {
// 				id: action.id,
// 				text: action.text,
// 				completed: false
// 			};
// 		case 'TOGGLE_TODO':
// 			if(state.id !== action.id){
// 				return state;
// 			}
// 			return{
// 				...state,
// 				completed: !state.completed
// 			}
// 		default:
// 			return state;
// 	}
// }

// const todos = (state = [], action) => {
// 	switch(action.type){
// 		case 'ADD_TODO':
// 			return [
// 				...state,
// 				todo(undefined, action)
// 			];
// 		case 'TOGGLE_TODO':
// 			return state.map(t=>todo(t,action));
// 		default:
// 			return state;
// 	}
// }

// const visibilityFilter = (state = 'SHOW_ALL', action) => {
// 	switch(action.type){
// 		case 'SET_VISIBILITY_FILTER':
// 			return action.filter;
// 		default:
// 			return state;
// 	}
// };

// // *** The way to program ES6 SHORTHAND combine reducers with function {combineReducersNotRedux}
// const todoApp = combineReducers({
// 	todos,
// 	visibilityFilter
// })

// const store = createStore(todoApp);

// const FilterLink = ({
// 	filter,
// 	currentFilter,
// 	children
// }) => {
// 	if(filter === currentFilter){
// 		return <span>{children}</span>
// 	}
// 	return (
// 		<a href="#"
// 			onClick={e=>{
// 				e.preventDefault();
// 				store.dispatch({
// 					type: 'SET_VISIBILITY_FILTER',
// 					filter
// 				});
// 			}}
// 		>
// 			{children}
// 		</a>
// 	)
// }

// const getVisibleTodos = (
// 	todos,
// 	filter
// ) => {
// 	switch(filter){
// 		case 'SHOW_ALL':
// 			return todos;
// 		case 'SHOW_COMPLETED':
// 			return todos.filter(
// 				t=>t.completed
// 			);
// 		case 'SHOW_ACTIVE':
// 			return todos.filter(
// 				t=> !t.completed
// 			);
// 	}
// }

// let nextTodoId = 0;
// class TodoApp extends Component{
// 	render(){
// 		const {
// 			todos,
// 			visibilityFilter
// 		} = this.props;
// 		const visibleTodos = getVisibleTodos(
// 			todos,
// 			visibilityFilter
// 			// this.props.todos,
// 			// this.props.visibilityFilter
// 		);
// 		return(
// 			<div>
// 				<input type="text" ref={node=>{
// 					this.input=node;	
// 				}}/>
// 				<button onClick={() => {
// 					store.dispatch({
// 						type: 'ADD_TODO',
// 						text: this.input.value,
// 						id: nextTodoId++
// 					})
// 					this.input.value=''
// 				}}>
// 				Add Todo
// 				</button>
// 				<ul>
// 					{//this.props.todos.map(todo=>
// 						visibleTodos.map(todo=>
// 						<li key={todo.id}
// 							onClick={()=>{
// 								store.dispatch({
// 									type: 'TOGGLE_TODO',
// 									id: todo.id
// 								})
// 							}}
// 							style={{textDecoration:todo.completed?'line-through':'none'}}
// 						>
// 							{todo.text}
// 						</li>
// 					)}
// 				</ul>
// 				<p>
// 					Show:
// 					{' '}
// 					<FilterLink
// 						filter="SHOW_ALL"
// 						currentFilter={visibilityFilter}
// 					>
// 						All	
// 					</FilterLink>
// 					{' '}
// 					<FilterLink
// 						filter="SHOW_ACTIVE"
// 					>
// 						Active	
// 					</FilterLink>
// 					{' '}
// 					<FilterLink
// 						filter="SHOW_COMPLETED"
// 					>
// 						Completed
// 					</FilterLink>
// 				</p>
// 			</div>
// 		)
// 	}
// }

// const render = () => {
// 	ReactDOM.render(
// 		<TodoApp
// 			// todos={...store.getState().todos}
// 			{...store.getState()}
// 		/>,
// 		document.getElementById('root')
// 	)
// }

// store.subscribe(render);
// render();

/* --------------------- SPLIT PART --------------------- */

// const todo = (state, action) => {
// 	switch(action.type){
// 		case 'ADD_TODO':
// 			return {
// 				id: action.id,
// 				text: action.text,
// 				completed: false
// 			};
// 		case 'TOGGLE_TODO':
// 			if(state.id !== action.id){
// 				return state;
// 			}
// 			return{
// 				...state,
// 				completed: !state.completed
// 			}
// 		default:
// 			return state;
// 	}
// }

// const todos = (state = [], action) => {
// 	switch(action.type){
// 		case 'ADD_TODO':
// 			return [
// 				...state,
// 				todo(undefined, action)
// 			];
// 		case 'TOGGLE_TODO':
// 			return state.map(t=>todo(t,action));
// 		default:
// 			return state;
// 	}
// }

// const visibilityFilter = (state = 'SHOW_ALL', action) => {
// 	switch(action.type){
// 		case 'SET_VISIBILITY_FILTER':
// 			return action.filter;
// 		default:
// 			return state;
// 	}
// };

// // *** The way to program ES6 SHORTHAND combine reducers with function {combineReducersNotRedux}
// const todoApp = combineReducers({
// 	todos,
// 	visibilityFilter
// }
// )
// const store = createStore(todoApp);

// // const FilterLink = ({
// // 	filter,
// // 	currentFilter,
// // 	children,
// // 	onClick
// // }) => {
// // 	if(filter === currentFilter){
// // 		return <span>{children}</span>
// // 	}
// // 	return (
// // 		<a href="#"
// // 			onClick={e=>{
// // 				e.preventDefault();
// // 				onClick(filter);
// // 			}}
// // 		>
// // 			{children}
// // 		</a>
// // 	)
// // }

// const Link = ({
// 	active,
// 	children,
// 	onClick
// }) => {
// 	if(active){
// 		return <span>{children}</span>
// 	}

// 	return(
// 		<a href="#"
// 			onClick={e=>{
// 				e.preventDefault();
// 				onClick();
// 			}}
// 		>
// 			{children}
// 		</a>
// 	)
// }

// class FilterLink extends Component{
// 	componentDidMount(){
// 		this.unsubscribe = store.subscribe(()=>
// 			this.forceUpdate()
// 		);
// 	}

// 	componentWillUnmount(){
// 		this.unsubscribe();
// 	}

// 	render(){
// 		// console.log(this.props)
// 		const props = this.props;
// 		const state = store.getState();

// 		return(
// 			<Link 
// 				active={
// 					props.filter ===
// 					state.visibilityFilter
// 				}
// 				onClick={()=>
// 					store.dispatch({
// 						type: 'SET_VISIBILITY_FILTER',
// 						filter: props.filter
// 					})
// 				}
// 			>
// 				{props.children}
// 			</Link>
// 		)
// 	}
// }

// const Footer = (
// 	// {
// 	// 	visibilityFilter,
// 	// 	onFilterClick
// 	// }
// 	) => (
// 	<p>
// 		Show:
// 		{' '}
// 		<FilterLink
// 			filter="SHOW_ALL"
// 			// currentFilter={visibilityFilter}
// 			// onClick={onFilterClick}
// 		>
// 			All	
// 		</FilterLink>
// 		{', '}
// 		<FilterLink
// 			filter="SHOW_ACTIVE"
// 			// currentFilter={visibilityFilter}
// 			// onClick={onFilterClick}
// 		>
// 			Active	
// 		</FilterLink>
// 		{', '}
// 		<FilterLink
// 			filter="SHOW_COMPLETED"
// 			// currentFilter={visibilityFilter}
// 			// onClick={onFilterClick}
// 		>
// 			Completed
// 		</FilterLink>
// 	</p>
// )

// const Todo = ({
// 	onClick,
// 	completed,
// 	text
// }) => (
// 	<li
// 		// onClick={()=>{
// 		// 	store.dispatch({
// 		// 		type: 'TOGGLE_TODO',
// 		// 		id: todo.id
// 		// 	});
// 		// }}
// 		onClick={onClick}
// 		style={{
// 			textDecoration:completed?'line-through':'none'
// 		}}
// 	>
// 		{
// 			/*todo.text*/
// 			text
// 		}
// 	</li>
// )

// const TodoList = ({
// 	todos,
// 	onTodoClick
// }) => (
// 	<ul>
// 		{todos.map(todo =>
// 			<Todo 
// 				key={todo.id}
// 				{...todo}
// 				onClick={() => onTodoClick(todo.id)}
// 			/>
// 		)}
// 	</ul>
// )

// const AddTodo = (
// 	// {
// 	// 	onAddClick
// 	// }
// ) => {
// 	let input;

// 	return(
// 		<div>
// 			<input type="text" ref={node=>{
// 				input=node;	
// 			}}/>
// 			<button onClick={() => {
// 				// onAddClick(input.value)
// 				store.dispatch({
// 					type: 'ADD_TODO',
// 					id: nextTodoId++,
// 					text: input.value
// 				})
// 				input.value='';
// 			}}>
// 				Add Todo
// 			</button>
// 		</div>
// 	)
// }

// const getVisibleTodos = (
// 	todos,
// 	filter
// ) => {
// 	switch(filter){
// 		case 'SHOW_ALL':
// 			return todos;
// 		case 'SHOW_COMPLETED':
// 			return todos.filter(
// 				t=>t.completed
// 			);
// 		case 'SHOW_ACTIVE':
// 			return todos.filter(
// 				t=> !t.completed
// 			);
// 	}
// }

// class VisibleTodoList extends Component {
// 	componentDidMount(){
// 		this.unsubscribe = store.subscribe(()=>
// 			this.forceUpdate()
// 		);
// 	}

// 	componentWillUnmount(){
// 		this.unsubscribe();
// 	}

// 	render(){
// 		const props = this.props;
// 		const state = store.getState();

// 		return(
// 			<TodoList
// 				todos={
// 					getVisibleTodos(
// 						state.todos,
// 						state.visibilityFilter
// 					)
// 				}
// 				onTodoClick={id=>
// 					store.dispatch({
// 						type: 'TOGGLE_TODO',
// 						id
// 					})
// 				}
// 			/>
// 		)
// 	}
// }

// let nextTodoId = 0;
// const TodoApp = (
// 	// {
// 	// 	todos,
// 	// 	visibilityFilter
// 	// }
// ) => //{
// 	// render(){
// 	// 	const {
// 	// 		todos,
// 	// 		visibilityFilter
// 	// 	} = this.props;
// 	// 	const visibleTodos = getVisibleTodos(
// 	// 		todos,
// 	// 		visibilityFilter
// 	// 	);
// 		// return(
// (
// 	<div>
// 		<AddTodo
// 			// onAddClick={text=>
// 			// 	// store.dispatch({
// 			// 	// 	type: 'ADD_TODO',
// 			// 	// 	id: nextTodoId++,
// 			// 	// 	text	
// 			// 	// })
// 			// }
// 		/>
// 		<VisibleTodoList />
// 		<Footer
// 			// visibilityFilter={visibilityFilter}
// 			// onFilterClick={filter =>
// 			// 	store.dispatch({
// 			// 		type: 'SET_VISIBILITY_FILTER',
// 			// 		filter
// 			// 	})
// 			// }
// 		/>
// 	</div>
// );
// 		// )
// 	// }
// //}

// // const render = () => {
// 	// console.log(store.getState())
// 	ReactDOM.render(
// 		<TodoApp
// 			// {...store.getState()}
// 		/>,
// 		document.getElementById('root')
// 	)
// // }

// // store.subscribe(render);
// // render();

/* --------------------- SPLIT PART --------------------- */

// const todo = (state, action) => {
// 	switch(action.type){
// 		case 'ADD_TODO':
// 			return {
// 				id: action.id,
// 				text: action.text,
// 				completed: false
// 			};
// 		case 'TOGGLE_TODO':
// 			if(state.id !== action.id){
// 				return state;
// 			}
// 			return{
// 				...state,
// 				completed: !state.completed
// 			}
// 		default:
// 			return state;
// 	}
// }

// const todos = (state = [], action) => {
// 	switch(action.type){
// 		case 'ADD_TODO':
// 			return [
// 				...state,
// 				todo(undefined, action)
// 			];
// 		case 'TOGGLE_TODO':
// 			return state.map(t=>todo(t,action));
// 		default:
// 			return state;
// 	}
// }

// const visibilityFilter = (state = 'SHOW_ALL', action) => {
// 	switch(action.type){
// 		case 'SET_VISIBILITY_FILTER':
// 			return action.filter;
// 		default:
// 			return state;
// 	}
// };

// const todoApp = combineReducers({
// 	todos,
// 	visibilityFilter
// }
// )

// let nextTodoId = 0;
// const addTodo = (text) =>{
// 	return{
// 		type: 'ADD_TODO',
// 		id: nextTodoId++,
// 		text
// 	};
// };

// const toggleTodo = (id) => {
// 	return{
// 		type: 'TOGGLE_TODO',
// 		id
// 	};
// };

// const setVisibility = (filter) => {
// 	return{
// 		type: 'SET_VISIBILITY_FILTER',
// 		filter
// 	};
// };

// const Link = ({
// 	active,
// 	children,
// 	onClick
// }) => {
// 	if(active){
// 		return <span>{children}</span>
// 	}

// 	return(
// 		<a href="#"
// 			onClick={e=>{
// 				e.preventDefault();
// 				onClick();
// 			}}
// 		>
// 			{children}
// 		</a>
// 	)
// }

// const mapStateToLinkProps = (
// 	state,
// 	ownProps
// ) => {
// 	return{
// 		active:
// 			ownProps.filter ===
// 			state.visibilityFilter	
// 	};
// };

// const mapDispatchToLinkProps = (
// 	dispatch,
// 	ownProps
// ) => {
// 	return {
// 		onClick:() => {
// 			dispatch(
// 				// {
// 				// 	type: 'SET_VISIBILITY_FILTER',
// 				// 	filter: ownProps.filter
// 				// }
// 				setVisibility(ownProps.filter)
// 			);
// 		}
// 	};
// }

// const FilterLink = connect(
// 	mapStateToTodoListProps,
// 	mapDispatchToLinkProps
// )(Link)

// // class FilterLink extends Component{
// // 	componentDidMount(){
// // 		// const {store} = this.props;
// // 		const {store} = this.context;
// // 		this.unsubscribe = store.subscribe(()=>
// // 			this.forceUpdate()
// // 		);
// // 	}

// // 	componentWillUnmount(){
// // 		this.unsubscribe();
// // 	}

// // 	render(){
// // 		const props = this.props;
// // 		// const {store} = props;
// // 		const {store} = this.context;
// // 		const state = store.getState();

// // 		return(
// // 			<Link 
// // 				active={
// // 					// props.filter ===
// // 					// state.visibilityFilter
// // 				}
// // 				onClick={
// // 					// ()=>
// // 					// store.dispatch({
// // 					// 	type: 'SET_VISIBILITY_FILTER',
// // 					// 	filter: props.filter
// // 					// })
// // 				}
// // 			>
// // 				{props.children}
// // 			</Link>
// // 		)
// // 	}
// // }

// // FilterLink.contextTypes = {
// // 	store: React.PropTypes.object
// // };

// const Footer = (
// 	// {store}
// ) => (
// 	<p>
// 		Show:
// 		{' '}
// 		<FilterLink
// 			filter="SHOW_ALL"
// 			// store={store}
// 		>
// 			All	
// 		</FilterLink>
// 		{', '}
// 		<FilterLink
// 			filter="SHOW_ACTIVE"
// 			// store={store}
// 		>
// 			Active	
// 		</FilterLink>
// 		{', '}
// 		<FilterLink
// 			filter="SHOW_COMPLETED"
// 			// store={store}
// 		>
// 			Completed
// 		</FilterLink>
// 	</p>
// )

// const Todo = ({
// 	onClick,
// 	completed,
// 	text
// }) => (
// 	<li
// 		onClick={onClick}
// 		style={{
// 			textDecoration:completed?'line-through':'none'
// 		}}
// 	>
// 		{
// 			text
// 		}
// 	</li>
// )

// const TodoList = ({
// 	todos,
// 	onTodoClick
// }) => (
// 	<ul>
// 		{todos.map(todo =>
// 			<Todo 
// 				key={todo.id}
// 				{...todo}
// 				onClick={() => onTodoClick(todo.id)}
// 			/>
// 		)}
// 	</ul>
// );

// let AddTodo = (
// 	// {store}
// 	// props,
// 	// {store}
// 	{dispatch}
// ) => {
// 	let input;

// 	return(
// 		<div>
// 			<input type="text" ref={node=>{
// 				input=node;	
// 			}}/>
// 			<button onClick={() => {
// 				// onAddClick(input.value)
// 				// store.dispatch({
// 				// 	type: 'ADD_TODO',
// 				// 	id: nextTodoId++,
// 				// 	text: input.value
// 				// })
// 				dispatch(
// 					// {
// 					// 	type: 'ADD_TODO',
// 					// 	id: nextTodoId++,
// 					// 	text: input.value
// 					// }
// 					addTodo(input.value)
// 				)
// 				input.value='';
// 			}}>
// 				Add Todo
// 			</button>
// 		</div>
// 	)
// }

// AddTodo = connect(
// 	// state => {
// 	// 	return {};
// 	// }
// 	// null,
// 	// dispatch => {
// 	// 	return {dispatch};
// 	// }
// 	// null
// )(AddTodo)

// // AddTodo.contextTypes={
// // 	store: React.PropTypes.object
// // }

// const getVisibleTodos = (
// 	todos,
// 	filter
// ) => {
// 	switch(filter){
// 		case 'SHOW_ALL':
// 			return todos;
// 		case 'SHOW_COMPLETED':
// 			return todos.filter(
// 				t=>t.completed
// 			);
// 		case 'SHOW_ACTIVE':
// 			return todos.filter(
// 				t=> !t.completed
// 			);
// 	}
// }

// const mapStateToTodoListProps = (
// 	state
// ) => {
// 	return {
// 		todos: getVisibleTodos(
// 			state.todos,
// 			state.visibilityFilter
// 		)
// 	};
// };

// const mapDispatchToTodoListProps = (
// 	dispatch
// ) => {
// 	return {
// 		onTodoClick: (id) =>{
// 			dispatch(
// 				// {
// 				// 	type: 'TOGGLE_TODO',
// 				// 	id
// 				// }
// 				toggleTodo(id)
// 			)	
// 		}
// 	};
// };

// const VisibleTodoList = connect(
// 	mapDispatchToTodoListProps,
// 	mapStateToTodoListProps
// )(TodoList);

// // class VisibleTodoList extends Component {
// // 	componentDidMount(){
// // 		// const {store} = this.props;
// // 		const {store} = this.context;
// // 		this.unsubscribe = store.subscribe(()=>
// // 			this.forceUpdate()
// // 		);
// // 	}

// // 	componentWillUnmount(){
// // 		this.unsubscribe();
// // 	}

// // 	render(){
// // 		const props = this.props;
// // 		// const {store} = props;
// // 		const {store} = this.context;
// // 		const state = store.getState();

// // 		return(
// // 			<TodoList
// // 				todos={
// // 					// getVisibleTodos(
// // 					// 	state.todos,
// // 					// 	state.visibilityFilter
// // 					// )
// // 				}
// // 				onTodoClick={
// // 				}
// // 			/>
// // 		)
// // 	}
// // }

// // VisibleTodoList.contextTypes= {
// // 	store: React.PropTypes.object
// // };

// const TodoApp = (
// 	// {store}
// ) => 
// (
// 	<div>
// 		<AddTodo 
// 			// store={store}
// 		/>
// 		<VisibleTodoList
// 			// store={store}
// 		/>
// 		<Footer
// 			// store={store}
// 		/>
// 	</div>
// );

// // class Provider extends Component {
// // 	getChildContext(){
// // 		return {
// // 			store: this.props.store
// // 		}
// // 	};
// // 	render(){
// // 		return this.props.children;
// // 	}	
// // }

// // Provider.childContextTypes = {
// // 	store: React.PropTypes.object
// // }

// // const store = createStore(todoApp);

// ReactDOM.render(
// 	<Provider store={createStore(todoApp)}>
// 		<TodoApp
// 			// store={createStore(todoApp)}
// 		/>
// 	</Provider>,
// 	document.getElementById('root')
// )