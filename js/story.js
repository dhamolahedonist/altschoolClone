const header = document.querySelector('nav')
   if(header){
       header.style.background = '#000';
   }
colorLinks("#FFF");

function colorLinks(hex)
{
    let links = document.getElementsByTagName("a");
    for(let i=0;i<links.length;i++)
    {
        if(links[i].href)
        {
            links[i].style.color = hex;  
        }
    }  
}

const activeContainer = document.querySelector('.active')
if (activeContainer) {
    activeContainer.style.background = '#6a6ff5';
}

// const menuToggle = document.querySelector('.menu-btn');
// if(menuToggle) {
//     menuToggle.style.color = '#fff';
// }

