# REACT ROUTERS (v5)
  
#### _This is currently the day-one doc for v5 based on Matt's lecture_
---
### UPDATE (11/29/21) - React Router V6 changes some stuff here (but much is still similar). `Switch` is no longer used and has been replaced by `Routes`. I'll update this to V6 soon and will remove this message when I do!
---

1. ### STARTUP

## - _fork as usual_
## - _clone as usual_
<br />

### - IF NO SERVER:

        npm start
### - IF *YES* SERVER...

        npm install

### - Open TWO terminal tabs and run each of these (keep them running):

        npm run server

        npm run client

### ...Go Look at your package.json...

<br />
<img src="./react-routes-images/1dependencies.png" alt="1" width="320"/><br />

<hr />

2. ## Add this import line on your main page (_likely App.js_):


<br />

<img src="./react-routes-images/2hashrouter.png" alt="2" width="500"/>

<br />

#### ...which loosely translates to "import hash router, but let's rename is Router (and Route)"<br />
<hr />

3. ## now add these < Router> and </ Router> lines around your crap (don't forget your </Components!>):
<img src="./react-routes-images/3routerTeal.png" alt="3" width="450"/><br />
<hr />

4. ## If you want to associate things with "A ROUTE", you must wrap it in a route like THIS:

<img src="./react-routes-images/4theRoutes.png" alt="4" width="430"/><br />
<hr />

5. ## Give your path properties like this (and things will subsequently disappear on the DOM...which is okay):
<img src="./react-routes-images/5paths.png" alt="5" width="420"/><br />
<hr />

6. ## Check for this stuff on the DOM:
<img src="./react-routes-images/6beforeExact.png" alt="6" width="400"/><br />
<hr />

7. ## Add EXACT like this...it'll clean things up and get rid of stuff that is appearing on every page:
<img src="./react-routes-images/7addExact.png" alt="7" width="300"/><br />
<hr />

8. ## Now throw the page linkes inside their router path:
<img src="./react-routes-images/8ulLiLinks.png" alt="8" width="420"/><br />
<hr />

9. ## ...and add Link here:
<img src="./react-routes-images/9addLinkImport.png" alt="9" width="480"/><br />
<hr />

10. ## BOOM...SPA success. Now, lets put a BUTTON on the Animals component that will take us to the plants route:
<img src="./react-routes-images/10buttonGoToGet.png" alt="10" width="480"/><br />
<hr />

11. ## ...and an associated function up above the return:
:
<img src="./react-routes-images/11goToGetFunction.png" alt="11" width="470"/><br />
<hr />

12. ## Here's how it works - the PUSH function puts it into the "array" (sort of) and the last item in the array is what will render. 
<br />

### ...Thus - whatever you push, you go there. I think. Kinda. More on this later...<br />
<img src="./react-routes-images/12goToGetWholePage.png" alt="12" width="420"/><br />