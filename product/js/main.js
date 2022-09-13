(function ($) {
    "use strict";
    // Глобальные переменные
    var header = $(".site-header"),
        wrapper = $('.wrapper');
    // Анимаци загрузки
    $(window).on('load resize', function () {
        if ($(window).width() > 992) {
            preloader();
        }
    });
    function preloader(){
        wrapper.on("click", "a[href$='.html']", function (event) {
            event.preventDefault();
            var linkLocation = this.href;
            wrapper.removeClass('wrapper_ready-load');
            setTimeout(function () {
                window.location = linkLocation;
            }, 500);
        });
        setTimeout(function () {
            wrapper.addClass('wrapper_ready-load');
        }, 0);
    }
    // Инициализация слайдеров
    // Основной слайдер
    if ($(".main-slider").length) {
        $(".main-slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            fade: true,
            speed: 1500,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: '<div class="slick-prev"><svg  class="arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="#021533"/></svg></div>',
            nextArrow: '<div class="slick-next"><svg class="arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="#021533"/></svg></div>',
            dots: true
        });
    }
    // Слайдер партнеров
    if ($(".partners__list").length) {
        $(".partners__list").slick({
            slidesToShow: 6,
            slidesToScroll: 2,
            infinite: true,
            arrows: false,
            speed: 1500,
            dots: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 980,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 780,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 620,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }
    // Слайдер преимуществ
    if ($(".advantages__list").length) {
        $(".advantages__list").slick({
            slidesToShow: 5,
            slidesToScroll: 2,
            infinite: true,
            arrows: false,
            speed: 1500,
            dots: true,
            responsive: [
                {
                    breakpoint: 1270,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 920,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 720,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }
    // Слайдер сервисы ( мобильный )
    $(window).on('load resize', function () {
        if ($(".services__list").length) {
            servicesSlistInit();
        }
    });
    function servicesSlistInit() {
        const slider = $(".services__list").find(".row");
        if ($(window).width() < 992) {
            slider.not(".slick-initialized").slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                speed: 1500,
                dots: true,
                responsive: [

                    {
                        breakpoint: 640,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            });
        } else if (slider.hasClass("slick-initialized")) {
            jQuery(".services__list").find(".row").slick("unslick");
        }
    }
    //Слайдер товаров
    if ($(".products-list_carousel").length) {
        $(".products-list_carousel .row").slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            infinite: true,
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 780,
                    settings: {
                        slidesToShow: 2,
                        dots: false,
                        arrows: false
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 1,
                        fade: true,
                        dots: true,
                        arrows: false
                    }
                }
            ]
        });
    }
    // Слайдер на детальной странице продукта
    if ($(".product-slider_for").length) {
        detailSlidersInit();
    }
    function detailSlidersInit() {
        //Детальный слайдер товара большой
        $(".product-slider_for").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            fade: true,
            asNavFor: '.product-slider_nav',
            infinite: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        dots: true,
                    }
                }
            ]
        });

        //Детальный слайдер товара малый
        if ($(".product-slider_nav").find(".product-slider__item").length >= 6) {
            $(".product-slider_nav").slick({
                prevArrow: '<div class="slick-prev"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.333328 6.9987L1.50833 8.1737L6.16666 3.5237V13.6654H7.83333V3.5237L12.4833 8.18203L13.6667 6.9987L6.99999 0.332031L0.333328 6.9987Z" fill="#021533"/></svg></div>',
                nextArrow: '<div class="slick-next"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.6667 6.9987L12.4917 5.8237L7.83333 10.4737V0.332031H6.16666V10.4737L1.51666 5.81536L0.333328 6.9987L6.99999 13.6654L13.6667 6.9987Z" fill="#021533"/></svg></div>',
                slidesToShow: 6,
                arrows: false,
                dots: false,
                focusOnSelect: true,
                asNavFor: '.product-slider_for',
                infinite: true,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 5,
                        }
                    }
                ]
            });
        }
    }
    // Малая галерея банеров
    if ($(".banner-tiny__list").length) {
        $(".banner-tiny__list").slick({
            slidesToShow: 3,
            arrows: false,
            dots: true,
        });
    }
    // Инициализация табов
    if ($(".tabs-header").length) {
        tabsInit();
    }
    function tabsInit() {
        let position,
            tabsBodyItem = $(".tabs-body__item");
        $('.tabs-header').on("click", ".tabs-header__item", function () {
            position = $(this).index();
            $(this).addClass("tabs-header__item_active").siblings(".tabs-header__item").removeClass("tabs-header__item_active");
            tabsBodyItem.eq(position).addClass("tabs-body__item_active").siblings(tabsBodyItem).removeClass("tabs-body__item_active");
        });
    }
    // Активация бургер-меню
    if($(".navigation-init").length) {
        catalogInit();
    }
    function catalogInit() {
        $(".site-header").on("click", ".navigation-init", function () {
            $(".site-header").toggleClass("site-header_menu-active");
        });
        $(window).on('load resize', function () {
            if ($(window).width() > 992) {
                header.removeClass("site-header_menu-active");
            }
        });
    }
    // Открытие  Секции в Футере ( мобильная версия )
    footerCatalogInit();
    function footerCatalogInit() {
        if ($(window).width() < 580) {
            $(".footer-section").on('click', '.footer-section__title', function () {
                $(this).closest(".footer-section").toggleClass("footer-section_active").siblings(".footer-section").removeClass("footer-section_active");
            });
        }
    }
    // Инициализация Навигации
    navInit();
    function navInit() {
        $(".navigation").on('click', '.nav__init', function () {
            $(this).closest(".navigation").toggleClass("navigation_active")
        });
    }
    // Плавный скролл к якорю
    linkScroll();
    function linkScroll() {
        $('a[href^="#"]:not([href="#"])').click(function (e) {
            e.preventDefault();
            var target = $($(this).attr('href'));
            if (target.length) {
                var scrollTo = target.offset().top;
                $('body, html').animate({scrollTop: scrollTo + 'px'}, 800);
            }
        });
    }
    // Анимации при скролле страницы ( фиксированный хедер и кнопка "вверх" )
    $(window).on('load resize scroll', function () {
        if ($(window).width() > 767) {
            // Анимации при скролле страницы ( хедер и кнопка "вверх" )
            headerAimation();
            // Анимации при скролле страницы ( анимация Секция )
            sectionAnimation();
        }
    });
    function headerAimation(){
        var headerHeight = header.height();
        if ($(window).scrollTop() >= 1) {
            wrapper.addClass('wrapper_scroll');
        } else {
            wrapper.removeClass('wrapper_scroll');
        }
        if ($(window).scrollTop() >= headerHeight) {
            header.addClass('header_scroll');
        } else {
            header.removeClass('header_scroll');
        }
    }
    function sectionAnimation(){
        let h = $(window).height();
        $(".section").each(function () {
            if (($(window).scrollTop() + h) >= $(this).offset().top) {
                $(this).addClass("section_animation");
            }
        });
    }
    //Инициализация попапов
    popupInit();
    function popupInit() {
        let popupName;
        $(document).on('click', '.popup-init', function () {
            wrapper.addClass("popup-visible").find(".popup").removeClass("active");
            popupName = $(this).data("popupname");
            wrapper.find("."+ popupName + "").addClass("active");
        });
        $(document).on('click', '.popup-remove', function () {
            wrapper.removeClass("popup-visible").find(".popup").removeClass("active");
        });
    }
    //Кастомизация и валидация формы
    if ($("form").length) {
        formValidation();

        jcf.setOptions('Select', {
            wrapNative: false,
            useCustomScroll: false,
            fakeDropInBody: false
        });
        jcf.replaceAll();
    }

    function formValidation() {
        let form = $("form");
        form.submit(function () {
            if($(this).valid()) {
                return true;
            } else {
                return false;
            }
        });
        form.validate();
    }
    // Анимация карточки товара
    $(window).on('load resize', function () {
        if ($(".products-list").length && $(window).width() > 1280) {
            prodHoverAnimation();
        }
    });
    function prodHoverAnimation() {
        var productList = $(".products-list");
        productList.on("mouseenter", ".product", function () {
            $(this).addClass("product_active");
        });
        productList.on("mouseleave", ".product", function () {
            $(this).removeClass("product_active");

        });
    }
    // Яндекс Карта
    if($(".map").length){
        ymaps.ready(init);
    }
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("y-maps", {
            center: [59.899995, 30.502743],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        });
        var myCollection = new ymaps.GeoObjectCollection();
        // Добавим метку красного цвета.
        var myPlacemark = new ymaps.Placemark([59.899995, 30.502743], {
            // balloonContent: '1111'
        }, {
            preset: 'islands#icon',
            iconColor: '#ff0000'
        });
        myCollection.add(myPlacemark);
        myMap.geoObjects.add(myCollection);
        myMap.behaviors.disable('drag');
    }
    // Инициализация FancyBox
    $(".fancybox").fancybox();
    // Временные ф-и
    $(".category-sorting__display").on('click', '.sorting-display', function () {
       $(this).addClass("active").siblings(".sorting-display").removeClass("active");
    });
    $(".category-sorting__display").on('click', '.sorting-display_line', function () {
        $(".products").addClass("products_line-display").removeClass("products_block-display");
        $(".products-list").addClass("products-list_line-display").removeClass("products-list_block-display");
    });
    $(".category-sorting__display").on('click', '.sorting-display_block', function () {
        $(".products").addClass("products_block-display").removeClass("products_line-display");
        $(".products-list").addClass("products-list_block-display").removeClass("products-list_line-display");
    });
    $(window).on('load resize', function () {
        if ($(window).width() < 680) {
            $(".products-list").addClass("products-list_block-display").removeClass("products-list_line-display");
        }
    });

    // Активация модалки
    //   if($(".product-detail-modal").length) {
    //     productModal();
    //   }

        $(".product-modal__link").click(function () {
          console.log('click')
          $(".product-detail-modal").toggleClass("product-detail-modal__active");
        });

        $(".product-detail-modal__close").click(function () {
          console.log('click')
          $(".product-detail-modal").toggleClass("product-detail-modal__active");
        });


})(jQuery);
