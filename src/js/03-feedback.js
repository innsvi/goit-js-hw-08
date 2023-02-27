import throttle from 'lodash.throttle';

// const formEl = document.querySelector('.feedback-form');

const refs = {
form: document.querySelector('.feedback-form'),
mail: document.querySelector('input'),
message: document.querySelector('textarea'),
};

const FORM_STATE = 'feedback-form-state';

// if (localStorage.getItem(FORM_STATE)) {
//   refs.email.value = JSON.parse(localStorage.getItem(FORM_STATE)).email || '';
//   refs.message.value =
//     JSON.parse(localStorage.getItem(FORM_STATE)).message || '';
// }


let result = {};

refs.form.addEventListener('input', throttle(handleFormInput, 500));
refs.form.addEventListener('submit', handlerFormSubmit);

populateInputData();

function handleFormInput() {
  result.email = refs.mail.value;
  result.message = refs.message.value;
  localStorage.setItem(FORM_STATE, JSON.stringify(result));
}

function handlerFormSubmit(e) {
  e.preventDefault();
  
  console.log(populateInputData())

  localStorage.removeItem(FORM_STATE);
  e.target.reset();
};

function populateInputData(){
    const savedData = JSON.parse(localStorage.getItem(FORM_STATE));
    if(savedData){
        refs.mail.value = savedData.email;
        refs.message.value = savedData.message;
        return savedData
    }
}

