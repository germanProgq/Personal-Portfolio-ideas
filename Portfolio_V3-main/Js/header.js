let header = document.getElementById('header');
let img = header.querySelector('.logo');

if (mobileCheck()==false) {
window.addEventListener('scroll', () => {
    let value = window.scrollY;    
    if (value!=0) { 
        header.style.backgroundColor='#2d2d2d'
        setTimeout(() => {
            img.src='Images/logo.png'                
        }, 330);    
        header.style.top=0;
        header.style.opacity=0.7;  
        header.style.borderTop=0;           
    }
    else {
        setTimeout(() => {
            img.src='Images/steady-logo.png'            
        }, 330);
        header.style.backgroundColor='#212425'
       
        header.style.borderTop='solid .3px yellow'
        header.style.top=83 + 'vh';       
    }
    
});
header.addEventListener(onmouseenter, ()=> {
    header.style.opacity=1;
    
});
}
else {
    header.style.top=0;
    header.style.borderTop=0;    
};