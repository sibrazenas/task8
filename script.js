/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */


function Calculator(a,b) {
    this.a = a
    this.b = b


    this.sum = function (a,b) {
       console.log(parseInt(a) + parseInt(b))
    }
    this.substraction= function (a,b) {
        console.log(parseInt(a) - parseInt(b))
     }
     this.multiplication = function (a,b) {
        console.log(parseInt(a) * parseInt(b))
     }
     this.division = function (a,b) {
        console.log(parseInt(a) / parseInt(b))
     }
}

const calculator1 = new Calculator()

calculator1.sum(20,20) // 40
calculator1.division(10,5) // 2
calculator1.multiplication(2,2) // 4
calculator1.substraction(9,3) // 6

