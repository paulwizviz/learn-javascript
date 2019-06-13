const _ = require('lodash');

const component = () => {
    const h1 = document.createElement('h1');
    h1.innerHTML = _.join(['hello','world'],' '); // joining array elements with space as separator
    const element = document.getElementById('app').appendChild(h1); 
    return element;
}

component();