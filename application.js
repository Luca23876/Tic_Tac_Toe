$(document).ready(function(){
	var counter = 0;
	$('.box').click(function(){
		counter = counter + 1;
	});

	$('.box').click(function(){
		if (counter%2 == 1){
			$(this).addClass('x');
		} else {
			$(this).addClass('o');
		}
	});
});
