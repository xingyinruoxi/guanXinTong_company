$(function () {
    'use strict';
    /*======= 首页 =======*/
    $(document).on("pageInit", "#page-index", function (e, id, page) {
        function swiperInit(num) {
            new Swiper('.swiper-container' + num, {
                pagination: {
                    el: '.swiper-pagination' + num,
                }
            });
        }

        var $btQuestion = $('#btn-question');

        function contentTop() {
            var onOff = true;
            var $searchbar = $('.searchbar');
            var $content = $('.content');
            $('.tab-link').on('click', function () {
                var $index = $(this).index();
                if ($index === 2) {
                    if (onOff) {
                        setTimeout(function () {
                            swiperInit($index);
                        });
                        onOff = false;
                    }
                    $searchbar.hide();
                    $content.css('top', '4.4rem');
                } else {
                    $searchbar.show();
                    $content.css('top', '6.6rem');
                }

            })
        }

        function initHeight() {
            var $tabsAnimatedWrap = $('.tabs-animated-wrap');
            var scrollHeight = $('.tab').eq(0).get(0).scrollHeight;
            $tabsAnimatedWrap.height(scrollHeight);
        }

        function tabsHeight() {
            var $tabsAnimatedWrap = $('.tabs-animated-wrap');
            $(page).on('click', '.tab-link', function () {
                $tabsAnimatedWrap.height('100%');
                var $index = $(this).index();
                var scrollHeight = $('.tab').eq($index).get(0).scrollHeight;
                $tabsAnimatedWrap.height(scrollHeight);
                if ($index === 1) {
                    $btQuestion.css('display', 'flex');
                } else {
                    $btQuestion.css('display', 'none');
                }
            });
        }

        initHeight();
        tabsHeight();
        swiperInit(0);
        contentTop();


    });

    /*======= 立即报名  =======*/
    $(document).on("pageInit", "#page-enroll", function (e, id, page) {
        $('.list-entry-info').on('click', '.link-close', function () {
            $(this).closest('li').hide();
        });
        var $btnClose = $('<i class="ico ico-close"></i>');
        var $val = '';
        var $form = $('.add-form');
        $form.find('input').on('input', function () {
            $val = $(this).val();
            if ($val) {
                $(this).closest('.item-inner').append($btnClose);
            } else {
                $(this).closest('.item-inner').find('.ico').remove();
            }
        }).on('focus', function () {
            if ($(this).val()) {
                $(this).closest('.item-inner').append($btnClose);
            }
            $(this).closest('li').siblings().find('.ico-close').remove()
        });

        $form.on('click', '.ico-close', function () {
            $(this).closest('.item-inner').find('input').val('');
            $(this).remove();
        })
    });

    /*======= 报名成功 =======*/
    $(document).on("pageInit", "#page-enroll-success", function (e, id, page) {
        /*=== Popup ===*/
        var myPhotoBrowserPopup = $.photoBrowser({
            photos: [
                '//img.alicdn.com/tps/i3/TB1kt4wHVXXXXb_XVXX0HY8HXXX-1024-1024.jpeg',
            ],
            theme: 'dark',
            type: 'popup'
        });
        $(page).on('click', '.pb-popup', function () {
            myPhotoBrowserPopup.open();
        });
    });

    //page-my-questio
    /*======= 我的咨询 =======*/
    $(document).on("pageInit", "#page-my-question", function (e, id, page) {
        function initHeight() {
            var $tabsAnimatedWrap = $('.tabs-animated-wrap');
            var scrollHeight = $('.tab').eq(0).get(0).scrollHeight+45;
            $tabsAnimatedWrap.height(scrollHeight);
        }

        function tabsHeight() {
            var $tabsAnimatedWrap = $('.tabs-animated-wrap');
            $(page).on('click', '.tab-link', function () {
                $tabsAnimatedWrap.height('100%');
                var $index = $(this).index();
                var scrollHeight = $('.tab').eq($index).get(0).scrollHeight+45;
                console.log($index,scrollHeight);
                $tabsAnimatedWrap.height(scrollHeight);
            });
        }

        initHeight();
        tabsHeight();
    });
    /*======= 用户管理页面 =======*/
    $(document).on("pageInit", "#page-user-manger", function (e, id, page) {
        var $content = $(page).find('.content');
        $('.list-entry-info').on('click', '.link-close', function () {
            $(this).closest('li').hide();
        });
        $content.on('click', '.confirm-ok', function () {
            var $this = $(this);
            $.confirm('是否确认申请删除？', function () {
                $this.closest('div').remove();
            });
        });
    });
    $.init();
});
