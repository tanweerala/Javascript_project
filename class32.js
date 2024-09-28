//Logical operator practice
// Loop



/* console.log(true && !(false && true) || !false || true &&  !true && (false && !true))
console.log(true && !(false && true) || !false || true &&  !true && false)
console.log(true && true || !false || true &&  !true && false)
console.log(true || !false || true &&  !true && false)
console.log(true || true &&  !true && false)
console.log(true || true &&  false)
console.log(true ||  false)
console.log(true )
 */

//Falsy value in JS are Six: 0,false, undefined,NaN,'',null


/*  
console.log(NaN || 3)
console.log(NaN && 3)
console.log( '' && 'a')
console.log( '' || 'a') 
*/


/*
 console.log( 5 && 6)
console.log( 5 && null)
console.log( null && 6)
console.log( null && null)
 */

/* console.log( 5 || 6)
console.log( 5 || null)
console.log( null || 6)
console.log( NaN ||null)

 */

/* 
console.log(3> 2> 1)  false

console.log( 5 < 3 && 5 > 3)  False

console.log( 5 < 4  > 2 <  false|| 8)
console.log( 5 < 4  > 3 <  false|| 8)
console.log( 5 < 4  > 3 <  false)
console.log( 5 < 4  > 3 )

 console.log([] == [])

 console.log('' == '')
 console.log([] == {})

 */


 /* var arr =[10,20,30,40,50]
//  var i=arr.length -1;


/*  while(i<arr.length -1){
    console.log( arr[i]*5);
    console.log('This is i value ',i)
    i=i+1

 }
 */
/* 
 while(i>=0){
    console.log( arr[i]*5);
     i--
 }

 */
/* 
 for( var i=0;i<arr.length;i++){
    console.log( arr[i]*5);
 } */

/*  for( var i=arr.length -1; i>=0 ; i--){
    console.log( arr[i]*5);
 } */


 

 /* console.log(arr[0] *5)
 console.log(arr[1] *5)
 console.log(arr[2] *5)
 console.log(arr[3] *5)
 console.log(arr[4] *5) */



 //given an array ,check if the value is odd .print  'odd number'. otherwise print 'even number'
  
 //Given an array, print the elements which is only greater the 100
// var arr =[15,6,78,98,7,5644,7675,575,6556,6766,7,55,5545,77656,8976,8087,4]

/* for(var i=0;i<arr.length;i++){
    if(arr[i] % 2 ==0){
        console.log('Even',arr[i])
    }else{
        console.log('Odd', arr[i])
    }
} */

//var i=0;
//while(i < arr.length){
    /* if(arr[i] % 2 ==0){
        console.log('Even',arr[i])
    }else{
        console.log('Odd', arr[i])
    } */



   /*  if(arr[i]>100){
        console.log(arr[i])
    }

    i++
    
}
 */

var obj ={name:"Tanweer", street:"4",address:{rn:4,flrn:4,member:{m:2,f:2}}}


// console.log(obj.name)
// console.log(obj.street)
// console.log(obj.address)
// console.log(obj.member)
console.log(obj.address.member.f)

