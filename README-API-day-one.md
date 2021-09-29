# **API STUFF - DAY ONE!**
  
##### _this doc is subject to change...it's only DAY ONE..._
---
## An API is like a database...except someone else did all the work. Thanks, someone else!
---
## Here's a link or three:
https://any-api.com/ <br />
https://github.com/public-apis/public-apis <br />
https://catalog.data.gov <br />
https://www.programmableweb.com/apis/directory <br />

### **TERMS!!** 

- "apiKey" = yes!
- "OAuth" = no...for now.
- "HTTPS" = yes!
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

1. ## Create this file in the ROOT of your project in VSC:

<br />

<img src="./API-template-images/1.png" alt=".env" width="300"/>

<br />

#### _…your API keys are going to go in here_
<br />
<hr />

2. ## Inside your .gitignore, type: :
<img src="./API-template-images/2.png" alt="gitignore env" width="300"/><br />

## And this goes in your .env file (with whatever API key(s) you’re using)
<br />

<img src="./API-template-images/2b.png" alt="API syntax" width="400"/><br />


#### _…this is so your project won’t push your secret stash of secrets to GitHub (GitHub scans for this stuff and will blow up your car if you screw this up)_
<br />
<hr />

3. ## Then, in project folder in terminal:

        npm install dotenv
        
<hr />

4. ## IN SERVER.JS:
<img src="./API-template-images/4.png" alt="Server js" width="500"/><br />

#### _…this is a template of what you must add. That “require” line is to let your project know that is there, and the express route will be for what you’re working on. Might be a router instead ¯\_(シ)_/¯_
<br />

#### _Client makes request from server, server makes request from router if applicable, router makes request from “your database” which, in this case, happens to be your API (Giphy for now)…then the “database” sends info back through that path back up to the client!_ 

<br />
<hr />

5. ## Type an axios request and type in your necessary crap like this ON SERVER SIDE (cuz it’s a secret…no client side)…in this case, it’s in my router:

<img src="./API-template-images/5.png" alt="axios Server Side" width="800"/><br />

#### _…check out the top there, too. You aren’t IMPORTING Axios…you’re requiring it._

#### _Also, for good measure, here’s the SERVER file (simple enough:)_
<br />
<img src="./API-template-images/5b.png" alt="server file" width="500"/><br />
<br />
<hr />

6. ## Now the CLIENT SIDE…

<img src="./API-template-images/6.png" alt="client sIde" width="500"/>
<br /><br />

## The resulting data is going to be wild (console):

<img src="./API-template-images/6b.png" alt="console yikes" width="650"/>
<br />
<br />

## You can plug {JSON.stringify(result)} into your render section and see something like this:
<img src="./API-template-images/6c.png" alt="dom double yikes" width="500"/>
<br />
<hr />


7. ## Unfold the stuff in the console. Look at it. Look for image attributes and URLs and stuff. Remember the path. It’s like a property of an object…
<img src="./API-template-images/7.gif" alt="console gif" width="420"/><br />

#### _…Look closely. Image tags! Perhaps we could use:_

<img src="./API-template-images/7b.png" alt="important path" width="300"/><br />
<hr />


<hr />

8. ## NOW…LET’S RENDER!!
<img src="./API-template-images/8.png" alt="render" width="600"/><br />

### _…In this case, we saved .data.data.iamge_origin_url (which translated to an image path, complete with quotes!!) to the above._
<br />

## You'll see a BUNCH of versions of the gif...even videos, thumbnails, all kinds of stuff to pick from. Just treat it like nested object properties.

<hr />

9. ## THE FINAL APP.JS PAGE IN ALL ITS GLORY…
<img src="./API-template-images/9.png" alt="final" width="480"/><br />


## I hope this helps make sense of how this stuff works. Do your reading and research, consult the API documentation, figure out the endpoints...MASTER each API you want to use.
<br />

# ...and don't forget to HAVE FUN



