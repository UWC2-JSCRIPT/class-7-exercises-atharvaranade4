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
    const website = document.getElementById('website')
    const eMail = document.getElementById('email')
    const jobTitle = document.getElementById('title')
    const langCode = document.getElementById('langCode')
    const form = document.getElementById('connect-form')
    
    let emailRegExp = new RegExp(/\w+@\w+\.\w+/)
    let websiteRegExp = new RegExp(/https?\:\/\/.+\..+/)
    
    let allValid = true
    let NameIsValid;
    let emailIsValid

    let websiteIsValid;
    let jobTitleIsValid;
    let langCodeIsValid;
    
	Name.addEventListener('input', () => {
        Name.setCustomValidity("")
		NameIsValid = Name.value.length >= 3
		if(!NameIsValid) {
            Name.classList.add('invalid')
            Name.setCustomValidity("Please use atleast 3 characters")
            Name.reportValidity()			
		} else{
            Name.classList.remove('invalid')
            console.log(`Name: ${NameIsValid}`)
		}
	})

    eMail.addEventListener("input", () => {
        eMail.setCustomValidity("")        
		emailIsValid = eMail.value.length === 0 || emailRegExp.test(eMail.value)
		if(!emailIsValid) {
            eMail.classList.add('invalid')
			eMail.setCustomValidity("Please enter valid email")
            eMail.reportValidity()	
		} else {
            eMail.classList.remove('invalid')
            console.log(`email: ${emailIsValid}`)
		}
	})
    
    // EXTRA CREDIT
    jobTitle.addEventListener("input", () => {
        jobTitle.setCustomValidity("")
		jobTitleIsValid = jobTitle.value.length > 0
		if(!jobTitleIsValid) {
			jobTitle.classList.add('invalid')
			jobTitle.setCustomValidity("Please enter a job title")
            jobTitle.reportValidity()	
		} else {
			jobTitle.classList.remove('invalid')
            console.log(`Job: ${jobTitleIsValid}`)
		}
	})

    website.addEventListener("input", () => {
        website.setCustomValidity("")
		websiteIsValid = website.value.length > 0 || websiteRegExp.test(website.value)
		if(!websiteIsValid) {
			website.classList.add('invalid')
			website.setCustomValidity("Please enter valid website")
            website.reportValidity()	
		} else {
			website.classList.remove('invalid')
            console.log(`Website: ${websiteIsValid}`)
		}
	})
    
    // Check if coding language is selected
    langCode.setCustomValidity("Please select a language")
    langCode.reportValidity()
    langCode.classList.add('invalid')

    langCode.addEventListener("input", () => {
        langCode.setCustomValidity("")
        langCode.classList.remove('invalid')
        langCodeIsValid = true
        console.log(`LangCode: ${langCodeIsValid}`)
	})
    
    form.addEventListener("submit", (event) => {
        let websiteValid = reasonSelect.value == "Job" && websiteIsValid // check validity only if Job-opportunity option is selected
        let jobValid = reasonSelect.value == "Job" && jobTitleIsValid      
        let langcodeValid = reasonSelect.value == "Code" && langCodeIsValid // check validity only if talk-code option is selected

        dropDownValid = websiteValid || jobValid || langcodeValid

        let allValid = NameIsValid && emailIsValid && dropDownValid

        if (!allValid) { 
            console.log('Bad input')
            event.preventDefault()
        }
        else {
            console.log('Form successfully submitted!')
        }		
    })
})