// Challenge 1 ------  Easy 

//  function exercise(sport) {
//      function exe() {
//          return `today's exercise: ${sport}`;
//      }
//      return exe;
//  }
//  var run = exercise ("running");
//  console.log(run());
//  var swim = exercise("swimming");
//  console.log(swim());



// Challenge 2 -------  Medium


// function cutPizza(numOfSlices) {
//     function person (numOfPeople) {
//         let slices = numOfSlices / numOfPeople;
//         return `each person gets ${Math.round(slices * 100) / 100} slices of pizza`;
//     }
//     return person;
// }
// var sharePizza = cutPizza(8);
// console.log(sharePizza(2));
// console.log(sharePizza(3));



// Challenge 3 -------    Hard


// function userInfo () {
//     let pii = {
//         name: 'Juan',
//         ssn: 11111111, 
//         getName: function () {
//             return `user name: ${this.name}`;
//         }
//     }; return pii.getName (); 
// }
// console.log(userInfo());


// Challenge 4 -----------    Very Hard 

class Person {
    constructor (name, job, age){
       this.name = name; 
       this.job = job;
       this.age = age;
    }
    sayName () {
        console.log(`${this.name}`);
        console.log(`${this.name} recently got a job as a ${this.job}`)
    }
    eat() {
        if(this.age){
            this.age = false;
            console.log(`${this.age} is the middle age between teen and adult`);
        }else{
            console.log(`${this.name} is 20 years old.`);
        }
    }
}

const working = new Person ("Juan", "Software Engineer");

Person.prototype.work = "Something"; 

working.sayName();
working.eat();
console.log(working.work);

// ---------------------


class Programmer {
    constructor (name, job, age, language){
       this.name = name; 
       this.job = job;
       this.age = age;
       this.language = language;
    }
    completeTask () {
        console.log(`${this.job}`);
        console.log(`${this.name} just completed his assignment in ${this.language}.`)
    }
    acceptNewTask() {
        if(this.job){
            this.job = 'Javascript';
            console.log(`${this.job} is the hardest assignment in coding. `);
        }else{
            console.log(`${this.name} can't accept any new tasks right now.`);
        }
    }
}

const tasks = new Programmer ("Juan", "Coding Challenge");

Programmer.prototype.work = "Juan will take responsibility."; 

tasks.completeTask();
tasks.acceptNewTask();
console.log(tasks.work);
