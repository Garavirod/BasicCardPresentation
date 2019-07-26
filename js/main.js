$(document).ready(function(){

  var banner = {
    padre: $('#banner'),
    numeroSlides: $('#banner').children('.slide').length, //Accedemos alos hijos del banner que tiene la clase slide
    posicion: 1
  };


 var info = {
    padre: $('#info'),
    numeroSlides: $('#info').children('.slide').length, //Accedemos alos hijos del banner que tiene la clase slide
    posicion: 1
  };

  // console.log(banner.numeroSlides); Muestra en conosla del inspector
  // Del obj banner accede a padre, accede a los hijos con la clase slide y cambia su propiedad css
  //Cad slide inicia con un left de 0px 
  banner.padre.children('.slide').first().css({'left':0});
  info.padre.children('.slide').first().css({'left':0});


  var altoinfo = function(){
        // Caluclamos el alto que tien cada slide
        var alto = info.padre.children('.active').outerHeight();
        info.padre.animate({'height':alto+'px'});
  };

  var altoBanner = function(){
        // Caluclamos el alto que tien cada slide
        var alto = banner.padre.children('.slide').outerHeight();
        banner.padre.css({'height':alto+'px'});
  };

  var altoContenedor = function function_name(argument) {
      var altoVentana =$(window).height();
      if (altoVentana <= $('#contenedor').outerHeight()+200) {
        $('#contenedor').css({'height':''});
      }else{
        $('#contenedor').css({'height':altoVentana + 'px'});
      }
  }
  // Se ejecuta al inicio
  altoBanner();
  altoinfo();
  altoContenedor();
  //se ejecuta cuando hay un redimencionamineto de la pagina o ventana
  $(window).resize(function(){
    altoBanner(); 
    altoinfo();
    altoContenedor();
  });

  $('#info').children('.slide').each(function() {
     $('#botones').append('<span>');
  });

  $('#botones').children('span').first().addClass('active');
  //--------------------------------SLIDER-----------------------------------------
  // --------------------------TRABAJANDO CON EL BANNER DE FOTOS-------------------

  // Accedemos al id del boton next
  $('#banner-next').on('click',function(e){
      e.preventDefault(); //Prevenimos el comportamiento del enlace
      if (banner.posicion<banner.numeroSlides) {
        //Nos aseguramos que todos las imagenes que no tine la clase active aparezcan ocultas a la derecha
          banner.padre.children().not('.active').css({'left':'100%'});
          $('#banner .active').removeClass('active').next().addClass('active').animate({'left':'0'});
          $('#banner .active').prev().animate({'left':'-100%'});
          banner.posicion = banner.posicion+1;


          
      }else{
        $('#banner .active').animate({'left':'-100%'});
         banner.padre.children().not('.active').css({'left':'100%'});
        $('#banner .active').removeClass('active');
        banner.padre.children('.slide').first().addClass('active').animate({'left':0});
        banner.posicion = 1;
      }
  });


  //Accedemos al boton anterior
  $('#banner-prev').on('click',function(e){
    e.preventDefault();
    if(banner.posicion>1){
      //colocamos las imagens del lado izquierdo para empezarlas a anniar 
       banner.padre.children().not('.active').css({'left':'-100%'});
       $('#banner .active').animate({'left':'100%'});
       $('#banner .active').removeClass('active').prev().addClass('active').animate({'left':0});
       banner.posicion = banner.posicion -1;      
    }else{
      banner.padre.children().not('.active').css({'left':'-100%'});
      $('#banner .active').animate({'left':'100%'});
      $('#banner .active').removeClass('active');
      banner.padre.children().last().addClass('active').animate({'left':0});
      banner.posicion = banner.numeroSlides;
    }
  });

  //TRABAJDNO CON EL SLIDE INFO

   // Accedemos al id del boton next
  $('#info-next').on('click',function(e){
      e.preventDefault(); //Prevenimos el comportamiento del enlace
      if (info.posicion<info.numeroSlides) {
        //Nos aseguramos que todos las imagenes que no tine la clase active aparezcan ocultas a la derecha
          info.padre.children().not('.active').css({'left':'100%'});
          $('#info .active').removeClass('active').next().addClass('active').animate({'left':'0'});
          $('#info .active').prev().animate({'left':'-100%'});
          info.posicion = info.posicion+1;
           $('#botones').children('.active').removeClass('active').next().addClass('active');

          
      }else{
        $('#info .active').animate({'left':'-100%'});
         info.padre.children().not('.active').css({'left':'100%'});
        $('#info .active').removeClass('active');
        info.padre.children('.slide').first().addClass('active').animate({'left':0});
        info.posicion = 1;
        $('#botones').children('.active').removeClass('active');
        $('#botones').children('span').first().addClass('active');

      }
      altoinfo();
  });


  //Accedemos al boton anterior
  $('#info-prev').on('click',function(e){
    e.preventDefault();
    if(info.posicion>1){
      //colocamos las imagens del lado izquierdo para empezarlas a anniar 
       info.padre.children().not('.active').css({'left':'-100%'});
       $('#info .active').animate({'left':'100%'});
       $('#info .active').removeClass('active').prev().addClass('active').animate({'left':0});
       $('#botones').children('.active').removeClass('active').prev().addClass('active');
       info.posicion = info.posicion -1;      
    }else{
      info.padre.children().not('.active').css({'left':'-100%'});
      $('#info .active').animate({'left':'100%'});
      $('#info .active').removeClass('active');
      info.padre.children().last().addClass('active').animate({'left':0});
      $('#botones').children('.active').removeClass('active');
      $('#botones').children('span').last().addClass('active');

      info.posicion = info.numeroSlides;
    }
    altoinfo();
  });





});
