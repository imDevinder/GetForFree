document.getElementById('gems').addEventListener('input', function() {
    const gems = document.getElementById('gems').value;
    const gemValue = gems * 0.49;
    document.getElementById('gem-value').innerText = gemValue;
});

document.getElementById('get-gems').addEventListener('click', function() {
    const gems = document.getElementById('gems').value;
    const tag = document.getElementById('tag').value;

    if (gems && tag) {
        document.getElementById('loading-bar').style.display = 'block';
        document.getElementById('loading-bar').style.width = '0';
        document.getElementById('get-gems').disabled = true;

        let width = 0;
        const interval = setInterval(function() {
            width += 1;
            document.getElementById('loading-bar').style.width = width + '%';
            if (width >= 100) {
                clearInterval(interval);
                document.getElementById('loading-bar').style.display = 'none';
                document.getElementById('verify-button').classList.remove('hidden');
                document.getElementById('get-gems').disabled = false;
            }
        }, Math.random() * (60 - 30) + 30);
    } else {
        alert('Please enter both Gems and TAG.');
    }
});
