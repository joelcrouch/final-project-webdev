let form = document.querySelector('form');


form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  // Add your code 
  console.log("===== Form submission ======");
  let user =document.querySelector("#username");
  let email =document.querySelector("#email");
  let answer = document.querySelector('#messageinput');
  if(user === null){
    console.warn("You must enter a name to submit this form");
  }
  else{console.log("Username:" + user.value);}
  if(email === null){
    console.warn("You must enter an email to submit this form");
  }
  else{console.log("email:" + email.value);}
  if(answer === null){
    console.warn("You must enter a message to submit this form");
  }
  else{console.log("Message:" + message.value);}
}