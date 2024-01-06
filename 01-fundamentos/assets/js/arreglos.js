const arr = new Array(10);
console.log(  arr);

let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log({videoJuegos});
console.log(videoJuegos[0]);

// Los arreglospueden contener cualquier tipo de dato o incluso otro arreglo
let arregloCosas = [
    true,
    123,
    'Emilio',
    1+2,
    function(){},
    ()=>{},
    {a:1},
    ['X','Megaman','Zero','Dr. Light',[
        'Dr. Willy',
        'Woodman'
    ]]
];

console.log(arregloCosas[7][3]);
console.log(arregloCosas[6].a);

