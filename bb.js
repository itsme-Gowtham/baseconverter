
function cbase() {
    var num1 = document.getElementById("bigbox").value;
    const num2 = document.getElementById("Base").value;
    
    var number1 = parseInt(num1, num2);
    
    if (!isNaN(number1)) {
        // Handle the case where the input is a valid number
        console.log("Result is: " + number1);
    } else {

        console.log("Invalid input: " + num1);
        document.getElementById("error-message").innerText = "Invalid input: " + num1;
    }
    
    return number1;
}



function base2()
{var numbers=[];
    var num1,num2,res=0,base=1;
    var dn;
    dn= num1=cbase()
   // dn=num1=getElementById(in1);
    
    var i = 0,j;
    while (dn!= 0) {
      dn=parseInt(dn/2);
      i++;
    }
    
    for( j=0;j<i;j++)
    {
        numbers.push(num1%2); 
        num1=parseInt(num1/2);
    } 

     for( j=0;j<i;j++)
    {
       res+=base*numbers[j];
        base*=10;
    }

    document.calci.base2.value=res;
   // let data=numbers;
}


function base3()
{var numbers=[];
    var num1,num2,res=0,base=1;
    var dn;
    dn= num1=cbase()
   
    var i = 0,j;
    while (dn!= 0) {
      dn=parseInt(dn/3);
      i++;
    }
    
    for( j=0;j<i;j++)
    {
        numbers.push(num1%3); 
        num1=parseInt(num1/3);
    } 

     for( j=0;j<i;j++)
    {
       res+=base*numbers[j];
        base*=10;
    }

    document.calci.base3.value=res;
}

function base4()
{var numbers=[];
    var num1,num2,res=0,base=1;
    var dn;
    dn= num1=cbase()
   
    var i = 0,j;
    while (dn!= 0) {
      dn=parseInt(dn/4);
      i++;
    }
    
    for( j=0;j<i;j++)
    {
        numbers.push(num1%4); 
        num1=parseInt(num1/4);
    } 

     for( j=0;j<i;j++)
    {
       res+=base*numbers[j];
        base*=10;
    }

    document.calci.base4.value=res;
}

function base5()
{var numbers=[];
    var num1,num2,res=0,base=1;
    var dn;
    dn= num1=cbase()
   
    var i = 0,j;
    while (dn!= 0) {
      dn=parseInt(dn/5);
      i++;
    }
    
    for( j=0;j<i;j++)
    {
        numbers.push(num1%5); 
        num1=parseInt(num1/5);
    } 

     for( j=0;j<i;j++)
    {
       res+=base*numbers[j];
        base*=10;
    }

    document.calci.base5.value=res;
}

function base6()
{var numbers=[];
    var num1,num2,res=0,base=1;
    var dn;
    dn= num1=cbase()
   
    var i = 0,j;
    while (dn!= 0) {
      dn=parseInt(dn/6);
      i++;
    }
    
    for( j=0;j<i;j++)
    {
        numbers.push(num1%6); 
        num1=parseInt(num1/6);
    } 

     for( j=0;j<i;j++)
    {
       res+=base*numbers[j];
        base*=10;
    }

    document.calci.base6.value=res;
}

function base7()
{var numbers=[];
    var num1,num2,res=0,base=1;
    var dn;
    dn= num1=cbase()
   
    var i = 0,j;
    while (dn!= 0) {
      dn=parseInt(dn/4);
      i++;
    }
    
    for( j=0;j<i;j++)
    {
        numbers.push(num1%7); 
        num1=parseInt(num1/7);
    } 

     for( j=0;j<i;j++)
    {
       res+=base*numbers[j];
        base*=10;
    }

    document.calci.base7.value=res;
}

function base8()
{var numbers=[];
    var num1,num2,res=0,base=1;
    var dn;
    dn= num1=cbase()
   
    var i = 0,j;
    while (dn!= 0) {
      dn=parseInt(dn/8);
      i++;
    }
    
    for( j=0;j<i;j++)
    {
        numbers.push(num1%8); 
        num1=parseInt(num1/8);
    } 

     for( j=0;j<i;j++)
    {
       res+=base*numbers[j];
        base*=10;
    }

    document.calci.base8.value=res;
}

function base9()
{var numbers=[];
    var num1,num2,res=0,base=1;
    var dn;
    dn= num1=cbase()
   
    var i = 0,j;
    while (dn!= 0) {
      dn=parseInt(dn/9);
      i++;
    }
    
    for( j=0;j<i;j++)
    {
        numbers.push(num1%9); 
        num1=parseInt(num1/9);
    } 

     for( j=0;j<i;j++)
    {
       res+=base*numbers[j];
        base*=10;
    }

    document.calci.base9.value=res;
}

function base10()
{var numbers=[];
    var num1,num2,res=0,base=1;
    var dn;
    dn= num1=cbase()
   
    var i = 0,j;
    while (dn!= 0) {
      dn=parseInt(dn/10);
      i++;
    }
    
    for( j=0;j<i;j++)
    {
        numbers.push(num1%10); 
        num1=parseInt(num1/10);
    } 

     for( j=0;j<i;j++)
    {
       res+=base*numbers[j];
        base*=10;
    }

    document.calci.base10.value=res;
}



