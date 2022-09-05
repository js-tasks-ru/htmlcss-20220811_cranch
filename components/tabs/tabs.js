function setPreview(content) {
    let sections = document.getElementsByClassName("section__preview");
    for (let section of sections) {
        section.classList.contains(`section__preview_${content}`) ? section.style.display = "flex" : section.style.display = "none";
    }
}

function setSource(content) {
    let sections = document.getElementsByClassName("info__source");
    for (let section of sections) {
        section.classList.contains(`info__source_${content}`) ? section.style.display = "flex" : section.style.display = "none";
    }
}