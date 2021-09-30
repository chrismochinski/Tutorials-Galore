# **REDUX SAGAS DAY 1!**
  
##### _this doc is subject to change...it's only DAY ONE..._
---
## Sagas make it so we can be a little lazier.

Generally, if you're  SWITCHING to sagas, the only place we need to go is index.js and app.jsx (reducer land) OR THE COMPONENT (where reducers are called)


To start, MAKE SURE IT IS SET UP AS THUS so your central saga function cooperates:

---
<BR />

# ***LET'S PARTY!***


## - _fork as usual_
## - _clone as usual_
<br />

        npm install

### - Open TWO terminal tabs and run each of these (keep them running):

        npm run server

        npm run client

---

1. Make sure things are set up like THIS (toward the end of the index.js file) or it'll break:

<br />

<img src="./sagas-images/1.png" alt="1" width="400"/>

<br />

#### _…...and then your..*ahem*...sagaMiddleware Entrypoint...where all your watchers will go (closer to top of your index.js file):_
<br />
<img src="./sagas-images/1a.png" alt="1" width="500"/>

<br />
<hr />

2. ## Import!:
<img src="./sagas-images/2.png" alt="import" width="400"/><br />

<hr />

3. ## Inside that watcher from step 1, throw a takeEvery function in (that'll watch for a call):
<img src="./sagas-images/3.png" alt="import" width="430"/><br />
<hr />


4. ## And add a function in the same file, with a console.log to test, as thus:

<img src="./sagas-images/4.png" alt="import function" width="500"/><br />

<br />
<hr />

5. ## Add the appropriate, corresponding TYPE over in your component to call that one...

<img src="./sagas-images/5.png" alt="axios Server Side" width="800"/><br />

## _…it's like a shortcut in reducer world!!!_

<img src="./sagas-images/5b.png" alt="console success" width="800"/><br />
<br />
<hr />

6. ## so THIS...

<img src="./sagas-images/6.png" alt="before" width="550"/>
<br /><br />

## BECOMES:

<img src="./sagas-images/6b.png" alt="after" width="500"/>
<br />
<hr />

7. ## And here is the index.js side (don't miss the import...):

<img src="./sagas-images/7.png" alt="index js side" width="480"/><br />
<br />
<hr />

8. ## Then put this 'put' method hre in the import (not a traditional put):
<img src="./sagas-images/8.png" alt="put" width="500"/><br />
<br />
<hr />


9. ## ...and then, instead of DISPATCH...you use put (like imported):
<img src="./sagas-images/9.png" alt="final" width="480"/><br />


## _...don't forget the .data that grabs that property SPECIFICALLY...the whole thing will be a mess of stuff in the console...this may take a little trial and error_
<br />
<hr />


10. ## Now - ERROR CATCHIG! The 'try catch':
<img src="./sagas-images/10.png" alt="put" width="500"/><br />
<br />


## SAGAS/YIELD EXPLANATION:

_Sagas is helpful for complex situations and asynchronous requests. There are extra things…like “forking” and “taking”…we are using “takeEvery”. The “put” function expects a “yield” because, under the hood, it schedules that “put” to happen. The “dispatch” sounds pretty synchronous._

### Now we post!!!!!
<br />
<hr />

<hr />


11. ## From app.js side:
<img src="./sagas-images/11.png" alt="put" width="500"/><br />
<br />
<hr />


12. ## Index.js side starting out:
<img src="./sagas-images/12.png" alt="put" width="500"/><br />
<br />

_...the "action" argument we sent over is BOTH TYPE AND PAYLOAD...you need to do act4ion.type and/or action.payload to specify_

<br />
<hr />



13. ## Now the action/payload stuff happens!!
<img src="./sagas-images/13.png" alt="put" width="500"/><br />

We are assigning newElement to whatever comes over as the payload.
We are doing an axios post OF that element.
We are doing a put if the type is FETCH_ELEMENTS.

<hr />


14. ## Now do the error wrap ("try catch")…and call action whatever the heck you want while you’re at it:
<img src="./sagas-images/14.png" alt="put" width="500"/><br />
<br />
<hr />

# **DELETE TIME!!** 
## Two simple screengrabs for delete. Copy away (change the variables and stuff)
<br />

15. ## Client side (referencing fruit project now, client side, COMPONENT or app.js…):
<img src="./sagas-images/15.png" alt="put" width="500"/><br />
<br />
<hr />



16. ## Now INDEX.JS side (where your routers and stuff go):
<img src="./sagas-images/16.png" alt="put" width="500"/><br />
<br />
<hr />

# **That's that! No PUT route yet...** 
## ...don't forget to have fun :) 
<br />