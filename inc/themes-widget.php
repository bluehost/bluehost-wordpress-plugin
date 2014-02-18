<?php
/*
This file creates the widget for themes
*/

class MOJO_Widget extends WP_Widget {
	var $defaults = array(
			'mojo-title' => 'Mojo Marketplace',
			'mojo-platform' => 'wordpress',
			'mojo-type' => 'themes',
			'mojo-items' => 'recent',
			'mojo-image-size' => 'thumbnail',
			'mojo-quantity' => '3',
			'mojo-preview' => 'off',
			'mojo-seller' => '',
			'mojo-aff-id' => ''
			);
	public function __construct() {
		parent::__construct(
			'mojo_widget',
			'MOJO WordPress Themes',
			array( 'description' => __( 'Add Themes/Plugins from MOJO.', 'mojo-widget' ) )
		);
	}
	public function form( $instance ) {
		$instance = wp_parse_args( $instance, $this->defaults );
		?>
		<label for="<?php echo $this->get_field_name( 'mojo-title' ); ?>">Title:</label> 
		<input class="widefat" id="<?php echo $this->get_field_id( 'mojo-title' ); ?>" name="<?php echo $this->get_field_name( 'mojo-title' ); ?>" type="text" value="<?php echo esc_attr( $instance['mojo-title'] ); ?>" />
		
		<label for="<?php echo $this->get_field_name( 'mojo-platform' ); ?>">Platform:</label> 
		<select  class="widefat mojo-wid-type" id="<?php echo $this->get_field_id( 'mojo-platform' ); ?>" name="<?php echo $this->get_field_name( 'mojo-platform' ); ?>">
			<option value='wordpress' <?php selected( $instance['mojo-platform'], 'wordpress', true ); ?>>WordPress</option>
			<option value='joomla' <?php selected( $instance['mojo-platform'], 'joomla', true ); ?>>Joomla</option>
			<option value='drupal' <?php selected( $instance['mojo-platform'], 'drupal', true ); ?>>Drupal</option>
			<option value='magento' <?php selected( $instance['mojo-platform'], 'magento', true ); ?>>Magento</option>
			<option value='prestashop' <?php selected( $instance['mojo-platform'], 'prestashop', true ); ?>>PrestaShop</option>
		</select>

		<label for="<?php echo $this->get_field_name( 'mojo-type' ); ?>">Type:</label> 
		<select  class="widefat mojo-wid-type" id="<?php echo $this->get_field_id( 'mojo-type' ); ?>" name="<?php echo $this->get_field_name( 'mojo-type' ); ?>">
			<option value='themes' <?php selected( $instance['mojo-type'], 'themes', true ); ?>>Themes</option>
			<option value='plugins' <?php selected( $instance['mojo-type'], 'plugins', true ); ?>>Plugins</option>
		</select>

		<label for="<?php echo $this->get_field_name( 'mojo-items' ); ?>">Items:</label> 
		<select  class="widefat mojo-wid-type" id="<?php echo $this->get_field_id( 'mojo-items' ); ?>" name="<?php echo $this->get_field_name( 'mojo-items' ); ?>">
			<option value='popular' <?php selected( $instance['mojo-items'], 'popular', true ); ?>>Popular</option>
			<option value='recent' <?php selected( $instance['mojo-items'], 'recent', true ); ?>>Recent</option>
		</select>

		<label for="<?php echo $this->get_field_name( 'mojo-image-size' ); ?>">Image Size:</label> 
		<select  class="widefat mojo-wid-type" id="<?php echo $this->get_field_id( 'mojo-image-size' ); ?>" name="<?php echo $this->get_field_name( 'mojo-image-size' ); ?>">
			<option value='square_thumbnail_url' <?php selected( $instance['mojo-image-size'], 'square_thumbnail_url', true ); ?>>Square Thumbnail</option>
			<option value='thumbnail_url' <?php selected( $instance['mojo-image-size'], 'thumbnail_url', true ); ?>>Thumbnail</option>
			<option value='large_thumbnail_url' <?php selected( $instance['mojo-image-size'], 'large_thumbnail_url', true ); ?>>Large</option>
		</select>

		<label for="<?php echo $this->get_field_name( 'mojo-seller' ); ?>">Seller Profile <small>(optional)</small>:</label> 
		<input class="widefat" id="<?php echo $this->get_field_id( 'mojo-seller' ); ?>" name="<?php echo $this->get_field_name( 'mojo-seller' ); ?>" type="text" value="<?php echo esc_attr( $instance['mojo-seller'] ); ?>" />

		<label for="<?php echo $this->get_field_name( 'mojo-preview' ); ?>">Preview on hover:</label>		
		<input type="checkbox" id="<?php echo $this->get_field_id( 'mojo-preview' ); ?>" name="<?php echo $this->get_field_name( 'mojo-preview' ); ?>" <?php checked( $instance['mojo-preview'], 'on', true ); ?>/>

		<label for="<?php echo $this->get_field_name( 'mojo-quantity' ); ?>">Quantity:</label>
		<select id="<?php echo $this->get_field_id( 'mojo-quantity' ); ?>" name="<?php echo $this->get_field_name( 'mojo-quantity' ); ?>">
			<?php
			for ( $i = 1; $i <= 10; $i++ ) { 
				?>
			<option value='<?php echo $i; ?>' <?php selected( $instance['mojo-quantity'], $i, true ); ?>><?php echo $i; ?></option>
				<?php
			}
			?>
		</select>
		<br/>
		
		<?php
		if( defined( 'MMAFF' ) && $instance['mojo-aff-id'] == MMAFF ) {
			$instance['mojo-aff-id'] = "";
		}
		?>

		<label for="<?php echo $this->get_field_name( 'mojo-aff-id' ); ?>">Affiliate ID:</label> 
		<input class="widefat" id="<?php echo $this->get_field_id( 'mojo-aff-id' ); ?>" name="<?php echo $this->get_field_name( 'mojo-aff-id' ); ?>" type="text" value="<?php echo esc_attr( $instance['mojo-aff-id'] ); ?>" />
		
		</p>
		<?php
	}

