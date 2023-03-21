//Exercitiul 1//
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

