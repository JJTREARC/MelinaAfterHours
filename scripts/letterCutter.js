const txtLetter = document.querySelector('.bigTxt');
txtLetter.innerHTML = txtLetter.textContent.replace(/\S/g, '<span>$&</span>');


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//odpalacz liter
const letters = document.querySelectorAll('span');
for (let i = 0; i < letters.length; i++) {

    loading = window.onload;

    while (loading) {
        sleep(1000).then(() => { letters[i].classList.add('breath'); });
        sleep(2000).then(() => { letters[i].classList.remove('breath'); });
    }


    letters[i].classList.add('activate')
    letters[i].classList.add('activate2')
    letters[i].addEventListener("mouseover", function() {
        letters[i].classList.toggle('activate');
    })
    letters[i].addEventListener("mouseout", function() {
        sleep(4000).then(() => { letters[i].classList.add('activate2'); });
        sleep(4000).then(() => { letters[i].classList.remove('activate'); });
    })



}