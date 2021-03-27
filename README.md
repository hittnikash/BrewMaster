<b>README:</b>
For the Code Louisville project I decided to make a web app showcasing one of my faviorite hobbies, homebrewing. I had a few struggles with this project. The first issue I had is the amount of time it took me to decide on a project. I had started on a few different projects which eventually came to a halt in favor of the brewing app. Open APIs played a part in this decision. Finding the right API for my app was half the struggle. 

<b>Features:</b>
My project was built with a mobile first approach, starting with a streamlined design for small devices and scaled up using  media queries to alter the layouts for bigger devices.
The changes to layout from mobile to larger devices include a change in navigation from a hamburger menu to a fully displayed navigation bar.
A flexbox direction change from column (for mobile) to row, (for larger viewports) with flex-wrap applied to create a grid for the products and small layout changes across pages. 


<b>(JS Feature: Fetch Request)</b> My project makes a fetch request to https://www.thecocktaildb.com, and then displays that data on cocktails.html.

<b>(JS Feature: Array of objects)</b>There is an array of objects, (beer recipes), that is iterated over and displayed on brews.html.

<b>(JS Feature: Post Data)</b> A contact form that uses regular expressions to validate the users input, and then that input (the users first & last name, as well as their comments) are then posted to jsonplaceholder.typicode.com/comments api. (You can easily see this post because it is also logged to the console.)

<b>(JS Feature: Function that Calculates)</b> Under the tools & calculators tab on the Brews page, I have created an ABV calculator that used regular expressions to let the user know if they mistakenly enter in invalid character. A tool-tip pop ups that informs the user that only numbers 0-9 are valid. After the user inputs the starting gravity and the final gravity and then clicks the get abv button the calcABV function subtracts the two inputs and the multiplies the sum by 131, the tofixed method rounds the value to keep only two decimals. Then the final value is displayed to the user.

<b>(JS Feature: JSON Read & Parse)</b>It was mentioned, (in 'class') that our AJAX calls would fulfill the AJAX requirement but not the read & parse an external JSON or CSV file into your app requirement, so I created a JSON file and stored it external on https://www.npoint.io/. Then I made a fetch request to retreive, read and parse that data into glossary.html.

<b>(JS Feature: Array of objects)</b> Beers.js & productObjects.js are both array of objects, which I created to organize and display data in my app.

<b>(JS Feature: Regex)</b> I used regular expressions on my contact form to validate user input on my contact form, and in my ABV calculator.




<b>Project Testing</b>
My project was tested on mac and windows, and runs on Google Chrome, .............<br>

