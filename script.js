function convert() {
    var number = document.getElementById('number').value;
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;

    var result;

    if (from === 'binary') {
        if (to === 'decimal') {
            result = parseInt(number, 2);
        } else if (to === 'octal') {
            result = parseInt(number, 2).toString(8);
        } else if (to === 'hexadecimal') {
            result = parseInt(number, 2).toString(16);
        }
    } else if (from === 'octal') {
        if (to === 'binary') {
            result = parseInt(number, 8).toString(2);
        } else if (to === 'decimal') {
            result = parseInt(number, 8);
        } else if (to === 'hexadecimal') {
            result = parseInt(number, 8).toString(16);
        }
    } else if (from === 'decimal') {
        if (to === 'binary') {
            result = parseInt(number, 10).toString(2);
        } else if (to === 'octal') {
            result = parseInt(number, 10).toString(8);
        } else if (to === 'hexadecimal') {
            result = parseInt(number, 10).toString(16);
        }
    } else if (from === 'hexadecimal') {
        if (to === 'binary') {
            result = parseInt(number, 16).toString(2);
        } else if (to === 'octal') {
            result = parseInt(number, 16).toString(8);
        } else if (to === 'decimal') {
            result = parseInt(number, 16);
        }
    }

    document.getElementById('result').innerHTML = 'Result:' + result;
}
