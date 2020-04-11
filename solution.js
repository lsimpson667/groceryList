////////////// Part 1 /////////////////////
/* 1.1) Link the CSS file by setting the href attribute of <link> */
document.querySelector("link").href = 'styles.css';


/* 1.2) Set the class of the image to "list-img" */
document.querySelector(".header img").className = "list-img";

/* 1.3) Set the classes of the inputs (buttons) to "btn" by using a loop */

        let inputs = document.querySelectorAll("input");
        for (i = 0; i < inputs.length; i++) {
        //      inputs[i].document.querySelectorAll("input");
                inputs[i].className = "btn";
        }
      





////////////// Part 2 /////////////////////

/* 2.1) grab the <ul> that we are going to append <li> nodes to and store it in a variable */
let UlTag = document.querySelector("ul");



/* 2.2) When the user clicks the ADD button, ask them what item they need to add and then:
        1. Create a new li Element
        2. Create the text node with the user's input
        3. Append the text node to the li Element
        4. Add the li Element to the unordered list by appending it to the variable created in step 2.1 */
function addItem() {
        let addUserItem = prompt('What item would you like to add?');
        
        let listItem = document.createElement("li");
        let textNode = document.createTextNode(addUserItem);
        listItem.appendChild(textNode);
        UlTag.appendChild(listItem);
}


/* 2.3) When the user clicks the TOTAL button:
        1. Display the total area by setting the total-area class to just "total-area"
        2. Total the number of groceries by getting the length of the li NodeList
        3. Add the count to the page by setting the textContent of #item-count */
function getTotal() {
        document.querySelector(".total-area").className = "total-area";
        let listItems = document.querySelectorAll("li");
        let totalItems = listItems.length;
        document.querySelector("#item-count").textContent = totalItems;

}



////////////// BONUS /////////////////////
/*  When the user clicks the REMOVE button, ask them what item they want to remove and then:
    1. Remove the item from the list with removeChild by comparing the user's response to the textContent of each <li> */

function removeItem() {
        let removeUserItem = prompt("What Item would you like to remove?");
        let liArray = document.querySelectorAll("li");
        
        for (let i = 0; i < liArray.length; i++) {
        if (removeUserItem === liArray[i].textContent) {
                UlTag.removeChild(liArray[i]);

        }
}
}