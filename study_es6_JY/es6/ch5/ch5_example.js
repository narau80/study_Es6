// **** p140 ****
let x,y;
y = x = 3 * 5;
//y = x = 15;
//y = 15;
//15;

console.log(y); //15


// **** p143 (1) ****
const s = "5";
const y = 3 + +s;
console.log(y);

const x1 = 0, x2 = 3, x3 = -1.5, x4= -6.33;
const p1 = -x1*1;
console.log(p1);	//0
const p2 = +x2*2;
console.log(p2);	//6
const p3 = +x3*3;
console.log(p3);	//4.5
const p4 = -x4*4;
console.log(p4);	//25.32


// **** p143 (2) ****
let x = 2;
const r1 = x++ + x++; 
console.log(r1);	//2 + 3 = 5
console.log(`x = ${x}`);	//4
const r2 = ++x + ++x;
console.log(r2);	//5 + 6 = 11
console.log(`x = ${x}`);	//6
const r3 = x++ + ++x;
console.log(r3);	//6 + 8 = 14
console.log(`x = ${x}`);	//8
const r4 = ++x + x++;
console.log(r4);	//9 + 9 = 18
console.log(`x = ${x}`);		// 10

let y = 10;
const r5 = y-- + y--;	
console.log(r5);			//10 + 9 = 19
console.log(`y = ${y}`);	//8
const r6 = --y + --y;		
console.log(r6);			//7 + 6 = 13
console.log(`y = ${y}`);	//6
const r7 = y-- + --y;
console.log(r7);			//6 + 4 = 10
console.log(`y = ${y}`);	//4
const r8 = --y + y--;
console.log(r8);			//3 + 3 = 6
console.log(`y = ${y}`);	//2


// **** p146 ****
let x = 3, y;
x += y = 6*5/2;
console.log(x);

// **** p148 ****
let n = 0;
while (true) {
	n += 0.1;
	console.log(n);
	if (n === 0.3) break;
}
console.log(`Stopped at ${n}`);

// **** p153 ****
const skipIt = true;
let x = 0;
const result = skipIt || x++;
console.log(result);	//true

const doIt = false;
let x = 0;
const result = doIt && x++;
console.log(result);	//false

// **** p154 ****
const suppliedOptions = 1;
const options = suppliedOptions || {name : "Default"};
console.log(options);

// **** p157 (1) ****
let n = 2;
n >> 1;
console.log(n);	//2
n >>> 1;		
console.log(n);	//2
n = ~n;
console.log(n);	//-3
n++;
console.log(n);	//-2
n >> 1;
console.log(n);	//-2
n >>> 1;
console.log(n);	//-2


// **** p158 ****
const FLAG_EXECUTE = 1;
const FLAG_WRITE = 2;
const FLAG_READ = 4;

let p = FLAG_READ | FLAG_WRITE;
let hasWrite = p & FLAG_WRITE;
let hasExecute = p & FLAG_EXECUTE;
p = p ^ FLAG_WRITE;
p = p ^ FLAG_WRITE;
console.log(p);	//6

const hasReadOrExecute = p & (FLAG_READ | FLAG_EXECUTE);
const hasReadAndExecute = p & (FLAG_READ | FLAG_EXECUTE) === FLAG_READ | FLAG_EXECUTE;
console.log(hasReadOrExecute);	//4
console.log(hasReadAndExecute);	//1

// **** p159 ****
console.log(typeof undefined);
console.log(typeof null);
console.log({});
console.log(typeof true);
console.log(typeof 1);
console.log(typeof "");
console.log(typeof Symbol());
console.log(typeof function() {});
//책 반환값과 결과 같음


// **** p160 ****
let v, v0;
v = v0 = 9.8;

const nums = [3, 5, 15, 7, 5];
let n, i = 0;
while ((n = nums[i]) < 10 && i++ < nums.length) {
	console.log(`Number less than 10: ${n}.`);	
}
console.log(`Number greater than 10 found: ${n}.`);
console.log(`${nums.length - i - 1} numbers remain.`);
/*
Number less than 10: 3.
Number less than 10: 5.
Number greater than 10 found: 15.
2 numbers remain.
*/


// **** p161 ****
const obj = {b:2, c:3, d:4};

const {a, b, c} = obj;

// **** p162(1) ****
const obj = {b:2, c:3, d:4};
let a,b,c;
//에러 남
{a,b,c} = obj;
//동작 함
({a, b, c} = obj);

// **** p162(2) ****
//배열 선언
const arr = [1, 2, 3];

//배열 해체 할당
let [x,y] = arr;
x;
y;
z;

// **** p162(3) ****
const arr = [1, 2, 3, 4, 5];

let [x,y, ...rest] = arr;
x;
y;
rest;

// **** p163 ****
let a = 5, b = 10;
[a, b] = [b, a];


// **** p164 ****
const roomTempC = 21.5;
let currentTempC = 19.5;
const message = `The current temperature is ` + `${currentTempC - roomTempC}\u00b0C different than room temperature.`;
const fahrenheit = `The current temperature is ${currentTempC * 9/5 + 32}\u00b0F`;
console.log(message);
console.log(fahrenheit);

//The current temperature is -2°C different than room temperature.
//The current temperature is 67.1°F
