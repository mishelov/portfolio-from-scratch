// buttons

$(document).ready(function () {
    $('#btn-one').click(function(){
        window.location.href='#about';
     })
     $('#btn-two').click(function () { 
        window.location.href='#education';
     });
     $('#btn-three').click(function () { 
        window.location.href='#skills';
     });
     $('#btn-five').click(function () { 
        window.location.href='#contacts';
     });
     $('#btn-four').click(function () { 
      window.open('https://drive.google.com/file/d/1kKggijEatPnLp_risrHXrERn9YSgUnvd/view?usp=share_link', '_blank');   
   });
});

// progress-bar
$(document).ready(function(){
	$('.skill-bar').each(function(){
		$(this).find('.bar').animate({
			width:$(this).attr('data-percent')
		},10000);
	});
});

// responsive menu
$(document).ready(function () {
   $(".burger-menu").on("click", function(){
      $(".menu").slideToggle("close-menu");
      $(".menu").toggleClass("open-menu");
   });   
});

//animated test
$(document).ready(function () {
   $('#animated-about').textbanner();
   $('#animated-education').textbanner();
   $('#animated-skills').textbanner();
   $('#animated-find-me').textbanner();
});

// $(function(){
//    $(".animated").dropFont(20);
//  });

// var i = 1;
// var dropHeight = 7;
// function animateDrop() {
//   setTimeout(function() {
//     $(".animated").dropFont(i);
//     i++;
//     if (i < dropHeight)
//       animateDrop();
//   }, 20)
// }
// animateDrop();