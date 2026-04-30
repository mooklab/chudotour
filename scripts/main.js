import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs'
import { phoneMask } from "./phone.js"
import { Tabs } from "./tabs.js"
import { Quantity } from './quantity.js'
import { Accordion } from './accordion.js'


// Селекторы
const phoneInputs = document.querySelectorAll('input[type=tel]')
const tabsSections = document.querySelectorAll('div.tabs')
const mainSwiperThumbs = document.querySelector('section.main div.swiper.captions')
const mainSwiper = document.querySelector('section.main div.swiper.contents')
const categorySwiperLeft = document.querySelector('section.tours div.swiper.left')
const categorySwiperRight = document.querySelector('section.tours div.swiper.right')
const hotTourSwiper = document.querySelector('section.hot div.swiper.hot')
const toursSwiper = document.querySelector('section.tours div.swiper.tours')
const quantities = document.querySelectorAll('div.quantity')
const tourists = document.querySelectorAll('fieldset.tourists')
const reviewSwiper = document.querySelector('section.reviews div.swiper.reviews')
const indexBlogSwiper = document.querySelector('section.blog div.swiper.index_blog')
const partnersSwiper = document.querySelector('section.partners div.swiper.partners')
const hotel_cards = document.querySelectorAll('div.hotel_card div.swiper')
const room_cards = document.querySelectorAll('div.room_card div.swiper')
const aboutSwiperAdvantages = document.querySelector('div.swiper.about_advantages')
const teamSwiper = document.querySelector('section.team div.swiper.about_team')
const blogMainTextsSwiper = document.querySelector('section.main div.swiper.blog_main_texts')
const blogMainImagesSwiper = document.querySelector('section.main div.swiper.blog_main_images')
const articleArticlesSwiper = document.querySelector('section.articles div.swiper.article_articles')
const singleUpcomimgMonthSwiper = document.querySelector('section.upcoming div.swiper.month')
const singleUpcomimgScheduleSwiper = document.querySelector('section.upcoming div.swiper.schedule')
const programAccordions = document.querySelectorAll('div.program_accordion')
const questionAccordions = document.querySelectorAll('div.question_accordion')
const singleTourlistSwiper = document.querySelector('section.tourlist div.swiper.tours')
const singleHotellistSwiper = document.querySelector('section.hotellist div.swiper.hotels')
const airCardAccordions = document.querySelectorAll('div.air_card div.more_details, div.air_card_choosen div.more_details')
const airplanesAirheadFromSwiper = document.querySelector('section.airhead div.swiper.airdatesfrom')
const airplanesAirticketsFromSwiper = document.querySelector('section.airlist div.swiper.airticketsfrom')
const airplanesAirheadToSwiper = document.querySelector('section.airhead div.swiper.airdatesto')
const airplanesAirticketsToSwiper = document.querySelector('section.airlist div.swiper.airticketsto')
const categoryDatesDaysSwipers = document.querySelectorAll('section.main div.dates div.days div.swiper')
const lightboxImages = document.querySelectorAll('[lightbox]')
const dragdrops = document.querySelectorAll('.dragdrop')
const fieldsetsSelect = document.querySelectorAll('fieldset.select')

const places = document.querySelectorAll('div.scheme div.place')
const select_labels = document.querySelectorAll('fieldset.select label')


// Слайдеры
mainSwiperThumbs && new Swiper(mainSwiperThumbs, {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 5,
    pagination: {
        el: mainSwiperThumbs.querySelector('div.swiper-pagination')
    },
    breakpoints: {
        640: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 10,
        },
        960: {
            slidesPerView: 6,
            slidesPerGroup: 6,
            spaceBetween: 10,
        }
    },
    on: {
        init: function () {
            this.el.classList.add('show')
        }
    }
})

mainSwiper && new Swiper(mainSwiper, {
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    slidesPerView: 1,
    allowTouchMove: false,
    autoHeight: true,
    thumbs: {
        swiper: mainSwiperThumbs
    },
    on: {
        init: function () {
            this.el.classList.add('show')
        }
    }
})

