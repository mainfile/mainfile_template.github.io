/******* ОТПРАВКА ФОРМЫ НА ПОЧТУ ********/
$(document).ready(function() {

  //E-mail Ajax Send
  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Спасибо! Ваша заявка принята, мы Вам позвоним.");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

});
/******* /ОТПРАВКА ФОРМЫ НА ПОЧТУ ********/

/******* МАСКА ********/
jQuery(function($){
   $(".phone").mask("+7 (999) 999-99-99");
   });
/******* /МАСКА ********/

/******* NiceScroll ********/
$(document).ready(
          function() {
              $("html").niceScroll({
                cursorcolor:"#e4460f",
                cursoropacitymin: 1,
                cursorwidth: 10 
              });
          }
      );
/******* /NiceScroll ********/