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

    
})