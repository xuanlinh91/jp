jQuery(document).ready(function ($) {

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
        if (page != '' && page == 'chonchu') {
            timeout = timeout * 1000;
            var count = timeout;
            var checked = new Array();
            var result = 0;
            var counter;
            refresh_chonchu(checked);
            var dapan = $('.chonchu-click').click(function() {
                var id = $(this).attr('id_character');
                var id_dapan = $('.center-character').attr('id_character');
                if (id == id_dapan) {
                    checked.push(id);
                    result++;
                    refresh_chonchu();
                } else {
                    $(this).removeClass( "btn-info" ).addClass( "btn-danger");
                }
            });

            $('#chonchu-get-result').click(function(){
                var obj = {result: result, total: char.length};
                var request = $.ajax({
                    type: "POST",
                    url: site_url + "/game/chonchu_result_cal",
                    data: obj,
                    dataType: "json"
                });
                request.done(function(msg){
                    if (typeof(msg) != 'undefined') {
                        $('.result').html(msg);
                    } else {
                        console.log('failed!');
                    }
                })
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
                count = timeout;
                $('.progress-bar').css('width', '100%');
                $('.progress-bar').attr('aria-valuenow', 100);
                counter = setInterval(timer, 1000);
                if (checked.length == char.length) {
                    $('.game').hide();
                    $('.result').removeClass('hidden');
                    return false;
                }
                $('.chonchu-click').removeClass( "btn-danger" ).addClass( "btn-info");
                var random_item = get_random(char.length, checked)-1;
                var random_button = Math.floor(Math.random() * 5 + 1);
                var check_button = new Array();
                check_button.push(char[random_item].ID.toString());
                $('.center-character').html(char[random_item].CHAR);
                $('.center-character').attr('id_character', char[random_item].ID.toString());
                var id_button = 'btn_'+random_button;
                $('#'+id_button).attr('value', char[random_item].PRON.toString());
                $('.chonchu-click').each(function(){
                    if($(this).attr('id').toString() !== id_button.toString()){
                        var rand = get_random_button(char.length, check_button);
                        if (rand != null && typeof(rand) != 'undefined') {
                            check_button.push(rand.toString());
                        }
                        $(this).attr('value', char[rand-1].PRON.toString());
                        $(this).attr('id_character', char[rand-1].ID.toString());
                    } else {
                        $(this).attr('id_character', char[random_item].ID.toString());
                    }
                })
            }

        }
    }

    function timer() {
        if (count <= 0) {
            count = timeout;
            clearInterval(counter);
            refresh_chonchu();
        } else {
            count = count - 1000;
            var percent = (count/timeout)*100;
            percent.toFixed(2);
            $('.progress-bar').css('width', percent+'%');
            $('.progress-bar').attr('aria-valuenow', percent);
        }
    }

});

