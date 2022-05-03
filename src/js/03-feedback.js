import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const feedbackFormEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('[name="email"]');
const textareaEl = document.querySelector('[name="message"]');

let formData = {
    email: '',
    message: '',
};

feedbackFormEl.addEventListener('input', throttle(onFormInputChange, 500));
feedbackFormEl.addEventListener('submit', onFormSubmit);


function onFormInputChange(e){
formData[e.target.name] = e.target.value;
localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function onFormSubmit (e) {
    e.preventDefault();
    console.log(formData);
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData.email = '';
    formData.message = '';
}
afterReloadPage(); 

function afterReloadPage() {
    const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (storageData){
    inputEl.value = storageData.email;
    textareaEl.value = storageData.message;
    formData.email = storageData.email;
    formData.message = storageData.message;
    };
}



