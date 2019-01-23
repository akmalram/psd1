window.addEventListener('DOMContentLoaded', function () {
    var menuList = document.getElementById('menuList');
    var toggleBtn = document.getElementById('toggleBtn');
    var headerCloseBtn = document.getElementById('headerCloseBtn');
    
    toggleBtn.addEventListener('click', function () {
        menuList.classList.toggle('active');
    });
    
    headerCloseBtn.addEventListener('click', function () {
        menuList.classList.toggle('active');         
    });
    
    
    //slider
    var comments = new Swiper ('.comments .swiper-container', {

        direction: 'horizontal',
        loop: true,
        
        pagination: {
            el: '.comments .swiper-pagination',
            dynamicBullets: true,
        },
      })
    
    //scroll
    
    document.querySelector('#headerScrollDown').addEventListener('click', function () {
        scrollDown('section');
    });
    
    
});