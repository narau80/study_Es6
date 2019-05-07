const arr= [1,null,'hello','world',true,undefined];
delete arr[3];

/*
join(구분자) : 구분자로 합쳐진 값을 반환
정의되지 않은 요소, 삭제된 요소 ,null, undefined 모두 빈 문자열로 취급
*/
let result = arr.join(); //defult : ,
console.log(result);// 1,,hello,,true,

result = arr.join("");
console.log(result);//1hellotrue

result = arr.join(" -- ");
console.log(result);//1 --  -- hello --  -- true --


const attr = ['Nimble','Perceptive','Generous'];
const html ='<ul><li>' + attr.join('</li><li>') + '</li></ul>';
console.log(html); //<ul><li>Nimble</li><li>Perceptive</li><li>Generous</li></ul>