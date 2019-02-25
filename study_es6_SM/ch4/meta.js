/*
대괄호([])로 감싼 것은 옵션
생략부호(...)는 여기 들어갈 내용이 더 있다 는 뜻
단어는 플레이스홀더를 사용하며 그 의미는 문맥에서 알수 있다.
*/
while(condition)
	statement
//condition 이 참 같은 값이면 statement를 실행합니다.

if(condition)
	statement1
[else
	statement2]
//condition이 참 같은 값이면 statement1을 실행, 아니면 statement2를 실행
do
	statement
while(condition);
//statement는 최소한 한번 실행하고, condition이 참 같은 값인 동안 반복해서 실행

for([initialization], [condition]; [final-expression])
	statement
//루프에 들어가기 전에 initialization을 실행. condition이 true인 동안 statement를 실행하고, 
//final-expression를 실행한 다음 condition을 다시 체크

for(let temp, i=0, j=0; j<30; temp = i, i = j, j = i + temp)
	console.log(j);

/*
for 루프의 다른 패턴
*/
let s = '3';						//숫자가 들어있는 문자열
for(; s.length < 10; s= '' + s);	//문자열의 길이를조건으로. for루프 마지막에 세미콜론이 없으면 에러.

	for(let x = 0.2; x < 3.0; x +=0.2)	//제어 변수가 정수가 아니어도 괜찮
		console.log(x);

	for(; !player.isBroke;)		//조건에 객체 프로퍼티르 씀.
		console.log("Still playing!");

/*
for 루프를 while 루프로 고쳐 쓸수 있다.
*/
for([initialization]; [condition]; [final-expression])
	statement
/* 위 코드와 다음 코드는 똑같이 동작 */
[initialization]
while([condition]) {
	statement
	[final-expression]
}

switch(expression){
	case value1:
	// expression을 평가한 결과가 value1일 때 실행
	[break;]
	case value2:
	//expression을 평가한 결과가 value2일 때 실행
	[break;]
	...
	case valueN:
	//expression을 평가한 결과가 valueN일 때 실행
	[break;]
	default:
	//expression을 평가한 결과에 맞는것이 없을때 실행
	[break;]
}

/*
토마스 숫자에 대한 미신
*/
switch(totalBet) {
	case 7:
		totalBet = funds;
		break;
	case 11:
		totalBet = 0;
		break;
	case 13:
		totalBet = 0;
		break;
	case 21:
		totalBet = 21;
		break;
}
/*
위 문을 break 없이 case 절을 사용 
*/
switch(totalBet) {
	case 7:
		totalBet = funs;
		break;
	case 11:
	case 13:
		totalBet = 0;
		break;
	case 21 :
	totalBet = 21;
		break;
}

/*
13이 나왔을때 1 펜스 기부
*/
switch(totalBet){
	case 7 :
		totalBet = funs;
		break;
	case 13 :
		funds = funds -1;		//1펜스 기부 break 생략
	case 11:
		totalBet = 0;
		break;
	case 21:
		totalBet = 21;
		break;
}
/*
default 추가
*/

switch(totalBet){
	case 7 :
		totalBet = funs;
		break;
	case 13 :
		funds = funds -1;		//1펜스 기부 break 생략
	case 11:
		totalBet = 0;
		break;
	case 21:
		totalBet = 21;
		break;
	default :
		console.log("No superstition here!");
		break;
}
/*
return 문은 즉시 함수를 빠져나가므로 break 문 대신 쓸 수 있다.
*/
function adjustBet(totalBet, funds) {
	switch(totalBet) {
		case 7 :
			return funds;
		case 13 :
			return 0;
		default :
		return totalBet;
	}
}
/*
공백을 무시한 간결한 switch문
*/
switch(totalBet){
	case 7 : totalBet = funds; break;
	case 11 : totalBet = 0; break;
	case 13 : totalBet = 0; break; // 11과 13은 같은동작을 하지만, switch문을 줄바꿈 없이 쓸때는 case마다 실행문이 존재해야 명확
	case 21 : totalBet = 21; break;
}

/*
for...in
*/
for(variable in object)
	statement

/*
예제
*/
const player = { name: 'thomas', rank: 'Midshipman', age: 25};
for(let prop in player){
	if(!player.hasOwnProperty(prop)) continue;
	console.log(prop + ':' + player[prop]);
}

/*
for...of 루프 Es6에서 새로 생긴 반복문
*/
for(variable of object)
	statement

/*
예제
*/
const hand = [randFace(), randFace(), randFace()];
for(let face of hand)
	console.log(`You rolled...${face}!`);

/*
index를 알아야 한다면 일반적인 for루프 사용
*/
const hand = [randFace(), randFace(), randFace()];
for(let i = 0; i < hand.length; i++){
	console.log(`Roll ${i + 1}: ${hand[i]}`);
}

/*
반복문 안에 조건문
*/
while(funds > 1 && funds < 100){
	let totalBet = rand(1, funds);
	if(totalBet === 13){
		console.log("Unlucky! Skip this round....");
	}else{
		//플레이..
	}
}
/*
continue 문을 이용하여 구조를 간결하게
*/
wile(funds > 1 && funds < 100) {
	let totalBet = rand(1, funds);
	if(totalBet === 13){
		console.log("Unlucky! Skip this round....");
		continue;
	}
	//플레이...

}

/*
숫자 수천개의 리스트에서 가장 앞에 있는 소수 찾기
*/
let firstPrime = null;
for(let n of bigArrayOfNumbers) {
	if(isPrime(n) && firstPrime === null) firstPrime = n; //isPrime -> 어떤 배열 요소가 소수인지 확인
}

/*
break문 사용하여 루프 빠져나가기
*/
let firstPrime = null;
for(let n of bigArrayOfNumbers){
	if(isPrime(n)) {
		firstPrime = n;
		break;
	}
}

/*
index값 사용하기
*/
let i = 0;
for(; i < bigArrayOfNumbers.length; i++){
	if(isPrime(bigArrayOfNumbers(i))) break;
}
if(i === bigArrayOfNumbers.length) console.log('No prime nymbers!');
else console.log(`First prime number found at position ${i}`);

/*
splice 이용 index 감소
*/
for(let i = bigArrayOfNumbers.length - 1; i >= 0; i--){
	if(isPrime(bigArrayOfNumbers[i])) bigArrayOfNumbers.splice(i, 1); // splice -> 배열요소를 추가하더나 제거할때 
}