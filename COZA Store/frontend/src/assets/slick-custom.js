// USE STRICT
"use strict";

// Utility function for adding/removing classes
function addClass(element, className) {
    element.classList.add(className);
}

function removeClass(element, className) {
    element.classList.remove(className);
}

// Slick1 Initialization
function initSlick1() {
    document.querySelectorAll('.wrap-slick1').forEach((wrapSlick1) => {
        const slick1 = wrapSlick1.querySelector('.slick1');
        const itemSlick1 = slick1.querySelectorAll('.item-slick1');
        const layerSlick1 = slick1.querySelectorAll('.layer-slick1');
        const actionSlick1 = [];

        // Initialize layers on the first slide
        slick1.addEventListener('init', () => {
            const layerCurrentItem = itemSlick1[0].querySelectorAll('.layer-slick1');

            actionSlick1.forEach((action) => clearTimeout(action));

            layerSlick1.forEach((layer) => {
                removeClass(layer, layer.dataset.appear + ' visible-true');
            });

            layerCurrentItem.forEach((layer, index) => {
                actionSlick1[index] = setTimeout(() => {
                    addClass(layer, layer.dataset.appear + ' visible-true');
                }, layer.dataset.delay);
            });
        });

        // Set up Slick1 settings
        const slickSettings = {
            pauseOnFocus: false,
            pauseOnHover: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            speed: 1000,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 6000,
            arrows: true,
            prevArrow: '<button class="arrow-slick1 prev-slick1"><i class="zmdi zmdi-caret-left"></i></button>',
            nextArrow: '<button class="arrow-slick1 next-slick1"><i class="zmdi zmdi-caret-right"></i></button>',
            dots: wrapSlick1.querySelector('.wrap-slick1-dots') !== null,
            appendDots: wrapSlick1.querySelector('.wrap-slick1-dots'),
            dotsClass: 'slick1-dots',
            customPaging: function (slick, index) {
                const linkThumb = slick.slides[index].dataset.thumb;
                const caption = slick.slides[index].dataset.caption;
                return `<img src="${linkThumb}"><span class="caption-dots-slick1">${caption}</span>`;
            },
        };

        // Initialize Slick1
        $(slick1).slick(slickSettings);

        // Handle afterChange event
        slick1.addEventListener('afterChange', (event) => {
            const currentSlide = event.detail.currentSlide;
            const layerCurrentItem = itemSlick1[currentSlide].querySelectorAll('.layer-slick1');

            actionSlick1.forEach((action) => clearTimeout(action));

            layerSlick1.forEach((layer) => {
                removeClass(layer, layer.dataset.appear + ' visible-true');
            });

            layerCurrentItem.forEach((layer, index) => {
                actionSlick1[index] = setTimeout(() => {
                    addClass(layer, layer.dataset.appear + ' visible-true');
                }, layer.dataset.delay);
            });
        });
    });
}

// Slick2 Initialization
function initSlick2() {
    document.querySelectorAll('.wrap-slick2').forEach((wrapSlick2) => {
        const slick2 = wrapSlick2.querySelector('.slick2');

        const slickSettings = {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: false,
            autoplay: false,
            autoplaySpeed: 6000,
            arrows: true,
            prevArrow: '<button class="arrow-slick2 prev-slick2"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
            nextArrow: '<button class="arrow-slick2 next-slick2"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };

        // Initialize Slick2
        $(slick2).slick(slickSettings);

        // Reinitialize on tab change
        document.querySelectorAll('a[data-toggle="tab"]').forEach((tab) => {
            tab.addEventListener('shown.bs.tab', () => {
                $(slick2).slick('reinit');
            });
        });
    });
}

// Slick3 Initialization
function initSlick3() {
    document.querySelectorAll('.wrap-slick3').forEach((wrapSlick3) => {
        const slick3 = wrapSlick3.querySelector('.slick3');

        const slickSettings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 6000,
            arrows: true,
            prevArrow: '<button class="arrow-slick3 prev-slick3"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
            nextArrow: '<button class="arrow-slick3 next-slick3"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
            dots: true,
            appendDots: wrapSlick3.querySelector('.wrap-slick3-dots'),
            dotsClass: 'slick3-dots',
            customPaging: function (slick, index) {
                const portrait = slick.slides[index].dataset.thumb;
                return `<img src="${portrait}"/><div class="slick3-dot-overlay"></div>`;
            },
        };

        // Initialize Slick3
        $(slick3).slick(slickSettings);
    });
}

// Initialize all sliders
initSlick1();
initSlick2();
initSlick3();
