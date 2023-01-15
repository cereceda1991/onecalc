const equalBtn = document.querySelector('.equal-sign');
const result = document.querySelector('#result');
const buttons = document.querySelectorAll('#calculator .keys button');
const calculateBtn = document.querySelector('#calculateBtn');
const deleteBtn = document.querySelector('.deleteBtn');


// Agrega event listeners a todos los botones
buttons.forEach(button => {
    button.addEventListener('click', e => {
        // Obtiene el valor del botón que fue clickeado
        const value = e.target.innerText;
        // Si se presionó el botón "=" antes, limpia el display
        
        if (value === '='){
            result.innerText = result.innerText + "\n"+eval(result.innerText);
        }
        // Verifica si el valor es un número o un operador
        else if (!isNaN(value)) {
            // Si es un número, agrega al valor actual
            result.innerText += value;
        } else if (value === '.') {
            // Si es un punto decimal, agrega al valor actual
            result.innerText += value;
        } else if (value === 'C') {
            // Si es el botón "C", limpia el resultado
            result.innerText = null;
        } else if (value === '00') {
            // Si es el botón "C", limpia el resultado
            result.innerText += value;
        }else if (value === '⌫') {
            // Si es el botón "D", elimina el último dígito
            result.innerText = result.innerText.substr(0, result.innerText.length - 1);
        } else {
            // Si es un operador, agrega al valor actual
            result.innerText += value;
        }
    });
});

