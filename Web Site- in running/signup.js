 
   const Name = document.getElementById('Name');
   const email = document.getElementById('email');
   const password = document.getElementById('password');
   const phone = document.getElementById('phone');
   const male = document.getElementById('male');
   const female = document.getElementById('female');
   const other = document.getElementById('other');
   const form = document.getElementById('form');

   form.addEventListener('submit', (e) => {
    e.preventDefault();
        validate();
 });
 
 const sendData = (sRate, count) => {
    if(sRate === count){
        alert('Created Account Successfull');
        location.href = `Login.html`; 
    }
  }

   const successMsg = () => {
    let formCon = document.getElementsByClassName("form-control");
     var count = formCon.length -1;
    for(var i =0; i<formCon.length; i++){
        if(formCon[i].className === "form-control success"){
         var sRate = 0 + i;
         console.log(sRate);
            sendData(sRate, count);
        }else{
            return false;
        }
    }

   }
  

   const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");                   
    if(atSymbol < 1) return false;                         
    var dot = emailVal.lastIndexOf('.');
    if(dot < atSymbol + 2) return false;                 
    if(dot === emailVal.length - 1) return false;        
    return true;
   }

    
   const validate = () => {
    const NameVal = Name.value.trim();
    const emailVal = email.value.trim(); 
    const passwordVal = password.value.trim();
    const phoneVal = phone.value.trim();

       // Name Validation
    if(NameVal === ""){
        showError(Name, "Name cannot be blank");
    }
    else if(NameVal.length < 3){
        showError(Name, "Name min 3 char");
    }
    else{
        showSuccess(Name);
    }
          
     // email validation
    if(emailVal === ""){
        showError(email, 'Email cannot be blank');
       }else if (!isEmail(emailVal)){
        showError(email, 'Not a valid Email');
       }else {
        showSuccess(email);
       }
        
        // Password
      if(passwordVal === ""){
        showError(password, 'Password cannot be blank');
      }else if(passwordVal.length < 6){
        showError(password, 'password Min 6 char');
     }else{
        showSuccess(password);
      }

      
        // Phone number Validation
         if(phoneVal === ""){
            showError(phone, "Phone Number cannot be blank");
         }else if(phoneVal.length !==10){
             showError(phone, "Phone number must be 10 digit")
         }else{
            showSuccess(phone);
         }


         // Gender validation
      if(male.checked==true){
         showSuccess(male);
      }else if(female.checked==true){
        showSuccess(female);
      }else if(other.checked==true){
        showSuccess(other);
      }else{
        showError(male,"Select Gender");
      }

      

       successMsg();

       function showError(input, errormsgs) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small')
        formControl.className = 'form-control error';
        small.innerText = errormsgs;
       }

       function showSuccess(input){
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
       }

       }

      


       
    

   
     
  



    

