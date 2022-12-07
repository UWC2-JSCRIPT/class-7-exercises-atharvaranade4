
document.addEventListener("DOMContentLoaded", function(){
// TODO
    const firstName = document.getElementById('first-name')
    const lastName = document.getElementById("last-name")
    const email = document.querySelector('#email')
    const form = document.getElementById("connect-form")
    // console.log(firstName, lastName, email, form)
    let currentElementIsValid
	let emailIsValid

    function checkValidation(e){
		let currentElement = e.target

		currentElement.setCustomValidity("");
		if (currentElement.id === 'first-name' ||
            currentElement.id === 'last-name') {
				currentElementIsValid = currentElement.value.length >= 3
			if(!currentElementIsValid) {
				currentElement.classList.add('invalid')
				currentElement.setCustomValidity("Please use atleast 3 characters")
				currentElement.reportValidity()
			} else 
			{
				currentElement.classList.remove('invalid')
			}
		}
	}

    firstName.addEventListener('input', checkValidation)
    lastName.addEventListener('input', checkValidation)


    email.addEventListener("input", () => {
        let emailRegExp = /\w+@\w+\.\w+/
		emailIsValid = email.value.length === 0 || emailRegExp.test(email.value)
		if(!emailIsValid) {
			email.classList.add('invalid')
			email.setCustomValidity("Please enter valid email")
            email.reportValidity()
		} else {
			email.classList.remove('invalid')
		}
	})

    form.addEventListener("submit", (event) => {
        if(!NameIsValid || !emailIsValid || !websiteIsValid || !jobTitleIsValid) {
			console.log('Bad input')
            event.preventDefault()
		} else {
            console.log('Form successfully submitted!')
		}		
	})
})
