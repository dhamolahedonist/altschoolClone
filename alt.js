const menuToggle = document.querySelector('.menu-btn');
const links = document.querySelector('.links');
const container = document.querySelector('.container')
const containBox = document.querySelector('.contain-box')
const box = document.querySelector('.box')
const mainContainer = document.querySelector('.main-container')

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
    if(links.classList.contains('show-links')){
        mainContainer.style.display = 'none';
    }else{
        mainContainer.style.display = 'block';
    }
    //  if(links.classList.contains('show-links')){
    //     navBar.classList.add('fixed-nav');
    // }

});





const navBar = document.getElementById('nav');
const activeClass = document.querySelector('.active')
const boxImage = document.querySelector('.box-image')
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
        activeClass.style.background = '#6a6ff5';
    }
     else {
        activeClass.style.background = '#000';
    }
  
})

// menuToggle.addEventListener('click', function(){
//     navBar.style.color = 'blue';
// })

const scrollLink = document.querySelectorAll('.scroll-link');
scrollLink.forEach(function(link) {
    link.addEventListener('click', function(e){
        e.preventDefault();


        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);

        const navHeight = navBar.getBoundingClientRect().height
        const containerHeight = links.getBoundingClientRect().height
        const fixedNav = navBar.classList.contains('fixed-nav')
        let position = element.offsetTop - navHeight;

        if(!fixedNav){
            position = position - navHeight;
        }
        window.scrollTo({
            left: 0,
            top: position,
        });

    })
})
const collaborate = document.querySelector('.collaborate-item')
const collaborateBox = document.querySelectorAll('.collaborate')
const boxItem = document.querySelectorAll('.boxes')

collaborate.addEventListener('click', function(e){
    const id = e.target.dataset.id;

    boxItem.forEach(function(content){
        content.classList.remove('active')
        e.target.classList.add('active')
    });

    collaborateBox.forEach(function(list){
        list.classList.remove('active')
    })
    const component = document.getElementById(id)
    component.classList.add('active')

  
})





const boxes = document.querySelectorAll('.boxes');
const containerItem = document.querySelectorAll('.container-item');
const about = document.querySelector('.about');

about.addEventListener('click', function(e){
    const id = e.target.dataset.id;

    // romove active from all boxes
    boxes.forEach(function(box){
        box.classList.remove('active');
        e.target.classList.add('active')
    });
    // hide other items
    containerItem.forEach(function(item){
        item.classList.remove('active')
    })
    const element = document.getElementById(id)
    element.classList.add('active')
});




