//변수 선언 : 매우 유연한 방식
// var / let / const 3가지 

// const hello = "world";

// if(true){
//     const hello = 'korea'
//     console.log(hello);
// }

// //test();

// console.log(hello); 


// const num = 5;

// num = 6;

// console.log(num);

// const drinks = {};
// drinks.caffe = 'latte';
// drinks.lemon = 'ade';


// console.log(drinks)

// drinks.caffe = 'americano';
// drinks.lemon = 'tea';

// console.log(drinks)


// const arr = [1,2,3,4,5];
// arr[0] = 100;
// arr[4] = 500;

// console.log(arr);


// const val01 = "Hello"
// const val02 = "World"

// const val03 = val01 + ' ' + val02 + '!!!!!';

// console.log(val03);

// const litVal = `${val01} ${val02}!!!!!`

// console.log(litVal);


// let array = [10,20,30,40];

// for (let val in array){
//     console.log(val);
// }
// for (let val in array){
//     console.log(array[val]);
// }

// for (let val of array){
//     console.log(val);
// }

// let obj = {
//     a:1,
//     b:2,
//     c:3
// }

// for (let val of obj){
//     console.log(val);
// }


// function printNums(num1, ...num2){
//     console.log(arguments);
// }

// printNums(1,2,3,4,5);


// function sum (x,y,z){
//     return x+y+z;
// }

// console.log(sum(1,2,3));


// function sum (a,b,c,d,e){
//     return a+b+c+d+e;
// }

// let arr = [20,30];

// console.log(sum(10,...arr,40,50)); // 10 + 20 + 30  + 40 + 50 = 150



// let drinks = {
//     caffe: 'latte',
//     coca: 'cola'
// }

// let newDrinks = {
//     lemon: 'tea',
//     orange: 'juice',
//     ...drinks
// }

// console.log(newDrinks);


// let arr = [1,2,3,4,5] 

// let twice = arr.map(v=>{
//     if(v%2 === 0) console.log('even number');
//     else console.log('odd number');
// });

// console.log(twice);

// let arr = [10,20,30,40,50];

// let twice = arr.map((v,i)=>{
//     console.log(`i: ${i}, v: ${v}`)
// });

// console.log(twice);


//설계도 
class Person{

    //설계도에 들어갈 요소들 
    constructor(region_, gender_){
        this.region = region_;
        this.gender = gender_;
    }

    greetings(val = 'an-nyoeng'){
        console.log(val);
    }
}

//클래스 생성 ->  설계도 요소들을 입력해서 초기화
let korean = new Person('Korea','male');
console.log(korean);

//초기화된 값 변경 가능 
korean.gender = 'female';
console.log(korean);


//상속
class American extends Person{

    constructor(region_,gender_,language_){
        super(region_,gender_); //부모클래스 생성자 rule을 따름 
        this.language == language_
    }

    //오버라이딩 : 부모와 자식간의 동일한 메소드가 있으면, 부모 메서드는 호출되지 않음
    greetings(val = 'hello'){ 
        console.log(val);
    }

}

let american = new American('USA','female','English')
console.log(american); // 

american.greetings(); // hello