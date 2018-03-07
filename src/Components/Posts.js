import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Posts extends Component {
	render(){
		return (
			<ul>
				{this.props.posts.map((post, i)=>(
					<li key={i}>
						Name: {post.name}<br/>
						Cost: {post.cost}<br/>
						Quantity: {post.quantity}<br/>
						LocationId: {post.locationId}<br/>
						FamilyId: {post.familyId}
					</li>
				))}
			</ul>
		)
	}
}

Posts.propTypes = {
	posts: PropTypes.array.isRequired
}