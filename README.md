# cell.me
cell.me is a mock project created using React. The state is managed through Redux and Redux-Saga (for asynchronous actions). The state is persisted thanks to Redux-Persist. It's a SPA which manages routes through React Router. All components and utils are tested using React-Testing-Library. The app emphasizes code reusability and performance, making use of lazy load for better code splitting and dynamic loading.

## The requirements
The project is supposed to consist of two pages, a home page and a detail page. Along the app the user should be able to interact with the different products.
### Header
The Header is supposed to be visible accross all the pages. It should include a button to return to the home page and a cart where the user can see how many products he has added.  
![Header view](./readme-images/header-view.jpg "Header view")  
When the cart is clicked, a dialog pops up, displaying the chosen items.  
![Cart content](./readme-images/cart-content.jpg "Cart content")  
## Home
The Home renders a list of smartphones which come from a call to an API. The API is only called the first time the user accesses the page, then it's persisted in the local storage, so subsequent renders won't trigger the call again.  
There's a search input at the top right corner, so that the devices can be filtered according to their brand and/or model. The filtering is done in real-time.  
For each phone there's a card with the device's brand, model, image and price (if available). If the card is clicked, the app navigates to the detail page.
![Home view](./readme-images/home-view.jpg "Home view")  

## Commands to run the app
After running `npm install`, the following commands will let interact with the application:  
* `npm start` sets the app up and running on localhost:3000, so you can check it out  
* `npm test` runs all the app tests  
* `npm build` generates an optimized build for production  
* `npm run lint` will check the app's code to spot format mistakes  
