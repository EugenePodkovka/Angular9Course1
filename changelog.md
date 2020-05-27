"Task 1. Introduction" was completed.
"Task 2. Components" was completed. All subtasks were done. The additional functionality is changing the background of the "Add to cart" buttons on the main product list onmouseover.
"Task 3. Services and DI" was completed. All subtasks were done.
"Task 4. Pipes" was completed. The first pipe is in the "About" block next to the "Task 4.1." pointer. The second task is in the cart. Please add products to the cart, then open the cart and apply sorting. 
"Task 5. Routing"
   5.3. In order to open the cart, please add products to cart, then click on "Open" in the right top corner of the screen and then click on "Process to purchase".
   The workflow:
   * open the application
   * click on About left menu item. Check the functionality.
   * return to the product list (by clicking on the left menu item or on the application logo)
   * add some products to cart from the product list.
   * click on the product name. open the product edit page. The router resolver works. Click add to cart on the product page.
   * refresh the page. The products are still in the cart. They are stored locally.
   * open the cart. Try to clear it. Try to close it and reopen. Change the products count etc.
   * open the cart. click on process to purchase. You will see the cart page. All buttons work properly. Feel free to click.
   * click on the Process to order button. You'll see the order page.
   * enter name and phone. click on submit. The popup will appear and the name/phone fields will be cleared. Please feel free to submit the order multiple times.
   * click on back (optional). open the cart and clear it. (admin changes won't affect the cart on the fly)

   * click on "Login as Admin".
   * refresh the page. You're still logged in.
   * click on "Logout". You're redirected to Home and logged out.
   * Login again. Click on Admin Area.
   * click on process orders. You'll see your orders. Try to refresh the page. They are still there. 
   * click on Processed on some of your orders. It's possible to process the order only once. Refresh the page. Orders keep they state.
   * click on "Back"
   * click on Edit product catalog.
   * change product values in the list dynamically then click on Save.
   * click on a product name. The product edit page will appear. The save button will be displayed dynamically after the remaining and the product data received. 
   * change the product data. click on save. It's possible to save the product only once.
   * click on back. (go back to the admin product edit list). Click on Add. Add the product. 
   * click on back. The product is in the list. 
   * refresh the page. All changes are saved. 

   * copy the URL.
   * click on Logout. You'll be redirected to HOME
   * try to open the copied URL. The guard will not allow.

   * refresh the page
   * check the product list. all previously added/modified products are available. Feel free to buy them. The "Add to cart button" is active if the product remaining is positive. 

Questions
1. why this does not work? (ProductComponent - Constructor)
   this.productService.getProduct(productId).toPromise().then(val => console.log(val));

2. How to pass additional CSS class to a child element? The class should be applied not to the element itself, but to the specific input inside the child html.
