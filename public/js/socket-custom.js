var socket = io();

// cuando se conecta al servidor (escuchan)
socket.on('connect', function() {
    console.log('Conectado al servidor');
});


// cuando se desconecta del servidor o por alguna razon se perdio la conexion (escuchan)
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

// enviar un mensaje al servidor
// socket.emit('enviarMensaje', {
//     usuario: 'Fernando',
//     mensaje: 'Hola mundo'
// }, function(respuesta) {
//     console.log('Respuesta server: ', respuesta);
// })

// escuchar informacion

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});