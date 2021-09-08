function openMenu(){
    let menuArea = document.querySelector('.menu-mobile-area');
    if (menuArea.style.display =='flex'){
        menuArea.style.display = 'none'
    }else{
        menuArea.style.display = 'flex'
    }
}
function closeMenu(){
    let menuAreaClose = document.querySelector('.menu-mobile-area')
    if (menuAreaClose.style.display== 'flex'){
        menuAreaClose.style.display = 'none'
    }else{
        menuAreaClose.style.display ='flex'
    }
}