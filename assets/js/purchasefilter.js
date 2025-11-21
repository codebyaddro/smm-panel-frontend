const getFilter = document.getElementById('purchase-filter');

function showFilter() {
    if (getFilter.style.display === 'block') {
        getFilter.style.display = 'none';
    } else {
        getFilter.style.display = 'block';
    }
}