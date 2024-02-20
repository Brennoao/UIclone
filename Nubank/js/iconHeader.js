document.getElementById('hide').addEventListener('click', function () {
    var icone = document.getElementById('share');
    if (icone.getAttribute('name') === 'eye-off-outline') {
        icone.setAttribute('name', 'eye-outline');
    } else {
        icone.setAttribute('name', 'eye-off-outline');
    }
});