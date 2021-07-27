
class Building {
    constructor(floors, material, address) {
        this.floors = floors;
        this.material = material;
        this.address = address;
    }

    toString() {
        return [
            `Floors: ${this.floors}`,
            `Material: ${this.material}`,
            `Address: ${this.address}`,
        ].join('\n');
    }
};

class Tower extends Building {
    constructor(floors, material, address) {
        super(floors, material, address)
    }
    getFloorHeight() {
        return this.floorHeight
    }
    hasElevator = false
    arcCapacity = 'unknown'
    floorHeight = 'unknown'
    toString() {
        return [
            super.toString(), 
            `Elevator: ${this.hasElevator ? '+' : '-'}`,
            `Arc reactor capacity: ${this.arcCapacity}`,
            `Floor height: ${this.floors}`
        ].join('\n')
    } 
}

const starkTower= new Tower(93, 'Different', 'Manhattan, NY');
starkTower.hasElevator= true;
starkTower.arcCapacity= 70;
starkTower.height= 1130;
console.log(starkTower.toString());