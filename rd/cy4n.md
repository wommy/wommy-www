

















# rd


=== ## 9/20 | dadchair , 2159 


### corn chowder

- miso
- mirepoix
- ginger
- coconut milk

- potatoes
- white beans
- yellow carrot 
- golden beet
- corn

- onion
- yellow pepper
- yellow peas
- yellow beans

- spinach
- cauliflower rice

### links  
- https://search.brave.com/search?q=vege+corn+potato+chowder&source=desktop
- https://www.veggiessavetheday.com/vegan-potato-corn-chowder/
- https://minimalistbaker.com/simple-summer-corn-soup/
- https://www.foodandwine.com/recipes/corn-chowder
- https://search.brave.com/search?q=miso+paste+chowder&source=desktop
- https://www.bonappetit.com/recipe/miso-corn-soup
- https://www.101cookbooks.com/slow-cooker-miso-corn-chowder/
- https://www.epicurious.com/expert-advice/20-ways-to-use-miso-paste-article
- https://search.brave.com/search?q=yellow+foods&source=desktop
- https://www.instructables.com/Yellow-Foods-Colorful-cooking-without-artificial-/
- https://search.brave.com/search?q=golden+beet+soup&source=desktop
- https://search.brave.com/search?q=golden+beets+instant+pot&source=web
- https://www.marthastewart.com/346117/golden-beet-soup
- https://www.lastingredient.com/golden-beet-soup/
- https://www.bonappetit.com/recipe/golden-beet-soup
- https://www.floatingkitchen.net/thai-roasted-carrot-and-beet-soup/
- https://www.olgasflavorfactory.com/recipes/soups/golden-beet-soup/
- https://www.crowdedkitchen.com/roasted-beet-soup/
- https://www.epicurious.com/recipes/food/views/golden-beet-soup-240702
- https://nurturemygut.com/easy-instant-pot-golden-beets.html/
- https://search.brave.com/search?q=white+beans&source=web
- https://cooking.nytimes.com/recipes/1019451-spicy-corn-and-coconut-soup
- https://ohmyveggies.com/vegan-sweet-corn-chowder-with-coconut-milk/
- https://www.cookingclassy.com/coconut-chicken-corn-chowder/


=== ## 9/18 | dadChair , 1954 | i know nodejs


i guess i do

> holy shnikes

i dont see why writing a file from a fetch is all that crazy

what am i trying to pull? a repo  
whats its shape?


=== ## 9/17 | vegan nacho cheese


https://www.noracooks.com/easy-vegan-nacho-cheese-sauce/

- 2c cashews
- 3 tbs lemon juice
- 3 cups of the water
- .5c nutritional yeast
- .5 tsp smoked paprika
- 1 tsp garlic powder
- 1 tsp onion powder
- .5 tsp chili powder
- 2 tsp salt


=== ## 9/15 | dadChair , 2057 | mike's nursery


i need to screen shot some things

