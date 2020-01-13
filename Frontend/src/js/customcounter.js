$( document ).ready(function() {
    $( function() {
        let custom = $('#customcounter');
        let min = parseInt(custom.children(':input').attr('data-minval'));
        let max = parseInt(custom.children(':input').attr('data-maxval'));
        let current = parseInt(custom.children(':input').attr('value'));
        custom.children('a').first().click(function() {
            //-1
            console.log("-1");
            if(current <= min){
                //no change
            }
            else {
                custom.children(':input').attr('value',current - 1);
                current -=1;
            }
        });
        custom.children('a').last().click(function() {
            //+1
            console.log("+1");
            if(current >= max){
                //no change
            }
            else {
                custom.children(':input').attr('value',current + 1);
                current +=1;
            }
        });
    } );

});