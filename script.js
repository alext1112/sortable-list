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
  .forEach((song, index) => {
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
  })
}