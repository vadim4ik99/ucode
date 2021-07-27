export default class HardWorker {
    set name(value) {
        this.nameValue = value
    }

    get name() {
        return this.nameValue
    }

    set age(value) {
        if (value >= 1 && value <= 100) this.ageValue = value
    }

    set salary(value) {
        if (value >= 100 && value <= 10000) this.salaryValue = value
    }
    toObject() {
        return {
            name: this.nameValue,
            age: this.ageValue,
            salary: this.salaryValue
        }
    } 

}


