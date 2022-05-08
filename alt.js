const menuToggle = document.querySelector('.menu-btn');
const links = document.querySelector('.links');
const container = document.querySelector('.container')
const containBox = document.querySelector('.contain-box')
const box = document.querySelector('.box')
menuToggle.addEventListener('click', function() {
    // if (links.classList.contains('show-links')) {
    //     links.classList.remove('show-links');
    // }
    // else {
    //     links.classList.add('show-links');
    // }
    links.classList.toggle('show-links');
    if(links.classList.contains('show-links')){
        container.style.display = 'none';
    }else{
        container.style.display = 'block';
    }
    if(links.classList.contains('show-links')){
        containBox.style.display = 'none';
    }else{
        containBox.style.display = 'block';
    }
    if(links.classList.contains('show-links')){
        box.style.display = 'none';
    }else{
        box.style.display = 'block';
    }

});



const navBar = document.getElementById('nav');
const activeClass = document.querySelector('.active')
window.addEventListener('scroll', function() {
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;
    if(scrollHeight > navHeight) {
        navBar.classList.add('fixed-nav');
    }
    else {
        navBar.classList.remove('fixed-nav');
    }
    if(scrollHeight > navHeight) {
        activeClass.style.background = 'Blue';
    }
     else {
        activeClass.style.background = '#000';
    }
})

menuToggle.addEventListener('click', function(){
    navBar.style.color = 'blue';
    console.log(navBar)
})


