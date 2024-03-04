const button = document.getElementById('_button');
const border = document.querySelector('.border');
const allTextElements = document.querySelectorAll('.border *');

button.addEventListener('click', function() {
    border.style.backgroundColor = 'lightblue';
    border.style.borderColor = 'blue';
    allTextElements.forEach(element => {
        element.style.color = 'darkblue';
    });
});

button.addEventListener('mouseover', function() {
    button.style.color = 'darkblue';
    button.style.borderColor = 'blue';
});

button.addEventListener('mouseout', function() {
    button.style.color = 'whitesmoke';
    button.style.borderColor = 'black';
    border.style.outline = '1px solid black';
});
