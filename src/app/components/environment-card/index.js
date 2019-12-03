import './style.scss';

export default function EnvironmentCard(
	{
		color = 'green',
		deploymentActionsComponent,
		description,
		environmentActionsComponent,
		environmentName,
		radioButtonComponent,
		screenshotUrl,
		title,
	}
) {
	return (
		<div className="environment-card">
			{ radioButtonComponent && (
				<div className="environment-card__selector">
					{ radioButtonComponent }
				</div>
			) }
			<div className="environment-card__container">
				{ screenshotUrl && (
					<div className="environment-card__screenshot" style={ { background: `url(${ screenshotUrl })` } } />
				) }
				<div className="environment-card__details">
					<h3 className="environment-card__title">{ title }</h3>
					<div className="environment-card__description">{ description }</div>
					{ environmentName && (
						<div className={ `environment-card__badge --${ color }` }>{ environmentName }</div>
					) }
				</div>
				{ deploymentActionsComponent && (
					<div className="environment-card__deployment-actions">
						{ deploymentActionsComponent }
					</div>
				) }
				{ environmentActionsComponent && (
					<div className="environment-card__environment-actions">
						{ environmentActionsComponent }
					</div>
				) }
			</div>
		</div>
	);
}
