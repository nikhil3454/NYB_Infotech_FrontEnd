/* loops in JavaScript
Loops are used to execute a block of code repeatedly until a specified condition is met. The most common loops in JavaScript are for, while, and do-while loops. The for loop is used to execute a block of code a specified number of times. The while loop is used to execute a block of code as long as a specified condition is true. The do-while loop is similar to the while loop, but it will always execute the block of code at least once, even if the condition is false.*/
/* for loop syntax is used to execute a block of code a specified number of times. The syntax of the for loop is:
for(initialization; condition; increment/decrement){
    // block of code to be executed 
}*/

for(let i=5; i>=0; i--){
    console.log(i);
}
let grades=[90,80,70,60,50]
for(let i=0; i<grades.length; i++){
    console.log(grades[i]);
}
for(let i=0; i<grades.length; i++){
    function grades(grade){
        switch(grade){
            case 90:
                console.log("You got A grade");
                break;
            case 80:
                console.log("You got B grade");
                break;
            case 70:
                console.log("You got C grade");
                break;
            case 60:
                console.log("You got D grade");
                break;
            default:
                console.log("You got F grade");
        }
    }
    grades(grades[i]);
}
// for loop to print even numbers and odd numbers from 1 to 50
for(let i=1; i<=50; i++){
    if(i%2==0){
        console.log(i+" is even number"); 
    } else {
        console.log(i+" is odd number");
    }
}

/* while loop syntax is used to execute a block of code as long as a specified condition is true. The syntax of the while loop is:
while(condition){
    // block of code to be executed 
}*/
let j=0
while(j<5){
    console.log(j);
    j++;
} // basic while loop to print numbers from 0 to 4

while(j<10){
    if (j%2==0){
        console.log(j+" is even number");
    } else {
        console.log(j+" is odd number");
    }   
}
/* do-while loop syntax is similar to the while loop, but it will always execute the block of code at least once, even if the condition is false. The syntax of the do-while loop is:
do{
    // block of code to be executed 
} while(condition); */  
do{
    console.log(j);
    j++;
} while(j<10);  