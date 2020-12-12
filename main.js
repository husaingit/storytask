function handleSubmit() {
    const animal = document.getElementById('animal').value;
    localStorage.setItem('animal', animal);

    const anotherAnimal = document.getElementById("anotheranimal").value;
    localStorage.setItem('anotheranimal', anotherAnimal);

    const onemore = document.getElementById("onemore").value;
    localStorage.setItem('onemore', onemore);

    const speed = document.getElementById("speed").value;
    localStorage.setItem('speed', speed);

    const num = document.getElementById("num").value;
    localStorage.setItem('num', num);


    const adjective = document.getElementById("adjective").value;
    localStorage.setItem('adjective', adjective);

    const quotes = document.getElementById("quotes").value;
    localStorage.setItem('quotes', quotes);

    const verbs = document.getElementById("verbs").value;
    localStorage.setItem('verbs', verbs);



    const msg = document.getElementById("msg").value;
    localStorage.setItem('msg', msg);

    // const decision = document.getElementById("decision").value;
    // localStorage.setItem('decision', decision);
    if (document.getElementById("yes").checked) {
        const x = document.getElementById("yes").value
        localStorage.setItem('yes', x);

    } else if (document.getElementById("no").checked) {
        const x = document.getElementById("no").value
        localStorage.setItem('yes', x);

    }

    return false;
}



document.getElementById('decision').innerHTML = localStorage.getItem("yes");

document.getElementById('num').innerHTML = localStorage.getItem("num");


document.getElementById('msg').innerHTML = localStorage.getItem("msg");

document.getElementById('speed').innerHTML = localStorage.getItem("speed");

document.getElementById('quotes').innerHTML = localStorage.getItem("quotes");


document.getElementById('adjective').innerHTML = localStorage.getItem("adjective");

document.getElementById('onemore').innerHTML = localStorage.getItem("onemore");





var elements = document.querySelectorAll('[id="animal"]');
for (i = 0; i < elements.length; i++) {
    elements[i].innerHTML = localStorage.getItem("animal");
}
var elem = document.querySelectorAll('[id="anotheranimal"]');
for (i = 0; i < elem.length; i++) {
    elem[i].innerHTML = localStorage.getItem("anotheranimal");
}

var ele = document.querySelectorAll('[id="verbs"]');
for (i = 0; i < ele.length; i++) {
    ele[i].innerHTML = localStorage.getItem("verbs");
}