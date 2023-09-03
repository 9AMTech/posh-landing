# Posh Landing
Posh Landing is a E-Commerce Site made with React, TypeScript, Tailwind, and Vite!

**Link to project:** https://9amtech.github.io/posh-landing/ <br>
**Project Requirements:** hhttps://www.theodinproject.com/lessons/node-path-react-new-shopping-cart#assignment

![Thumbnail for the Posh Landing Website.](https://github.com/9AMTech/posh-landing/blob/master/thumbnail.png)

## How It's Made:

**Tech used:** TypeScript, React, Tailwind, Vite, Vitest, Insomnia

Posh Landing is a concept for a E-Commerce website for unisex clothing and accessories. I went with both off-green colors and dark green colors to give it a nice welcoming earth feel. In terms of page layout I opted for a simple and straight, to the point design for the routing; having a home page, a catalog of products page, pages for EACH of those products, an about page, and a final cart page. To keep the design patterns consistent amongst my pages I used Tailwind CSS to take advantage of the utility classes it provides. Being able to tag and design elements with the same classes with an out of the box orderly naming scheme is such a underrated ability. Tailwind allowed me to also just keep everything in the component, The HTML, the CSS, the JavaScript. It was all there for me to look at in one fell swoop. There were also some perfect utility classes created by Tailwind that allowed me to just slap them on and make some aspects of the website look really pronouced and in focus. Specifically speaking, there are shadow classes with predetermined values that make my products that were selected pop out both on the products page and the cart itself!

Down to the nitty gritty - the logic. The Posh Landing website starts off an with API call right after the app mounts to grab all of our products from the FakeStoreAPI. I used Insomnia, an API client to allow me to view and debug the API calls I was making to the FakeStoreAPI. After creating the perfect API call, I retrieved the entire catalog of products and parsed the list to grab any item that wasn't electronics to display on my products page. When that was done I stored the data into a products state. I also created a state for the cart as we would need to keep track of that too between route rerenders. To avoid over prop drilling I had also stored both into their relevant context's and wrapped the entire application router to allow the following pages to use these states, and be able to update said states when needed. 

Speaking of the other pages, they were created as routes using the React-Router-Dom library. This library allowed me to easily create routes on the go and even create dynamic routing for each of the products' pages! All that was left was designing and organizing a bunch of components to be used on each of these pages, which were then rendered respectively to each pages' URL using the router. The other unique thing about this website was actually creating a nav and general page wrapper and wrapping it around each page to get a consistent layout between each page. It was a really nice addition.

## Lessons Learned:

- TypeScript once again is the best thing to happen to JavaScript. </br>
- Having a GUI like Insomnia to test APIs saves so much time. </br>
- React's ability to be so miniscule and component based allows for MUCH reuse of code. (DRY Principle!!!)</br>
- Tailwind is now my new favorite CSS Framework!
- Scaffolding my project with Vite was EXPONENTIALLY faster than create-react-app. It's insane. </br>
- There's a reason why React and Tailwind are popular and used in many large scale projects. </br>
