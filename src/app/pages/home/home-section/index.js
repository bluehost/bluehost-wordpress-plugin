/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';

export default class HomeSection extends Component {
	render() {
		const { title, className, children } = this.props;
		return (
			<section className={ 'bluehost-home-section ' + className }>
				{ children && (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Squashed commit of the following:
				<>
					<h2>{ title }</h2>
					<section className="bordered-box">
						{ children }
					</section> 
				</>)
<<<<<<< HEAD
=======
				<h2>{ title }</h2>
				<section className="bordered-box">
					{ children }
				</section> )
>>>>>>> Initial plugin home page
=======
>>>>>>> Squashed commit of the following:
				}
			</section>
		);
	}
}
