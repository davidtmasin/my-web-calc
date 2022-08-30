let numbers = []
let last_number
let operation
let result_screen = document.getElementById('view')
let statusOp = 'Pendente'
let controlOP = '1 Resultado'

window.onload = () => {
    var buttons = document.getElementsByTagName('button')
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            console.log(buttons[i].textContent);

            if (buttons[i].textContent == '+') {
                numbers.push(parseFloat(result_screen.textContent))
                console.log(numbers);
                result_screen.textContent = '0'
                operation = 'sum'

            } else if (buttons[i].textContent == '-') {
                numbers.push(parseFloat(result_screen.textContent))
                console.log(numbers);
                result_screen.textContent = '0'
                operation = 'sub'

            } else if (buttons[i].textContent == '*') {
                numbers.push(parseFloat(result_screen.textContent))
                console.log(numbers);
                result_screen.textContent = '0'
                operation = 'mul'

            } else if (buttons[i].textContent == '/') {
                numbers.push(parseFloat(result_screen.textContent))
                console.log(numbers);
                result_screen.textContent = '0'
                operation = 'div'

            } else if (parseFloat(buttons[i].textContent) >= 0 || parseFloat(buttons[i].textContent) <= -1) {

                if (statusOp == 'Operação realizada') {
                    result_screen.innerHTML = buttons[i].textContent
                    statusOp = 'Pendente'
                } else if (statusOp == 'Pendente') {
                    // numbers.push(parseInt(buttons[i].textContent))
                    parseFloat(result_screen.textContent) == 0.0 ? result_screen.innerHTML = buttons[i].textContent : result_screen.innerHTML += buttons[i].textContent

                }
                console.log(`Números: ${numbers}`)
            } else if (buttons[i].textContent == '=') {
                statusOp = 'Operação realizada'
                switch (operation) {
                    case 'sum':

                        // if (controlOP == '1 Resultado') {
                        //     numbers.push(parseInt(result_screen.textContent))
                        //     console.log(numbers);
                        //     console.log(sum(...numbers));
                        //     last_number = numbers[numbers.length - 1]
                        //     console.log("último número: " + last_number);
                        //     result_screen.innerHTML = [sum(...numbers)]
                        //     numbers = []
                        //     numbers.push(last_number)

                        //     controlOP = '2 ou mais Resultados'
                        // } else {
                        //     numbers.push(parseInt(result_screen.textContent))
                        //     result_screen.innerHTML = [sum(...numbers)]
                        // }
                        numbers.push(parseFloat(result_screen.textContent))
                        console.log(numbers);
                        console.log(sum(...numbers));
                        numbers = [sum(...numbers)]
                        result_screen.innerHTML = numbers
                        numbers = []
                        break
                    case 'mul':
                        numbers.push(parseFloat(result_screen.textContent))
                        console.log(numbers);
                        console.log(multiplication(...numbers));
                        numbers = [multiplication(...numbers)]
                        result_screen.innerHTML = numbers
                        numbers = []
                        break
                    case 'sub':
                        numbers.push(parseFloat(result_screen.textContent))
                        console.log(numbers);
                        console.log(subtraction(...numbers));
                        numbers = [subtraction(...numbers)]
                        result_screen.innerHTML = numbers
                        numbers = []
                        break
                    case 'div':
                        numbers.push(parseFloat(result_screen.textContent))
                        console.log(numbers);
                        console.log(division(...numbers));
                        numbers = [division(...numbers)]
                        result_screen.innerHTML = numbers.toString().replace('.',',')
                        numbers = []
                        break
                    default:
                        console.log('Não há operação matemática acionada!')
                        // result_screen.innerHTML = 'Não há operação matemática acionada!' 
                        break;
                }
                // numbers = []
                console.log(numbers);
            } else if (buttons[i].textContent == 'C') {
                numbers = []
                result_screen.innerHTML = '0'
                operation = 'nenhuma'

            } else if (buttons[i].textContent == '+/-') {
                console.log(result_screen.textContent);
                console.log(parseInt(result_screen.textContent));
                console.log(parseInt(result_screen.textContent) > 0);
                if (parseInt(result_screen.textContent) > 0) {
                    result_screen.textContent = `-${result_screen.textContent}`
                } else {
                    result_screen.textContent = `${parseInt(result_screen.textContent) * (-1)}`
                }
            } else if (buttons[i].textContent == '') {
                let value = result_screen.textContent
                if (value.length == 1) {
                    result_screen.textContent = '0'
                } else {
                    result_screen.textContent = value.substring(0, value.length - 1)
                }
            } else if (buttons[i].textContent == 'CE') {
                console.log(numbers);
                console.log(numbers.shift());
                result_screen.innerHTML = '0'
            }
            console.log(`Operação selecionada: ${operation}`);
        })
    }

}


function sum() {
    return [...arguments].reduce((sum, nr) => sum + nr, 0);
}

function multiplication() {
    return [...arguments].reduce((mul, nr) => mul * nr, 1);
}

function subtraction() {
    return [...arguments].reduce((sub, nr) => sub - nr);
}

function division() {
    return [...arguments].reduce((div, nr) => div / nr);
}