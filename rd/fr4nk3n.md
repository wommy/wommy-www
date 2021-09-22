



















# fr4nk3n















===


## 9/17 | jujuroom , 1414 

--- 1701 




















===


## 9/16 | jujuroom , 1812

what to write about

what does today hold

--- 1852 , killing tabs

i got the chromebook working ln,  
i still need to repaste it, gonna repaste ROY too

--- 1940 , chiquitita on loop

i dream of a day of checking in tabs

do you think i could sync tabs with my server?

i gotta clean the server up too

cleanin up cyan was super easy

abba at camp, and yoko

me changing the MARX is gonna be a bish

damn did i just come up with a name

cant forget RIVR 

--- 1949

wommy a teaching site?  
maybe technomad?

you use the site and it provides documentation 
how to make MARX

need a user login 
	ditto with mikes

--- 2057 , wommy.io ideas

do something with media page,  
---
more list like launching a modal

maybe use the cover image

card component 

```
should i use this as stock for the blog,
should i lead with rd
```

TODO: add a link for rd

---

home is an about page

branding is junk

clients needs a bunch of work

resume does too

experiments does too

and does media

even the fucking menu needs alot of work

rd should come in from the data directory

```
how do i hit github's api
```

--- 2138  
###how to clone a disk

its not rsync, too many options

