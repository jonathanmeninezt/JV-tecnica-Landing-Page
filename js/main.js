//*********Abrir e fechar icone do menu-mobile********/

var menuBar = document.querySelector('.menu-mobile i');

menuBar.addEventListener('click',()=>{
    
    let menuMobile = document.querySelector('.menu-mobile ul');

    if(menuMobile.classList.contains('show-menu')){
        menuMobile.classList.remove('show-menu');
    }else{
    menuMobile.classList.add('show-menu');
    }
})

//*******************************************//



