(function( $ ) {

	var starRating = '.woocommerce-page li.product .star-rating';

	// Font size.
	wp.customize( 'mk_cz[sh_pl_sty_rat_font_size]', function( value ) {
	
		$(starRating).css( 'font-size', value() + 'px' );
	
		value.bind( function( to ) {
			$(starRating).css( 'font-size', to + 'px' );
		} );
	
	} );

	// Star color.
	wp.customize( 'mk_cz[sh_pl_sty_rat_star_color]', function( value ) {

		var el = 'mk_cz[sh_pl_sty_rat_star_color]';
		var styles = {};

		styles['.woocommerce-page ul.products li.product .star-rating::before'] = 'color: ' + value();
		mkPreviewInternalStyle( styles, el );
	
		value.bind( function( to ) {
			styles['.woocommerce-page ul.products li.product .star-rating::before'] = 'color: ' + to;
			mkPreviewInternalStyle( styles, el );
		} );
	
	} );
	
	// Active Star color.
	wp.customize( 'mk_cz[sh_pl_sty_rat_active_star_color]', function( value ) {
	
		$(starRating).css( 'color', value() );
	
		value.bind( function( to ) {
			$(starRating).css( 'color', to );
		} );
	
	} );

	// Box Model.
	wp.customize( 'mk_cz[sh_pl_sty_rat_box_model]', function( value ) {
		
		$(starRating).css(
			mkPreviewBoxModel( value(), true )
		);

		value.bind( function( to ) {
			value.bind( function (to) {
				$(starRating).css(
					mkPreviewBoxModel( to )
				);
			} );
		} );

	} );

} )( jQuery );