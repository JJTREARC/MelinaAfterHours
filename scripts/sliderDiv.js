document.getElementById('btn').onclick = function() { slide() };
var slider = document.querySelector('.slider')

function slide() {



    if (slider.style.getPropertyValue('visibility') == 'visible') {
        vanish();

        function vanish() {
            slider.style.setProperty('visibility', 'collapse');
            slider.style.setProperty('width', '0px');
            slider.classList.remove('slider--active')
        }

        sleep(50).then(() => { slider.style.setProperty('transform', 'scale(0)'); });


    } else {

        sleep(100).then(() => {
            slider.style.setProperty('visibility', 'visible');
            slider.style.setProperty('width', '25vw');
            slider.classList.add('slider--active')
        });
        slider.style.setProperty('transform', 'scale(1)');


    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}