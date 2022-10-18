 (function($) {
   $(function() {
     $('.collapsible').collapsible();
     $('.sidenav').sidenav();
     $('.parallax').parallax();

   }); // end of document ready
 })(jQuery); // end of jQuery name space


// fecha

d = new Date();
document.querySelector("#year").innerHTML = d.getFullYear();

 ///////////*Información*/

 var info1 = 'https://docs.google.com/spreadsheets/d/16ybk3RTxFyyLkfnBTOD4rX5RufgcdGYJu2NkRf3b4io/edit#gid=0';
 /////////Template de Handlebars
 var info1Temp = Handlebars.compile($('#info1Template').html());
 $('#info1').sheetrock({
   url: info1,
   rowTemplate: info1Temp
 });
 ///////////*Información Enlaces*/

 var info2 = 'https://docs.google.com/spreadsheets/d/16ybk3RTxFyyLkfnBTOD4rX5RufgcdGYJu2NkRf3b4io/edit#gid=1835223997';
 /////////Template de Handlebars
 var info2Temp = Handlebars.compile($('#info2Template').html());
 $('#info2').sheetrock({
   url: info2,
   rowTemplate: info2Temp
 });

 ///////////*Noticias Enlaces*/

 /*var info3 = 'https://docs.google.com/spreadsheets/d/1vAlfxgaRfsSNaZTkqyuWgPWOR4CXAuJQl4gvmjbLogs/edit#gid=1783463520';
 
 var info3Temp = Handlebars.compile($('#info3Template').html());
 $('#info3').sheetrock({
   url: info3,
   rowTemplate: info3Temp
 }); */

 ////Página de Inicio//////

 var iniURL = 'https://docs.google.com/spreadsheets/d/1TFRnBf0hslXDt9c6SS0eaV-sRXLmj5U1JQN84OwvYuQ/edit#gid=0';
 /////////Template de Handlebars
 var inicioTemp = Handlebars.compile($('#inicioTemplate').html());
 $('#inicio1').sheetrock({
   url: iniURL,
   rowTemplate: inicioTemp
 });


 ////Galeria Inicio//////

 var imgURL = 'https://docs.google.com/spreadsheets/d/16ybk3RTxFyyLkfnBTOD4rX5RufgcdGYJu2NkRf3b4io/edit#gid=611996954';
 /////////Template de Handlebars
 var imgTemp = Handlebars.compile($('#imgTemplate').html());
 $('#img').sheetrock({
   url: imgURL,
   rowTemplate: imgTemp
 });





 /*var img2Temp = Handlebars.compile($('#img2Template').html());
 $('#img2').sheetrock({
   url: imgURL,
   rowTemplate: img2Temp
 });

 var img3Temp = Handlebars.compile($('#img3Template').html());
 $('#img3').sheetrock({
   url: imgURL,
   rowTemplate: img2Temp
 });

 var img4Temp = Handlebars.compile($('#img4Template').html());
 $('#img4').sheetrock({
   url: imgURL,
   rowTemplate: img4Temp
 });

 var img5Temp = Handlebars.compile($('#img5Template').html());
 $('#img5').sheetrock({
   url: imgURL,
   rowTemplate: img5Temp
 });*/