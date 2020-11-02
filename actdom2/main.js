document.addEventListener('DOMContentLoaded', () => {
    document.title = ('“Ahora trabajando con DOM dinámico');

    const sections = document.getElementsByTagName('section');

    [...sections].forEach((section, index) => section.id = 'section-' + index);

    const paragraphs = document.getElementsByTagName('p');
    [...paragraphs].forEach(paragraph => paragraph.style.fontSize = '0.5rem');

    const checked = document.createElement('input');
    checked.type = 'checkbox';
    checked.id = 'casilla';

    const label = document.createElement('label')
    label.setAttribute('for', 'casilla');
    label.appendChild(document.createTextNode('Seleccionar imagen'));
    section.insertBefore(label, section.firstChild);
    section.insertBefore(check, section.firstChild);

<<<<<<< HEAD


    function changecolor() {
=======
    [...links].forEach(link => link.addEventListener('mouseout', function (e) {
        link.style.textDecoration = "none", link.style.color = "black";
    }));

    [...links].forEach(link => link.addEventListener('mouseover', function (e) {
        link.style.textDecoration = "";
        link.style.color = "blue";
    }));

    const images = document.getElementsByTagName('img');
    const imagesArray = [...images];
    if (imagesArray.length > 0) {
        const z = imagesArray[0];
        const x = z.insertAdjacentElement('beforebegin', document.createElement('input'));
        x.setAttribute('type', 'checkbox');
    };
>>>>>>> fc7ad7a5972dd04274fd4f72b3a629b13a6ac7f4

        const button1 = document.getElementById('button1');
        if (button1.style.backgroundColor === 'blue') {
            button1.style.backgroundColor = 'grey';
            document.getElementById('casilla').checked = false;
            const foto = document.getElementById('foto');
            const url1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTop8oe400wNChE4dAYGbcJnoIId4LMZyotjQ&usqp=CAU";
            const url2 = 'https://vertele.eldiario.es/2020/10/18/noticias/Rosito-memes-noche_2278582165_15008768_660x371.jpg';
            (foto.src === url1) ? foto.src = url2: foto.src = url1;
        }

    }
    if (button1.style.cursor != 'not-allowed') {
        button1.setAttribute('onclick', 'cambioscolor()');
    }

    function changecolor() {

        const button1 = document.getElementById('button1');
        if (button1.style.backgroundColor === 'blue') {
            button1.style.backgroundColor = 'grey';
            document.getElementById('casilla').checked = false;
            const foto = document.getElementById('foto');
            const url1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTop8oe400wNChE4dAYGbcJnoIId4LMZyotjQ&usqp=CAU";
            const url2 = 'https://vertele.eldiario.es/2020/10/18/noticias/Rosito-memes-noche_2278582165_15008768_660x371.jpg';
            (foto.src === url1) ? foto.src = url2: foto.src = url1;
        }

    }



    function cambiar() {
        const button1 = document.getElementById('button1');
        if (document.getElementById('casilla').checked === true) {
            button1.removeAttribute('disabled');
            button1.style.backgroundColor = 'blue';
        } else {
            button1.style.backgroundColor = 'grey';
            button1.setAttribute('disabled', 'disabled');
        }
    }
    checked.setAttribute('onchange', 'cambiarcheck()');
});