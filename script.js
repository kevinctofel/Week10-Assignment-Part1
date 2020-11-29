// `STORE` is responsible for storing the underlying data
// that our app needs to keep track of in order to work.
//
// for a shopping list, our data model is pretty simple.
// we just have an array of shopping list items. each one
// is an object with a `name` and a `checked` property that
// indicates if it's checked off or not.
// we're pre-adding items to the shopping list so there's
// something to see when the page first loads.

const STORE = [
	{ id: cuid(), name: "apples", checked: false },
	{ id: cuid(), name: "oranges", checked: false },
	{ id: cuid(), name: "milk", checked: true },
	{ id: cuid(), name: "bread", checked: false }
];


// HELPER function for generateShoppingItemsString()
function generateItemElement(item) {

	// returns and a string literal of HTML and values from each object
	return `
    <li data-item-id="${item.id}">
      <span class="shopping-item js-shopping-item ${item.checked ? "shopping-item__checked" : ''}">${item.name}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle js-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete js-item-delete">
            <span class="button-label">delete</span>
        </button>
      </div>
    </li>`;
}

// HELPER FUNCTION for renderShoppingList
function generateShoppingItemsString(shoppingList) {
	console.log("Generating shopping list element");
	// stores an array of all the HTML to be rendered on the page.
	const items = shoppingList.map((item) => generateItemElement(item));
	return items.join("");
}


function renderShoppingList() {
	// *** THIS IS YOUR ASSIGNMENT FOR WEEK 10 ***
	// you will be calling generateShoppingItemsString AND rendering to the page
	// put your code here only
	const shoppingListItems = generateShoppingItemsString(STORE);
	$('.js-shopping-list').html(shoppingListItems);
	console.log('`renderShoppingList` ran');
}



function handleNewItemSubmit() {
	// this function will be responsible for when users add a new shopping list item
	console.log('`handleNewItemSubmit` ran');
	$('#js-shopping-list-form').submit(function (event) {
		event.preventDefault();
		let newItem = $('.js-shopping-list-entry').val();
		//clear textbox
		$('.js-shopping-list-entry').val("");
		STORE.push({ id: cuid(), name: newItem, checked: false });
		renderShoppingList();
	});
}

function getItemIdFromElement(item) {
	itemToCheck = $(item).closest("li").data("item-id");
	return itemToCheck;
}

function handleItemCheckClicked() {
	// this function will be responsible for when users click the "check" button on
	// a shopping list item.
	console.log('`handleItemCheckClicked` ran');
	$('.js-shopping-list').on('click', `.js-item-toggle`, event => {
		const itemId = getItemIdFromElement(event.currentTarget);
		toggleShoppingItem(itemId);
		renderShoppingList();
	});
}

function toggleShoppingItem(itemId) {
	itemToToggle = STORE.find(itemToToggle => itemToToggle.id == itemId);
	itemToToggle.checked = !itemToToggle.checked;

}

function handleDeleteItemClicked() {
	// this function will be responsible for when users want to delete a shopping list
	// item
	console.log('`handleDeleteItemClicked` ran');
	$('.js-shopping-list').on('click', `.js-item-delete`, event => {
		// get the item id to remove from STORE
		const itemToDelete = getItemIdFromElement(event.currentTarget);
		// Find the index of the item to delete
		let deletedItemIndex = STORE.findIndex(data => data.id == itemToDelete);
		// Delete the item using its index
		STORE.splice(deletedItemIndex, 1);
		renderShoppingList();
	});

}

// this function will be our callback when the page loads. it's responsible for
// initially rendering the shopping list, and activating our individual functions
// that handle new item submission and user clicks on the "check" and "delete" buttons
// for individual shopping list items.
function handleShoppingList() {
	renderShoppingList();
	handleNewItemSubmit();
	handleItemCheckClicked();
	handleDeleteItemClicked();

}

// when the page loads, call `handleShoppingList`
$(handleShoppingList);