categorySwiperLeft && new Swiper(categorySwiperLeft, {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    speed: 5000,
    allowTouchMove: false,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: false,
    },
    breakpoints: {
        960: {
            spceBetween: 20
        }
    },
    on: {
        init: function () {
            this.el.classList.add('show')
        }
    }
})

categorySwiperRight && new Swiper(categorySwiperRight, {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    speed: 5000,
    allowTouchMove: false,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
    },
    breakpoints: {
        960: {
            spceBetween: 20
        }
    },
    on: {
        init: function () {
            this.el.classList.add('show')
        }
    }
})

toursSwiper && new Swiper(toursSwiper, {
    slidesPerView: 1.1,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    navigation: {
        prevEl: toursSwiper.querySelector('div.swiper-navigation div.arrow:first-child'),
        nextEl: toursSwiper.querySelector('div.swiper-navigation div.arrow:last-child')
    },
    breakpoints: {
        960: {
            slidesPerView: 2,
            centeredSlides: false,
        },
        1280: {
            slidesPerView: 3,
            centeredSlides: false,
        },
        1600: {
            slidesPerView: 4,
            centeredSlides: false,
        }
    },
    on: {
        init: function () {
            this.el.classList.add('show')
        }
    }
})

hotTourSwiper && new Swiper(hotTourSwiper, {
    effect: "creative",
    slidesPerView: 1,
    creativeEffect: {
        limitProgress: 2,
        prev: {
            translate: [0, -200, -400],
            shadow: false,
            opacity: 0,
            scale: 0.9,
            origin: 'center center'
        },
        next: {
            translate: [0, 12, 0],
            shadow: false,
            scale: 0.9,
            origin: 'center center'
        }
    },
    speed: 1000,
    direction: 'vertical',
    // autoplay: {
    //     delay: 3000
    // },
    allowSlideNext: true,
    allowSlidePrev: false,
    // allowTouchMove: false,
    centeredSlides: true,
    loop: true,
    breakpoints: {
        1600: {
            creativeEffect: {
                limitProgress: 2,
                prev: {
                    translate: [0, -200, -400],
                    shadow: false,
                    opacity: 0,
                    scale: 0.9,
                    origin: 'center center'
                },
                next: {
                    translate: [0, 20, 0],
                    shadow: false,
                    scale: 0.9,
                    origin: 'center center'
                }
            },
        }
    },
    on: {
        init: function () {
            this.el.classList.add('show')
        },
        slideChange: function () {
            const slides = this.slides;
            const activeIndex = this.activeIndex;

            slides.forEach((slide, index) => {
                const distance = Math.abs(index - activeIndex);
                if (index == activeIndex + 1) slide.style.background = '#C5D5FD'
                if (index == activeIndex + 2) slide.style.background = '#83A4FA'
                if (index == activeIndex - 1) slide.style.background = 'transparent'
                if (index == activeIndex - 2) slide.style.background = 'transparent'
            })
        }
    }
})

reviewSwiper && new Swiper(reviewSwiper, {
    spaceBetween: 20,
    navigation: {
        prevEl: reviewSwiper.querySelector('div.swiper-navigation div.arrow:first-child'),
        nextEl: reviewSwiper.querySelector('div.swiper-navigation div.arrow:last-child')
    },
    on: {
        init: function () {
            this.el.classList.add('show')
        }
    }
})

indexBlogSwiper && new Swiper(indexBlogSwiper, {
    slidesPerView: 1.1,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    navigation: {
        prevEl: indexBlogSwiper.querySelector('div.swiper-navigation div.arrow:first-child'),
        nextEl: indexBlogSwiper.querySelector('div.swiper-navigation div.arrow:last-child')
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        960: {
            slidesPerView: 2,
            spaceBetween: 10,
            centeredSlides: false,
            loop: false,
        },
        1280: {
            slidesPerView: 'auto',
            spaceBetween: 20,
            centeredSlides: false,
            loop: false,
        }
    },
    on: {
        init: function () {
            this.el.classList.add('show')
        }
    }
})

