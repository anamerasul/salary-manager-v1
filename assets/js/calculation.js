

// income input function with handling error
function IncomeFunction(inputId,incometextID,incomeinvalidID,message){

        const incomeInput=document.getElementById(inputId);
        const incomeInputValueText=incomeInput.value;
        const incomeInputValue=parseFloat(incomeInputValueText);

        if(incomeInputValue>0){
                document.getElementById(incometextID).innerHTML=`<span>your income is</span><span id="income-ammout"> ${incomeInputValue}</span>`
                incomeInput.value='';
                return incomeInputValue;
        }

        else{
                        document.getElementById(incomeinvalidID).innerText=message;
                
        }

       




}

// expense input function with validation

function expensevalidation(inputID,inputmessageId,message){
        const ExpenseInput=document.getElementById(inputID);
        const ExpenseInputValueText=ExpenseInput.value;
        const ExpenseInputValue=parseFloat(ExpenseInputValueText);
        if(ExpenseInputValue>0){
                ExpenseInput.value='';
                return ExpenseInputValue;

        }
        else{
                const Meassage=document.getElementById(inputmessageId);
                Meassage.innerText=message;

        }

        
}

function calculation(){

        const incomeInputValue = IncomeFunction('income-input','income-text','income-invalid','please use a number as positve');
        const ExpensefoodInputValue= expensevalidation('food-input','food-input-worng','please use a number as positve');
        const ExpenseRentInputValue= expensevalidation('rent-input','rent-input-worng','please use a number as positve');
        const ExpenseClothInputValue=  expensevalidation('cloth-input','cloth-input-worng','please use a number as positve');

        const remainingvalue=remainingAmmoutFunction()

        // document.getElementById('income-text').innerHTML=`<span>your income is</span><span id="income-ammout"> ${incomeInputValue}</span>`

        // const ExpensefoodInput=document.getElementById('food-input');
        // const ExpensefoodInputValueText=ExpensefoodInput.value;
        // const ExpensefoodInputValue=parseFloat(ExpensefoodInputValueText);
        // const ExpenseRentInput=document.getElementById('rent-input');
        // const ExpenseRentInputValueText=ExpenseRentInput.value;
        // const ExpenseRentInputValue=parseFloat(ExpenseRentInputValueText);
        // console.log(ExpenseRentInputValue);
        // const ExpenseClothInput=document.getElementById('cloth-input');
        // const ExpenseClothInputValueText=ExpenseClothInput.value;
        // const ExpenseClothInputValue=parseFloat(ExpenseClothInputValueText);
        // console.log(ExpenseClothInputValue);
        // console.log(ExpensefoodInputValue);

        const totalExpenses=ExpenseClothInputValue+ExpensefoodInputValue+ExpenseRentInputValue;

        const expenseAmmount=document.getElementById('expense-ammout');
        // expenseAmmount.innerText=totalExpenses;

       

        const balanceAmmout=document.getElementById('balance-ammout');
        // balanceAmmout.innerText=incomeInputValue-totalExpenses;
        
        
       if(totalExpenses>incomeInputValue){
        expenseAmmount.innerText='you have not enough balance'
        balanceAmmout.innerText=incomeInputValue;

       }

       else if(remainingvalue>0){

        IncomeFunction('income-input','income-text','income-invalid','');
        expensevalidation('food-input','food-input-worng','');
        expensevalidation('rent-input','rent-input-worng','');
        expensevalidation('cloth-input','cloth-input-worng','');

        document.getElementById('remaining-ammout').innerText=remainingvalue-totalExpenses;
         expenseAmmount.innerText=totalExpenses;
         balanceAmmout.innerText=remainingvalue-totalExpenses;


       }

         else{
                expenseAmmount.innerText=totalExpenses;
                balanceAmmout.innerText=incomeInputValue-totalExpenses;

        
        }
}

// handle calculate button

