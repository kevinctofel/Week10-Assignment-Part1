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
	$('.js-shopping-list').append(shoppingListItems);
	console.log('`renderShoppingList` ran');
}



function handleNewItemSubmit() {
	// this function will be responsible for when users add a new shopping list item
	console.log('`handleNewItemSubmit` ran');
}


function handleItemCheckClicked() {
	// this function will be responsible for when users click the "check" button on
	// a shopping list item.
	console.log('`handleItemCheckClicked` ran');
}


function handleDeleteItemClicked() {
	// this function will be responsible for when users want to delete a shopping list
	// item
	console.log('`handleDeleteItemClicked` ran')
}

// this function will be our callback when the page loads. it's responsible for
// initially rendering the shopping list, and activating our individual functions
// that handle new item submission and user clicks on the "check" and "delete" buttons
// for individual shopping list items.
function handleShoppingList() {
	renderShoppingList();
	//handleNewItemSubmit();
	//handleItemCheckClicked();
	//handleDeleteItemClicked();

}

// when the page loads, call `handleShoppingList`
$(handleShoppingList);