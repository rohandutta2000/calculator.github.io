let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenvalue='';
let screeneval='';
console.log("Delhi.")
for(item of buttons)
{
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log('Text=',buttonText);
        
        //operators
        if(buttonText=='x')
        {
            screenvalue += buttonText;
            screeneval += '*';
            screen.value=screenvalue;
        }
        else if(buttonText=='÷')
        {
            screenvalue +=buttonText;
            screeneval += '/';
            screen.value=screenvalue;
        }
        else if(buttonText=='+')
        {
            screenvalue +=buttonText;
            screeneval += buttonText;
            screen.value=screenvalue;
        }
        else if(buttonText=='-')
        {
            screenvalue +=buttonText;
            screeneval += buttonText;
            screen.value=screenvalue;
        }
        else if(buttonText=='%')    // percentage button is fixed
        {
            screenvalue +=buttonText;
            screeneval += '/100';
            screen.value=screenvalue;
        }
        else if(buttonText=='⌫')    //need to fix this backspace button
        {
            screenvalue -=screenvalue[1];
            screen.value=screenvalue;
        }
        else if(buttonText=='C')
        {
            screenvalue ="";
            screeneval ="";
            screen.value=screenvalue;
        }
        else if(buttonText=='𝝅')
        {
            screenvalue +='𝝅';
            screeneval += Math.PI/*.toFixed(3)*/;
            screen.value=screenvalue;
        }
        else if(buttonText=='(')
        {
            screenvalue +=buttonText;
            screeneval += buttonText;
            screen.value=screenvalue;
        }
        else if(buttonText==')')
        {
            screenvalue +=buttonText;
            screeneval += buttonText;
            screen.value=screenvalue;
        }

        //Numeric buttons
        else if(buttonText=='1')
        {
            screenvalue +=buttonText;
            screeneval += buttonText;
            screen.value=screenvalue;
        }
        else if(buttonText=='2')
        {
            screenvalue +=buttonText;
            screeneval += buttonText;
            screen.value=screenvalue;
        }
        else if(buttonText=='3')
        {
            screenvalue +=buttonText;
            screeneval += buttonText;
            screen.value=screenvalue;
        }
        else if(buttonText=='4')
        {
            screenvalue +=buttonText;
            screeneval += buttonText;
            screen.value=screenvalue;
        }
        else if(buttonText=='5')
        {
            screenvalue +=buttonText;
            screeneval += buttonText;
            screen.value=screenvalue;
        }
        else if(buttonText=='6')
        {
            screenvalue +=buttonText;
            screeneval += buttonText;
            screen.value=screenvalue;
        }
        else if(buttonText=='7')
        {
            screenvalue +=buttonText;
            screeneval += buttonText;
            screen.value=screenvalue;
        }
        else if(buttonText=='8')
        {
            screenvalue +=buttonText;
            screeneval += buttonText;
            screen.value=screenvalue;
        }
        else if(buttonText=='9')
        {
            screenvalue +=buttonText;
            screeneval += buttonText;
            screen.value=screenvalue;
        }
        else if(buttonText=='0')
        {
            screenvalue +=buttonText;
            screeneval += buttonText;
            screen.value=screenvalue;
        }
        else if(buttonText=='.')
        {
            screenvalue +=buttonText;
            screeneval += buttonText;
            screen.value=screenvalue;
        }
        else if(buttonText=='=')
        {
            screen.value=eval(screeneval);
            screenvalue =''+screen.value;
            screeneval =screenvalue;
        }
        else if(buttonText=='xy')        //power corrected
        {
            screenvalue +='^';
            screeneval += '**';
            screen.value=screenvalue;
        }

        //trigo functions
        else if(buttonText=='sin')
        {
            screenvalue +=buttonText+'(';
            screeneval += 'Math.'+buttonText+'(';
            screen.value=screenvalue;
        }
        else if(buttonText=='cos')
        {
            screenvalue +=buttonText+'(';
            screeneval += 'Math.'+buttonText+'(';
            screen.value=screenvalue;
        }
        else if(buttonText=='tan')
        {
            screenvalue +=buttonText+'(';
            screeneval += 'Math.'+buttonText+'(';
            screen.value=screenvalue;
        }
         else if( buttonText=='sec')        
        {
            screenvalue +=buttonText+'(';
            screeneval += '1/Math.cos(';
            screen.value=screenvalue;
        }
        else if(buttonText=='cosec')    
        {
            screenvalue +=buttonText+'(';
            screeneval += '1/Math.sin(';
            screen.value=screenvalue;
        }
        else if(buttonText=='cot')       
        {
            screenvalue +=buttonText+'(';
            screeneval += '1/Math.tan(';
            screen.value=screenvalue;
        }
        else if(buttonText=='sin-1')
        {
            screenvalue +=buttonText+'(';
            screeneval += 'Math.asin(';
            screen.value=screenvalue;
        }
        else if(buttonText=='cos-1')
        {
            screenvalue +=buttonText+'(';
            screeneval += 'Math.acos(';
            screen.value=screenvalue;
        }
        else if(buttonText=='tan-1')
        {
            screenvalue +=buttonText+'(';
            screeneval += 'Math.atan(';
            screen.value=screenvalue;
        }   
        else if(buttonText=='cosec-1')      
        {
            screenvalue +=buttonText+'(';
            screeneval += 'Math.asin(1/';
            screen.value=screenvalue;
        }
        else if(buttonText=='sec-1')        
        {
            screenvalue +=buttonText+'(';
            screeneval += 'Math.acos(1/';
            screen.value=screenvalue;
        }
        else if(buttonText=='cot-1')         
        {
            screenvalue +=buttonText+'(';
            screeneval += 'Math.atan(1/';
            screen.value=screenvalue;
        }
        else
        {

        }
    })
}