const arr=[1,2,3,4,5];

arr.reverse();
console.log(arr);//5,4,3,2,1

arr.sort();
console.log(arr);//1,2,3,4,5

const arr2 =[{name:'Suzanne'},{name:'Jim'},{name:'Trevor'},{name:'Amanda'}];
arr2.sort();
console.log(arr2); //not changed.

arr2.sort((a,b) => a.name >b.name);
console.log(arr2);//Alphabet sort

arr2.sort((a,b)=> a.name[1] < b.name[1]);
console.log(arr2);//name[1] alphabet reverse sort