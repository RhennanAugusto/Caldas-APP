const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation")
const perguntaidade = document.getElementById("perguntaidade")
const perguntaCaldas = document.getElementById("perguntavezesacaldas")
const perguntapoderdecompra = document.getElementById("perguntapoderdecompra")
const perguntaquemveio = document.getElementById("perguntaquemveio")
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");
const progress = document.getElementById("progress");


function navigateForms(fromForm, toForm) {
  
  if (fromForm === 'form1' || fromForm === 'form2') {
    checkInputs(fromForm);
  }

  document.getElementById(fromForm).style.display = 'none';
  document.getElementById(toForm).style.display = 'block';

  if (toForm === 'form1') {
    progress.style.width = '25%';
  } else if (toForm === 'form2') {
    progress.style.width = '57%';
  } else if (toForm === 'form3') {
    progress.style.width = '100%';
  }
}


form3.addEventListener('submit',(e) =>{
   e.preventDefault();


})

function checkInputs(formId) {
  const form = document.getElementById(formId);
  const inputs = form.querySelectorAll('input');
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;
  
  inputs.forEach(input => {
    const inputValue = input.value.trim();

    if (inputValue === "" ) {
      setErroFor(input, "Este campo é obrigatório");
      document.getElementById(fromForm).style.display = 'none';
      
    } else {
      setSuccessFor(input);
      
    }

    if(!checkEmail(emailValue)) {
      setErroFor(email, "Por favor , insira um email válido.")
    } else {
      setSuccessFor(email);
    }

    if (passwordValue.length < 7){
      setErroFor(password, 'A senha precisa ter no mínimo 7 caracteres')
    }else{
      setSuccessFor(password);
    }

    if(passwordConfirmationValue !== passwordValue ){
      setErroFor(passwordConfirmation, 'As senhas não conferem');
      document.getElementById(fromForm).style.display = 'none';
    }else{
      setSuccessFor(passwordConfirmation);
    }
  });
}


function setErroFor(input, message){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  small.innerText = message;

  formControl.className = "form-control error";

}


function setSuccessFor(input){
  const formControl = input.parentElement;

  formControl.className = "form-control success";

}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}


