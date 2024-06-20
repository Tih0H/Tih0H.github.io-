$(document).ready(function(){
	var button_img_private = $('#button-img-private');
	var button_private = $('#button-private');
	var modal_private = $('#modal-private');
	var close_private = $('#close-private');

	var button_img_order = $('#button-img-order');
	var button_order = $('#button-order');
	var modal_order = $('#modal-order');
	var close_order = $('#close-order');

	var button_burger = $('#button-burger');
	var modal_burger = $('#modal-burger');
	var close_burger = $('#close-burger');

	var extra_click = $('#extra-click');
	var extra = $('#extra');

	var close_cert1 = $('#close-certificate1');
	var certificate1 = $('#certificate1');
	var modal_certificate1 = $('#modal-certificate1');

	var close_cert2 = $('#close-certificate2');
	var certificate2 = $('#certificate2');
	var modal_certificate2 = $('#modal-certificate2');

	var close_cert3 = $('#close-certificate3');
	var certificate3 = $('#certificate3');
	var modal_certificate3 = $('#modal-certificate3');

	var close_cert4 = $('#close-certificate4');
	var certificate4 = $('#certificate4');
	var modal_certificate4 = $('#modal-certificate4');

	var close_cert5 = $('#close-certificate5');
	var certificate5 = $('#certificate5');
	var modal_certificate5 = $('#modal-certificate5');

	var close_cert11 = $('#close-certificate11');
	var certificate11 = $('#certificate11');
	var modal_certificate11 = $('#modal-certificate11');

	button_img_private.on('click', function () {
		modal_private.addClass('modal_active');
	});

	button_private.on('click', function () {
		modal_private.addClass('modal_active');
	});

	close_private.on('click', function () {
		modal_private.removeClass('modal_active');
	});

	button_img_order.on('click', function () {
		modal_order.addClass('modal_active');
	});
	button_order.on('click', function () {
		modal_order.addClass('modal_active');
	});
	
	close_order.on('click', function () {
		modal_order.removeClass('modal_active');
	});

	button_burger.on('click', function () {
		modal_burger.addClass('modal_active');
	});

	close_burger.on('click', function () {
		modal_burger.removeClass('modal_active');
	});

	extra_click.on('click', function () {
		extra.addClass('modal_active');
	});
	// сертифмкаты
	certificate1.on('click', function () {
		modal_certificate1.addClass('modal_active');
	});
	close_cert1.on('click', function () {
		modal_certificate1.removeClass('modal_active');
	});

	certificate2.on('click', function () {
		modal_certificate2.addClass('modal_active');
	});
	close_cert2.on('click', function () {
		modal_certificate2.removeClass('modal_active');
	});

	certificate3.on('click', function () {
		modal_certificate3.addClass('modal_active');
	});
	close_cert3.on('click', function () {
		modal_certificate3.removeClass('modal_active');
	});

	certificate4.on('click', function () {
		modal_certificate4.addClass('modal_active');
	});
	close_cert4.on('click', function () {
		modal_certificate4.removeClass('modal_active');
	});

	certificate5.on('click', function () {
		modal_certificate5.addClass('modal_active');
	});
	close_cert5.on('click', function () {
		modal_certificate5.removeClass('modal_active');
	});
	certificate11.on('click', function () {
		modal_certificate11.addClass('modal_active');
	});
	close_cert11.on('click', function () {
		modal_certificate11.removeClass('modal_active');
	});
});