const tagsElement = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter') {
        
        setTimeout(() => {
            e.target.value = '';
        }, 10);

        randomSelect();
    }
})

function createTags(input) {
    // clear emptyspace before or after comma
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    tagsElement.innerHTML = '';
    tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.classList.add('tag');
        tagElement.innerText = tag;
        tagsElement.appendChild(tagElement)
    })
}

function randomSelect() {
    const times = 30;
    // shifting to each tag highlight and unhighlight
    const interval = setInterval(() => {
        const randomtag = pickRandomTag();

        highlightTag(randomtag);
        setTimeout(() => {
            unHighlightTag(randomtag);
        }, 100);

    }, 100);
    // stop at particular interval and choose random tag
    setTimeout(() => {
        clearInterval(interval); 

        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 100);

    }, times * 100);
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}
