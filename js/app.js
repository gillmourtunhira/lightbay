const showForm = document.getElementById('showForm');
const modal = document.getElementById('modal');
const span = document.getElementById('close');

// Show Modal
showForm.onclick = () => {
    modal.style.display = 'block';
};

// Close Modal by Clicking anywhere
window.onclick = function (event) {
    if( event.target == modal ){
        modal.style.display = 'none';
    }
};

span.onclick = () => {
    modal.style.display = 'none';
}