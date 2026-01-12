let displayValue = Number('0');

const displayCount = document.getElementById('displayCount') 
const minus = document.getElementById('reduce');
const plus = document.getElementById('add');


function updateValue () {
    displayCount.innerHTML = displayValue 
    return displayValue; 
}

const colorChanger = () => {
    const value = updateValue()

    if (value > 0) {
        displayCount.style.color = 'green';

    } else if (value < 0) {
        displayCount.style.color = 'red';

    } else {
        displayCount.style.color = 'black';
    }
};

plus.addEventListener('click', () => {
    displayValue++;
    updateValue();
    colorChanger();
} )

minus.addEventListener ("click", () => {
    displayValue--;
    updateValue()
    colorChanger();
})

