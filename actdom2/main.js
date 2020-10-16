document.addEventListener('DOMContentLoaded', () => {
    document.title = ('“Ahora trabajando con DOM dinámico');

    const sections = document.getElementsByTagName('section');

    [...sections].forEach((section, index) => sections.id = 'section-' + index);

    console.debug(sections);

    const paragraphs = document.getElementsByTagName('p');
    [...paragraphs].forEach(paragraph => paragraph.style.fontSize = '0.5rem');
});