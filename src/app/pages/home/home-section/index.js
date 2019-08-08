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
				<>
					<h2>{ title }</h2>
					<section className="bordered-box">
						{ children }
					</section> 
				</>)
=======
				<h2>{ title }</h2>
				<section className="bordered-box">
					{ children }
				</section> )
>>>>>>> Initial plugin home page
				}
			</section>
		);
	}
}
