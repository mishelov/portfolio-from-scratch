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
     $('#btn-four').click(function () { 
        window.location.href='#';
     });
});

// progress-bar
$(document).ready(function(){
	$('.skill-bar').each(function(){
		$(this).find('.bar').animate({
			width:$(this).attr('data-percent')
		},4000);
	});
});