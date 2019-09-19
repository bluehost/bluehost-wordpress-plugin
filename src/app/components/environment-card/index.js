import './style.scss';

export default function EnvironmentCard(
    {
        color = 'green',
        deploymentActionsComponent,
        description = 'Updated Jun 19, 2019',
        environmentActionsComponent,
        environmentName,
        radioButtonComponent,
        screenshotUrl = 'https://via.placeholder.com/122x92',
        title = window.location.hostname
    }
) {

    const style = screenshotUrl ? {background: `url(${screenshotUrl})`} : {};

    return (
        <div className="environment-card">
            {radioButtonComponent && (
                <div className="environment-card__selector">
                    {radioButtonComponent}
                </div>
            )}
            <div className="environment-card__container">
                <div className="environment-card__screenshot" style={style}/>
                <div className="environment-card__details">
                    <h3 className="environment-card__title">{title}</h3>
                    <div className="environment-card__description">{description}</div>
                    {environmentName && (
                        <div className={`environment-card__badge --${color}`}>{environmentName}</div>
                    )}
                </div>
                {deploymentActionsComponent && (
                    <div className="environment-card__deployment-actions">
                        {deploymentActionsComponent}
                    </div>
                )}
                {environmentActionsComponent && (
                    <div className="environment-card__environment-actions">
                        {environmentActionsComponent}
                    </div>
                )}
            </div>
        </div>
    );
}