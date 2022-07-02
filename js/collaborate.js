const header = document.querySelector('nav')
   if(header){
       header.style.background = '#fbe4d1';
   }

const collaborate = document.querySelector('.collaborate-item')
const collaborateBox = document.querySelectorAll('.collaborate-1')
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