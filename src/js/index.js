const query = document.querySelectorAll('.query')
const radioInput = document.querySelectorAll('.radioInput')
const consentInput = document.querySelector('.consentInput')
const consentSvg = document.querySelector('.consentSvg')
const consentSvgPath = document.querySelector('.consentSvgPath')

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


consentInput.addEventListener('input', function(){

    if(consentInput.checked){
        consentSvg.classList.remove('consentSvgBorder')
        consentSvgPath.classList.remove('hidden')
    } else{
        consentSvg.classList.add('consentSvgBorder')
        consentSvgPath.classList.add('hidden')
    }

})