	public function widget( $args, $instance ) {
		$instance = wp_parse_args( $instance, $this->defaults );
		$query = array();
		if( $instance['mojo-platform'] == "wordpress" &&  $instance['mojo-type'] == "plugins" ) {
			$instance['mojo-type'] = "themes"; //Because MOJO Cannot sell WP plugins...
		}
		if( $instance['mojo-quantity'] != 10 ) {
			$query['count'] = $instance['mojo-quantity'];
		}
		if( 2 < strlen( $instance['mojo-seller'] ) ) {
			$query['seller'] = $instance['mojo-seller'];
		}
		
		if( 'on' == $instance['mojo-preview'] ) {
			global $use_mm_styles;
			$use_mm_styles = true;
		}

		$items = mm_api( $instance, $query );
		/*if there are no popular items show default*/
		if( strlen( $items['body'] ) < $instance['mojo-quantity'] AND $instance['mojo-items'] == 'popular' ) {
			$items = mm_api();
		}
		
		if( ! is_wp_error( $items ) ) {

			
			$items = json_decode( $items['body'] );
			$aff_id = ( isset( $instance['mojo-aff-id'] ) AND strlen( $instance['mojo-aff-id'] ) > 0 ) ? $instance['mojo-aff-id'] : '';
			$content = "";
			$count = 0;
			foreach ( $items as $item ) {
				$item->name = apply_filters( 'mm_item_name', $item->name );
				$content .= '<div class="mojo-widget-item wp-caption" style="margin:15px 0px;">';
				$content .= '<a target="_blank" href="' . mm_build_link( $item->page_url, array( 'r' => $aff_id, 'utm_medium'=>'plugin_widget', 'utm_content' => 'item_thumbnail' ) ) . '"><img style="display:block;margin: 0 auto;max-width: 100%;" src="'. $item->images->{$instance['mojo-image-size']} . '"  /></a>';
				if( 'on' == $instance['mojo-preview'] ) {
					$content .= '<a target="_blank" class="mojo-widget-preview" href="' . mm_build_link( $item->page_url, array( 'r' => $aff_id, 'utm_medium'=>'plugin_widget', 'utm' => 'item_thumbnail_hover_preview' ) ) . '"><img src="' . $item->images->preview_url . '" /></a>';
				}
				$content .= '<p class="wp-caption-text">' . $item->name . '</p>';
				$content .= '</div>';
				$count++;
			}
			$title = apply_filters( 'widget_title', $instance['mojo-title'] );
			echo $args['before_widget'];
			if( ! empty( $title ) ) {
				echo $args['before_title'] . $title . $args['after_title'];
			}
			echo $content;
			echo $args['after_widget'];
		}
	}
}

function mm_register_widget() {
	register_widget( 'Mojo_Widget' );
}
add_action( 'widgets_init', 'mm_register_widget' );