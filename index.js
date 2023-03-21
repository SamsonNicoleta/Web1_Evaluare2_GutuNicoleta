//Exercitiul 1
class Worker {
    constructor(name, surname, hourRate, hours) {
        this.name = name;
        this.surname = surname;
        this.hourRate = hourRate;
        this.hours = hours;
    }
    getSalary(hourRate, hours){
        return this.hourRate * this.hours;
    }
    increaseHourRate(n){
        return this.hourRate += n;
    };
    setTax(t){
        return this.tax = t
    }
    getSalaryNetto(){
        return this.getSalary() - ((this.getSalary()*this.tax)/100)
    }
    getName() {
        return this.name;
    }
    getSurname() {
        return this.surname;
    }
    getHourRate() {
        return this.hourRate;
    }
    getHours() {
        return this.hours;
    }
}

let worker = new Worker('Ion', 'Creangă', 10, 176);
console.log(worker.name); //afișează 'Ion'
console.log(worker.surname); //afișează 'Creangă'
console.log(worker.hourRate); //afișează 10
console.log(worker.hours); //afișează 31
console.log(worker.getSalary()); //afișează 1760 = 10*176

//Exercitiul 2
let workerOne = new Worker('Ion', 'Ionescu', 15, 117);
let workerTwo = new Worker('Andrei', 'Andronescu', 18, 212);

//Exercitiul 3
console.log("Exercitiul 3")
let workSalOne = workerOne.getSalary();
let workSalTwo = workerTwo.getSalary();
if (workSalOne > workSalTwo) {
    console.log(`Lucrătorul cu cel mai mare salariu este ${workerOne.name}, cu ${workSalOne - workSalTwo} mai mult`);
} else console.log((`Lucrătorul cu cel mai mare salariu este ${workerTwo.name}, cu ${workSalTwo - workSalOne} mai mult`))

//Exercitiul 4
console.log("Exercitiul 4")
let workerModificat = new Worker('Ion', 'Creangă', 10, 176);
console.log(workerModificat.getName()); 
console.log(workerModificat.getSurname());
console.log(workerModificat.getHourRate()); 
console.log(workerModificat.getHours()); 
console.log(workerModificat.getSalary());

//Exercitiul 5
console.log("Exercitiul 5")
var workerNou = new Worker('Ion', 'Creangă', 10, 176);
console.log(workerNou.getName()); // afișează Ion
console.log(workerNou.getSurname()); // afișează Creangă
console.log(workerNou.getHourRate()); // afișează 10
console.log(workerNou.getHours()); // afișează 176
console.log(workerNou.getSalary()); //afișează 1760 = 10*176
workerNou.increaseHourRate(2); //mărește hourRate cu 2
console.log(workerNou.getSalary()); //afișează 2112 = 12*176