

document.getElementById("calc").addEventListener("click",()=>{
    const amount = parseFloat(document.getElementById('amount').value);
    const term = parseInt(document.getElementById("term").value);
    const rate = parseFloat(document.getElementById("rate").value)/100;
    const monthly_rate = rate/12;
    const n = term*12;

    document.getElementById("result").classList.remove("result")
    document.getElementById('result').classList.add("result-show");
    document.getElementById("res").classList.remove("res")
    document.getElementById("res").classList.add("res-show")
    document.getElementById("result-instruction").classList.remove("result-instruction")
    document.getElementById("result-instruction").classList.add("result-instruction-hidden")
    if(document.getElementById("repayment").checked){
        let monthly_amount = amount * (monthly_rate*Math.pow((1+monthly_rate),n))/(Math.pow((1+monthly_rate),n) - 1);
        document.getElementById("monthly").innerHTML= `£${monthly_amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        document.getElementById("total").innerHTML= `£${(monthly_amount*12*term).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }else if(document.getElementById("interest").checked){
        let monthly_amount = amount * monthly_rate;
        document.getElementById("monthly").innerHTML= `£${monthly_amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        document.getElementById("total").innerHTML= `£${(monthly_amount*12*term).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    }
})

const input1 = document.getElementById('amount');
const prefix = document.getElementById('logo1');
const input2 = document.getElementById('term');
const suffix1 = document.getElementById('logo2');
const input3 = document.getElementById('rate');
const suffix2 = document.getElementById('logo3');


input1.addEventListener('focus', () => {
    prefix.classList.add('focused');
});

input1.addEventListener('blur', () => {
    prefix.classList.remove('focused');
});
input2.addEventListener('focus', () => {
    suffix1.classList.add('focused');
});

input2.addEventListener('blur', () => {
    suffix1.classList.remove('focused');
});
input3.addEventListener('focus', () => {
    suffix2.classList.add('focused');
});

input3.addEventListener('blur', () => {
    suffix2.classList.remove('focused');
});

document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function() {
      document.querySelectorAll('.radio-field').forEach(field => {
        field.classList.remove('checked'); 
      });
  
      if (this.checked) {
        this.closest('.radio-field').classList.add('checked'); 
      }
    });
  });
  
  document.getElementById("clear").addEventListener('click',()=>{
    location.reload();
})