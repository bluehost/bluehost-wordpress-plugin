import {Children} from '@wordpress/element';
import {__} from '@wordpress/i18n';

import {Slider} from '@/components';

export default function Tips({children}) {

    const settings = {
        adaptiveHeight: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 10000,
        dots: true,
        infinite: true,
        pauseOnDotsHover: true,
        pauseOnHover: true,
    };

    if (!children) {
        children = [
            __('You can clone your production site to update your staging site with new content.', 'bluehost-wordpress-plugin'),
            __('Making changes in a staging site doesn’t effect your live site.', 'bluehost-wordpress-plugin'),
            __('If you want changes in a staging site to take effect on your live site, deploy them.', 'bluehost-wordpress-plugin'),
        ];
    }

    return (
        <Slider settings={settings}>
            {Children.map(children, (item) => {
                return (
                    <p>
                        <span>{__('Tip:', 'bluehost-wordpress-plugin')}</span> {item}
                    </p>
                );
            })}
        </Slider>
    );
}