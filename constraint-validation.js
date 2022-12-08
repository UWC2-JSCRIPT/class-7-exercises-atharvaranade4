// TODO
document.addEventListener("DOMContentLoaded", function(){
    const firstName = document.getElementById("first-name")
    const lastName = document.getElementById("last-name")
    const email = document.getElementById("email")
    const form = document.getElementById("form")

    function checkValidation(){
        let allValid = false
        // check firstname is >= 3 length
        if (firstName.value.length < 3){
            firstName.validity.valid = false
            firstName.classList.add("invalid")
            firstName.setCustomValidity("Your name is too short")
            firstName.reportValidity()
        }
        else{
            firstName.validity.valid = true
            firstName.classList.add("valid")
            allValid = true
        }

        // check lastname is >= 3 length


        // check email
        if (email.value.match)


        if (!allValid){
            e.preventDefault()
        }
    }

    form.addEventListener("submit", (e) => {checkValidation(e)})
})