
function getSelectValue(){
    var selectedValue = document.getElementById('list').value;
    console.log(selectedValue); 
    display();


    function display(){
    var x = document.getElementById('list').value;

    if (x == "Html5"){
    window.location = 'h.html';
    }
}
}
 // upload photo in profile
 const imgDiv = document.querySelector('.user-info');
 const img = document.querySelector('#photo');
 const file = document.querySelector('#file');
 const uploadBtn = document.querySelector('#uploadBtn');

 imgDiv.addEventListener('mouseenter', function(){
    uploadBtn.style.display = "block";
 });

 imgDiv.addEventListener('mouseleave', function(){
    uploadBtn.style.display ="none";
 });

 file.addEventListener('change', function(){
    const choosedFile = this.files[0];
    if(choosedFile){
        const reader = new FileReader();
        reader.addEventListener('load', function(){
        img.setAttribute('src', reader.result);
        });
         reader.readAsDataURL(choosedFile);
       
    }
 });


 





 

