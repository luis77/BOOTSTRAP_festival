//smooth scroll con JS nativo
document.querySelectorAll('.navbar .nav-link').forEach(enlace => { //genera un arreglo
	enlace.addEventListener('click', (e) => {
		e.preventDefault();//evita que un elemento realice su funcion por default, en este caso evitamos que el enlace se redirija a la sección correspondiente

		document.querySelector(enlace.getAttribute('href')).scrollIntoView({
			behavior: 'smooth', // hace como una transicion no tan directa, se puede buscar scrollIntoView para ver sus propiedades
			block: 'start' //por defecto scrollintoview lleva al centro del contenido
		});
	});
});
//all porque tengo que escuchar por todos los enlaces

//cambia de color el fondo al hacer scroll
window.onscroll = (e) => {
//es lo mismo hacer window.onscroll = function(e) {
	const scroll = window.scrollY;

	//console.log(scroll);
	const header = document.querySelector('#navegacion-principal');
	//querySelector solo recibe un elemento
	//300 son pixeles
	if(scroll > 300){
		//console.log('SIII YA PASAMOS 300');
		header.classList.add('bg-success');
	} else {
		//console.log('AUN NO');
		header.classList.remove('bg-success');
	}
}

//Jquery Countdown
$(document).ready(function() {
	$('#fecha').countdown('2021/09/19', function(evento){
		//console.log(evento);
		$(this).html(evento.strftime('<span> %D </span> Días <span> %H </span> Horas <span> %M </span> Minutos <span> %S </span> Segundos'));
	});
});