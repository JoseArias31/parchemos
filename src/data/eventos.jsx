
function generarLink(eventoNombre) {
    return eventoNombre
      .toLowerCase()                // Convierte todo a minúsculas
      .replace(/ /g, '-')           // Reemplaza los espacios por guiones
      .replace(/[^\w\-]+/g, '')     // Elimina caracteres no alfanuméricos o guiones
      .replace(/--+/g, '-')         // Reemplaza múltiples guiones seguidos por uno solo
      .replace(/^-+/, '')           // Elimina guiones al principio
      .replace(/-+$/, '');          // Elimina guiones al final
  }

export const EventosData = [{

    src:'https://picsum.photos/300/200?random=1',
    alt:'Slide 1',
    eventoNombre: 'Futbol 11 vs 11 Calera',
    mes:'Dic',
    dia:'10',
    hora:'7:00',
    meridiano:'PM',
    participantes: '30',
    link:'/Futbol-11-vs-11-calera'
},{

    src:'https://picsum.photos/300/200?random=2',
    alt:'Slide 2',
    eventoNombre: 'Clases de Salsa',
    mes:'Dic',
    dia:'11',
    hora:'9:00',
    meridiano:'PM',
    participantes: '30',
    link:'/Futbol-11-vs-11-calera'
},{

    src:'https://picsum.photos/300/200?random=3',
    alt:'Slide 3',
    eventoNombre: 'Cicloruta Nocturna',
    mes:'Dic',
    dia:'15',
    hora:'7:00',
    meridiano:'PM',
    participantes: '30',
    link:'/Futbol-11-vs-11-calera'
},{

    src:'https://picsum.photos/300/200?random=4',
    alt:'Slide 4',
    eventoNombre: 'Lectura Poetica',
    mes:'Dic',
    dia:'18',
    hora:'7:00',
    meridiano:'PM',
    participantes: '30',
    link:'/Futbol-11-vs-11-calera'
},{

    src:'https://picsum.photos/300/200?random=5',
    alt:'Slide 5',
    eventoNombre: 'Futbol 11 vs 11 Calera',
    mes:'Dic',
    dia:'20',
    hora:'7:00',
    meridiano:'PM',
    participantes: '30',
    link:'/Futbol-11-vs-11-calera'


},{

    src:'https://picsum.photos/300/200?random=6',
    alt:'Slide 5',
    eventoNombre: 'Futbol 11 vs 11 Calera',
    mes:'Dic',
    dia:'20',
    hora:'7:00',
    meridiano:'PM',
    participantes: '30',
    link:'/Futbol-11-vs-11-calera'


},{

    src:'https://picsum.photos/300/200?random=7',
    alt:'Slide 5',
    eventoNombre: 'Futbol 11 vs 11 Calera',
    mes:'Dic',
    dia:'20',
    hora:'7:00',
    meridiano:'PM',
    participantes: '30',
    link:'/Futbol-11-vs-11-calera'


},{

    src:'https://picsum.photos/300/200?random=8',
    alt:'Slide 5',
    eventoNombre: 'Futbol 11 vs 11 Calera',
    mes:'Dic',
    dia:'20',
    hora:'7:00',
    meridiano:'PM',
    participantes: '30',
    link:'/Futbol-11-vs-11-calera'


},{

    src:'https://picsum.photos/300/200?random=9',
    alt:'Slide 5',
    eventoNombre: 'Futbol 11 vs 11 Calera',
    mes:'Dic',
    dia:'20',
    hora:'7:00',
    meridiano:'PM',
    participantes: '30',
    link:'/Futbol-11-vs-11-calera'


},
];

export default EventosData;
