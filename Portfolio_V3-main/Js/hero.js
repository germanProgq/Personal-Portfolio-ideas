let load = document.getElementById('starter');
let start_button = document.querySelector('.start-btn');
let page_content = document.getElementById('page-content');


function stopLoad () {
    window.scroll(0,0);
    load.style.display='none';
    page_content.style.display ='contents';
}

window.addEventListener('load', function () { 
  page_content.style.display='none';   
    if(performance.navigation.type == 1) {
      stopLoad();     
    } 
  });


