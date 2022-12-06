// TODO
document.addEventListener('DOMContentLoaded', function () {
    
    const divJobOpportunity = document.querySelector('.jobOpportunity')
    const divtalkCode = document.querySelector('.talkCode')
    
    const reasonSelect = document.querySelector('#contactReason')
    reasonSelect.addEventListener('change', () => {
        console.log(reasonSelect.value)
        if (reasonSelect.value === 'Job')
        {
        divJobOpportunity.classList.remove('hidden')
        divtalkCode.classList.add('hidden')
        }

        else if(reasonSelect.value === 'Code')
        {
        divtalkCode.classList.remove('hidden')
        divJobOpportunity.classList.add('hidden')
        }
    })

    const Name = document.getElementById('name')
    const eMail = document.getElementById('email')
    const form = document.getElementById('connect-form')
    const website = document.getElementById('website')
    const langCode = document.getElementById('langCode')
    const jobTitle = document.getElementById('title')

    let emailRegExp = /\w+@\w+\.\w+/
    let websiteRegExp = /https?\:\/\/.+\..+/

    let NameIsValid;
    let websiteIsValid;
    let jobTitleIsValid
    let langCodeIsNotValid;
    
	Name.addEventListener('input', () => {
        Name.setCustomValidity("")
        let NameIsValid = true
		NameIsValid = Name.value.length >= 3
        console.log(Name.value)
        console.log(NameIsValid)
		if(!NameIsValid) {
            Name.classList.add('invalid')
            Name.setCustomValidity("Please use atleast 3 characters")
            Name.reportValidity()			
		} else{
            Name.classList.remove('invalid')
		}
	})

    eMail.addEventListener("input", () => {
        eMail.setCustomValidity("")
		emailIsValid = eMail.value.length === 0 || emailRegExp.test(eMail.value)
		if(!emailIsValid) {
			eMail.classList.add('invalid')
			eMail.setCustomValidity("Please use atleast 3 characters")
            eMail.reportValidity()	
		} else {
			eMail.classList.remove('invalid')
		}
	})
    
    // EXTRA CREDIT
    jobTitle.addEventListener("input", () => {
        jobTitle.setCustomValidity("")
		jobTitleIsValid = jobTitle.value.length > 0
		if(!jobTitleIsValid) {
			jobTitle.classList.add('invalid')
			jobTitle.setCustomValidity("Please use atleast 3 characters")
            jobTitle.reportValidity()	
		} else {
			jobTitle.classList.remove('invalid')
		}
	})
    website.addEventListener("input", () => {
        website.setCustomValidity("")
		websiteIsValid = website.value.length > 0 || websiteRegExp.test(website.value)
		if(!websiteIsValid) {
			website.classList.add('invalid')
			website.setCustomValidity("Please use atleast 3 characters")
            website.reportValidity()	
		} else {
			website.classList.remove('invalid')
		}
	})

    langCode.addEventListener("input", () => {
        langCode.setCustomValidity("")
		langCodeIsNotValid = langCode.value == 'Code'
        console.log(langCode.value)
		if(langCodeIsNotValid) {
			langCode.classList.add('invalid')
			langCode.setCustomValidity("Please use atleast 3 characters")
            langCode.reportValidity()	
		} else {
			langCode.classList.remove('invalid')
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