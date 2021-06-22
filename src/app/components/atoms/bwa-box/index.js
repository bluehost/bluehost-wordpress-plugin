import './style.scss'
import classnames from 'classnames';

export const BWABox = ({ className, children}) => {
    return (
        <div className={classnames('components-box', className)}>
            {children}
        </div>
    )
}

export default BWABox;