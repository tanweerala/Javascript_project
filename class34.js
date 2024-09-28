/* function sum(x , y){
    return x+y
}
console.log(sum(10,10)) */

/* var sum=function(x , y){
    //return x +y
    console.log(x)
    console.log(y)
    console.log(x+y)
}
sum(12,10)
 */

/* var sum1=(x,y)=> {
     console.log(x)
    console.log(y)
    console.log(x+y)
}

sum1(80,10) */



/* var sum2 = (x,y)=>[x+y ,y,y]
console.log(sum2(1,5)) */

 /* var num=11
if(num>10){
    console.log('grater')
}else if(num<10){
    console.log('less')
} else{
    console.log('equal')
}
 */

/* var num =2
if(num==1){
    console.log('one')
}else if(num==2){
    console.log('two')
} else if(num==3){
    console.log('three')
}else{
    console.log('Dont no ')
}

 */


/* var num=10
console.log(num>10 ? 'grater' : num<10 ? 'less' : 'equal')  */

/* var num=1
console.log(num==1 ? 'one' :num==2 ? 'tow' :num==3 ? 'three' : 'Dont now') */

// console.log(null ? '' : undefined ? 1 : 'Tanweer' ?  2>1: 3<1)

/* var arr =[10,20,30,40,50,60,70]
for(i=0 ; i<arr.length;i++){
    if(arr[i] <40){
        console.log(arr[i])
    }
}
 */
//or
function xyz(){
       var arr =[10,20,30,40,50,60,70]
    for(i=0 ; i<arr.length;i++){
       if(arr[i] >40){
          return arr[i]
       }
   }
}
console.log(xyz())