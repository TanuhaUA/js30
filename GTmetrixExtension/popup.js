document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');

    checkPageButton.addEventListener('click', function () {
        chrome.tabs.getSelected(null, function(tab) {
            var f = document.createElement('form');
            f.action = '';
            f.method = 'post';
            var i = document.createElement('input');
            i.type = 'text';
            i.name = 'url';
            i.value = tab.url;
            f.appendChild(i);
            document.body.appendChild(f);
            console.log(tab);
        });
    }, false);
}, false);