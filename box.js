'use strict';
console.log('boom shacka lacka');

let points = 0;
alert('Welcome, you!')
let user = prompt('I am Anutita! What is your allias?').toLocaleLowerCase();
console.log(user)

while (!user){
    user = prompt('What is your allias? We cannot progress without it!')
}
alert('Hi ' + user + '! I am glad you are here')
