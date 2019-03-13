let x,y;
y=x=3*5;
//console.log(`예제1) y : ${y} , x : ${x}`);

const a = 5;
const b = 3 - -x;  //5 + 3
//console.log(`예제2) b : ${b}`);

const s ="5";
const d = 3 + +s;  //3 + 5
//console.log(`예제3) d = ${d}`);

const x1=0,x2=3,x3=-1.5,x4=-6.33;
const p1= -x1*1;  //0
const p2= +x2*2;  //6
const p3= +x3*3;  //-4.5
const p4= -x4*4;  //25.32
//console.log(`예제4)${p1},${p2},${p3},${p4}`);

let a1=2;
const r1= a1++ + a1++; //2 + 3
const r2= ++a1 + ++a1; //5 + 6
const r3= a1++ + ++a1; //6 + 8
const r4= ++a1 + a1++; //9 + 9
let b1=10;
const r5= b1-- + b1--; //10 + 9
const r6= --b1 + --b1; //7 + 6
const r7= b1-- + --b1; //6 + 4
const r8= --b1 + b1--; //3 +3
//console.log(`예제5)${r1}, ${r2}, ${r3}, ${r4}, ${r5}, ${r6}, ${r7}, ${r8}`);

const n=5;
const m='5';
//console.log(n === m);//false
// console.log(n !== m);//true
// console.log(n === Number(m));//true
// console.log(n !== Number(m));//false
// console.log(n == s);//true
// console.log(n != s);//false

const n1={name:'an object'};
const m1={name:'an object'};
// console.log(n1 === m1);//false
// console.log(n1 !== m1);//true
// console.log(n1 == m1);//false
// console.log(n1 != m1);//true

let num=0;
while(1){
	num+=0.1;
	//console.log(`${num}`);
	//if(num === 0.3) break;//무한루프 : num가 더블형식이기 때문에
	if(Math.abs(num-0.3) < Number.EPSILON) break;
}
//console.log(`stopped at ${num}`);

//console.log(3+5+"8");//'8'+'8'
//console.log("3"+5+8);//'3' +'5'+'8'

const doIt = true;
const result = doIt? "Did it" : "Didn't do it."; //if-else
//console.log(result);

let xx=0,yy=10,z;
z=(xx++,yy++);
//z=xx++,yy++;
//console.log(xx,yy,z);

// console.log(typeof 1);
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof "");
// console.log(typeof {});
// console.log(typeof undefined);
// console.log(typeof Symbol());
// console.log(typeof function(){});

const obj ={bo:2,co:3,do:4}; //객체선언
const {ao,bo,co} = obj; //해체할당
//console.log(ao,bo,co); //do : error

const  obj1={bn:2,cn:3, dn:4};
let bn,cn,dn;
//{bn,cn,dn} = obj; //error
//console.log(({bn,cn,dn}= obj)); //객체 해체할당만할경우 괄호()필요

const arr =[1,2,3]; //배열선언
let [xo,yo] = arr; //배열 해체 할당
//console.log(xo,yo); //zo는 정의 되지 않아 error

const arr2 = [1,2,3,4,5];
let [q1,q2,...rest] = arr2;
//console.log(q1,q2,rest);//1 2 [3,4,5]

let v1=5,v2=10;
[v1,v2] =[v2,v1];
//console.log(v1,v2);




