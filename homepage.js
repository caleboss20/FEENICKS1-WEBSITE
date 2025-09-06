 
 
 
 
 //for the typing animation//

//  const sentences = [
//     "Welcome to Feenicks1 Solutions Ltd",
//     "We Are Your Trusted Investment Partners",
//     "We Believe In A Long Term Financial Growth",
//     "Long term goals to fuel your future ",
//    " Your Future Starts with One Smart Move today"
   

//   ];
  let part = 0;
  let index = 0;
  let currentText = '';
  let isDeleting = false;
  const textElement = document.querySelector('.pop-up-maintext');
  
  function type() {
    const fullText = sentences[part];
    if (isDeleting) {
      currentText = fullText.substring(0, index--);
    } else {
      currentText = fullText.substring(0, index++);
    }
    textElement.textContent = currentText;
    if (!isDeleting && index === fullText.length + 1) {
      // Pause after typing full sentence
      isDeleting = true;
      setTimeout(type, 2000);
      return;
    }
    if (isDeleting && index === 0) {
      // Move to next sentence
      isDeleting = false;
      part = (part + 1) % sentences.length;
    }
    const speed = isDeleting ? 60 : 100;
    setTimeout(type, speed);
  }
  // Start typing after page load
  window.onload = () => type();

 
 
 
 
 
 
 
 const counters = document.querySelectorAll('.stat-number');
  const speed = 150;

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 100);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };

    updateCount();
  });


  //for the calculator//

   function openPopup() {
      document.getElementById('investmentPopup').style.display = 'flex';
    }

    function closePopup() {
      document.getElementById('investmentPopup').style.display = 'none';
      document.getElementById('result').innerHTML = '';
    }

    function calculateAdvice() {
      const amount = parseFloat(document.getElementById('amount').value);
      const resultDiv = document.getElementById('result');

      if (!amount || amount <= 0) {
        resultDiv.innerHTML = "<strong>Please enter a valid amount.</strong>";
        return;
      }

      
     let advice_btn=document.querySelector('.Professional-btn');
      let advice = "";
      let typing_bubble=document.querySelector('.typing-bubble');
      typing_bubble.style.display="block";

      if(amount < 100){
       advice_btn.style.display="none";
        setTimeout(()=>{
       advice_btn.innerHTML=`Start Investing Now`; 
       typing_bubble.style.display="block"; 

        },2000)
        
        setTimeout(()=>{
          typing_bubble.style.display="none";
           resultDiv.innerHTML = "Our Investment package starts from 100 cedis";
          advice_btn.style.display="block";
        },5000)
      }

      else if (amount < 1000) {

      
        advice_btn.style.display="none";
        setTimeout(()=>{
    
       typing_bubble.style.display="block"; 

        },2000)
        
        setTimeout(()=>{
          typing_bubble.style.display="none";
           resultDiv.innerHTML = "We recommend you start from a low risk **Growth Investment** plans.<br>ROI: ~8% annually";
         
             advice_btn.innerHTML=`Start Investing Now`; 
        },5000)

        setTimeout(()=>{
           advice_btn.style.display="block";
        },6000)
       
       
      } else if (amount >= 1000 && amount < 5000) {
      
       
       
        advice_btn.style.display="none";
        setTimeout(()=>{
       advice_btn.innerHTML=`Start Investing Now`; 
       typing_bubble.style.display="block"; 

        },2000)
        
        setTimeout(()=>{
          typing_bubble.style.display="none";
           resultDiv.innerHTML = " You qualify for **Growth Investment** plans.<br>ROI: ~12% annually.";
          advice_btn.style.display="block";
        },5000)


      } else if (amount >= 5000 && amount < 20000) {
       
       advice_btn.style.display="none";
        setTimeout(()=>{
       advice_btn.innerHTML=`Start Investing Now`; 
       typing_bubble.style.display="block"; 

        },2000)
        
        setTimeout(()=>{
          typing_bubble.style.display="none";
           resultDiv.innerHTML = `You are eligible for **Premium Investment** opportunities.<br>ROI: ~15% annually.`;
          advice_btn.style.display="block";
        },5000)

         
      } 
      
      
      else {
        
          advice_btn.style.display="none";
        setTimeout(()=>{
       advice_btn.innerHTML=`Start Investing Now`; 
       typing_bubble.style.display="block"; 

        },2000)
        
        setTimeout(()=>{
          typing_bubble.style.display="none";
           resultDiv.innerHTML = `We recommend our **Elite Investment Portfolio**.<br>ROI: ~20% annually with exclusive benefits.`;
          advice_btn.style.display="block";
        },5000)
       
      }

      resultDiv.innerHTML = advice;
    }

    //bubble//
    function bubble(){

    
  const button_advice=document.querySelector(".Professional-btn");
  const typing_bubble=document.querySelector(".typing-bubble");
  button_advice.style.display="none"; 
  typing_bubble.style.display="block";  
 
}