partnersSwiper && new Swiper(partnersSwiper, {
    slidesPerView: 2,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    navigation: {
        prevEl: partnersSwiper.querySelector('div.swiper-navigation div.arrow:first-child'),
        nextEl: partnersSwiper.querySelector('div.swiper-navigation div.arrow:last-child')
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            centeredSlides: false,
        },
        960: {
            slidesPerView: 3,
            centeredSlides: false,
        },
        1280: {
            slidesPerView: 4,
            centeredSlides: false,
        },
        1600: {
            slidesPerView: 5,
            centeredSlides: false,
        }
    },
    on: {
        init: function () {
            this.el.classList.add('show')
        }
    }
})

teamSwiper && new Swiper(teamSwiper, {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
        el: teamSwiper.querySelector('div.swiper-pagination')
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        960: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1600: {
            slidesPerView: 5,
            spaceBetween: 25,
        }
    },
    on: {
        init: function () {
            this.el.classList.add('show')
        }
    }
})

blogMainTextsSwiper && new Swiper(blogMainTextsSwiper, {
    slidesPerView: 1,
    thumbs: {
        swiper: blogMainImagesSwiper
    },
    pagination: {
        el: blogMainTextsSwiper.querySelector('div.swiper-pagination')
    },
    on: {
        init: function () {
            this.el.classList.add('show')
        }
    }
})

blogMainImagesSwiper && new Swiper(blogMainImagesSwiper, {
    slidesPerView: 1,
    on: {
        init: function () {
            this.el.classList.add('show')
        }
    }
})

hotel_cards.forEach(hotel_card => {
    new Swiper(hotel_card, {
        pagination: {
            el: hotel_card.querySelector('div.swiper-pagination')
        },
        on: {
            init: function () {
                this.el.classList.add('show')
            }
        }
    })
})

room_cards.forEach(room_card => {
    new Swiper(room_card, {
        pagination: {
            el: room_card.querySelector('div.swiper-pagination')
        },
        on: {
            init: function () {
                this.el.classList.add('show')
            }
        }
    })
})

aboutSwiperAdvantages && new Swiper(aboutSwiperAdvantages, {
    slidesPerView: 1,
    navigation: {
        prevEl: aboutSwiperAdvantages.querySelector('div.swiper-navigation div.arrow:first-child'),
        nextEl: aboutSwiperAdvantages.querySelector('div.swiper-navigation div.arrow:last-child')
    },
    on: {
        init: function () {
            this.el.classList.add('show')
        },
        slideChange: function () {
            const currentIndex = this.activeIndex
            const totalSlides = this.slides.length
            const currentElement = aboutSwiperAdvantages.querySelector('div.swiper-count span.current')
            const totalElement = aboutSwiperAdvantages.querySelector('div.swiper-count span.total')
            currentElement.textContent = currentIndex + 1
            totalElement.textContent = totalSlides
        }
    }
})

articleArticlesSwiper && new Swiper(articleArticlesSwiper, {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: articleArticlesSwiper.querySelector('div.swiper-pagination')
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 30,
        }
    },
    on: {
        init: function () {
            this.el.classList.add('show')
        }
    }
})

singleUpcomimgMonthSwiper && new Swiper(singleUpcomimgMonthSwiper, {
    slidesPerView: 'auto',
    spaceBetween: 20,
    on: {
        init: function () {
            this.el.classList.add('show')
        }
    }
})

singleUpcomimgScheduleSwiper && new Swiper(singleUpcomimgScheduleSwiper, {
    on: {
        init: function () {
            this.el.classList.add('show')
        }
    },
    thumbs: {
        swiper: singleUpcomimgMonthSwiper
    },
})

singleTourlistSwiper && new Swiper(singleTourlistSwiper, {
    slidesPerView: 1.1,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    breakpoints: {
        960: {
            slidesPerView: 2,
            centeredSlides: false,
        },
        1280: {
            slidesPerView: 3,
            centeredSlides: false,
        },
        1600: {
            slidesPerView: 4,
            centeredSlides: false,
        }
    },
    on: {
        init: function () {
            this.el.classList.add('show')
        }
    }
})

