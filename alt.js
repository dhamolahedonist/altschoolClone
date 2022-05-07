const menuToggle = document.querySelector('.menu-btn');
const links = document.querySelector('.links');

menuToggle.addEventListener('click', function() {
    // if (links.classList.contains('show-links')) {
    //     links.classList.remove('show-links');
    // }
    // else {
    //     links.classList.add('show-links');
    // }
    links.classList.toggle('show-links');
});

const navBar = document.getElementById('nav');
window.addEventListener('scroll', function() {
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;
    if(scrollHeight > navHeight) {
        navBar.classList.add('fixed-nav');
    }
    else {
        navBar.classList.remove('fixed-nav');
    }
})


const items = document.querySelector('.container p')

