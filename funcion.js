// EJECUTA LA FUNCION AL RECARGAR SITIO
// window.onload = () => {
//     document.querySelector('#the-excuse').innerHTML = generateExcuse();
// };

//FUNCION GENERA LA CADENA DE TEXTO ALEATORIA
let generateExcuse = () => {
    let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

    let whoIndex = Math.floor(Math.random() * who.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);

    // GENERANDO EXCUSA CON BOTON
    document.querySelector('#the-excuse').innerHTML = who[whoIndex] + ' ' + action[actionIndex] + ' ' + what[whatIndex] + ' ' + when[whenIndex];
    
    // GENERANDO EXCUSA AL RECARGAR PÁGINA
    // return who[whoIndex] + ' ' + action[actionIndex] + ' '+ what[whatIndex] + ' ' + when[whenIndex]
};