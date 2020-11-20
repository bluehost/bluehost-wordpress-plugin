import apiFetch from '@wordpress/api-fetch';
import { Fragment, useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { SelectControl, Spinner, TextControl } from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';
import classNames from 'classnames';
import { BWAButton as Button } from '@app/components/atoms';
import { BWAModal as Modal } from '@app/components/molecules';
import { BlogPosts, StaticPage } from '@app/assets';
import browser from '@app/assets/browser.png';

function HomepageOnboardingStep({hasSetHomepage = false, pageOnFront, showOnFront, updateSetting}) {

	const [frontPage, setFrontPage] = useState(pageOnFront);
	const [isSaving, setIsSaving] = useState(false);
	const [loadPages, setLoadPages] = useState(false);
	const [options, setOptions] = useState([]);
	const [pageTitle, setPageTitle] = useState('Home');
	const [showModal, setShowModal] = useState(false);
	const [state, setState] = useState(hasSetHomepage ? 'complete' : 'default');

	const closeModal = () => setShowModal(false);
	const openModal = () => {
		setShowModal(true);
		setLoadPages(true);
	}

	// Implemented so tests will work properly
	useEffect(
		() => {
			if ('complete' === state && !hasSetHomepage) {
				setState('default');
			}
			if ('default' === state && hasSetHomepage) {
				setState('complete');
			}
		},
		[hasSetHomepage]
	);

	useEffect(
		() => {
			if (loadPages) {
				(async () => {
					const pages = await apiFetch({path: '/wp/v2/pages?per_page=100'});
					const selectOptions = pages.map(
						({id, title: {rendered: title}}) => {
							return {
								label: title,
								value: id,
							}
						}
					);
					// Add option for creating a new page
					selectOptions.unshift({
						label: __('Create a new page', 'bluehost-wordpress-plugin'),
						value: 0
					});
					setOptions(selectOptions);
				})();
			}
		},
		[loadPages]
	);

	const Default = () => (
		<Fragment>
			<p className="bluehost-onboarding-step__description">
				{ __("Customize your homepage and welcome your visitors", 'bluehost-wordpress-plugin') }
			</p>
			<div className="bluehost-onboarding-step__actions">
				<Button isSecondary onClick={ () => setState('open') }>
					{ __('Get Started', 'bluehost-wordpress-plugin') }
				</Button>
			</div>
		</Fragment>
	);

	const Open = () => (
		<div className="bluehost-onboarding-step__content">
			<p className="bluehost-onboarding-step__description">
				{ __('What do you want people to see when they land on your site?', 'bluehost-wordpress-plugin') }
			</p>
			<div className="icon-collection">
				<button
					className="icon-block"
					type="button"
					onClick={
						async () => {
							await updateSetting('showOnFront', 'posts');
							updateSetting('hasSetHomepage', true);
							setState('complete');
						}
					}
				>
					<BlogPosts />
					<p>{ __('Blog posts', 'bluehost-wordpress-plugin') }</p>
				</button>
				<button className="icon-block" type="button" onClick={ openModal }>
					<StaticPage />
					<p>{ __('Static page', 'bluehost-wordpress-plugin') }</p>
				</button>
			</div>
		</div>
	);

	const Complete = () => (
		<Fragment>
			{
				showOnFront === 'posts' && (
					<p className="bluehost-onboarding-step__description">
						{ __("Your site is currently showing blog posts on the homepage.", 'bluehost-wordpress-plugin') }
					</p>
				)
			}
			{
				showOnFront === 'page' && (
					<p className="bluehost-onboarding-step__description">
						{ __("Your site is currently showing a static page on the homepage.", 'bluehost-wordpress-plugin') }
					</p>
				)
			}
			<div className="bluehost-onboarding-step__actions">
				<Button isSecondary onClick={ () => setState('open') }>
					{ __('Update', 'bluehost-wordpress-plugin') }
				</Button>
			</div>
		</Fragment>
	);

	return (
		<div
			className={
				classNames(
					{
						'bluehost-onboarding-step': true,
						[`--homepage-${ state }`]: true,
					}
				)
			}
		>
			<div className="bluehost-onboarding-step__image">
				<img src={ browser } alt="" />
			</div>
			<div className="bluehost-onboarding-step__title">
				{
					state === 'complete' ?
						__('Your homepage is all set!', 'bluehost-wordpress-plugin') :
						__('Let\'s start with your homepage', 'bluehost-wordpress-plugin')
				}
			</div>
			{ state === 'default' && <Default /> }
			{ state === 'open' && <Open /> }
			{ state === 'complete' && <Complete /> }
			{ showModal && (
				<Modal
					title="Static Homepage Settings"
					onRequestClose={ closeModal }
					actionsComponent={ (
						<div style={ {marginTop: '1rem'} }>
							<Button isSecondary onClick={ closeModal }>
								{ __('Cancel', 'bluehost-wordpress-plugin') }
							</Button>
							<Button
								isPrimary
								onClick={
									async () => {
										setIsSaving(true);
										if (frontPage) {
											await updateSetting('pageOnFront', frontPage);
										} else {
											const page = await apiFetch({
												path: '/wp/v2/pages',
												method: 'POST',
												data: {
													status: 'publish',
													title: pageTitle,
												}
											});
											await updateSetting('pageOnFront', page.id);
										}
										await updateSetting('showOnFront', 'page');
										if (!hasSetHomepage) {
											updateSetting('hasSetHomepage', true);
										}
										closeModal();
										setState('complete');
										setIsSaving(false);
									}
								}
								style={ {float: 'right'} }
							>
								{ isSaving && <Spinner style={ {backgroundColor: 'blue'} } /> }
								{ __('Update', 'bluehost-wordpress-plugin') }
							</Button>
						</div>
					) }
				>
					{ options.length > 0 ? (
						<SelectControl
							label={ __('Which page would you like to use as your homepage?', 'bluehost-wordpress-plugin') }
							value={ frontPage }
							onChange={ (pageId) => setFrontPage(parseInt(pageId, 10)) }
							options={ options }
						/>
					) : (
						<Spinner />
					) }
					{ options.length > 0 && !frontPage && (
						<TextControl
							label={ __('Enter the name for your new page:', 'bluehost-wordpress-plugin') }
							onChange={ (value) => setPageTitle(value) }
							value={ pageTitle }
						/>
					) }
				</Modal>
			) }
		</div>
	);
}

export default compose(
	withSelect((select) => ({
		hasSetHomepage: select('bluehost/plugin').getSetting('hasSetHomepage'),
		pageOnFront: select('bluehost/plugin').getSetting('pageOnFront'),
		showOnFront: select('bluehost/plugin').getSetting('showOnFront'),
	})),
	withDispatch((dispatch) => ({
		updateSetting: dispatch('bluehost/plugin').updateSetting,
	}))
)(HomepageOnboardingStep);
