/*
document.addEventListener("DOMContentLoaded", function(){
// TODO
    const firstName = document.getElementById('first-name')
    const lastName = document.getElementById("last-name")
    const email = document.querySelector('#email')
    const form = document.getElementById("connect-form")
    console.log(firstName, lastName, email, form)
    let firstNameIsValid
	let lastNameIsValid
	let emailIsValid

    
    firstName.addEventListener('input', () => {
		firstNameIsValid = firstName.value.length >= 3
		if(!firstNameIsValid) {
			firstName.classList.add('invalid')
			firstName.setCustomValidity("Please use atleast 3 characters")
            firstName.reportValidity()
		} else {
			firstName.classList.remove('invalid')
		}
	})
    lastName.addEventListener('input', () => {
		lastNameIsValid = lastName.value.length >= 3
		if(!lastNameIsValid) {
			lastName.classList.add('invalid')
			lastName.setCustomValidity("Please use atleast 3 characters")
            lastName.reportValidity()
		} else {
			lastName.classList.remove('invalid')
		}
	})    

    email.addEventListener("input", () => {
        let emailRegExp = /\w+@\w+\.\w+/
		emailIsValid = emailRegExp.test(email.value)
		if(!emailIsValid) {
			email.classList.add('invalid')
			email.setCustomValidity("Please enter valid email")
            email.reportValidity()
		} else {
			email.classList.remove('invalid')
		}
	})

	form.addEventListener("submit", (event) => {
        if(firstNameIsValid && lastNameIsValid && emailIsValid) {
            console.log('Form successfully submitted!')
		} else {
            event.preventDefault()
			console.log('Bad input')
		}
		
	})
})


document.addEventListener("DOMContentLoaded", function() {
    // TODO
	let form = document.querySelector('#connect-form')
	let firstName = document.querySelector('#first-name')
	let lastName = document.querySelector('#last-name')
	let email = document.querySelector('#email')

    let lastNameMsg = document.querySelector('#last-name + small')

	let emailRegExp = /\w+@\w+\.\w+/

	let firstNameIsValid
	let lastNameIsValid
	let emailIsValid

	firstName.addEventListener('input', () => {
		firstNameIsValid = firstName.value.length >= 3
		if(!firstNameIsValid) {
			firstName.classList.add('invalid')
            firstName.setCustomValidity("Please use atleast 3 characters")
            firstName.reportValidity()
			//firstNameMsg.textContent = `Please use 3 or more characters!. Number of characters is ${firstName.value.length}`
		} else {
			firstName.classList.remove('invalid')
			//firstNameMsg.textContent = ''
		}
	})
	lastName.addEventListener('input', () => {
		lastNameIsValid = lastName.value.length >= 3
		if(!lastNameIsValid) {
			lastName.classList.add('invalid')
			lastNameMsg.textContent = `Please use 3 or more characters!. Number of characters is ${lastName.value.length}`
		} else {
			lastName.classList.remove('invalid')
			lastNameMsg.textContent = ''
		}
	})
	email.addEventListener("input", () => {
		emailIsValid = email.value.length === 0 || emailRegExp.test(email.value)
		if(!emailIsValid) {
			email.classList.add('invalid')
			emailMsg.textContent = 'Please enter a valid email address'
		} else {
			email.classList.remove('invalid')
			emailMsg.textContent = ''
		}
	})
	form.addEventListener("submit", (event) => {
		
		if(firstNameIsValid && lastNameIsValid && emailIsValid) {
			console.log('Form successfully submitted!')
		} else {
            event.preventDefault()
			console.log('Bad input')
		}
		
	})
})
*/
