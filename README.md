# CSCE-3444-Team-3 -- Kitchen Staff Interface

This is CSCE 3444 Section 001 Team # 3's repository for our group project (Spring 2021). I was responsible for the Kitchen Staff UI which is held in the react-kitchen-staff folder. The old folder contains what I was working on before I switched to React...It was using straight HTML/CSS/JavaScript.

Technologies used include:
| Library        	| URL                                                              	| USED FOR                 	|
|----------------	|------------------------------------------------------------------	|--------------------------	|
| React          	| https://reactjs.org/                                             	| Framework                	|
| BootStrap      	| https://react-bootstrap.github.io/                               	| Buttons (not all), Card  	|
| SplideJS       	| https://splidejs.com/                                            	| Carousel                 	|
| Dayjs          	| https://day.js.org/                                              	| UTC Timestamp Conversion 	|
| React-DOM      	| https://github.com/facebook/react/tree/master/packages/react-dom 	| Create a Portal          	|
| React Icons    	| https://react-icons.github.io/react-icons/                       	| Collection of Icons      	|
| Font Awesome   	| https://fontawesome.com/                                         	| FA Icon Set              	|
| Get Emoji     	| https://getemoji.com/                                            	| Emojii Set               	|
| React Query    	| https://react-query.tanstack.com/                                	| Data Synchronization     	|
| React-Spring   	| https://www.react-spring.io/                                     	| Animation                	|
| React-Toastify 	| https://fkhadra.github.io/react-toastify/introduction/           	| Toast Notifications      	|
| timeago-react  	| https://git.hust.cc/timeago-react/                               	| …'long ago' timestamp    	|

---

*** App initially created with create-react-app - https://reactjs.org/docs/create-a-new-react-app.html

---

Popup modal can be closed by: Clicking the X, clicking anywhere outside of the window, or hitting ESC on your keyboard.
Cards are built dynamically from a template generator. We use the BootStrap Card structure to contain those cards. The cards are then placed into the SplideJS Carousel to allow for them to be scrolled through. This can be accomplished by clicking a dragging with your mouse, using your keyboard's arrow keys, or clicking the pagination icons below the carousel (little rectangles). 


Buttons were a combination of a custom component and BootStrap. On our Popup Modal and Card, we use Bootstrap buttons, but the 'Call Waitstaff' and 'Request Manager' buttons use our custom component. I could have easily used BootStrap for all buttons but wanted to attempt doing it custom as well. 


React Query makes data fetching in the background a breeze. It has a bit of a learning curve, but once figured out it can handle background refreshing of data better than just setting setInterval to a function. If you do not need consistent background refreshing it has a smart way of doing it by default, but in our case, we need to be constantly refreshing as we are not always clicking on components to initiate a refresh using the standard method provided by React Query.


DayJS makes converting the UTC timestamp a breeze. It is a very small library (2kb) and easy to use.


React-DOM allows us to create a portal attached to Root which means our Popup Modal can always be displayed on-top of everything. I was using Z-Index within CSS before, but it had some issues once I applied the carousel. This fixed it.


React Icons is a package that gathers a bunch of icon sets from around the web. I was initially using them exclusively for everything, but later switched to Emoji’s from getemoji.com because they aligned better and were more colorful. The last remaining icon is an 'X' used on the popup modals which is drawn from Font Awesome.


Timeago-React handles the footer text denoting how long ago an order was placed. Was using a different package earlier in the package but it was buggy, and I switched to this one which has been working nicely.


React-Toastify handles the toast notifications - this was an easy-to-use package and made notifications a breeze. 


React Spring handles animating the popup modal, added later in the project. Not sure I like it, the effect is very subtle, but that may just be because I do not know how to use it very well yet.


SplideJS is the carousel component that the cards are generated into. This use case diverges from the normal use case for a carousel, but it works in the end.

----

The Kitchen Staff Interface came together and works closely to the initial vision that I came up with during the design phase. For that, I am proud of the work that is being presented here given the amount of experience (lack thereof), time, and the overall challenges of the online nature of the class. 