- [youtube search]( https://www.youtube.com/results?search_query=rsync+partition )
- [christitus](https://www.youtube.com/watch?v=OEfboN-Nb2s)
- [luke](https://www.youtube.com/watch?v=iTnWIKHtOnA)
- [joe collins](https://www.youtube.com/watch?v=O6TxtWGmDHg)

brought up CloneZilla,  
realized i wanted to clone a disk,

[aw disk clone](https://wiki.archlinux.org/title/Disk_cloning)

[e2image](https://wiki.archlinux.org/title/Disk_cloning#Using_e2image)


===


## 9/15 | jujuroom , 1317 , 

so what am i working on

i mucked with cacao a little  
i need to redo the food options  
the data is messy AF, ditto with the html  
they are dependant so if i fix one, the other will follow


===


## 9/13 | jujuroom , 1124 , rambles sooooooo

### some notes on bmTM

i would like to do a weekly roundup  
perhaps the first split would be `WORK` vs `FUN`  
`FUN` would be like `DOTA` And `FOOD`  
while `WORK` would be like this, and the daily projects

### whats the deal with wommy.io

so i finally rebuilt the [mixture docs](docs-mixture.netlify.app)

i think the problem is two fold,  
1. a super weird `{{ assets }}` filter
2. a super weird `{{ navigation }}` component?

i might get to use nav11ty  
also i think i can just use a absolute path

--- 1402 , i should bust into wommy-www soon

--- 1425 , its started 

im trying to move the files into their original places

--- 1535 , did that, now trying to combine some layouts

--- 1549 , closed that all up and pushed, gonna break

--- 1600 , brainstorm

--- 1701 , some notes

with an absolute path, and a dynamic nav
functionally, the site is done

i need to use _sitemap to generate the nav


===


## 9/8 | jujuroom , 1125 , wommy nav source files , yuuuuuup, yeah so

i was working on pulling out the includes,  
on solidifying the template  
right now its really messy, i have like 15+ for the proj when i think i had like sub 5

the nav is really fucking me, because a double nesting

think i have to do it the right way out the gate,  
which isnt the worst  
but i was tryna do a quick n dirty rn

do i want to pull in 11ty-plugin-nav?  
from what i remember it did exactly this

--- 1313 , 

got some pushes in,  
far from as easy as i thought


===


## 9/6 | jujuroom , 1324 , twas workin on wom

soooooo

because these are a little complex, i feel like i need to split these  
into what?

--- so what are my current sections

	- _includes
	- assets
	- branding
	- clients
	- experience
	- experiments
	- hobbies
	- home
	- inspiration
	- media
	- models
	- resume
	- .eleventy
	- index
	- media

--- these should resolve to

	- _includes
	- assets -> _static
	- models -> _data
	- .eleventy

	- content
		- branding
		- clients
		- hobbies
		- home
		- inspiration
		- media
		- resume

	- pages
		- index
		- experience
			- branding
			- clients
			- resume
		- experiments
			- feed
			- grid
		- media

--- i think i want to work on the nav

--- DONE nav-social

--- TODO css , #oof , first of all, mobile first

--- TODO this is why i was working on generating the Pages

--- 1723 , working on better mix-11ty , so what am i into

	Staged
	
		- .eleventy
		- _includes
			- Base
			- nav
			- Home
				- introduction
				- inspiration
				- hobbies
					- biking
					- kungfu
					- psych
			- _branding
			- _clients
			- _resume
			- media
		- index

	--- push?
	

===


## 9/2 | jujuroom , 1211 , jess over


===


## 9/1 | jujuroom , 1239 , figuring out what to do

cant believe i did so much cacao yesterday

once again andy bell is a genius,  
i still feel like i can use tailwind with CUBE

i need to work on my postcss build  
the css workflow is equally as important as the html

probs gonna need to rebuild the cy4n soon

probs gonna need to refactor the cacao data too,  
i really understood it when it was 90% done,  
isnt that usual

im glad i took a crack at figma too,  
its grid tooling is so leet

maybe do some wommy?  
whens the last time i worked on wommy, #oof

maybe vimwiki would be sick too,  
im glad i found that its md option is actually the way to go,  
the last thing i want is to have to manage a new filetype

i shoud try to delete a few more vids from the camera folder

i need to somehow push the strapi todos and marks to sanity  
im curious if im reaching some type of limit

another reason i was so successful yesterday was because of lunch

--- 1310 , wommy-www

this is so much worse than i thought  
this is probably why i did so many rebuilds  
this history is straight up comical

--- 1336 , converting the md to pug was the worst idea, thanks jeff

i see now, i dont think i have the mixture inputs, just the output


===


## 8/31 | jujuroom , 1105 , cleaning up todo/marks

--- 1130 , gonna try to cacao a bit

--- 1239 , sooo i typed up a bunch of cacao

settings:
  open mon - sat
	closed sunday
	royal oak, mi
	est. 2010
	cacao tree cafe
	248.336.9043
	order online at cacaotreecafe.com
	please notify our staff of any food allergies or sensitivities
	be aware that we produce our fiid in a facility that frequently uses tree nuts, coconuts, seeds, and some gluten
	
menu:
  salads:
	  green thumb $9 $11
			mixed greens, avocado, chickpeas, carrot, broccoli, cherry tomato, cucumber, choice of dressing
		foodies favorite $10 $14
			mixed greens, avocado, carrot, broccoli, chickpea, red cabbage, cucumber, cherry tomato, red onion, walnuts, pumpkin seeds, raisin, sunflower seeds & dressing
		mexican $10 $14
			romaine, seasoned nut crumbles (almond, walnut, sunflower), cashew sour cream, pico de gallo, avocado, cherry tomato, cucumber and chipotle vinaigrette or ranch dressing
		caesar $10 $14
			romaine tossed in caesar dressing with chickpeas, dehydrated croutons (GF), almond flour "parmesan", red onion and cherry tomato try it as a wrap $11
		farm hand $10 $14
			romaine, avocado, chickpeas, carrot, cucumber, cherry tomato, broccoli, red onion, candied or garlic walnuts and choice of dressing
	power bowls
	  southwest $14
	  superfood $14
	  sesame spinch $12
	  zoodle pasta $14
	wraps & sandwiches
	  wrap options
		burrito $12
		rainbow wrap $11
		general tso lettuce wraps $14
		quinoa salad wrap $11
		quesadilla $14
		chickpea salad sandwich $15
		chickpea salad wrap $11
	house soups & salad dressings
	  daily house made soups $4 $6
			8oz cup or 12oz bowl
		soup & salad combo $12
		  small green thumb salad with choice of dressing and cup of soup
			upgrade your salad $2
			upgrade to bowl of soup $2
	house made sauces &amp; salad dressings
		$1 2oz $1.5 3oz $4 8oz
	  tahini (sesame)
		ginger lime
		maple balsamic
		ranch (cashew, almond)
		caesar (cashew)
		basil miso (cashew)
		chipotle vinaigrette
		general tso sauce
		avocado sauce
		garden salsa
  sides & extras
		please note we prepare everything free of gluten, dairy/eggs and soy. Our sprouted wheat wrap is teh only item containing gluten.
		we do not have an oven or stove therefore most items are served chulled ( excludes soups & black beans.) we repare our food fresh daily in small batches.
		black beans $4 $6
		cole slaw $3 $5
		chickpea salad $5 $7
		quinoa salad $4 $6
		corn chips $3
		tumeric chickpeas $1.5
		croutons $2
		pico de gallo $1
		avocado $1
		chips & dip $6
			nacho cheese, sour cream, salsa or avocado sauce
		salad dressings & sauces $1 $1.5 $4
		sour cream or nacho cheese $1.5 $2 $5
		seasoned nut crumble $3
			extra taco meat or sesame meat
		almond "parmsean" $1.5
		pickled jalapeno $1
superfood smoothie & beverage menu
	green
		bee green $11
		on a beach hawaii $10
		chia green $10
	superfruit
		orange creamsicle $9.5
		sunshine $9.5
		inner warmth $9.5
		ambrosia $9.5
	protein
		protein fuel $11
		cold brew $10
		breakfast blend $10
		mango muscle $11
		post workout protein $11
		high vibe $10
		cinnamon bun $10
		spice of life $10
	build your own organic smoothie $8
		select 3 fruits, a leafy green & liquid
		fruits
		greens
		liquid
		superfoods $1
		superfoods $.75
	additional beverages
		drought organic cold pressed juice $8
		neu kombucha $4
		reed's ginger brew $2.5
		spring water $2
		shots 1oz 2oz
			wheatgrass shots $4 $7
				fresh juiced local wheatgrass
			ginger shots $4 $7
				fresh juiced ginger and lemon juice with umeric and cayenne garnish
			brought juice immunity shots $2 $4
				apple, lemon, ginger, tumeric, cayenne, oil of oregano
			fire breathing dragon $7
				a blend of wheatgrass and our ginger shot (double shot only)
	tonics/elixers
		daily tonic $12
		roots power $10
		exhale $11
		refresh $10
		i-thrive $12
		fresh cut thai coconut water $7 $9
	kids menu
		kids smoothies $4 $5
		nut butter & jelly $6
		chips & dip $5
		garden salad $4
		organic juice $2.5 $3.5
		house made milkd $2.5 $3.5

--- 1735 , 
got it mostly done,  
watching some cube css stuff to finish it up

gonna probably have to fixup my css workflow  
for the tailwind @apply's

--- 1810 , notes on figma, so

both pages have a margin
	how big, i dunno
	
front
	header
		main
		left / right
	main [3 cols x 4 rows]
		1x2 salad
		1x2 bowl
		1x3 sandwich
		2x1 soup / dressings
		3x1 sides
	
back
	

each of the 3 cols are about 190 wide

--- 1854 , figma measurements

width to height ratio seems to be 1.6

im guessing paper size is ledger / tabloid 11x17

in figma  
	w is 589
	h is 970
	margin about 16px

content area 557 x 940
	
so i think i need to 1.5x everything

front 

--- 1937 , figma grid lines, ok so it seems like

24px grid kinda lines up

3 cols 9 rows

--- 2020 , how is andy bell such a genius


===


## 8/30 | jujuroom , 917 , cleaning up tabs


i think i need to set up a client fetch

if i could trigger a rebuild every 24 hours,  
i could do a client after that  
baseline on a certain time

i also need to somehow show the bookmarks

the serverless endpoint is already set up

one of the next harder things is gonna be the category toggles

i also want to combine the sanity fetches  
or rather split out the exports

i have some basic categories already

how do i add a category tho

inbox, dota, food, music

its gotta be a patch

item.onClick => toggle some form

is that later tho

how do i audit / archive


--- 1022

so the categories i have are:  
inbox, dota, food, music

--- 1122

so what is the play

i want to have a row of buttons,  
clicking the button changes whats active  
active && show

so im going to write a filter?

--- 1201

this filter is pissing me off

the default state should be all or inbox

clicking a button should change that 

--- DONE , 1247

- [X] bm-filter-rough

--- whats next?

--- 1654  
- [ ] todo REF bookmarks

you could have a todo named monofont  
and it could reference the tabs for that


===


## 8/28 | jujuroom , 1517 , todo-tm


### jot

just watch this [video](https://www.youtube.com/watch?v=diqa3Ma7z-4) on jot

the bookmarklet is genius

so whats my TODOs having to do with the bookmarks

or even the TODOs i guess


### from `blogpost/08-26`

- [ ] FIXUP: `action="/api/todo/"`
- [ ] - ? - submit the form thru javascript
- [ ] ...fields
- [ ] RN function > todo
- [ ] export/import sanityClient

the function should

- [ ] pass the document into the client
- [ ] check for errors
- [ ] FIXUP: `event.body.split`
- [ ] ...schema to Form

- [ ] - ? - url based routing ? post does this : get does that
- [ ] redirect: /api/todo /todo/ 301


### so whats actually worth working on

i think the first thing i want to do is work on [decodeURI](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI)

or maybe pulling out the sanityClient

--- 1551

- [X] [esbuild in netlify functions](https://youtu.be/UgqpgQhwCyg?t=1799)


gonna slice the sanityClient out

--- DONE  
- [x] [decodeURIComponent](https://stackoverflow.com/a/64440557/5216425) [2](https://www.w3schools.com/jsref/jsref_decodeuricomponent.asp) 
- [x] [replace +/' '](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent#decoding_query_parameters_from_a_url)
- [x] .trim
- [x] split out sanity
- [x] utils dir

--- 2344 DONE bookmark-rough


===


## 8/26 | jujuroom , 1344

so iiiiiii deployed the sanity for TM,

it doesnt look too bad rn


	--- 1712 , netlify serverless

so whats the move

	--- 1738 , ntl-cli to the resq again

so 


===


## 8/25 | jujuroom , 1610

so whats the move here

im trying to update the todo alpine

first i need to netlify it

whats even the netlify workflow, its been so long


	--- 1700 , ok so pushed todo-tm

next i need to do this netlify thang

i pulled the repo, updated it, pushed it back

what is the netlify workflow


	--- 1837 ,

sooooooooooooo

`ntl init` is the tits

i was just checking out https://bryanlrobinson.com/blog/using-11ty-javascript-data-files-to-mix-markdown-and-cms-content-into-one-collection/

i need to figure out how to link sanity 

i think i need to make a technomad collection


	--- 1953 , socionics.fyi
	
yup 

what do i do with this

- [X] launch a netlify thang
- [X] 11ty
	- [X] waiting on you ibrahim


===

## 8/24 | jujuroom

### 1259 , rambles, startup

yup sooooo

what i dont like about brobmark  
1. lots of extra code
2. verbose functions
3. depreciated libs
4. functions that do two things, not one well
5. 

---
megan

whats her events i have to model 

---
bookmarks

what do i have to model

first of all i think i can combine them with the todos  
make this kind of personal GTD site thang

components  
- form
- list
- item


===

## 8/23 | jujuroom

### 1015 , rambles, bootin up

yupyupyup,

so i already did a bunch of work like tidying up in prep for today

i really need to at least get started on the bookmark thang

### 1040 , got dracula set up on fr4nk3n

anyway


---
### 1157 , tryna start this bookmarks

so whats the move

https://www.smashingmagazine.com/2019/10/bookmarking-application-faunadb-netlify-11ty/


--- technologies

	-	netlify
		- gonna use this
	- fauna
		- gonna port this to sanity
	- 11ty
		- gonna use this
	- ios
		- gonna try to PWA this

--- first step, fauna with netlifyDev

- [X] create DB_Bookmarks -> Prod
	- schema
		- url
		- pageTitle
		- description
		- tags
- [X] 11ty install 
- [X] pulling in data & template

--- 
### 1404

- [ ] netlify functions
	- [ ] Pass a URL as a query parameter to our function URL.
	- [ ] load the URL
		- [ ] scrape: if title OR description
	- [ ] format
	- [ ] push to sanity
	- [ ] rebuild

---
### 1409 , break

---
### 1947 , gotta start

ok so whats happening herrr

[link to repo](https://github.com/brob/netlify-fauna-bookmarks/tree/sanity-data)


===

## 08/20 | jujuroom

### 1456 , westmenu

sooooo

im working on the west menu

what are the problems im having

### 1717 , just pushed something

gonna do another pass,  
taking some notes

---

## 08/17 | jujuroom

### 1858 , misc rambles

so what am i starting on

guess im looking at west-menu

i think im gonna branch it

### 1925 , some remarks on TMS

#### i think i need to write this down

so  
how does TMS work  
right now,

i clone over the src from root into the tms/src

i thought TMS's src was 11ty,  
im afraid to check how old the tms version is

maybe i should charge into that

### 2019 ,

the more i look into it,  
it seems like alot of kinda fucked

### 2115 ,

all the overhead for TMS is ridiculous

### 2124 , sanity

so im setting up a sanity for it

looks like i need a

```
meta
---
starters
sandwiches
salads/wraps
pizza
```

### 2337 , finished west menu port to sanity

going to highdive

---

## 08/13 | jujuroom

### 1422 , reference-able rsync

- [Rsync#Full_system_backup](https://wiki.archlinux.org/title/Rsync#Full_system_backup)

ran this,  
`rsync -aAXHv --exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/media/*","/lost+found"} / /path/to/backup`

split my backups into...  

- Documents/
- w0m/ --exclude=Documents
- / --exclude=home/+list mentioned above

now i need to move those two other files back

rsync'd 20-10-05/w0m with same command

this feels longer than the root / one

i need some sane defaults to exclude stuff like

- node_modules
- cache

SO MUCH FASTER

`sudo du -sh */`

8.3G vs 4.3G 

`sudo rsync -aAXHv --exclude={"*/node_modules/*","*/.cache/*"} / /path/to/backup`

turns out i excluded node_modules from the 20-12-24 one,  
im guessing .cache will help going forward,  
maybe even a `*/cache/*` | `*/Cache/*` | `*/^cache$/*`  
i should learn regex

`sudo rsync -aAXHv --exclude={"*/node_modules/*","*/.cache/*","/.cache/","*/cache/*","*/Cache/*"} / /path/to/backup`

^ this cut 20G off my home/  
2/3  
66%

without that excludes, home is 270% larger,  
christ

really need to learn regex

other links
- [https://docs.npmjs.com/cli/v7/commands/npm-cache](https://docs.npmjs.com/cli/v7/commands/npm-cache)
- [https://superuser.com/questions/171534/list-the-current-folder-folders-sizes-with-the-terminal](https://superuser.com/questions/171534/list-the-current-folder-folders-sizes-with-the-terminal)

---

## 08/12 | jujuroom

### 1457 , i think all of yesterday got derped

this is like the hundredth time

### 1527 , started to open anna/ back up

### 2110 , switched anna to sanity

wtf went on in there @_@ :P

### 2152 , cleaning tabs up

---

## 08/10 | annabrab => sanity

### 1712 , holy shit

so little recap

anna updated her forestry files 9 days ago,  
and she borked everything

so a little more diggin,

i have that anna-redo that i did right before i got my tooth knocked out

i need to figure out how to get it to work with the submodule,  
it shouldnt be that hard,  
just some npm scripts?  
whats that one that one that i had to learn for the travmed course?

[shelljs](https://github.com/wommy/technomad-express/blob/dev/package.json#L22)

i have some more ideas,  

i thought i set up a client folder for working with tms

```
client/
	_data/
	_components/
		_html5
		_page
		_post
		header
	_pages/
		default/
			
```

more on this later

### 1839 , 

i think i need to get that shx working

does there need to be two commands?  
an import to tms,
and export from tms

anyway i just need to see how much is working currently

---

## 08/09 | jujuroom

### 0959 , jegan layout

just writing some rambles here

i should reference that blogpost

### 1044 , jegan stuffs

so i need to model the data,  
i might just do that here

soooo

Art/
	bondage bear
	shoe
		flamers
		ruffle socks
		butterfly
		leg & boot
	cow
		regular
		chocolate
		strawberry
		blueberry
	lava shroom
	my plants wear leather
		white
		with words
	lust
	dont be a dick
	zodiac
		aries
		taurus
		gemini
		cancer
		leo
		virgo
		libra
		scorpio
		sagittarius
		capricorn
		aquarius
		pisces
	led zeppelin
		black
		white
	rainbow penis
		white
		rainbow
	skull cone
	horny
	praise me
	play with me
	devil inside
	vibin
	crown of death
	dead inside
	skull flame
	cumfort me
	live delicously
	lit
	be nice of leaf
	spooky smoke
	flowers grow
	witchy crystal
	deadly flutter
	light me up
	skull plant
		black
		white
	mushroom
		booty
		booty + titty
		titty

Merch/
	lighters
		shoe
			flamers
			ruffle socks
			butterfly
			leg & boot
		cow
			regular
			chocolate
			strawberry
			blueberry
		lava shroom
		my plants wear leather
			white
			with words
		lust
		dont be a dick
		zodiac
			aries
			taurus
			gemini
			cancer
			leo
			virgo
			libra
			scorpio
			sagittarius
			capricorn
			aquarius
			pisces
		led zeppelin
			black
			white
		rainbow penis
			white
			rainbow
		skull cone
		horny
		praise me
		play with me
		devil inside
		vibin
		crown of death
		dead inside
		skull flame
		cumfort me
		live delicously
		lit
		be nice of leaf
		spooky smoke
		flowers grow
		witchy crystal
		deadly flutter
		light me up
		skull plant
			black
			white
		mushroom
			booty
			booty + titty
			titty
	art print
		size
			11x17
			8.5x11
			4x6
		1-38 + zodiac
	custom portrait
		type
			pet
			nude
			art
		color
			black
			white
			shapes
		size
			11x17
			8.5x11
			4x6
	misc
		sticker
			deadly flutter
			cumfort me
			my plants wear leather
			live deliciously
			play with me
			skull plant
		keychain
			mushroom
		tattoo
			bondage bear
		pin
			deadly flutter
		patch
			deadly flutter
		candle
			1-35 + zodiac
	Rebels
		tattoo design
		custom lighter case + matching art lighter
		lighter case + matching art lighter
			light me up
			horny
			mushroom
			live deliciously
			devil inside
			cumfort me
			be nice or leaf
			praise me
		custom nude lighter
		3 mushroom lighters + sticker set
		lighter wrap
			1-26
			zodiac
		mushroom keychain
		Art Print
			11x17
			1-38 + zodiac
		custom portrait lighter
		2 pack mystery lighters

### 1154 , breakpoint, some thoughts

so the original idea to move stuff into art was genius,  
im going to do one more pass to tighten it up, (titanup)

Merch/
	misc
		tattoo
			bondage bear
		keychain
			mushroom
		sticker
			deadly flutter
			cumfort me
			my plants wear leather
			live deliciously
			play with me
			skull plant
		candle
			1-35 + zodiac
		pin
			deadly flutter
		patch
			deadly flutter
	art print
		size
			11x17
			8.5x11
			4x6
		1-38 + zodiac
	Custom
		custon art lighter + case
		custom lighter
			portrait
			nude
			pet
		tattoo design
		custom portrait
			type
				pet
				nude
				art
			color
				black
				white
				shapes
			size
				11x17
				8.5x11
				4x6
	Rebels
		art lighter + case
			light me up
			horny
			mushroom
			live deliciously
			devil inside
			cumfort me
			be nice or leaf
			praise me
		mushroom set, 3 lighters + sticker
		lighter wrap
			1-26 + zodiac
		2 pack mystery lighters
	lighters
		shoe
			flamers
			ruffle socks
			butterfly
			leg & boot
		cow
			regular
			chocolate
			strawberry
			blueberry
		lava shroom
		my plants wear leather
			white
			with words
		lust
		dont be a dick
		zodiac
			aries
			taurus
			gemini
			cancer
			leo
			virgo
			libra
			scorpio
			sagittarius
			capricorn
			aquarius
			pisces
		led zeppelin
			black
			white
		rainbow penis
			white
			rainbow
		skull cone
		horny
		praise me
		play with me
		devil inside
		vibin
		crown of death
		dead inside
		skull flame
		cumfort me
		live delicously
		lit
		be nice of leaf
		spooky smoke
		flowers grow
		witchy crystal
		deadly flutter
		light me up
		skull plant
			black
			white
		mushroom
			booty
			booty + titty
			titty

### 1228 ,

ok so now im gonna try to tackle it from the art perspective

Art/
	bondage bear
		tattoo
	shoe
		flamers
			lighter
		ruffle socks
			lighter
		butterfly
			lighter
		leg & boot
			lighter
	cow
		regular
			lighter
		chocolate
			lighter
		strawberry
			lighter
		blueberry
			lighter
	lava shroom
		lighter
	light me up
		art lighter + case
	horny
		art lighter + case
	mushroom
		booty
			lighter
		booty + titty
			lighter
		titty
			art lighter + case
			lighter
	live deliciously
		art lighter + case
	devil inside
		art lighter + case
	cumfort me
		art lighter + case
	be nice or leaf
		art lighter + case
	praise me
		art lighter + case
	mushroom
		set, 3 lighters + sticker
		keychain
	my plants wear leather
		white
			lighter
		with words
			lighter
	deadly flutter
		sticker
		pin
		patch
	cumfort me
		sticker
	my plants wear leather
		sticker
	live deliciously
		sticker
	play with me
		sticker
	skull plant
		sticker
	lust
		lighter
	dont be a dick
		lighter
	zodiac
		aries
			lighter
		taurus
			lighter
		gemini
			lighter
		cancer
			lighter
		leo
			lighter
		virgo
			lighter
		libra
			lighter
		scorpio
			lighter
		sagittarius
			lighter
		capricorn
			lighter
		aquarius
			lighter
		pisces
			lighter
	led zeppelin
		black
			lighter
		white
			lighter
	rainbow penis
		white
			lighter
		rainbow
			lighter
	skull cone
		lighter
	horny
		lighter
	praise me
		lighter
	play with me
		lighter
	devil inside
		lighter
	vibin
		lighter
	crown of death
		lighter
	dead inside
		lighter
	skull flame
		lighter
	cumfort me
		lighter
	live delicously
		lighter
	lit
		lighter
	be nice of leaf
		lighter
	spooky smoke
		lighter
	flowers grow
		lighter
	witchy crystal
		lighter
	deadly flutter
		lighter
	light me up
		lighter
	skull plant
		black
			lighter
		white
			lighter
	

	?
		lighter wrap
			1-26 + zodiac
		art print
			11x17
			4x6
			8.5x11
		candle
			1-35 + zodiac


	??
		2 pack mystery lighters


	custom
		lighter & case
		tattoo
		nude lighter
		portrait
			pet
			nude
			art portrait

	misc
	Custom
		custom lighter
			portrait
			pet
	Rebels
	
### 1316 , ok im going crazy, switching to Moleskin

---

## 08/07 | jujuroom

### 1501 , rambles

what to write..

im watching some sanity videos

---

## 08/06 | jujuroom 

### all my shit from yesterday got deleted somehow , 1153

gonna disable my todo buttons

### 1237 , got that done, gotta merge it now

### 1400 , merged it, dunno what to do now

### 1544 , sanity todo

---

## 08/02 | jujuroom

### rambles , 1245

so i think imma start 11ty from scratch 

i need to focus on the possibility of publishing these

### new project

`mkdir $1; cd $1; git init; gh repo create`
`echo '# $1' >> README.md`
`git add .; git commit -m 'init: readme'; git push -u origin dev`

### 11ty from scratch , 1305

---

# 07/19 | jujuroom

## rambles, 1318

### combining the todo APIs

so what does i need todo

## 1537 , DONE

- quick strapi todo
- alpine fetch

### alpine post

## 2030 , did so much

---

# 07/15 | jujuroom

## 1601 , jegan store

soooooooooo, whats up

im trying to work on my filter method

i need to create like a little mini nav that changes display state by filtering results

so what do i need

i need to create a project


im already thinking of all these events, im glad i spent the time

---

# 7/13 | jujuroom

## misc rambles , 1455

think im gonna cue up strapi 

## mike call , 1627

- wireframe
- set up a call

allows me to work on something

from mike,  
- similar websites
- payments

models  
- Login  
- User - stored on your end

put the catalog up  
- less than 100 products  

catalog  
- product categories
- products
- details
	- id
	- quantity
	- weight
	- shipping

views  
- homepage
- login
- catalog
- product page
- add form to cart
- cart
- cart => Order database
- Order schema  

APIs  

---

- homepage
- login
	- createUser
	- authenticateUser
- catalog list
	- filterByCategory
- catalog item
- item page
	- item metaData
		- name
		- picture
		- price
		- quantity
	- addToCart form
		- quantity
- User.Cart
	- display cart items
	- addOrder form
		- payments
			- credit card
			- crypto
				- bitcoin
				- eth
				- USDC
				- monero

loose categories
- seeds
- clones
- brand

---

routes / pages
- home
	- product
- login
- user
	- cart

methods / functions / interactivity
- User
	- .create
	- .authenticate
- User.authenticated
	- Details
		- .name
		- .address
		- .paymentMethod
	- Cart
		- .submitOrder
- Catalog
	- .filterByCategory
	- Product
		- .addToCart( quantity )

---
end mike
---

## strapi setup , 1704

---

# 7/12 | jujuroom

## fixed up some startup scripts , 1321

gotta start on some jegan

### jegan stock - linode, tskoalite

### cleaned up ts-koa-lite , 1407

gonna finish that tho, get those jegan defaults in there

### having trouble with naming and placing , 1415

so im running into the same problem as tms,  
which is some type of versioning, includes problem  
template dir or submodule

think im gonna break on it 

### back , 1435

hit up keith on signal

## megan sql

## got a working copy up , 1633

gonna break

### back , 1644

## tryna clean some yt tabs , 2130

i guess i got alot done today

i would like to take some time to think outloud about some things

fuggin clipboard isnt working on server Q_Q

---

# 7/7 | jujuroom 

## starting , 1313

just talked to rian for 2 hours,  
shes a cutie but whoa

N E WAY

did dentist form, getting to work

## traversy media mongoose oauth , 1355

## recipe instapot fajita , 1507

## ate, back on mongoose oauth , 1549

## got dotenv to work after hours , 1744

---

# 7/6 | jujuroom

## 1244 , tm-todo filter

ok so what am i doing

i want to create a filter on my todos

### 1316 , been cleaning up my tmux, wip

### 1344 , didnt think id be editing my .config/i3

### 1415 , hostname rd

### 1624 , cant get njk to work

### 1644 , tryna commit and push exphbs

### 1754 , watched some vids on vim

