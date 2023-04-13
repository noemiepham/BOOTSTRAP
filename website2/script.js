/*  $(function(){
     $('.lentren').click(function(){
          $('body').animate({scrollTop:0});
          return false;
     })
 }) */
 document.addEventListener('DOMContentLoaded', function(){

     document.getElementById('lentren').onclick = function(){
        //  console.log('hello');
          
          document.getElementsByTagName('body').scrollTop = 0;
     }
 }, false);
 