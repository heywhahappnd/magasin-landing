const cache = {
    $header: document.querySelector('.header'),
    $stickytile: document.querySelector('.product_tile.m-sticky')
}

function initializeHeaderHeight() {
    const headerHeight = cache.$header.offsetHeight;

    document.documentElement.style.setProperty('--header-height', headerHeight + 'px');
}

function isDesktop() {
    const userAgent = navigator.userAgent;

    return window.innerWidth > 1024 && !/Mobi|Android|Tablet|iPad/i.test(userAgent);
}

function initializeEvents() {
    if (isDesktop) {
        initializeHeaderHeight();
    }
}

initializeEvents();