// Если на проекте jQuery
$( document ).ready(function() {
  $(".my-rating-6").starRating({
    totalStars: 5,
    emptyColor: '#D9D9D9',
    hoverColor: '#F2BC18',
    activeColor: '#F2BC18',
    strokeWidth: 0,
    useGradient: false,
    readOnly: true,
  });
  $('.accordion-group').ariaAccordion({
    contentRole: ['document', 'application', 'document'],
    slideSpeed: 400
  });
});

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
