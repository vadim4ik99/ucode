function Calculator() {
    this.result = 0
    this.init = (num) => {
        this.result = num
        return this
    }
    this.add = (num) => {
        this.result += num
        return this
    }
    this.mul = (num) => {
        this.result *= num
        return this
    }
    this.div = (num) => {
        this.result /= num
        return this
    }
    this.sub = (num) => {
        this.result -= num
        return this
    }
    this.alert = () => setTimeout(() => alert(this.result), 5000)
}




const calc= new Calculator();

console.log(
    calc
        .init(2)
        .add(2)
        .mul(3)
        .div(4)
        .sub(2).result // 1
);

calc.alert();

