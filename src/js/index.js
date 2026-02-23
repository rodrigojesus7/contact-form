const query = document.querySelectorAll('.query')
const radioInput = document.querySelectorAll('.radioInput')
const consentInput = document.querySelector('.consentInput')
const consentSvg = document.querySelector('.consentSvg')
const consentSvgPath = document.querySelector('.consentSvgPath')
const form = document.querySelector('.form')
const confirmationSection = document.querySelector('.confirmationSection')
const firstNameInput = document.querySelector('.firstNameInput')
const lastNameInput = document.querySelector('.lastNameInput')
const emailInput = document.querySelector('.emailInput')
const radioInputGeneralEnquiry = document.querySelector('.radioInputGeneralEnquiry')
const radioInputSuportRequest = document.querySelector('.radioInputSuportRequest')
const textarea = document.querySelector('.textarea')
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const errors = document.querySelectorAll('.formSection__container__inputContainer__error')
const consentError = document.querySelector('.submitSection__consentContainer__error')
const submitButton = document.querySelector('.submitSection__submitButton')
let confirmationText = document.querySelector('.confirmationSection__text')

radioInput.forEach((radio, index) => {

    radio.addEventListener('input', function () {

        query.forEach(query => {
            query.classList.remove('querySelected')
        })

        if (radio.checked) {
            query[index].classList.add('querySelected')
        }

    })
})


consentInput.addEventListener('input', function () {

    if (consentInput.checked) {
        consentSvg.classList.remove('consentSvgBorder')
        consentSvgPath.classList.remove('hidden')
    } else {
        consentSvg.classList.add('consentSvgBorder')
        consentSvgPath.classList.add('hidden')
    }

})


form.addEventListener('submit', function (submit) {
    submit.preventDefault()

    const isFormValid = verifyInputs();

    if (isFormValid) {

        confirmationText.innerHTML = `Thanks for completing the form, ${firstNameInput.value}.<br>We’ll be in touch soon!`
        confirmationSection.classList.remove('hidden');
        form.reset();

        query.forEach(query => {
            query.classList.remove('querySelected')
        })

        consentSvg.classList.add('consentSvgBorder');
        consentSvgPath.classList.add('hidden');

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        setTimeout(() => {
            confirmationSection.classList.add('hidden');
        }, 4500);
    }
});





function verifyInputs() {

    let isValid = true;

    errors.forEach(error => {
        error.classList.add('hidden')
    })

    consentError.classList.add('hidden')

    firstNameInput.classList.remove('errorBorder')
    lastNameInput.classList.remove('errorBorder')
    emailInput.classList.remove('errorBorder')
    textarea.classList.remove('errorBorder')

    firstNameInput.removeAttribute('aria-invalid')
    lastNameInput.removeAttribute('aria-invalid')
    emailInput.removeAttribute('aria-invalid')
    radioInputGeneralEnquiry.removeAttribute('aria-invalid')
    radioInputSuportRequest.removeAttribute('aria-invalid')
    textarea.removeAttribute('aria-invalid')
    consentInput.removeAttribute('aria-invalid')


    if (firstNameInput.value.trim() === "") {
        firstNameInput.classList.add('errorBorder')
        errors[0].classList.remove('hidden')

        firstNameInput.setAttribute('aria-invalid', 'true')
        isValid = false;
    }

    if (lastNameInput.value.trim() === "") {
        lastNameInput.classList.add('errorBorder')
        errors[1].classList.remove('hidden')

        lastNameInput.setAttribute('aria-invalid', 'true')
        isValid = false;
    }

    if (emailInput.value.trim() === "" || emailRegex.test(emailInput.value) === false) {
        emailInput.classList.add('errorBorder')
        errors[2].classList.remove('hidden')

        emailInput.setAttribute('aria-invalid', 'true')
        isValid = false;
    }

    if (!radioInputGeneralEnquiry.checked && !radioInputSuportRequest.checked) {
        errors[3].classList.remove('hidden');

        radioInputGeneralEnquiry.setAttribute('aria-invalid', 'true')
        radioInputSuportRequest.setAttribute('aria-invalid', 'true')
        isValid = false;
    }

    if (textarea.value.trim() === "") {
        textarea.classList.add('errorBorder')
        errors[4].classList.remove('hidden')

        textarea.setAttribute('aria-invalid', 'true')
        isValid = false;
    }

    if (!consentInput.checked) {
        consentError.classList.remove('hidden');

        consentInput.setAttribute('aria-invalid', 'true')
        isValid = false;
    } else {
        consentError.classList.add('hidden');
    }

    return isValid;
}