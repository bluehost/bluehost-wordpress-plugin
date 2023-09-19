import { Button, Modal } from '@wordpress/components';
import { menu } from '@wordpress/icons';
import { topRoutes } from '../../data/routes';
import { NavLink } from 'react-router-dom';

const NavMobile = () => {
	const [ isOpen, setIsOpen ] = useState( false );
	const MobileMenu = () => {
		return (
			<ul className="nav-mobile">
				{ topRoutes.map( ( page ) => (
					<li key={ page.name }>
						<NavLink
							to={ page.name }
							onClick={ () => setIsOpen( false ) }
							className={ `components-button is-secondary mobile-link-${ page.title }` }
							style={ { width: '100%', textAlign: 'center' } }
						>
							{ page.title }
						</NavLink>
					</li>
				) ) }
			</ul>
		);
	};
	return (
		<Fragment>
			<Button
				icon={ menu }
				onClick={ () => setIsOpen( ! isOpen ) }
				className="mobile-toggle"
			/>
			{ isOpen && (
				<Modal onRequestClose={ () => setIsOpen( false ) }>
					<MobileMenu />
				</Modal>
			) }
		</Fragment>
	);
};

export default NavMobile;
