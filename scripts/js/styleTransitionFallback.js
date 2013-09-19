// make sure to execute this on page load
$(function() {
    // determine if the browser supports transition
    var thisStyle = document.body.style,
    supportsTransition = thisStyle.WebkitTransition !== undefined ||
        thisStyle.MozTransition !== undefined ||
        thisStyle.OTransition !== undefined ||
        thisStyle.transition !== undefined;

    // assign jQuery transition if the browser doesn't support
    if ( ! supportsTransition ) {
        var defaultCSS = {
            //color: "#505050",
			fontSize: "1.5em"
        },
        hoverCSS = {
            //color: "#49aa43",
			fontSize: "2em"
        };

        // loop through each button
        $('header nav a').each(function() {
            var $thisButton = $(this);

            $thisButton.hover(function() {
                // execute this on mouseover
                $thisButton.css(defaultCSS)
                    .animate(hoverCSS, 100, 'linear' );
            }, function() {
                // execute this on mouseout
                $thisButton.animate(defaultCSS, 100, 'linear' );
            });
        });
    }
});