document.addEventListener('DOMContentLoaded', () => {
    document.title = ('“Ahora trabajando con DOM dinámico');

    const sections = document.getElementsByTagName('section');

    [...sections].forEach((section, index) => section.id = 'section-' + index);

    console.debug(sections);

    const paragraphs = document.getElementsByTagName('p');
    [...paragraphs].forEach(paragraph => paragraph.style.fontSize = '0.5rem');

    const links = document.getElementsByTagName('a');
    [...links].onmouseout.forEach(link => link.style.textDecoration = 'none');
});