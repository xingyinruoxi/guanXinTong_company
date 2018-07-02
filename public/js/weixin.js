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

    $(document).on("pageInit", "#page-enroll", function (e, id, page) {
        $('.list-entry-info').on('click','.link-close',function () {
            $(this).closest('li').hide();
        })
    });
    // 报名成功
    $(document).on("pageInit", "#page-enroll-success", function (e, id, page) {
        /*=== Popup ===*/
        var myPhotoBrowserPopup = $.photoBrowser({
            photos : [
                '//img.alicdn.com/tps/i3/TB1kt4wHVXXXXb_XVXX0HY8HXXX-1024-1024.jpeg',
            ],
            theme: 'dark',
            type: 'popup'
        });
        $(page).on('click','.pb-popup',function () {
            myPhotoBrowserPopup.open();
        });
    });
    $.init();
});
