document.addEventListener('DOMContentLoaded', function() {
    var main = document.querySelector('.main');
    var nav = document.querySelector('.nav');


    window.onscroll = function () {
        if (window.pageYOffset > (main.offsetHeight - nav.offsetHeight)) {
            nav.classList.remove('bottom-nav');
            nav.classList.add('top-nav');
            nav.style.backgroundColor = '#aa3c0c';
            nav.style.padding = '0px 0px 0px 0px';
        } else {
            nav.classList.add('bottom-nav');
            nav.classList.remove('top-nav');
            nav.style.backgroundColor = '';
            nav.style.padding = '0px 0px 30px 0px';
        }
    }
});
