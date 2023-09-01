Website is going to be a E commerce site, both men and women clothes
called juxtaposition

Home Page
- Will have a 

About Page
- Summary of the products we have
- Short backstory

Products Page
- Will have cards for each of the products
	- Each card will have the products name, picture, price
	- Clicking on the card will take you to the products page, where you will be able to add a product to the cart

Cart Button
- When pressed will cover the screen, displaying a side panel of information regarding your cart


Debug Thought Process
# I have a website that is created in Gatsby
# The website has a nav bar consisting of links.
- These links names correspond with the files found within the pages directory
# The nav bar is nested within the layout. 
# The product page is found on the nav
- This page calls the useEffect hook to pull data from an api, then stores it in state products.
- This state is used to render 10 cards of products.
# Each card is wrapped in a link to go to a corresponding page.
- Each card is passed each products data (name price desc etc...)
- Each card's wrapped Link is named after the ID of the product, and passes a state to send to the next page
	- This shows up undefined
- To handle the page, I believe I'm using the File System API to be able to use a splat pattern
	( [id] ) to be able to automatically generate a new page of the card clicked
- It looks like the only piece of data that transfers over is the name of the splat, in this case ID
- I'm lost here. I don't know why any data isn't being passed down as props.
	