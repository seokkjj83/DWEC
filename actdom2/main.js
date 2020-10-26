document.addEventListener('DOMContentLoaded', () => {
    document.title = ('“Ahora trabajando con DOM dinámico');

    const sections = document.getElementsByTagName('section');

    [...sections].forEach((section, index) => section.id = 'section-' + index);

    const paragraphs = document.getElementsByTagName('p');
    [...paragraphs].forEach(paragraph => paragraph.style.fontSize = '0.5rem');

    const links = document.getElementsByTagName('a');

    /* [...links].forEach(link => link.style.color = "black"); */

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

}); 