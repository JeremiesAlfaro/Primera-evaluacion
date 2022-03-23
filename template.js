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
            {message: "1-. Escuchar música y tocar instrumentos musicales"},
            {message: "2-. Jugar videojuegos y juegos de mesa con mis amigos"},
            {message: "3-. Asistir a conciertos y festivales"},
            {message: "4-. Leer comics de DC"},
            {message: "5-. Salir con mis amigos"},
        ]
    }
});