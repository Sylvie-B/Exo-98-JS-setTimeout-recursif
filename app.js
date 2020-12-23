let newDiv = document.createElement('div');

let t = 0;

function count () {
    if(t < 10) {
        setTimeout(function () {
            t++;
            newDiv.innerHTML = t.toString();
            document.body.appendChild(newDiv);
            count();
        }, 1000);
    }
}

count();
