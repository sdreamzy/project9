 function slowScroll (id) {
    var offset = 0;
    $('html, body').animate ({
      scrollTop: $(id).offset ().top - offset
    }, 500);
    return false;
  }
  window.onscroll = function showHeader() {
    var header = document.querySelector('#scroll');
    if(window.pageYOffset > 270){
        header.classList.add('header_fixed');
    } else{
        header.classList.remove('header_fixed');
    }
  }
 let checkbox = document.querySelector('input[name=theme]');
checkbox.addEventListener('change',function(){
    if(this.checked){
      $("#light").css("background","#131419");
      $(".lightp").css("color","#ffffff");
      $(".lighta").css("color","#ffffff");
      $(".lighth1").css("color","#ffffff");      
      $(".message").css("color","#ffffff");
      $(".form").css("background","#131419");
      $(".form").css("box-shadow","0 0 20px 0 #ffffff3d, 0 5px 5px 0 #ffffff3d");
      $(".darkMode").css("display","none");
      $(".lightMode").css("display","block");
    }else{
      $("#light").css("background","#D5DEDC");
      $(".lightp").css("color","#000000");
      $(".lighta").css("color","#000000");
      $(".lighth1").css("color","#000000");      
      $(".message").css("color","#000000");
      $(".form").css("background","#ffffff");
      $(".form").css("box-shadow","0 0 20px 0 #00000033, 0 5px 5px 0 #0000003d");
      $(".lightMode").css("display","none");
      $(".darkMode").css("display","block");
    }
})
 $('.message a').click(function(){
          $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
      });
