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
                        get_random(max);
                    } else {
                        return random;
                    }
                }
            }

            //function get_random(max){
            //    var random = Math.floor(Math.random()*max + 1);
            //    console.log(checked);
            //    console.log(random);
            //    console.log(checked.indexOf(random));
            //    if(checked.indexOf(random) !== -1){
            //        return get_random(max);
            //    } else {
            //        return random;
            //    }
            //}

            function get_random_button(max, check_button){
                var random = Math.floor(Math.random()*max + 1);

                if (check_button.length > 0) {
                    if(check_button.indexOf(random+1) !== -1){
                        get_random_button(max, check_button);
                    } else {
                        return random;
                    }
                } else {
                    return random;
                }
            }

            function refresh_chonchu(){
                console.log(checked);
                if (checked.length == hiragana.length) {
                    console.log('ket thuc');
                    return false;
                }
                $('.hiragana-chonchu-click').removeClass( "btn-danger" ).addClass( "btn-info");
                var random_item = get_random(hiragana.length, checked)-1;
                var random_button = Math.floor(Math.random() * 6 + 1);
                console.log(random_item);
                $('.center-character').html(hiragana[random_item].Hira);
                $('.center-character').attr('id_character', hiragana[random_item].ID);
                var id_button = 'btn_'+random_button;
                $('#'+id_button).attr('value', hiragana[random_item].PRON);
                $('.hiragana-chonchu-click').each(function(){
                    var check_button = new Array(random_button);
                    var rand = get_random_button(6, check_button);
                    if (rand != null) {
                        check_button.push(rand);
                    }

                    if($(this).attr('id').localeCompare(id_button) !== 0){
                        $(this).attr('value', hiragana[rand].PRON);
                        $(this).attr('id_character', hiragana[rand].ID);
                    } else {
                        $(this).attr('id_character', hiragana[random_item].ID);
                    }
                })
            }

        }
    }

});

