function bookConsultation(){

alert("Consultation Booked Successfully!");

}

function calculateBMI(){

let weight=document.getElementById("weight").value;

let height=document.getElementById("height").value/100;

let bmi=(weight/(height*height)).toFixed(2);

let message="";

if(bmi<18.5){

message="Underweight";

}

else if(bmi<25){

message="Normal Weight";

}

else if(bmi<30){

message="Overweight";

}

else{

message="Obese";

}

document.getElementById("result").innerHTML=

"Your BMI : "+bmi+" ("+message+")";

}

function submitForm(){

alert("Thank you! We will contact you soon.");

return false;

}