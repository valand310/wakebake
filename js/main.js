

document.addEventListener('click', burgerInit)

function burgerInit(e) {

    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')



    if (!burgerIcon && !burgerNavLink) return

    if (document.documentElement.clientWidth > 900) return

    if (!document.body.classList.contains('body--opened-menu')) {
        document.body.classList.add('body--opened-menu')
    }

    else {
        document.body.classList.remove('body--opened-menu')
    }


}


// ---------modal

const gift = document.querySelector('.about__img-button')
const body = document.querySelector('.body')
const cancel = document.querySelector('.modal__cancel')
const modal = document.querySelector('.modal')

const openModal = (e) => {
    e.preventDefault()
    body.classList.add('body--opened-modal')
}
const closeModal = () => {

    body.classList.remove('body--opened-modal')
}

gift.addEventListener('click', openModal)

modal.addEventListener('click', (e) => {
    e.preventDefault()
    const target = e.target
    if (target && target.classList.contains('modal') || target.classList.contains('modal__cancel') || target.classList.contains('modal__cancel-vec')) {
        closeModal()
    }
}
)

document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && body.classList.contains('body--opened-modal')) {
        closeModal()
    }
})


// ----------programm

const tabControls = document.querySelector('.tab-controls')

tabControls.addEventListener('click', toggleTab)

function toggleTab(e) {
    const tabControl = e.target.closest('.tab-controls__link')

    if (!tabControl) return
    e.preventDefault()
    if (tabControl.classList.contains('tab-controls__link--active')) return



    const tabContentId = tabControl.getAttribute('href')
    const tabContent = document.querySelector(tabContentId)
    const activeControl = document.querySelector('.tab-controls__link--active')
    const activeContent = document.querySelector('.tab-content--show')

    activeContent.classList.remove('tab-content--show')
    tabContent.classList.add('tab-content--show')

    document.querySelector('.tab-controls__link--active').classList.remove('tab-controls__link--active')
    tabControl.classList.add('tab-controls__link--active')

}

// Аккордеон

const accordionLists = document.querySelectorAll('.accordion__list');

accordionLists.forEach(el => {



    el.addEventListener('click', (e) => {

        const accordionList = e.currentTarget
        const accordionOpenedItem = accordionList.querySelector('.accordion__list-item--opened')
        const accordionOpenedContent = accordionList.querySelector('.accordion__list-item--opened .accordion-list__content')

        const accordionControl = e.target.closest('.accordion__list-control')

        if (!accordionControl) return

        const accordionItem = accordionControl.parentElement

        const accordionContent = accordionControl.nextElementSibling

        if (accordionOpenedItem && accordionOpenedItem != accordionItem) {

            accordionOpenedItem.classList.remove('accordion__list-item--opened')

            accordionOpenedContent.style.maxHeight = null

        }

        accordionItem.classList.toggle('accordion__list-item--opened')

        if (accordionItem.classList.contains('accordion__list-item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'


        }
        else {
            accordionContent.style.maxHeight = null;
        }

    })
});

// slider-gallery

const swiper = new Swiper('.gallery__slider', {
    
    spaceBetween: 30,
    slidesPerView: 4,

    
    pagination: {
        el: '.gallery__pagination',
        type: 'fraction',
    },

    
    navigation: {
        nextEl: '.gallery__next',
        prevEl: '.gallery__prev',
    },

    
});










