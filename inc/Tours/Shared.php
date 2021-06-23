<?php

namespace Newfold\Plugin\Tours;

/**
 * Undocumented class
 */
class Shared {

    /**
     * Undocumented function
     *
     * @param string $text
     * @param string $type
     * @return void
     */
    public static function secondary_button( $text = 'Back', $type = 'back' ) {
        return array(
            'classes' => 'components-button is-secondary',
            'text'    => $text,
            'type'    => $type,
        );
    }

    /**
     * Undocumented function
     *
     * @param string $text
     * @param string $type
     * @return void
     */
    public static function primary_button( $text = 'Next', $type = 'next' ) {
        return array(
            'classes' => 'components-button is-primary',
            'text'    => $text,
            'type'    => $type,
        );
    }

    /**
     * Undocumented function
     *
     * @param [type] $contents
     * @return void
     */
    public static function step( $contents ) {
        $squares = '<div class="step-bluehost-squares"><img src="https://cdn.hiive.space/bluehost/mark.svg" alt="Bluehost Logo Mark" /></div>';
        return '<div class="wrap-std">' . $contents . $squares . '</div>';
    }

    /**
     * Undocumented function
     *
     * @param [type] $contents
     * @return void
     */
    public static function large_step( $contents ) {
        $logo = '<div class="step-bluehost-logo"><img src="https://cdn.hiive.space/bluehost/logo.svg" alt="Bluehost Logo" /></div>';
        return '<div class="wrap-large">'. $contents . $logo . '</div>';
    }

    /**
     * Undocumented function
     *
     * @param [type] $col1
     * @param [type] $col2
     * @return void
     */
    public static function two_col( $col1, $col2 ) {
        return '<div class="step-2col"><div>'. $col1 .'</div><div>'. $col2 .'</div></div>';
    }
}
