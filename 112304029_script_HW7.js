const nameDisplay = document.getElementById('name-display');
const editNameButton = document.getElementById('edit-name-btn');
let isEditingName = false;

editNameButton.addEventListener('click', () => {
    if (isEditingName) {
        const nameInput = document.getElementById('name-input');
        if (nameInput) {
            nameDisplay.textContent = nameInput.value.trim();
            nameInput.remove();
            editNameButton.textContent = 'Edit';
        }
    } else {
        // Enable edit mode
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.id = 'name-input';
        nameInput.value = nameDisplay.textContent;
        nameDisplay.textContent = '';
        nameDisplay.appendChild(nameInput);
        editNameButton.textContent = 'Save';
    }
    isEditingName = !isEditingName;
});


const addMusicBtn = document.getElementById('add-music-btn');
const musicGrid = document.getElementById('music-grid');

addMusicBtn.addEventListener('click', () => {
    if (document.getElementById('music-form')) return;

    const form = document.createElement('form');
    form.id = 'music-form';

    const linkInput = document.createElement('input');
    linkInput.type = 'url';
    linkInput.placeholder = 'Music Link (URL)';
    linkInput.required = true;

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Music Name';
    nameInput.required = true;

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Add';

    form.appendChild(linkInput);
    form.appendChild(nameInput);
    form.appendChild(submitBtn);

    document.body.appendChild(form);

    form.style.position = 'absolute';
    form.style.top = '50%';
    form.style.left = '50%';
    form.style.transform = 'translate(-50%, -50%)';
    form.style.padding = '20px';
    form.style.border = '1px solid #ccc';
    form.style.backgroundColor = '#ffffff';
    form.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    form.style.borderRadius = '8px';

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const link = linkInput.value.trim();
        const name = nameInput.value.trim();

        if (link && name) {
            const musicItem = document.createElement('a');
            musicItem.href = link;
            musicItem.target = '_blank';
            musicItem.style.display = 'flex';
            musicItem.style.alignItems = 'center';
            musicItem.style.textDecoration = 'none';
            musicItem.style.marginBottom = '10px';

            const musicImage = document.createElement('img');
            musicImage.src = 'youtube_logo.png'; 
            musicImage.alt = name;
            musicImage.style.width = '50px';
            musicImage.style.height = '50px';
            musicImage.style.marginRight = '10px';

            const musicText = document.createTextNode(name);

            musicItem.appendChild(musicImage);
            musicItem.appendChild(musicText);
            musicGrid.appendChild(musicItem);

            form.remove();
        } else {
            alert('Please fill in all fields.');
        }
    });

    document.addEventListener('click', function handleClickOutside(event) {
        if (!form.contains(event.target) && event.target !== addMusicBtn) {
            form.remove();
            document.removeEventListener('click', handleClickOutside);
        }
    });
});