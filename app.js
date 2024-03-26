

let name = prompt("Adinizi daxil edin: ");
console.log(name.length);
let extraLetter = prompt("ikinci simvolu girin: ");
if (name.includes(extraLetter)) {
   console.log(extraLetter + " hərfi adın içinde var.");
} else {
          console.log(extraLetter + " hərf adın içinde yoxdu.");
  }


if (extraLetter === name[0]) {
     console.log(extraLetter + " hərfi adın ilk hərfidir.");
 } else if (name.includes(extraLetter)) {
   console.log(extraLetter + " hərfi adın içinde var, amma ilk hərfi deyil.");

 } else {
     console.log(extraLetter + " hərfi adın içinde yoxdu.");
 } 

  let lastLetter = name[name.length - 1]; 

  if (extraLetter === lastLetter) {
      console.log(extraLetter + " hərifi adın axırıncı hərfidir.");
  } else if (name.includes(extraLetter)) {
      console.log(extraLetter + " hərfi adın içinde yoxdu, amma axırıncı hərfi deyil.");
 
  } else {
       console.log(extraLetter + " hərfi adın içinde yoxdu.");
   }

 let index = name.indexOf(extraLetter);

 if (index !== -1) {
     console.log(extraLetter + " hərfi adın içinde var və index'i: " + index);
 } else {
     console.log(extraLetter + " hərfi adn içinde yoxdu.");
 }

 let hasUpperCase = false;

 for (let i = 0; i < name.length; i++) {
     if (name[i] !== name[i].toLowerCase()) {
         hasUpperCase = true;
         break;
     }
 }

 if (hasUpperCase) {
     console.log("Ad içində 'ən az bir böyük hərf var.");
 } else {
     console.log("Ad içinde heç böyük hərf yoxdu.");
 }