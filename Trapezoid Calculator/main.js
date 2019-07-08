// Area Calculator

// Event Listener
document.getElementById('calc-btn1').addEventListener('click', Area)
document.getElementById('calc-btn2').addEventListener('click', Perimeter)

// Event Function
function Area(){
    // INPUT- Get numbers
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let num3 = Number(document.getElementById('num3').value);
   
    
    // PROCESS- Calculate
    let Calculate = (num1 + num2)/2*num3

    // OUTPUT- Display 
    document.getElementById('result1').innerHTML = Calculate;
}

// Perimeter Calculator

// Event Listener
document.getElementById('calc-btn2').addEventListener('click', Perimeter)

// Event Function
function Perimeter(){
    // INPUT- Get number
    let num4 = Number(document.getElementById('num4').value);
    let num5 = Number(document.getElementById('num5').value);
    let num6 = Number(document.getElementById('num6').value);
    let num7 = Number(document.getElementById('num7').value);
   
    
    // PROCESS- Convert
    let Calculate = num4 + num5 + num6 + num7;

    // OUTPUT- Display 
    document.getElementById('result2').innerHTML = Calculate;
}