singleHotellistSwiper && new Swiper(singleHotellistSwiper, {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: singleHotellistSwiper.querySelector('div.swiper-pagination')
    },
    breakpoints: {
        960: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1600: {
            slidesPerView: 4,
            spaceBetween: 20,
        }
    },
    on: {
        init: function () {
            this.el.classList.add('show')
        }
    }
})

airplanesAirheadFromSwiper && new Swiper(airplanesAirheadFromSwiper, {
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
        prevEl: airplanesAirheadFromSwiper.parentNode.querySelector('div.swiper-navigation div.arrow:first-child'),
        nextEl: airplanesAirheadFromSwiper.parentNode.querySelector('div.swiper-navigation div.arrow:last-child')
    },
    breakpoints: {
        640: {
            slidesPerView: 'auto',
            spaceBetween: 10
        },
        960: {
            slidesPerView: 6,
            spaceBetween: 10
        },
        1600: {
            slidesPerView: 8,
            spaceBetween: 10
        },
        1920: {
            slidesPerView: 10,
            spaceBetween: 20
        },
    },
    on: {
        init: function () {
            this.el.classList.add('show')
        }
    }
})

airplanesAirticketsFromSwiper && new Swiper(airplanesAirticketsFromSwiper, {
    allowTouchMove: false,
    thumbs: {
        swiper: airplanesAirheadFromSwiper
    },
    on: {
        init: function () {
            this.el.classList.add('show')
        }
    }
})

airplanesAirheadToSwiper && new Swiper(airplanesAirheadToSwiper, {
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
        prevEl: airplanesAirheadFromSwiper.parentNode.querySelector('div.swiper-navigation div.arrow:first-child'),
        nextEl: airplanesAirheadFromSwiper.parentNode.querySelector('div.swiper-navigation div.arrow:last-child')
    },
    breakpoints: {
        640: {
            slidesPerView: 'auto',
            spaceBetween: 10
        },
        960: {
            slidesPerView: 6,
            spaceBetween: 10
        },
        1600: {
            slidesPerView: 8,
            spaceBetween: 10
        },
        1920: {
            slidesPerView: 10,
            spaceBetween: 20
        },
    },
    on: {
        init: function () {
            this.el.classList.add('show')
        }
    }
})

airplanesAirticketsToSwiper && new Swiper(airplanesAirticketsToSwiper, {
    allowTouchMove: false,
    thumbs: {
        swiper: airplanesAirheadToSwiper
    },
    on: {
        init: function () {
            this.el.classList.add('show')
        }
    }
})

categoryDatesDaysSwipers.forEach(swiper => {
    new Swiper(swiper, {
        slidesPerView: 'auto',
        freeMode: true,
        navigation: {
            prevEl: swiper.parentNode.querySelector('div.swiper-navigation div.arrow:first-child'),
            nextEl: swiper.parentNode.querySelector('div.swiper-navigation div.arrow:last-child')
        },
        scrollbar: {
            el: swiper.parentNode.querySelector('div.swiper-scrollbar'),
            draggable: true,
        },
        on: {
            init: function () {
                this.el.classList.add('show')
            },
            click: function () {
                this.slides.forEach(slide => {
                    slide.classList.remove('clicked');
                })
                this.clickedSlide.classList.add('clicked')
            }
        }
    })
})



// Правка инпута
window.changeEditabilitySelect = (element, editable) => {
    const form = element.closest('form')
    if (editable == 'edit') {
        form.classList.remove('disabled')
    } else if (editable == 'save') {
        form.classList.add('disabled')
    } else {
        form.classList.add('disabled')
        form.reset()
    }
}

// Сверка полей паролей
window.passwordChange = () => {
    const password = document.querySelector('input[name=password]')
    const confirm = document.querySelector('input[name=confirm]')
    if (confirm.value === password.value) {
        confirm.setCustomValidity('')
    } else {
        confirm.setCustomValidity('Пароль не совпадает')
    }
}

