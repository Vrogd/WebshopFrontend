
$( document ).ready(function() {
    $( function() {
        $( "#slider-range" ).slider({
            range: true,
            min: 599,
            max: 10000,
            values: [ 600, 6000 ],
            slide: function( event, ui ) {
                $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
        $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
            " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    } );
});