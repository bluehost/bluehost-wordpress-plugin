<?php

function mm_editor_prompt_content() {
	$content = "
	<div id='editor-prompt'>
	<style type='text/css'>
	div#editor-prompt{ background-color: #fff; width: 97%; min-height: 400px;text-align: center;}
	div#editor-prompt p{font-weight: bold;font-size: 1.8rem;position: relative; top: 140px;}
	div#editor-prompt a{ position: relative; top: 160px;}
	</style>
	<p>
	Editing this code is highly discouraged. Proceed with caution.
	</p>
	<a id='proceed-to-editor' class='button button-primary button-large' href='#template'>Proceed</a>
	<div style='clear:both;'></div>
	</div>
	";
	return mm_minify( $content );
}

function mm_prompt_before_editor() {
	if( isset( $_GET['updated'] ) ) {
		set_transient( 'mm_editor_prompt', true, 300 );
	}

	if( ! get_transient( 'mm_editor_prompt' ) ) {
	?>
	<script type='text/javascript'>
	jQuery( document ).ready( function( $ ) {
		$( '#newcontent' ).before( "<?php echo mm_editor_prompt_content(); ?>" );
		$( '#newcontent' ).hide();
		$( '#submit' ).hide();
		$( '#submit' ).prop( 'disabled', true );
		$( '#proceed-to-editor' ).click( function () {
			$( '#newcontent' ).show();
			$( '#submit' ).prop( 'disabled', false );
			$( '#submit' ).show();
			$( '#editor-prompt' ).hide();
		} );
	} );
	</script>
	<?php
	}
}
add_action( 'admin_head-theme-editor.php', 'mm_prompt_before_editor' );
add_action( 'admin_head-plugin-editor.php', 'mm_prompt_before_editor' );