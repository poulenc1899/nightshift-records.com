$(document).ready(function() {
    
  $(".sMenuToggle").click(function() {
   $("#longMenu").toggleClass("dn");
   $("#longMenu").toggleClass("flex");
  });


 $(".release").mouseover(function() {
  $( this ).find( ".front" ).addClass( "dn" );
  $( this ).find( ".back" ).removeClass( "dn" );
 });
  $(".release").mouseout(function() {
  $( this ).find( ".front" ).removeClass( "dn" );
  $( this ).find( ".back" ).addClass( "dn" );
 });

    });