var intro = new vue({
    el: '#intro',
    data: {
        message: 'Estos son mis hobbies: '
    }
});

var hobbyList = new vue({
    el: '#hobbyList',
    data: {
        bucl:[
            {message: "Escuchar música y tocar instrumentos musicales"},
            {message: "Jugar videojuegos y juegos de mesa con mis amigos"},
            {message: "Asistir a conciertos y festivales"},
            {message: "Leer comics de DC"},
            {message: "Salir con mis amigos"}
        ]
    }
})