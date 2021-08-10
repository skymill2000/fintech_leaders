let car = "car"
let cars = ["car1", "car2", "car3", car];
//public String [] array = new String[3];

console.log(cars[0])
console.log(cars[1])
console.log(cars[2])
console.log(cars[3])

for(let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

cars.map((car)=>{
    console.log(car);
})