// Сворачивание / Разворачивание таблиц
window.tableAccordion = (button) => {
    button.previousElementSibling.classList.toggle('short')
    button.classList.toggle('short')
}

// Скрыть / Показать пароль
window.showPassword = (element) => {
    element.classList.toggle('active')
    element.previousElementSibling.type == 'password' ? element.previousElementSibling.type = 'text' : element.previousElementSibling.type = 'password'
}

// Переключатель Эконом / Бизнес
window.showAirTickets = (element, show) => {
    const airlist = element.closest('section').nextElementSibling
    show ? airlist.classList.add('bussiness') : airlist.classList.remove('bussiness')
}

// Количество
quantities.forEach(quantity => {
    const input = quantity.querySelector('input')
    const minus = quantity.querySelector('div.minus')
    const plus = quantity.querySelector('div.plus')
    new Quantity(input, minus, plus)
})

// Маска телефона
phoneInputs.forEach(phoneInput => {
    ['input', 'blur', 'focus'].forEach(event => {
        phoneInput.addEventListener(event, phoneMask)
    })
})

// Табы
tabsSections.forEach(tabSection => {
    const captions = tabSection.querySelectorAll('.tab_caption')
    const contents = tabSection.querySelectorAll('.tab_content')
    new Tabs(tabSection, captions, contents)
})

// Кастомный селект
tourists.forEach(tourist => {
    const buttons = tourist.querySelectorAll('div.minus, div.plus')
    const inputs = tourist.querySelectorAll('input')
    const total = tourist.querySelector('span')

    buttons.forEach(button => {
        button.addEventListener('click', event => setContent())
    })

    inputs.forEach(input => {
        input.addEventListener('change', event => setContent())
    })

    function setContent() {
        const parentsString = 'Взрослых-' + inputs[0].value
        const childString = inputs[1].value > 0 ? ', Детей-' + inputs[1].value : ''
        total.textContent = parentsString + childString
        total.classList.add('chosen')
    }
})

// Аккордионы
programAccordions.forEach(accordion => {
    const button = accordion.querySelector('div.caption')
    const content = accordion.querySelector('div.content')
    new Accordion(accordion, button, content, 300)
})

// Аккордионы
questionAccordions.forEach(accordion => {
    const button = accordion.querySelector('div.caption')
    const content = accordion.querySelector('div.content')
    new Accordion(accordion, button, content, 300)
})

// Аккордионы
airCardAccordions.forEach(accordion => {
    const button = accordion.querySelector('div.more_caption')
    const content = accordion.querySelector('div.more_content')
    new Accordion(accordion, button, content, 300)
})

// Лайтбокс
lightboxImages.forEach(lightboxImage => {
    lightboxImage.addEventListener('click', event => {



        let groupImages
        const lightbox = document.querySelector('dialog[data-modal-name=lightbox]')
        const thumbs = lightbox.querySelector('div.thumbs')
        const images = lightbox.querySelector('div.images')
        const group = lightboxImage.getAttribute('lightbox')
        const wrappers = document.querySelectorAll('dialog[data-modal-name=lightbox] div.swiper-wrapper')

        wrappers.forEach(wrapper => {
            wrapper.innerHTML = ''
        })

        const oldImageSwiper = document.querySelector('dialog[data-modal-name=lightbox] div.images div.swiper').swiper
        const oldThumbSwiper = document.querySelector('dialog[data-modal-name=lightbox] div.thumbs div.swiper').swiper

        oldImageSwiper && oldImageSwiper.destroy(true, true)
        oldThumbSwiper && oldThumbSwiper.destroy(true, true)

        // Если изображения группированы, выбираем изображения только из группы
        group ? groupImages = document.querySelectorAll('[lightbox=' + group + ']') : groupImages = lightboxImages

        // Создаем диалоговое окно
        createDialog('lightbox')
        const index = Array.from(groupImages).indexOf(event.target)

        // Добавляем слайды
        groupImages.forEach(groupImage => {
            thumbs.querySelector('div.swiper-wrapper').append(createSlide(groupImage))
            images.querySelector('div.swiper-wrapper').append(createSlide(groupImage))
        })

        // Создаем слайдер
        const thumbsSwiper = new Swiper(thumbs.querySelector('div.swiper'), {
            slidesPerView: 'auto',
            spaceBetween: 10,
            // freeMode: true,
            // centeredSlides: true,
            on: {
                init: function () {
                    this.el.classList.add('show')
                }
            }
        })

        // Создаем слайдер
        const imagesSwiper = new Swiper(images.querySelector('div.swiper'), {
            slidesPerView: 1,
            navigation: {
                prevEl: 'dialog[data-modal-name=lightbox] div.swiper-navigation > *:first-child',
                nextEl: 'dialog[data-modal-name=lightbox] div.swiper-navigation > *:last-child',
            },
            thumbs: {
                swiper: thumbsSwiper
            },
            on: {
                init: function () {
                    this.el.classList.add('show')
                }
            }
        })

        imagesSwiper.slideTo(index)

    })
})

