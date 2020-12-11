let imagescroll=['resources/HTML5_badge.png','resources/csslogo.png','resources/javaslogo.png','resources/git-logo.png'];
let imagecount=0;
function changeimage(){
    if(imagecount!=imagescroll.length-1){
        imagecount++;
    }
    else{
        imagecount=0;
    }
 
    document.getElementById('skillimg').src=imagescroll[imagecount];

 
   

}



