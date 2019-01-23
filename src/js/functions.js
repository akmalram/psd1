function scrollDown(scrollTo) {
    window.scroll({
        top: document.querySelector('section').offsetTop,
        left: 0,
        behavior: 'smooth'
    });
}
function scrollTo(scrollTo) {
    document.querySelector(scrollTo).scroll({
        behavior: 'smooth'
    });
}