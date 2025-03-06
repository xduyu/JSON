const minusPhoneData = document.getElementById('minusPhoneData');
const minusPhoneBtn = document.getElementById('minusPhoneBtn');
const addPhoneBtn = document.getElementById('addPhoneBtn');
const moreBattery = document.getElementById('moreBattery');


// class Rectangle {
//     #width;
//     #height;
//     constructor(width, height){
//         this.#width = width;
//         this.#height = height;
//     }
//     get width(){
//         return this.#width
//     }
//     get height(){
//         return this.#height
//     }
//     set width(newWidth){
//         if(newWidth > 0){
//             this.#width = newWidth
//         }else{
//             console.error('123')
//         }
//     }
//     set height(newHeight){
//         if(newHeight > 0){
//             this.#height = newHeight
//         }else{
//             console.error('123')
//         }
//     }
//     area(){
//         return console.log(this.#width * this.#height)
//     }
// }

// const rec = new Rectangle(20, 15)
// console.log(rec.height)
// console.log(rec.width)
// rec.width = 10
// rec.height = 10 
// console.log(rec.height)
// console.log(rec.width)

// rec.area()

// task1

class Phone1 {
    constructor(brand, model, batteryLevel = 100) {
        this.brand = brand;
        this.model = model;
        this.batteryLevel = batteryLevel;
    }
    charge(){
        this.batteryLevel = 100
        console.log(`${this.model}, ${this.model} заряжен до ${this.batteryLevel}%`)
    }
    useBattery(amount){
        if(amount < 0){
            console.log('Ошибка 1')
        } else{
            this.batteryLevel -= amount;
            console.log(`${this.brand} разряжен до ${this.batteryLevel}`)
        }
    }
    getInfo(){
        return console.log(`Brand: ${this.brand}, Model: ${this.model}, Battery: ${this.batteryLevel}%`)
    }
}

const device1 = new Phone1('Apple', 'Iphone')

device1.charge()
device1.useBattery(32)
device1.getInfo()
device1.charge()
device1.getInfo()

addPhoneBtn.addEventListener('click', () => {
    device1.charge()
    const phoneabout = document.createElement('li')
    const ppabout = `Brand: ${device1.brand}, Model: ${device1.model}, Battery: ${device1.batteryLevel}%`
    phoneabout.append(ppabout)
    moreBattery.append(phoneabout)
})

minusPhoneBtn.addEventListener('click', () => {
    let minphone = minusPhoneData.value;
    console.log(minphone)
    if(minphone > 0){
        let newValue = device1.batteryLevel -= minphone;
        device1.batteryLevel = newValue;
        const phoneabout = document.createElement('li')
        const ppabout = `Brand: ${device1.brand}, Model: ${device1.model}, Battery: ${device1.batteryLevel}%`
        phoneabout.append(ppabout)
        moreBattery.append(phoneabout)
        console.log(phoneabout)
    } else {
        console.log('error')
    } 
})

// task2


class Device {
    constructor(model, manufacturer, year) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
    }
    getInfo(){
        return console.log(`Производитель: ${this.manufacturer}, Модель: ${this.model}, Год выпуска: ${this.year}`)
    }
}

class Phone extends Device {
    constructor(model, manufacturer, year, os, isSmart) {
        super(model, manufacturer, year)
        this.os = os;
        this.isSmart = isSmart;
    }
    makeCall(number){
        return console.log(`Звонок на номер ${number}...`)
    }
    getInfo(){
        return console.log(`Производитель: ${this.manufacturer}, Модель: ${this.model}, Год выпуска: ${this.year}, os: ${this.os}, isSmart: ${this.isSmart}`)
    }
}

class Laptop extends Device {
    constructor(model, manufacturer, year, screenSize, isTouchScreen) {
        super(model, manufacturer, year)
        this.screenSize = screenSize;
        this.isTouchScreen = isTouchScreen;
    }
    openLid(){
        return console.log("Крышка ноутбука открыта")
    }
    closeLid(){
        return console.log("Крышка ноутбука зыкраты")
    }
    getInfo(){
        return console.log(`Производитель: ${this.manufacturer}, Модель: ${this.model}, Год выпуска: ${this.year}, screenSize: ${this.screenSize}, isTouchScreen: ${this.isTouchScreen}`)
    }
}

const myPhone = new Phone("GS21", "SAMSUNG", 2021, "Android", true)
const myPhone2 = new Phone("GS212", "SAMSUNG2", 32, "232", true)
// const newLiPhones = document.createElement('li')
// const newLiPhones2 = document.createElement('li')
// const pPhone = `${myPhone.model}, ${myPhone.manufacturer}, ${myPhone.year}`
// const pPhone2 = `${myPhone2.model}, ${myPhone2.manufacturer}, ${myPhone2.year}`
// newLiPhones.append(pPhone);
// newLiPhones2.append(pPhone2);
// PhoneList.append(newLiPhones)
// PhoneList.append(newLiPhones2)

myPhone.getInfo()
myPhone.makeCall("+1234567890")

// task3

class PhoneUtils {
    static compareBattery(phone1, phone2){
        return phone1 < phone2 ? phone1 : phone2
    }
    static isSameBrand(phone1, phone2){
        if(phone1.model == phone2.model){
            console.log(true)
        } else{
            console.log(false)
        }
    }
}

console.log(PhoneUtils.compareBattery(myPhone, myPhone2))
console.log(PhoneUtils.isSameBrand(myPhone, myPhone2))

// task4

class Battery {
    #capacity
    constructor(capacity) {
        this.#capacity = capacity;
    }
    get capacity(){
        return console.log(`${this.#capacity}`)
    }
    set capacity(newCapacity){
        if(newCapacity > 0){
            this.#capacity = newCapacity;
        } else{
            return console.error('error 2')
        }
    }
    getBatteryLife(powerConsumption){
        return console.log(this.#capacity / powerConsumption)
    }
}

