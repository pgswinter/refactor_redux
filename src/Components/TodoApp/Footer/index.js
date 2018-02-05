import React from 'react';
import {connect} from 'react-redux';
import {setVisibility} from '../../../redux/actions';

const Link = ({
	active,
	children,
	onClick
}) => {
	if(active){
		return <span>{children}</span>
	}

	return(
		<a href="#"
			onClick={e=>{
				e.preventDefault();
				onClick();
			}}
		>
			{children}
		</a>
	)
}

const mapStateToLinkProps = (
	state,
	ownProps
) => {
	return{
		active:
			ownProps.filter ===
			state.visibilityFilter	
	};
};

const mapDispatchToLinkProps = (
	dispatch,
	ownProps
) => {
	return {
		onClick:() => {
			dispatch(setVisibility(ownProps.filter));
		}
	};
}

const FilterLink = connect(
	mapStateToLinkProps,
	mapDispatchToLinkProps
)(Link)

const Footer = () => (
	<p>
		Show:
		{' '}
		<FilterLink
			filter="SHOW_ALL"
		>
			All	
		</FilterLink>
		{', '}
		<FilterLink
			filter="SHOW_ACTIVE"
		>
			Active	
		</FilterLink>
		{', '}
		<FilterLink
			filter="SHOW_COMPLETED"
		>
			Completed
		</FilterLink>
	</p>
)

export default Footer