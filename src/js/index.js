const query = document.querySelectorAll('.query')
const radioInput = document.querySelectorAll('.radioInput')

radioInput.forEach((radio, index) => {

    radio.addEventListener('input', function(){

        query.forEach(query => {
            query.classList.remove('querySelected')
        })

        if (radio.checked){
            query[index].classList.add('querySelected')
        } 

    })
})