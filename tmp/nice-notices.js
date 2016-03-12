jQuery( document ).ready( function( $ ) {
	var notice_error = '';
	var notice_success = '';
	var notice_info = '';
	var notice_count = 0;
	$( '.notice.error' ).each( function() {
		notice_error += $( this ).html();
		$( this ).hide();
		notice_count++;
	} );
	$( '.notice.updated' ).each( function() {
		notice_success += $( this ).html();
		$( this ).hide();
		notice_count++;
	} );
	$( '.notice.notice-info' ).each( function() {
		notice_info += $( this ).html();
		$( this ).hide();
		notice_count++;
	} );
	if ( notice_count > 0 ) {
		$( '#wpbody' ).before( '<div class="mojo-nice-notice-wrap"></div>' );
	}
	if ( '' != notice_error ) {
		$( '.mojo-nice-notice-wrap' ).append( '<div class="mojo-nice-notice mojo-notice-error">' + notice_error + '</div>' );
	}
	if ( '' != notice_success ) {
		$( '.mojo-nice-notice-wrap' ).append( '<div class="mojo-nice-notice mojo-notice-success">' + notice_success + '</div>' );
	}
	if ( '' != notice_info ) {
		$( '.mojo-nice-notice-wrap' ).append( '<div class="mojo-nice-notice mojo-notice-info">' + notice_info + '</div>' );
	}
	if ( notice_count > 0 ) {
		$( '.mojo-nice-notice-wrap' ).slideDown( 400 + ( 400 * notice_count ) );
		$( '#wpbody' ).before( '<div class="clear"></div>' );
	}
} );