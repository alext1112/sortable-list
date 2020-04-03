const draggableList = document.getElementById('draggable-list');
const check = document.getElementById('check');

const bestSongs = [
  'Da Baby - Suge',
  'Travis Scott - Highest In The Room',
  'Chris Brown - No Guidance',
  'Tyler, The Creator - EARFQUAKE',
  'Roddy Ricch - The Box',
  'Young Thug - The London',
  'Summer Walker & Drake - Girls Need Love (Remix)',
  'Jhene Aiko - Triggered',
  'Meek Mill - Going Bad',
  'J. Cole - Middle Child'
];


// Store list items
const listItems = [];

let dragStartIndex;

createList();

// Insert list items into DOM
function createList() {
  [...bestSongs]
  .map(a => ({ value: a, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(a => a.value)
  .forEach((song, index) => {
    console.log(song);
    const listItem = document.createElement('li');

    listItem.setAttribute('data-index', index);

    listItem.innerHTML = `
      <span class="number">${index + 1}</span>
      <div class="draggable" draggable="true">
        <p class="song-name">${song}</p>
        <i class="fas fa-grip-lines"></i>
      </div>
    `;

    listItems.push(listItem);

    draggableList.appendChild(listItem);
  });
    
    addEventListeners();
}

function dragStart() {
  dragStartIndex = +this.closest('li').getAttribute('data-index');
}

function dragEnter() {
  this.classList.add('over');  
}

function dragLeave() {
  this.classList.remove('over');  
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop() {
  const dragEndIndex = +this.getAttribute('data-index');
  swapItems(dragStartIndex, dragEndIndex);

  this.classList.remove('over');
}


// Swap items
function swapItems(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector('.draggable');
  const itemTwo = listItems[toIndex].querySelector('.draggable');

  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}



function addEventListeners() {
  const draggables = document.querySelectorAll('.draggable');
  const dragListItems = document.querySelectorAll('.draggable-list li');

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
  })

  dragListItems.forEach(item => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
  })
}