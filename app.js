let newDiv = document.createElement('div');

let t = 0;

function count () {
    setInterval(function () {
        if(t < 10){
        t ++;
        console.log("log 1 : " + t);
        newDiv.innerHTML = t.toString();
        document.body.appendChild(newDiv);
        }
    }, 1000)
}

count();
