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
import {registerAPI} from './Api/postUser';
import {updateAPI} from './Api/postUser';
import {deleteAPI} from './Api/postUser';
import {getAPI} from './Api/postUser';
import {getByIdAPI} from './Api/postUser';
const counter = (state = 1, action) => {
  switch (action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// current state is display status of data/value
// AND current state also display current data/value
const flowState = {
	statusOfData:{
		isLoading: false,
		isInfo: null,
		wasError: null
	}
}

// Cách sử dụng STATE trong REDUCER. Ban đầu STATE là 1 array rỗng []
// Data được load bởi ACTION. Bất kỳ hành động thực thi nào cũng được gọi từ ACTION
// Vậy thì ACTION goi từ đâu. Action được mô tả ngay trong REDUCER như ví dụ: 
// data: action.data
// Vậy thì ACTION được tạo ra và thực thi ở đâu. Ở đây có 2 cách giải thích
// 1. ACTION được khởi tạo từ một đối tượng riêng biệt như thế này:
//	const stateBefore = []
//  const action = {
// 		type: 'GET_DATA',
// 		data: getAPI()
// 	};
// Nhưng khi truyền vào STORE chúng ta phải chạy REDUCER như một function. Điều này trái với nguyên tắc của REDUX
// Nó sẽ phải truyền như vậy: testDisplays(stateBefore,action).
// Và thành ra như thế này: const store = createStore(testDisplays(stateBefore,action).); Điều này sai với nguyên tắc REDUX như đã nói ở trên
// Vì vậy chúng ta chỉ sử dụng cách này để Unit Test mà thôi. Kiểu tra kết quả đầu ra của REDUCER.
// 2. Chúng ta truyền REDUCER vào STORE bình thường: const store = createStore(testDisplays);
// Sau đó ACTION được thực thì từ DISPATCH gọi từ STORE. Như thế này:
// store.dispatch({
// 	type: 'ADD_TODO',
// 	id: 0,
// 	text: 'Learn Redux'
// });
// Lúc này chúng ta thỏa mãn được đầy đủ các nguyên tắc của REDUX, cũng là tác dụng của DISPATCH.
// DISPATCH để thực thi một ACTION trong REDUCER để REDUCER không cần phải gọi đối tượng ACTION khởi tạo nào khác.
// Tránh tình trạng biến REDUCER thành 1 function

// Đối với REDUCER chỉ thực thi tác vụ. Có thể trả về tác vụ đó ngay trong reducer. Không cần phải trả về từ DISPATCH...

// 3 nguyên tắc REDUX
// 1. Cây STATE là bất biến
// 2. STATE chỉ thay đổi khi được gọi từ ACTION
// 3. Để thay đổi STATE phải viết function có PREVIOUS STATE
// ACTION phải được DISPATCH và trả về NEXT STATE

const display = (state, action) => {
	switch(action.type){
		case 'GET_DATA':
			return {
				data: action.data
			}
		default:
			return state;
	}
}

// const testDisplays = (state = [], action) => {
// 	switch(action.type){
// 		case 'GET_DATA':
// 			return [
// 				...state,
// 				display(undefined,action)
// 			]
// 		default:
// 			return state;
// 	}
// }

const testDisplayById = (state = flowState, action) => {
	switch(action.type){
		case 'GET_DATA_BY_ID':
			state.statusOfData.isInfo = getAPI(5)
			return state
		default:
			return state
	}
}

const register = (state,action) => {
	const inputData = {
		"name": "Product007",
		"cost": 88,
		"quantity": 888,
		"locationId": 2,
		"familyId": 2
	}
	const {insertData} = action
	switch(action.type){
		case 'REGISTER':
			return {
				...state,
				insertData: registerAPI(inputData)
			}
		default:
			return state
	}
}

const testEdit = (state,action) => {
	const data = {
		"name": "Product001",
		"cost": 10,
		"quantity": 10,
		"locationId": 1,
		"familyId": 2
    }
	const {updateData} = action
	switch(action.type){
		case 'UPDATE_DATA':
			return {
				...state,
				updateData: updateAPI(data,1)
			}
		default:
			return state
	}
}

const testDelete = (state,action) => {
	const {deleteData} = action
	switch(action.type){
		case 'DELETE_DATA':
			return {
				...state,
				deleteData: deleteAPI(5)
			}
		default:
			return state
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

class Posts extends Component {
	render(){
		return(
			<ul>
				
			</ul>
		)
	}
}

const InsertButton = ({
	onInsert,
	onUpdate,
	onDelete,
	onLoadById
}) =>
	<div className="container">
		<div className="control_center__container">
			<button onClick={onInsert}>Add</button>
			<button onClick={onUpdate}>Update</button>
			<button onClick={onDelete}>Delete</button>
			<button onClick={onLoadById}>Load By ID</button>
		</div>
	</div>
	

// const registerApp = combineReducers({
// 	testDisplays
// })

// const store = createStore(counter);
// const store = createStore(register);
// const store = createStore(testEdit);
// const store = createStore(testDelete);
const store = createStore(display);
// const store = createStore(testDisplayById);

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
	const {posts} = async ()=>{
		      	store.dispatch({
		      		type: 'GET_DATA',
		      		data: getAPI()
		      	})
		      	function asynCall(){
		      		console.log('calling');
		      		// 1st way:
		      		return store.getState().data;
		      		// console.log(result)
		      		// 2nd way:
		      		// const reponseValue = store.getState().data.then(function(result){
		      		// 	console.log(result)
		      		// })
		      	}
		      	const result = await asynCall();
		      	return result
		      	// async allow to function using await to return data
	      }
	ReactDOM.render(
		<div className="">
			<Posts posts={posts} />
			<InsertButton
			  // dataLoading={store.getState()}
		      onInsert={()=>
		      	store.dispatch({
		      		type: 'REGISTER'
		      	})
		      }
		      onUpdate={()=>
		      	store.dispatch({
		      		type: 'UPDATE_DATA'
		      	})
		      }
		      onDelete={()=>
		      	store.dispatch({
		      		type: 'DELETE_DATA'
		      	})
		      }
		      onLoadById={()=>
		      	store.dispatch({
		      		type: 'GET_DATA_BY_ID'
		      	})
		      }
		    />
		</div>
		, document.getElementById('root'));	
}

store.subscribe(render);
render();

// registerServiceWorker();

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

// const testAddTodo = () => {
// 	const stateBefore = [];
// 	const action = {
// 		type: 'ADD_TODO',
// 		id: 0,
// 		text: 'Learn Redux'
// 	};
// 	const stateAfter = [
// 		{
// 			id: 0,
// 			text: 'Learn Redux',
// 			completed: false
// 		}
// 	];

// 	deepFreeze(stateBefore);
// 	deepFreeze(action);

// 	expect(
// 		todos(stateBefore,action)
// 	).toEqual(stateAfter)
// }

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

// testAddTodo();
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