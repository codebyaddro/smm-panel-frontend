// define elements from html
const loader = document.getElementById('loader');

// loader function
setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
}, 1500);
