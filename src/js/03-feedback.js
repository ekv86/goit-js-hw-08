import * as throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle((onClick), 500));
formEl.addEventListener('submit', onSubmit);

const formData = {};

getSavedItems();

function onClick(evt) {
    const formElements = evt.currentTarget.elements;
    const email = formElements.email.value;
    const message = formElements.message.value;
    
    formData.email = email;
    formData.message = message;
   
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}

function onSubmit(evt) {
    evt.preventDefault();
    formEl.reset();
    localStorage.removeItem("feedback-form-state");
    console.log(formData);
}

function getSavedItems() {
    const savedItems = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (savedItems) {
        formEl.elements.email.value = savedItems.email;
        formEl.elements.message.value = savedItems.message;
    }
}

