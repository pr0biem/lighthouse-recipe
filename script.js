$(document).ready(function() {
	console.log("Script included!");
	$('.ing').click(function() {
		$('.ing>span:hover').toggleClass('strike');
	})
	$('.step#unclicked').click(function() {
		$('.step:hover').attr('id', $(this).attr('id') == "unclicked" ? "clicked" : "unclicked");
	})
	$('.hide').click(function() {
		$('img').hide();
	})
	$('.show').click(function() {
		$('img').show();
	})
}); 