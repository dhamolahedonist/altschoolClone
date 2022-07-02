const boxes = document.querySelectorAll('.boxes');
const containerItem = document.querySelectorAll('.container-item');
const about = document.querySelector('.about');

about.addEventListener('click', function(e){
    const id = e.target.dataset.id;

    // romove active from all boxes
    boxes.forEach(function(box){
        box.classList.remove('active');
    });

    e.target.classList.add('active')
    // hide other items
    containerItem.forEach(function(item){
        item.classList.remove('active')
    })
    const element = document.getElementById(id)
    element.classList.add('active')
});