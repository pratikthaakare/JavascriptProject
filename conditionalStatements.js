function guesstheNumber(){
    //guess the number is positive or negative
    let number1 = prompt("Enter any number to continue: ")
 
if (number1 > 0){
    console.log("The number entered is Positive.")
}else if(number1 < 0){
    console.log('The number entered is Negative.')
}else{
    console.log("The Number entered is Zero.")
}
}

//second codeblock

function odd_even(){
    let number2 = prompt("Please Enter any number:"); 
    if (number2 <= 0) {
        console.log("Invalid input");
    } else if (number2 % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
    }
guesstheNumber();
odd_even();

function grades(){
    let percentage = prompt("Please Enter the percentage:")
    if (percentage >= 90){
        console.log("Grade A")
    }else if (percentage >= 75){
        console.log("Grade B")
    }else if (percentage >= 50){
        console.log("Grade C")
    }else if (percentage >=40){
        console.log("Grade D")
    }else if (percentage <40 ){
        console.log("Fail")
    }
    console.log(" **REMEMBER** Grades do not represent every aspect of school life , just the academics.")
}
grades();

function dayDate(){
    let DayNum = parseInt(prompt("Please chose a number between 1 and 7:"));
    let Day;
    if (DayNum === 1){
         Day = 'Sunday';
    }else if(DayNum === 2){
        Day = 'Monday';
    }else if(DayNum === 3){
        Day = 'Tuesday';
    }else if(DayNum === 4){
        Day = 'Wednesday';
    }else if(DayNum === 5){
        Day = 'Thursday';
    }else if(DayNum === 6){
        Day = 'Friday';
    }else if(DayNum === 7){
        Day = 'Saturday';
    }
    
    console.log("Your lucky day is: ",Day);
    }
    
    dayDate();