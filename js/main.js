jQuery(document).ready(function ($) {

    /* Get setting error display */
    $(function() {
        $('nav#menu').mmenu({
            extensions	: [ 'effect-slide-menu', 'pageshadow' ],
            searchfield	: true,
            counters	: true,
            navbar 		: {
                title		: 'Advanced menu'
            },
            navbars		: [
                {
                    position	: 'top',
                    content		: [ 'searchfield' ]
                }, {
                    position	: 'top',
                    content		: [
                        'prev',
                        'title',
                        'close'
                    ]
                }, {
                    position	: 'bottom',
                    content		: [
                        '<a href="http://mmenu.frebsite.nl">Visit website</a>',
                        '<a href="http://mmenu.frebsite.nl/wordpress-plugin.html">WordPress plugin</a>'
                    ]
                }
            ]
        });
    });

    if (typeof page != 'undefined') {
        if (page != '' && page == 'hiragana-chonchu') {

            var checked = new Array();
            refresh_chonchu(checked);
            var dapan = $('.hiragana-chonchu-click').click(function() {
                var id = $(this).attr('id_character');
                var id_dapan = $('.center-character').attr('id_character');
                if (id == id_dapan) {
                    checked.push(id);
                    refresh_chonchu();
                } else {
                    $(this).removeClass( "btn-info" ).addClass( "btn-danger");
                }
            });

            function get_random(max){
                if(checked.length == max){
                    console.log(checked);
                    return false;
                } else {
                    var random = Math.floor(Math.random()*max + 1).toString();
                    if(checked.indexOf(random) !== -1){
                        return get_random(max);
                    } else {
                        return random;
                    }
                }
            }

            function get_random_button(max, check_button){
                var random = Math.floor(Math.random()*max + 1).toString();
                if(check_button.indexOf(random) !== -1){
                    return get_random_button(max, check_button);
                } else {
                    return random;
                }

            }

            function refresh_chonchu(){
                if (checked.length == hiragana.length) {
                    console.log('ket thuc');
                    return false;
                }
                $('.hiragana-chonchu-click').removeClass( "btn-danger" ).addClass( "btn-info");
                var random_item = get_random(hiragana.length, checked)-1;
                var random_button = Math.floor(Math.random() * 5 + 1);
                var check_button = new Array();
                check_button.push(hiragana[random_item].ID.toString());
                $('.center-character').html(hiragana[random_item].CHAR);
                $('.center-character').attr('id_character', hiragana[random_item].ID.toString());
                var id_button = 'btn_'+random_button;
                $('#'+id_button).attr('value', hiragana[random_item].PRON.toString());
                $('.hiragana-chonchu-click').each(function(){
                    if($(this).attr('id').toString() !== id_button.toString()){
                        var rand = get_random_button(hiragana.length, check_button);
                        if (rand != null && typeof(rand) != 'undefined') {
                            check_button.push(rand.toString());
                        }
                        $(this).attr('value', hiragana[rand-1].PRON.toString());
                        $(this).attr('id_character', hiragana[rand-1].ID.toString());
                    } else {
                        $(this).attr('id_character', hiragana[random_item].ID.toString());
                    }
                })
            }

        }
    }

});

