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
      window.open=('https://drive.google.com/file/d/1kKggijEatPnLp_risrHXrERn9YSgUnvd/view?usp=share_link');   
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

