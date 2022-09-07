//1
                
// let a=10,b=4,c=20;
// if (a>b && b<c) {
//     console.log(b)
// }else if (b>a && a<c) {
//     console.log(a)
// }else if (a>c && c<b) {
//     console.log(c)
// }else if (c>b && b<a) {
//     console.log(b)
// }
// else if (c>a && a<b) {
//     console.log(a)
// }
// else if (b>c && c<a) {
    let a1 = 1;
    console.log(a++)
// }


//2

// let a=1,b=4,c=3;
// if (a<b && b<c) {
//     console.log(b)
// }else if (b<a && a<c) {
//     console.log(a)
// }else if (a<c && c<b) {
//     console.log(c)
// }else if (c<b && b<a) {
//     console.log(b)
// }
// else if (c<a && a<b) {
//     console.log(a)
// }
// }else if (b<c && c<a) {
//     console.log(c)
// }

// 3

// let a = 10;
// let b = 10;
// if(a !== b){
//     console.log(b);
// }else if(a == b){
//     console.log(0);
// }

//4

// let x = 7;
// let y = 3;
// if(x > 0 && y > 0){
//     console.log("I-chorak");
// }else if(x < 0 && y > 0){
//     console.log("II-chorak");
// }else if(x > 0 && y <0){
//     console.log("III-chorak");
// }else if(x < 0 && y < 0){
//     console.log("IV-chorak");
// }

//5

// let x=-0.5;
// if (x>0) {
//     console.log(2*Math.sin(x));
// }
// else if (x<=0) {
//     console.log(Math.sin(x)-6);
// }

//6

// let x=6;
// if (x<-2 || 2<0) {
//     console.log(2*x);
// }
// else{
//     console.log(-3*x);
// }

//7

// let x=6;
// if (x<=0 ) {
//     console.log(-x);
// }
// else if(0<x && x<2){
//     console.log(x**2);
// }
// else if(x>=2){
//     console.log(x=4);
// }



//8

// let a=3,b=4,c=5;
// if (Math.sqrt(a**2+b**2)==c) {
//     console.log("yes");
// }else if (Math.sqrt(a**2+c**2)==b) {
//     console.log("yes");
// }else if (Math.sqrt(b**2+c**2)==a) {
//     console.log("yes");
// }else if (Math.sqrt(a**2+b**2)!==c ){
//     console.log("no");
// }else if (Math.sqrt(a**2+c**2)!==b ){
//     console.log("no");
// }else if (Math.sqrt(b**2+c**2)!==a ){
//     console.log("no");
// }

// 9

// let air = 25;
// if(air < 0){
//     console.log("Freezing");
// }else if(air >=1 && air <= 10){
//     console.log("Very Cold");
// }else if(air >=11 && air <= 20){
//     console.log("Cold");
// }else if(air >=21 && air <= 30){
//     console.log("Normal");
// }else if(air >=31 && air <= 100){
//     console.log("Very hot");
// }

//                                10
// let a =3;
// if (a === 0) {
//     console.log("Son 0ga Teng");
// }
//  if (a < 0 && a % 2 == -0) {
//     console.log("Manfiy Juft Son");
// } 
// else if (a < 0 && a % 2 == -1) {
//     console.log("Manfiy Toq Son");
// }
// else if (a > 0 && a % 2 == 1) {
//     console.log("Musbat Toq Son");
// }
// else if (a > 0 && a % 2 == 0) {
//     console.log("Musbat Juft Son");
// }

//                                11
// let a = 1;
// if((a % 2 == 0) && (a > 10 && a < 99)){
//     console.log("ikki xonali juft son");
// }else if((a % 2 == 1) && (a > 10 && a < 99)){
//     console.log("ikki xonali toq son");
// }else if((a % 2 == 1) && (a > 100 && a < 999)){
//     console.log("uch xonali toq son");
// }else if((a % 2 == 0) && (a > 100 && a < 999)){
//     console.log("uch xonali juft son");
// }else {
//     console.log("bir honali son kiritdingiz");
// }

//                                12
// let a = 0, s = 0;
// for(let i = 1; i < 10; i+=2){
//     s += a+i
//     console.log(s);
// }
//                                13
// let a = 5;
// let b = true;
// if(a >= 20 && b === true){
//     console.log(true);
// }else if(a >= 20 && b === false){
//     console.log(false);
// }else {
//     console.log(false);
// }

//                                14
// let a = 54;
// let b = a%10*10+ Math.trunc(a/10);
// if(a < b){
//     console.log(false);

// }else if (a === b){
//     console.log(true);
// }else {
//     console.log(true);
// }

//                                15
// let a = 1;
// let b = 10000 > a > 10 
// if(9<a && 100>a){
//     console.log(2);
// }
// else if(99<a && 1000>a){
//     console.log(3);
// }
// else if(999<a && 10000>a){
//     console.log(4);
// }else{
//     console.log(1);
// }

//                                16
// let a = 35;
// if(a >= 10 && a < 100){
//     let b = a%10 + Math.trunc(a/10);
//     console.log(b);
// }else if(a >= 100 && a < 1000){
//     let s = Math.trunc(a/100) + Math.trunc(a/10)%10+a%10; 
//     console.log(s);
// }else if(a >= 1000 && a < 10000){
//     let s = Math.trunc(a/1000) + Math.trunc(a/100)%10 + Math.trunc(a/10)%10 + a%10; 
//     console.log(s);
// }

//                                17?
let a = 35534;
let s = a%10;
let c = Math.trunc(a/10000)%10;
let b = Math.trunc(a/1000)%10;
let l = Math.trunc(a/100)%10;
let r = Math.trunc(a/10)%10;
if ((s)%2==1??c%2==1) {
    console.log(s+c);
}

//                                18
// let a = 585;
// let b = 68683354;
// let c = 51;
// console.log(Math.max(a,b,c));

//                                19
// let a = 56987;
// let b= Math.trunc(a/10000)%10;
// let l = a%10;
// let r =  Math.trunc(a/10)%10;
// let s = Math.trunc(a/100)%10;
// let c= Math.trunc(a/1000)%10;
// console.log(Math.max(b,l,r,s,c));
//                                20
// let a = 56987;
// let b= Math.trunc(a/10000)%10;
// let l = a%10;
// let r =  Math.trunc(a/10)%10;
// let s = Math.trunc(a/100)%10;
// let c= Math.trunc(a/1000)%10;
// console.log(Math.max(b,l,r,s,c));
