eigbr.links = [];

eigbr.doFeedback = function() {
	jQuery( '.eig_modal' ).show();
	jQuery( '.eig_br_contact' ).show();
	jQuery( '.eig_br_list' ).hide();
}

eigbr.doReview = function() {
	if ( ! Array.isArray( this.links ) || ! this.links.length ) {
		var ajaxRequest = jQuery.post( {
			url: eigbr.ajaxUrl,
			data: {
				action: eigbr.actionSlug + '_get_links',
				_ajax_nonce: eigbr._ajax_nonce
			}
		} ).then( function( data ) {
			eigbr.links = data;
			if ( eigbr.links.length === 1 ) {
				window.location.href = this.links[0];
			} else if ( eigbr.links.length > 1 ) {
				eigbr.buildReviewList( eigbr.links );
			}
		}, function( jqXHR, status, error ) {
			console.log( error );
		} );
	} else {
		eigbr.buildReviewList( eigbr.links );
	}
}

eigbr.buildReviewList = function( links ) {
	var reviewContent =
		'<h2>We need your reviews!</h2>\n' +
		'<p>Please select where you would like to review our business.</p>\n';

	if ( links.length % 2 ) {
		reviewContent += '<ul class="odd">';
	} else {
		reviewContent += '<ul>';
	}

	links.forEach( function( site ) {
		if ( site.logo !== '' ) {
			linkContent = '<img src="' + site.logo + '" alt="' + site.name + '" />';
		} else {
			linkContent = site.name;
		}
		reviewContent += '<li><a href="' + site.url + '">' + linkContent + '</a></li>\n';
	} );

	reviewContent +=
		'</ul>\n' +
		'<p class="eig_br_toggle_sentence">To leave feedback for the website owner directly, <a href="#" onclick="eigbr.doFeedback()">please click here</a>.</p>';

	jQuery( '.eig_br_list' ).html( reviewContent ).show();
	jQuery( '.eig_modal' ).show();
	jQuery( '.eig_br_contact' ).hide();
}

eigbr.hideModal = function() {
	jQuery( '.eig_modal' ).hide();
}

eigbr.contactForm = jQuery( '#eig_br_contact_form' );
eigbr.contactForm.submit( function( event ) {
	event.preventDefault();
	jQuery.post({
		url: eigbr.ajaxUrl,
		data: {
			url: eigbr.ajaxUrl,
			action: eigbr.actionSlug + '_feedback',
			_ajax_nonce: eigbr._ajax_nonce,
			name: jQuery( 'input[name=eig_br_name]' ).val(),
			email: jQuery( 'input[name=eig_br_email]' ).val(),
			message: jQuery( 'textarea[name=eig_br_message]' ).val(),
		}
	} ).then( function( data ) {
		jQuery( '.eig_br_contact' ).html(
			'<h2>Your feedback was submitted.</h2>\n' +
			'<p>We look forward to reading your message.</p>\n' +
			'<p><a class="eig_return_button" href="#" onclick="eigbr.hideModal();">Return to website</a></p>'
		);
	}, function( error ) {
		console.log( error );
	} );
} );