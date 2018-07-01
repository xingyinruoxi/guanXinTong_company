$(function () {
    'use strict';
    $(document).on("pageInit", "#page-index", function (e, id, page) {
        function swiperInit(num) {
            new Swiper('.swiper-container' + num, {
                pagination: {
                    el: '.swiper-pagination' + num,
                },
            });
        }

        swiperInit(0);
        var onOff = true;
        var $searchbar=$('.searchbar');
        var $content=$('.content');
        $('.tab-link').on('click', function () {
            var $index = $(this).index();
            if ($index === 2) {
                if(onOff){
                    setTimeout(function () {
                        swiperInit($index);
                    });
                    onOff = false;
                }
                $searchbar.hide();
                $content.css('top','4.4rem');
            }else{
                $searchbar.show();
                $content.css('top','6.6rem');
            }

        })
    });
    $.init();
});
