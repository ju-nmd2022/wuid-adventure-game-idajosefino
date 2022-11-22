const img = document.getElementById('img');

img.addEventListener('click', function() {
    localStorage.removeItem('img')
})