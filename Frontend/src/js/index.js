
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
    $( function() {
        $(".zoom_image").elevateZoom({
            gallery:'gallery_01',
            galleryActiveClass: 'active',
            imageCrossfade: true,
            zoomType : "inner",
            cursor: "move",
        });
        $(".zoom-small").bind("click", function(e) {
            var ez =  $(this).data();
            console.log(ez);
            if ($(this).attr("src",ez.image) == $(".zoom_image").attr("src",ez.image))
            $(".zoom_image").attr("src",ez.image);
            $(".zoom_image").data('zoom-image',ez.zoomImage ).elevateZoom({
                gallery:'gallery_01',
                galleryActiveClass: 'active',
                imageCrossfade: true,
                zoomType : "inner",
                cursor: "move",
            });
        });
    } );
    $(window).resize(function(){location.reload();});
});