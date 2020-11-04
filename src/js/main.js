const App = {
    SetBackground: () => {
        $('[setBackground]').each(function() {
            var background = $(this).attr('setBackground')
            $(this).css({
                "background-image": "url(" + background + ")",
                "background-size": "cover",
                "background-position": "center center"
            })
        })
        $('[setBackgroundRepeat]').each(function() {
            var background = $(this).attr('setBackgroundRepeat')
            $(this).css({
                "background-image": "url(" + background + ")",
                "background-repeat": "repeat"
            })
        })
    },
    EqualHeightElement: el => {
        let height = 0;
        let thisHeight = 0;
        $(el).each(function() {
            thisHeight = $(this).height();
            if (thisHeight > height) {
                height = thisHeight;
            }
        });
        $(el).height(height)
    },
    InitLazyLoad: () => {
        return new LazyLoad({
            elements_selector: ".lazy"
        });
    }
}

function MobileMapping() {
    let NavigationWrapper = new MappingListener({
        selector: 'header .main-list-wrapper',
        mobileWrapper: 'header .toggle-wrapper>ul',
        mobileMethod: 'prependTo',
        desktopWrapper: 'header .toggle-wrapper',
        desktopMethod: 'insertAfter',
        breakpoint: 1025,
    }).watch()
}

function MobileToggleDropdown() {
    $('header .toggle-wrapper ul li.has-drop').on('click', function() {
        $(this).find('ul').slideToggle()
    })
}

function MobileToggleNavigation() {
    $('header .backdrop-wrapper').on('click', function() {
        $('header .backdrop-wrapper').removeClass('active')
        $('header .search-wrapper').removeClass('active')
        $('header .toggle-wrapper>ul').removeClass('active')
    })
    $('header .toggle-wrapper em').on('click', function() {
        $('header .backdrop-wrapper').toggleClass('active')
        $(this).siblings('ul').toggleClass('active')
    })
}

function MobileToggleSearchBox() {
    $('header .search-icon').on('click', function() {
        $(this).toggleClass('active')
        if ($('header .toggle-wrapper>ul.active').length)
            $('header .toggle-wrapper em').trigger('click')
        $('header .backdrop-wrapper').toggleClass('active')
        $('header .search-wrapper').toggleClass('active')
    })
}

function InitSlider() {
    let HomeBanner = new Swiper('.home-banner .swiper-container', {
        slidesPerview: 1,
        speed: 1000,
        autoplay: {
            delay: 4000
        },
        pagination: {
            el: '.home-banner .swiper-pagination',
            clickable: true
        }
    })
    let PageBanner = new Swiper('.main-banner .swiper-container', {
        slidesPerview: 1,
        speed: 1000,
        autoplay: {
            delay: 4000
        }
    })
}

function RateActive() {
    $('.rate').each(function() {
        let e = $(this).attr('data-rate')
        $(this).find(`em:lt(${e})`).addClass('active')
    })
}

function BackToTop() {
    $('#backToTop').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    })
}

function ProductFilter() {
    $('.product-list .product-filter-button').on('click', function() {
        $('.product-list .product-filter-wrapper').addClass('active')
    })
    $('.product-list .product-filter-close').on('click', function() {
        $('.product-list .product-filter-wrapper').removeClass('active')
    })
    $('.product-list .product-list-wrapper .heading-wrapper .product-display a').on('click', function() {
        let e = $(this).attr('display')
        $('.product-list .product-list-wrapper .heading-wrapper .product-display a').removeClass('active')
        $(this).addClass('active')
        if (e == 2)
            $('.product-item').parent().addClass('active')
        else
            $('.product-item').parent().removeClass('active')

    })
}

function ProductDetailSlider() {
    let ImageThumb = new Swiper('.product-detail .image-thumb .swiper-container', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true
    });
    var ImageTop = new Swiper('.product-detail .image-top .swiper-container', {
        spaceBetween: 10,
        thumbs: {
            swiper: ImageThumb
        },
        navigation: {
            nextEl: '.product-detail .image-thumb .swiper-next',
            prevEl: '.product-detail .image-thumb .swiper-prev',
        }
    });
    var ViewedProduct = new Swiper('.product-detail .viewed-products-wrapper .swiper-container', {
        slidesPerView: 6,
        speed: 1000,
        spaceBetween: 30,
        navigation: {
            nextEl: '.product-detail .viewed-products-wrapper .swiper-next',
            prevEl: '.product-detail .viewed-products-wrapper .swiper-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1025: {
                slidesPerView: 3
            },
            1430: {
                slidesPerView: 4
            },


        }
    })
    var ProductReviews = new Swiper('.product-detail .product-reviews-wrapper .swiper-container', {
        slidesPerView: 5,
        speed: 1000,
        spaceBetween: 30,
        navigation: {
            nextEl: '.product-detail .product-reviews-wrapper .swiper-next',
            prevEl: '.product-detail .product-reviews-wrapper .swiper-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1025: {
                slidesPerView: 3
            },
            1430: {
                slidesPerView: 4
            },


        }
    })
    var RelatedProducts = new Swiper('.related-products-wrapper .swiper-container', {
        slidesPerView: 6,
        speed: 1000,
        spaceBetween: 30,
        navigation: {
            nextEl: '.related-products-wrapper .swiper-next',
            prevEl: '.related-products-wrapper .swiper-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1025: {
                slidesPerView: 3
            },
            1430: {
                slidesPerView: 4
            },


        }
    })
}
$(document).ready(function() {
    App.SetBackground()
    App.InitLazyLoad()
    MobileMapping()
    MobileToggleDropdown()
    MobileToggleNavigation()
    MobileToggleSearchBox()
    InitSlider()
    RateActive()
    BackToTop()
    ProductFilter()
    ProductDetailSlider()
})