// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 префиксная форма инкремента(а = 1, с = 0) прибовляем а + а и присваеваем с получим 2 
// d = b++; alert(d);           // 1 постфиксная форма инкремента сначало выводим а потом прибовляем
// c = (2+ ++a); alert(c);      // 5 префиксная форма инкремента выполняется действие в скобках (2 + 2) потом выводим
// d = (2+ b++); alert(d);      // 4 постфиксная форма инкремента к b + 2 выводим 
// alert(a);                    // 3 а увеличивали 2 раза на 1
// alert(b);                    // 3 b увеличивали 2 раза на 1


// /*==================================================*/

// var a = 2;
// var x = 1 + (a *= 2);

// alert(5);


/*===================================================*/


// var a = -3;
// var b = -2;

// if(a > 0 && b > 0){
//     alert("разнасть двух чисел = "+  (a - b));
// }else if(a < 0 && b < 0){
//     alert("произведение двух чисел = "+ (a * b));
// }else{
//     alert("сумма двух чисел = "+ (a + b));
// }


/*==================================================== */


// var a = 2;

// switch(a){
//     case 0:
//         console.log(0);
    
//     case 1:
//         console.log(1);
          
//     case 2:
//         console.log(2);
        
//     case 3:
//         console.log(3);
        
//     case 4:
//         console.log(4);
        
//     case 5:
//         console.log(5);
        
//     case 6:
//         console.log(6);
        
//     case 7:
//         console.log(7);
        
//     case 8:
//         console.log(8);
        
//     case 9:
//         console.log(9);
        
//     case 10:
//         console.log(10);
        
//     case 11:
//         console.log(11);
        
//     case 12:
//         console.log(12);
        
//     case 13:
//         console.log(13);
        
//     case 14:
//         console.log(14);
        
//     case 15:
//         console.log(15);
//         break;
//     default:
//         alert("число вне диапозона");
// }


// function number(n){
//     if(n > 15){
//         return;
//     }
//     console.log(n);
//     number(n+1);
// };

// number(3);



/*===========================================*/

// var s;

// function sum (a,b){
//     s = a + b;
//     return s;
    
// };


// function difference (a,b){
//     s = a - b;
//     return s;
// };

// function composition (a,b){
//     s = a * b;
//     return a * b;
// };

// function division (a,b){
//     s = a / b;
//     return a / b;
// };

// function mathOperation (arg1, arg2, operation){
//     switch(operation){
//         case "+":
//             sum(arg1, arg2);
//             alert("сумма двух чисел = " + s);
//             break;
//         case "-":
//             difference(arg1, arg2);
//             alert("разнасть двух чисел = " + s);
//             break;
//         case "*":
//             composition(arg1, arg2);
//             alert("произведение двух чисел = " + s)
//             break;
//         case "/":
//             division(arg1, arg2);
//             alert("деление двух чисел = " + s)
//             break;
//     }
// };

// mathOperation(2,5,"*");



/*============================================================== */



// 0 == "nul"         //false
// 0 >= "nul"         //false
// 0 <= "nul"         //false
// 0 < "nul"          //false
// 0 > "nul"          //false
// 0 === "nul"         //false
// 0 != "nul"         //true
// 0 !== "nul"         //true


/*============================================================== */



function power(val, pow){
    
    return pow == 1 ? val : val * power(val, pow - 1);
}

alert(power(3, 3));