// Доп функционал для селекта
fieldsetsSelect.forEach(select => {
    select.addEventListener('mousedown', event => {
        select == document.activeElement && setTimeout(function () { select.blur() }, 100)
    })
})

//Драг & Дроп скролл
dragdrops.forEach(element => {
    let isDown = false
    let startX
    let scrollLeft

    element.addEventListener('mousedown', (e) => {
        isDown = true
        element.style.cursor = 'grabbing'
        startX = e.pageX - element.offsetLeft
        scrollLeft = element.scrollLeft
    })

    element.addEventListener('mouseleave', () => {
        isDown = false
        element.style.cursor = 'grab'
    })

    element.addEventListener('mouseup', () => {
        isDown = false
        element.style.cursor = 'grab'
    })

    element.addEventListener('mousemove', (e) => {
        if (!isDown) return
        e.preventDefault()
        const x = e.pageX - element.offsetLeft
        const walk = (x - startX) * 1 // Скорость скролла
        element.scrollLeft = scrollLeft - walk
    })
})

// Ресайз инпута по контенту
const resizeInputs = () => {
    document.querySelectorAll('form.disabled div.hidden').forEach(element => {
        element.nextElementSibling.style.width = element.clientWidth + 20 + 'px'
    })
    document.querySelectorAll('form.disabled div.hidden + input').forEach(element => {
        element.addEventListener('input', event => {
            const hidden = element.previousElementSibling
            hidden.textContent = element.value
            element.style.width = hidden.clientWidth + 20 + 'px'
        })
    })
}

// Создаем блочный элемент и вставляем в него изображение
const createSlide = element => {
    let slide = document.createElement('div')
    slide.classList.add('swiper-slide')

    let image = document.createElement('img')
    image.src = element.src

    slide.append(image)
    return slide
}

// Яндекс карта
if (typeof ymaps !== 'undefined') {
    ymaps.ready(function () {
        map = new ymaps.Map('map', {
            controls: ["zoomControl"],
            center: [56.325549, 43.958205],
            zoom: 16,
        })
        var placemark = new ymaps.Placemark([56.325549, 43.958205], { hintContent: 'Чудесный отдых' }, {
            // iconLayout: 'default#image',
            // iconImageHref: 'images/svg/evigi_pin.svg',
            // iconImageSize: [125, 75],
            // iconImageOffset: [-35, -50]
        })
        map.geoObjects.add(placemark)
        map.behaviors.disable('scrollZoom')
    })
}

resizeInputs()

places.forEach(place => {
    place.addEventListener('click', event => {
        place.classList.toggle('active')
    })
})

document.querySelectorAll('input[type=date').forEach(input => {
    input.min = new Date().toISOString().split('T')[0]
})

select_labels.forEach(label => {
    label.addEventListener('click', event => {
        setTimeout(() => {
            document.querySelector('form').focus()
        }, 100)
    })
})