document.getElementById('calculate-btn').addEventListener('click', function(e){

        // console.log('clicked')

        // const incomeInput=document.getElementById('income-input');
        // const incomeInputValueText=incomeInput.value;
        // const incomeInputValue=parseFloat(incomeInputValueText)
        // console.log(incomeInputValue)

        // console.log(typeof incomeInputValueText)
        // console.log(typeof incomeInputValue);

        // document.getElementById('income-text').innerHTML=`<span>your income is</span><span id="income-ammout"> ${incomeInputValue}</span>`

        // const ExpensefoodInput=document.getElementById('food-input');
        // const ExpensefoodInputValueText=ExpensefoodInput.value;
        // const ExpensefoodInputValue=parseFloat(ExpensefoodInputValueText);
        // const ExpenseRentInput=document.getElementById('rent-input');
        // const ExpenseRentInputValueText=ExpenseRentInput.value;
        // const ExpenseRentInputValue=parseFloat(ExpenseRentInputValueText);
        // console.log(ExpenseRentInputValue);
        // const ExpenseClothInput=document.getElementById('cloth-input');
        // const ExpenseClothInputValueText=ExpenseClothInput.value;
        // const ExpenseClothInputValue=parseFloat(ExpenseClothInputValueText);
        // console.log(ExpenseClothInputValue);
        // console.log(ExpensefoodInputValue);

        // const totalExpenses=ExpenseClothInputValue+ExpensefoodInputValue+ExpenseRentInputValue;

        // const expenseAmmount=document.getElementById('expense-ammout');
        // expenseAmmount.innerText=totalExpenses;

        // const balanceAmmout=document.getElementById('balance-ammout');
        // balanceAmmout.innerText=incomeInputValue-totalExpenses;
        // incomeInput.value='';
        // ExpensefoodInput.value='';
        // ExpenseRentInput.value='';
        // ExpenseClothInput.value='';

        calculation();

})
// saveInputFunction
function saveInputFunction(){
        const saveInput =document.getElementById('save-input');

        const saveInputValueText=saveInput.value;
        const saveInputValue=parseFloat(saveInputValueText);

        if (saveInputValue>=0){
                saveInput.value='';
                return saveInputValue;
        }

        else{
                document.getElementById('save-input-error').innerText='please type a positive value'
        }
}


function  incomeAmmountFunction(){
        const incomeAmmout=document.getElementById('income-ammout');
        const incomeAmmoutText=incomeAmmout.innerText;
        const incomeAmmoutValue=parseFloat(incomeAmmoutText);
        
        if(incomeAmmoutValue>0){
                return incomeAmmoutValue;
        }

        else{
                return false;
        }
}

function  remainingAmmoutFunction(){
        const remainingAmmout=document.getElementById('remaining-ammout');
        const remainingvaluetext=remainingAmmout.innerText;
        const remainingvalue=parseFloat(remainingvaluetext);

        if(remainingvalue>0){


                return remainingvalue;
        }

}






// handle save button
document.getElementById('save-btn').addEventListener('click' ,function(e){
        // const saveInput =document.getElementById('save-input');

        // const saveInputValueText=saveInput.value;
        // const saveInputValue=parseFloat(saveInputValueText);
        const saveInputValue=saveInputFunction();

        const incomeInputValue = IncomeFunction('income-input','income-text','income-invalid','please use a number as positve');

        // const incomeAmmout=document.getElementById('income-ammout');
        // const incomeAmmoutText=incomeAmmout.innerText;
        // const incomeAmmoutValue=parseFloat(incomeAmmoutText);
        const incomeAmmoutValue=incomeAmmountFunction();

        const savingsAmmout=document.getElementById('savings-ammout');

        const balanceAmmout=document.getElementById('balance-ammout');

        const balanceAmmouttext=balanceAmmout.innerText;
        const balanceAmmountValue=parseFloat(balanceAmmouttext);

        const remainingAmmout=document.getElementById('remaining-ammout');

        if(incomeInputValue>0){

                if(incomeInputValue<(incomeInputValue*(saveInputValue/100))){
                        savingsAmmout.innerText='you have not enough balance for savings';  
                
                        remainingAmmout.innerText=(incomeInputValue*(saveInputValue/100))- incomeInputValue;      

                }
                else{

                savingsAmmout.innerText=incomeInputValue*(saveInputValue/100);  
                
                remainingAmmout.innerText=incomeInputValue-(incomeInputValue*(saveInputValue/100))
                }
        }

        else if(incomeAmmoutValue>0){

                if(balanceAmmountValue<(incomeAmmoutValue*(saveInputValue/100))){
                        savingsAmmout.innerText='you do not have enough balance for saving'
                        remainingAmmout.innerText=balanceAmmountValue;    
                }
                else{
                savingsAmmout.innerText=incomeAmmoutValue*(saveInputValue/100) 


                
                remainingAmmout.innerText=incomeAmmoutValue-(incomeAmmoutValue*(saveInputValue/100))
                }
        }



        // savingsAmmout.innerText=incomeAmmoutValue*(saveInputValue/100);

        // const balanceAmmout=document.getElementById('balance-ammout');

        // const balanceAmmouttext=balanceAmmout.innerText;
        // const balanceAmmountValue=parseFloat(balanceAmmouttext);

        // const remainingAmmout=document.getElementById('remaining-ammout');

        // remainingAmmout.innerText=balanceAmmountValue-parseFloat(savingsAmmout.innerText);

        // incomeInput.value='';

       



})


