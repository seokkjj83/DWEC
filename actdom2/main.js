document.addEventListener('DOMContentLoaded', () => {
    document.title = ('“Ahora trabajando con DOM dinámico');

    const sections = document.getElementsByTagName('section');

    [...sections].forEach((section, index) => section.id = 'section-' + index);

    console.debug(sections);

    const paragraphs = document.getElementsByTagName('p');
    [...paragraphs].forEach(paragraph => paragraph.style.fontSize = '0.5rem');

    /*    function outing(event) {
           event.currentTarget.style.textDecoration = "none";
       } */
    let links = document.getElementsByTagName('a');

    /*     if (links.addEventListener(onmouseout)) { */
    /* [...links].forEach(link => link.style.textDecoration = "none"); */

    [...links].forEach(link => link.addEventListener('mouseout', function(e) { link.style.textDecoration = "none", link.style.color = "black"; }));

    [...links].forEach(link => link.addEventListener('mouseover', function(e) { link.style.textDecoration = ""; }));

    /*}
     else {
           [...links].forEach(link => link.style.textDecoration = "initial");

       } */


    /*  [...links].forEach(link => outing(link)); */
});