function base11() {
    var numbers = [];
    var num1, res ="";
    var dn;
    dn = num1 = cbase()

    var i = 0, j;
    while (dn != 0) {
        dn = parseInt(dn / 11);
        i++;
    }

    for (j = 0; j < i; j++) {
        var remainder = num1 % 11;
        if (remainder === 10) {
            numbers.push("A");
        } else {
            numbers.push(remainder.toString()); 
        }
        num1 = parseInt(num1 / 11);
    }

    for (j = 0; j < i; j++) {
        res = numbers[j] + res; 
    }

    document.calci.base11.value = res;
}



function base12() {
    var numbers = [];
    var num1, res = "";
    var dn;
    dn = num1 = cbase()

    var i = 0, j;
    while (dn != 0) {
        dn = parseInt(dn / 12);
        i++;
    }

    for (j = 0; j < i; j++) {
        var remainder = num1 % 12;
        if (remainder === 10) {
            numbers.push("A");
        } 
        else if(remainder === 11)
        {
            numbers.push("B");
        }
        else {
            numbers.push(remainder.toString()); 
        }
        num1 = parseInt(num1 / 12);
    }

    for (j = 0; j < i; j++) {
        res = numbers[j] + res; 
    }

    document.calci.base12.value = res;
}


function base13() {
    var numbers = [];
    var num1, res = "";
    var dn;
    dn = num1 = cbase()

    var i = 0, j;
    while (dn != 0) {
        dn = parseInt(dn / 13);
        i++;
    }

    for (j = 0; j < i; j++) {
        var remainder = num1 % 13;
        if (remainder === 10) {
            numbers.push("A");
        } 
        else if(remainder === 11){
            numbers.push("B");
        }
        else if(remainder===12){
            numbers.push("C");
        }
        else {
            numbers.push(remainder.toString()); 
        }
        num1 = parseInt(num1 / 13);
    }

    for (j = 0; j < i; j++) {
        res = numbers[j] + res; 
    }

    document.calci.base13.value = res;
  //  event.preventDefault();

}





function base14() {
    var numbers = [];
    var num1, res = "";
    var dn;
    dn = num1 = cbase()

    var i = 0, j;
    while (dn != 0) {
        dn = parseInt(dn / 14);
        i++;
    }

    for (j = 0; j < i; j++) {
        var remainder = num1 % 14;
        if (remainder === 10) {
            numbers.push("A");
        } 
        else if(remainder === 11){
            numbers.push("B");
        }
        else if(remainder===12){
            numbers.push("C");
        }
        else if(remainder===13){
            numbers.push("D");
        }
        else {
            numbers.push(remainder.toString()); 
        }
        num1 = parseInt(num1 / 14);
    }

    for (j = 0; j < i; j++) {
        res = numbers[j] + res; 
    }

    document.calci.base14.value = res;
   // event.preventDefault();

}


function base15() {
    var numbers = [];
    var num1, res = "";
    var dn;
    dn = num1 = cbase()

    var i = 0, j;
    while (dn != 0) {
        dn = parseInt(dn / 15);
        i++;
    }

    for (j = 0; j < i; j++) {
        var remainder = num1 % 15;
        if (remainder === 10) {
            numbers.push("A");
        } 
        else if(remainder === 11){
            numbers.push("B");
        }
        else if(remainder===12){
            numbers.push("C");
        }
        else if(remainder===13){
            numbers.push("D");
        }
        else if(remainder===14){
            numbers.push("E");
        }
        else {
            numbers.push(remainder.toString()); 
        }
        num1 = parseInt(num1 / 15);
    }

    for (j = 0; j < i; j++) {
        res = numbers[j] + res; 
    }

    document.calci.base15.value = res;
   

}


function base16() {
    var numbers = [];
    var num1, res = "";
    var dn;
    dn = num1 = cbase()

    var i = 0, j;
    while (dn != 0) {
        dn = parseInt(dn / 16);
        i++;
    }

    for (j = 0; j < i; j++) {
        var remainder = num1 % 16;
        if (remainder === 10) {
            numbers.push("A");
        } 
        else if(remainder === 11){
            numbers.push("B");
        }
        else if(remainder===12){
            numbers.push("C");
        }
        else if(remainder===13){
            numbers.push("D");
        }
        else if(remainder===14){
            numbers.push("E");
        }
        else if(remainder===15){
            numbers.push("F");
        }
        else {
            numbers.push(remainder.toString()); 
        }
        num1 = parseInt(num1 / 16);
    }

    for (j = 0; j < i; j++) {
        res = numbers[j] + res; 
    }

    document.calci.base16.value = res;

}

function results(){

base2()
base3()
base4()
base5()
base6()
base7()
base8()
base9()
base10()
base11()
base12()
base13()
base14()
base15()
base16()
event.preventDefault();
}
 
// for( j=i;j>=0;j--)
// {
//     document.calci.in3.value=numbers[j];
//     console.log(numbers[j]);
// }
