
$(document).ready(() => {
$('.form').parallax({imageSrc: 'img/paralax-background.png'});

$(".header__burger").click(function() {

	$( ".header__nav" ).toggle( "slow", function() {});
	$( ".black-screen" ).toggle();
});

});

