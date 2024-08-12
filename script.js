let znachenie = document.querySelector('.container');
let rezultat = document.querySelector('.input-display');

rezultat.innerText = 0;

document.querySelectorAll('.container .button').forEach((item, i) => {
    item.onclick = function (nazhatieEvent) {

        let operation = nazhatieEvent.target.innerText.trim();

        if (nazhatieEvent.target.classList.contains('delet'))
            return rezultat.innerText = rezultat.innerText.slice(0, -1);

        if (nazhatieEvent.target.classList.contains('koren'))
            return rezultat.innerText = Math.sqrt(rezultat.innerText);

        console.log(operation);   /// показывает каждое нажатие

        if (rezultat.innerText === '0') {
            rezultat.innerText = '';
        }

        switch (operation) {
            case '=':
                rezultat.innerText = eval(rezultat.innerText); ////  неработает с заяпятой ( ',' )
                break;

            case 'C':
            case 'CE':
                rezultat.innerText = '0';
                break;

            case '1/x':
                rezultat.innerText = 1 / rezultat.innerText;
                break;

            case '%':
                let ravnoprocent = rezultat.innerText;
                let [a, operator, b] = ravnoprocent.split(/([+\-*/])/);
                a = parseFloat(a.trim());
                b = parseFloat(b.trim());

                if (b) {
                    b = (a * b) / 100; // Преобразуем b в процент от a
                    switch (operator) {
                        case '+':
                            rezultat.innerText = (a + b).toString();
                            break;
                        case '-':
                            rezultat.innerText = (a - b).toString();
                            break;
                        case '*':
                            rezultat.innerText = (a * b).toString();
                            break;
                        case '/':
                            rezultat.innerText = (a / b).toString();
                            break;
                    }
                }
                break;

            default:
                rezultat.innerText += operation;
        }

        console.log(rezultat.innerText);    ///показывает действие (результат)
    };
});


