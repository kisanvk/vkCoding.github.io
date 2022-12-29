
             // Form Validation
   const email = document.getElementById('email');
   const password = document.getElementById('password');
   const form = document.getElementById('form');

   form.addEventListener('submit', (e) => {
    e.preventDefault();
        validate();
 })

 const sendData = (sRate, count) => {
    if(sRate === count){
        alert('Login Successfull')
        swal("Good job!", "You clicked the button!", "success");
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
  
        // email validation
   const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");                   
    if(atSymbol < 1) return false;                         
    var dot = emailVal.lastIndexOf('.');
    if(dot < atSymbol + 2) return false;                 
    if(dot === emailVal.length - 1) return false;        
    return true;
   }

      // trim white space
   const validate = () => {
    const emailVal = email.value.trim(); 
    const passwordVal = password.value.trim();

         // email validation
    if(emailVal === ""){
        showError(email, 'Email cannot be blank');
       }else if (!isEmail(emailVal)){
        showError(email, 'Not a valid Email');
       }else {
        showSuccess(email);
       }
         
     // password validation
    if(passwordVal === ""){
        showError(password, 'Password cannot be blank');
    }else if(passwordVal.length < 6){
        showError(password, 'password Min 6 char');
    }else{
        showSuccess(password);
    }
         
       successMsg();

         // set error message
      function showError(input, errormsgs) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small')
        formControl.className = 'form-control error';
        small.innerText = errormsgs;
      }
         // set success message
      function showSuccess(input){
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
       }


  }
            
   


    

