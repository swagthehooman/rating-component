const rateBtns = document.querySelectorAll('.btns')
const subBtn = document.querySelector('#sub')

let selectedRating = ""

for (let i = 0; i < rateBtns.length; i++) {
    rateBtns[i].addEventListener('click', () => {
        selectedRating = rateBtns[i].textContent
        subBtn.removeAttribute('disabled')
        console.log(selectedRating)
    })
}

subBtn.addEventListener('click', () => {
    document.querySelector('.card-main1').setAttribute('style', 'display:none')
    document.querySelector('.card-main2').setAttribute('style', 'display:block')
    document.querySelector('.rating-choice').innerHTML = 'You selected ' + selectedRating + ' out of 5'
})
