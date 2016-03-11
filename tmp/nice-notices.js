jQuery( document ).ready( function( $ ) {
	var notice_error = '';
	var notice_success = '';
	var notice_info = '';
	$( '.notice.error' ).each( function() {
		notice_error += $( this ).html();
		$( this ).hide();
	} );
	$( '.notice.updated' ).each( function() {
		notice_success += $( this ).html();
		$( this ).hide();
	} );
	$( '.notice.notice-info' ).each( function() {
		notice_info += $( this ).html();
		$( this ).hide();
	} );
	if ( notice_error != '' ) {
		$( '#wpbody' ).before( '<div class="mojo-notice mojo-notice-error">' + notice_error + '</div>' );
		$( '.mojo-notice-error' ).fadeIn();
		$( '.mojo-notice-error' ).css( 'display', 'inline-block' );
	}
	if ( notice_success != '' ) {
		$( '#wpbody' ).before( '<div class="mojo-notice mojo-notice-success">' + notice_success + '</div>' );
		$( '.mojo-notice-success' ).fadeIn('slow');
		$( '.mojo-notice-success' ).css( 'display', 'inline-block' );
	}
	if ( notice_info != '' ) {
		$( '#wpbody' ).before( '<div class="mojo-notice mojo-notice-info">' + notice_info + '</div>' );
		$( '.mojo-notice-info' ).fadeIn();
		$( '.mojo-notice-info' ).css( 'display', 'inline-block' );
	}
} );