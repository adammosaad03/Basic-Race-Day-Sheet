let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let age = Math.floor(Math.random() * 80);

console.log("Your age: " + age)
if(age > 18 && registeredEarly){
  raceNumber += 1500;
  console.log(`You will race at 9:30, ${raceNumber} is your race number.`)
}
else if(age > 18 && !registeredEarly){
  raceNumber += 1000;
    console.log(`You will race at 11:00, ${raceNumber} is your race number.`)
}else if(age < 18 && age >= 8){
  raceNumber += 500;
  console.log(`You will race at 12:30. ${raceNumber} is your race Number.`)
  
}else if (age < 8){
  console.log(`Sorry. ${age} is too young to race.`)
}
else{
  console.log(`You will race at 12:30. ${raceNumber} is your race number`)
  
}

