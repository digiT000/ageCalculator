"use strict";

let day = document.getElementById('inputDay');
let month = document.getElementById('inputMonth');
let year = document.getElementById('inputYear');
const submit = document.querySelector(".submit");
const dayError = document.querySelector('.errorDay');
const monthError = document.querySelector('.errorMonth');
const yearError = document.querySelector('.errorYear')
const resultDay = document.getElementById('valueDay');
const resultMonth = document.getElementById('valueMonth');
const resultYear = document.getElementById('valueYear')

const listMonth = {
    1 :"January",
    2 :"February",
    3 : "March",
    4 : "April",
    5 : "May",
    6 : "June",
    7 : "July",
    8 : "Augustus",
    9 : "September",
    10 :"October",
    11 : "November",
    12 : "December"
}

const currentDay = new Date().getDate()
const currentMonth = new Date().getMonth()+1;
const currnetYear = new Date().getFullYear();

function showError(errorType){
    errorType.classList.remove('hidden');
}


function calcAge(){

    let dayErrorTrue = 0;
    let monthErrorTrue = 0;
    let yearErrorTrue = 0;

    let inputDay = Number(day.value);
    let inputMonth = Number(month.value);
    let inputYear = Number(year.value)

    if(day.value === '' ){
        showError(dayError)
        dayError.textContent = "This field is required"
        dayErrorTrue = 1
    }
    else if(inputDay < 0 || inputDay >31){
        showError(dayError)
        dayError.textContent = "The day number is not between 1-31"
        dayErrorTrue = 1
    }else{
        dayError.classList.add('hidden')
        dayErrorTrue = 0

    }

    if(month.value === ''){
        showError(monthError);
        monthError.textContent = "This field is required"
        monthErrorTrue = 1;
    }
    else if(inputMonth < 1 || inputMonth > 12){
        showError(monthError);
        monthError.textContent = "The month number is not between 1-12"
        monthErrorTrue = 1;
    }
    else if(inputMonth === 4 || inputMonth === 6 || inputMonth === 9 || inputMonth === 9 ){
        if(inputDay === 31){
            showError(dayError);
            dayError.textContent = `There are 30 days in ${listMonth[inputMonth]}l`
            dayErrorTrue = 1;
            
        }
        else{
            monthError.classList.add('hidden')
            monthErrorTrue = 0;
        }
    }else{
        monthError.classList.add('hidden')
        monthErrorTrue = 0;
    }
    if(year.value === ''){
        showError(yearError);
        yearError.textContent = "This field is required"
        yearErrorTrue = 1;
    }
    else if(inputYear > new Date().getFullYear()){
        showError(yearError);
        yearError.textContent = "The year is in the future"
        yearErrorTrue = 1;
    }
    else{
        yearError.classList.add('hidden')
        yearErrorTrue = 0;
    }

    //RESULT---
    if(dayErrorTrue === 0 && monthErrorTrue === 0 && yearErrorTrue === 0){
        if(currentDay < inputDay){
            inputMonth++;
            inputDay = currentDay - inputDay + 31;
            resultDay.textContent = inputDay; 
        }
        else{
            inputDay = currentDay - inputDay ;
            resultDay.textContent = inputDay;
        }

        if(currentMonth < inputMonth){
            inputYear++;
            inputMonth = currentMonth - inputMonth + 12; 
            resultMonth.textContent = inputMonth
        }
        else{
            inputMonth = currentMonth  - inputMonth 
            resultMonth.textContent = inputMonth 
        }
        
        inputYear = currnetYear - inputYear;
        resultYear.textContent = inputYear
    
    }
   
}


submit.addEventListener('click',calcAge);