[neptune seed bank](//neptuneseedbank.com/)

turn it sideways, scale font to 50/75%

screen shots of index, _product

index njk for ea 

_product pug  
	turn page into components

figma,  
	grid
	card
	list


=== ## 9/13 | momChairFR , 1843 | PUG


isnt this fucking nuts

i never thought i would be doing pug again

thats the gateway to react right

i honestly cant believe it

do i really do a preprocessing step in pug and then pipe it into njk

--- 2113 , am i running pug before njk?


=== ## 9/6 | dadChair , 2023 | yeaaaahh soooooo

ive been working on wommy-www

i dunno why im not on fr4nk3n

--- 2252 , got a bunch done on fr4nk3n , sooooooooooooooooo


=== ## 8/30 | basementTable , 1957 | yup

just bought $INTL

dunno if thats a fuck up

need to research more crypto

i need to count my money and makes some moves into defi

monero and eth im guessing


=== ## 8/28 | backYard-bySteps , 1955 | ??

i kinda got most of yesterday done

### yesterday todo

- DONE
	- [X] FIXUP: action= /api/todo/
	- [X] - ? - submit the form thru javascript
	- [X] RN function > todo
	- [X] export/import sanityClient
	- [X] FIXUP: `event.body.split`

- TODO
	- [ ] ...fields
	- [ ] - ? - url based routing ? post does this : get does that
	- [ ] redirect: /api/todo /todo/ 301

### TODO push bookmarks

- [ ] bookmark schema
- [ ] endpoint

an `endpoint` takes `data`


--- wtf am i doing , 2007

i found that bookmarklet today

it sends data to an endpoint

so i need to setup that endpoint 

and setup the schema to accept the data


=== ## 8/26 | dadChair , 2100 | sanity & netlify serverless

### how i got the POST to work

heres the [commit](https://github.com/wommy/technomad-todo-alpine/commit/90aac2d6619100a10648211e527347fe14b96876) im going off of

so what did i do here

--- i had to change the form

i tried to focus on the form action and method

- [ ] FIXUP: action= /api/todo/
- [ ] - ? - submit the form thru javascript
- [ ] ...fields
- [ ] RN function > todo
- [ ] export/import sanityClient

this function should
	- [ ] pass the document into the client
	- [ ] check for errors
	- [ ] FIXUP: `event.body.split`
	- [ ] ...schema to Form

- [ ] - ? - url based routing ? post does this : get does that
- [ ] redirect: /api/todo /todo/ 301


=== ## 8/24 | dadChair , 2035

so whats this type about

i guess its about software development

i should really do some type of blog cycle

i need to even publish it

--- 2055 , i guess thats working

im in the repo,  
i can replace nCMS with sanity,  
i might just push to it,  
honestly i wouldnt hate a git submodule

i like this 1,2,3 workflow tho yo

hot take, nCMS didnt even get off the ground

--- 2112 , pulled in 11tybaseblog remote

i like this merging method,  
i guess it would go something like

- use template on the repo
- pull in the updates on master
- have a dev fork running
	- rebase on it perhaps

--- 2131 , whats next

so im just gonna use this template  
and pull my content in from github maybe?

so what did i actually change thats worthwhile?

### looking at the smerge

this doesnt look too hard at all,

my commits are split into two,  
half are actual content, and  
thats gonna get swapped in from somewhere else, if anything  
part of the upgrade will be fetching the github api

--- TODO
- [ ] fetch github api

--- 2227,

i just found so many sites

i really need to implement something

i need to manage my ToDos and my BookMarks  
my Posts need to be downriver from that

do i import my actual bookmarks  
maybe once a week

the problem with that is  
the average person cannot follow that workflow

using web based services is the only thing thats scalable

thats why you do it

--- 2237 , whats the workflow

`POST` to `/$endpoint`

i need two,

--- 2313 , going to highdive


===

## 8/20 | backyardTable

### 1938 , west menu design doc

i just like deleted all this work  
every time  
i hate this shit  
thats why i log into the server

ok so what am i doing

- [x] pushing a todo to rd-todo

false  
- [ ] working on WestMenu

### 2005 , WestMenu

soooooooooooo

i broke the menu into a few items,

1. header font
	- ?  Script-1
2. Serif-1
	- headers
3. Serif-2
	- add ons
4. Sans-Serif


	-??--
- [ ] fonts & sizes
	- jot em all down

	delineations
- header
- menu
- subtitle
- addons
- tagline
- spHead
- spBody
- disclaimer

	-todo--
- [ ] DESIGN DOC
		w/ explanations
	---
- [ ] blog markdown
		- [ ] create own 11ty template
	---
- [ ] landscape / portrait
	---
- [ ] emphasize WESTFRIENDS
		& specials
	---

	MENU
- columns [4]
	- Starters
	- Sandwichies
	- Salad
	- Pizza

	ADDONS
- sauces
- dressings
- cheese
- toppings
- other
- meat

	-!!--
		- [ ] BOXES AS HIGHLIGHT / emphasis


	SPECIALS
- happy hour
- SMTWThFS

	-??-- 
		- [ ] boxes VS week order


===

## 08/09 | dadChair

### 1510 , jeganmones sanity v2

soooooooo whats the fix

this is gonna be long and detailed

1. spin up a new sanity
2. model content <= DOOZY

```js
{
	type: 'document',
	name: 'art',
	fields: [
		{ type:'string', name:'name' },
		{ type:'image', name:'image' },
	]
}
```

### 1634 , schema round 2

so art has a type of document

	











---

## 08/07 | dadChair

### 2239 , jeganmones is now on sanity

my god this has been a long time in the making

it still needs some work tho

### jeganmones squarespace site layout

/
	/components
		header
			nav
				Home
				Shop
				Collabs
				Contact
			h1
				.siteTitle
			nav
				ig
				cart
		footer
			form-newsletter
			email-me
			follow-me

Pages
	index
		fold-1
			callToAction
				.siteTitle
				.siteSubTitle
				btn -> /shop
			img
		fold-2
			hero
		fold-3
			featured
		fold-4
			about
		fold-5
			involved
				blm
				lgbtq
				nature
	merch
		h3 pageTitle
		main
			aside nav filters
			art-list.3col
				art-card
					art.img
						?> figcaption
						.hover 
							transition2 2nd img
							quick-view
								dialog / modal
									next/prev
					art.title
					art.price
			footer
				CTA show on etsy
	collabs
		CTA collab
		list
			published work
			daughters of darkness
			bratbox
			sisterepic
			put art on billboards
			tripleaaanimals
			boop my nose
			tattoos
	contact
		fold-1
			details
				.title
				.subtitle
			img
		fold-2
			form
	cart
		!cart 

	TODO: mobile this ^












---

## 08/02 | auntSams

### 1736 , rambles

so what am i getting into here 

think im gonna go over the old redis stuff a lil

- [tm redis in node](https://www.youtube.com/watch?v=oaJq1mQ3dFI0)
- [tm redis](https://www.youtube.com/watch?v=Hbt56gFj998)
- [redis: ioredis](https://www.youtube.com/watch?v=H6rikGCYPUk)
- [ben: redis + graphql node](https://www.youtube.com/watch?v=_Zwqn7FV6ms)

this is what i want to work on

### 2045 , finished ben's redis and graphql

took lots of fudging,  
- removed express
- swapped ioredis for node-redis
- probably more










---





















## 7/30 | dad chair | 2223 | rambles

oh man im having a bunch of weird feels rn

im glad i wrote that blogpost yesterday,  
going to aunt sams, just the whole thing was great

### fixed a bunch of junk | 2254

i feel alot better

i finally got to a bunch of things ive been putting off forever

so strange how a little accomplishment can breathe momentum

, im gonna smoke

### gonna buy this yubikey , 2304

### fuckin wit redis , 029





---












# 07/29 | aunt sams

## 1620 , warming up

- TODO building rd in strapi

## 1723 , setting up 11ty and nginx

- changed nginx config  

- `/etc/nginx/sites-available/technomad`

- |
```
server { 
-	root	/???
+	root	/srv/technomad
+	location /todo/ {}
```

- `sudo yarn build --output /srv/technomad/todo`

























---

















# 07/13 | dadchair

## 2108 , conceptualizing strapi routes?

so i need to figure out the methods for strapi

so i need to GET / stocks  
what do i display?  
is that the dashboard?  

list of all stock

i think im gonna piggie-back some 11ty on this


































---

# 07/09 | backyard

## rambles , 1920

so here i am in the backyard

what am i doing exactly

i set up nerdtree, thats nice

im going to git mv rename rd's 

### did that, got a lost in loop , 2114



























---

# 06-25 | great_room
## 2309 , jegan stock sqlite

ok so keiths a butthole  
viewing this file sucks too  
onto it

---

---

---

---

---

---

---

---

# 06-18 | jujuroom 

## resume/FMR , 1647

so what am i doing

so i did a first draft of FMR,  
ill push that now

so what do i need to do to pushit

### pushed , 1839

what did i want to do next?  
i think it was set up tailwind to do sanitize

or add my experience to resume

### 2008 , added resume-md

gonna quick restart

---

# 06-11 | cy4n kyleKeeler

### 1406 , gonna blast this chromebook

made cy4n folder in brave, waiting for the sync

https://docs.google.com/document/d/1lTWTJFa_Bsyht3WY0tuzImyIbXGu0Ri3z6GmGg6Pr_Q/edit

---

# 06-09 | cy4n drewKeystone

## 1628 , setting up cy4n, install

- [x] zsh
- [x] tmux
- [x] neovim
- [x] powerline
- [x] brave-browser-beta
- [x] gh
- [x] yarn

---

# 06-04 | cy4n drewsKeystone

### 1411 , working on settecase site
