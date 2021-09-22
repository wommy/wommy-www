---
layout: post
title: "nueue"
#date: 2019-07-24 16:04:44 -0400
---

so here i wanted to walk thru my steps from olde 2 nueue, along with give a little justification as to how and why i made the decisions 

## olde

[link to olde](/olde.html)

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width" />
<meta name="keywords" content="Tommy, Williams, Wommy, Tilliams, Website, Websites, Design, Develop, Development, Make, Create">
<meta name="description" content="Tommy Williams's Website - Website Design / Development">
<meta name="author" content="Tommy Williams, Wommy Tilliams">
<style type="text/css">
body{
	font-family:tahoma,sans-serif;
	margin:0;
	font-variant:small-caps;

	display: flex;
	flex-direction:row-reverse;
}
section, aside{
	margin:1rem;
}
aside{
	width:20rem;
}
a{
	display:list-item;
	list-style:decimal inside;
}
</style>
<title>Tommy Williams</title>
<aside>
	portfolio
	<nav>
		<a href="//aparadi.se/">aparadi.se</a>
		<a href="//wommytilliams.com/8c/">eightcell</a>
	</nav>
	<br>
	to hire me for website work<br>
	contact
	<nav>
		<a href="mailto:froggie92@gmail.com?Subject=Job | WommyTilliams.com">email</a>
		<!-- <a href="tel:+13128189011">Phone</a> -->
	</nav>
	<br>
	to get an idea of who i am<br>
	stalk me on social media
	<nav>
		<a href="//facebook.com/Froggie92">facebook</a>
		<a href="//twitter.com/Froggie92">twitter</a>
		<a href="//instagram.com/wommytilliams">instagram</a>
		<a href="//plus.google.com/118102255716845472363/">google+</a>
		<a href="//reddit.com/user/Froggie92/">reddit</a>
	</nav>
</aside>
<section>
	welcome<br>
	<br>
	tommy williams is<br>
	- designer: i design solutions to your problems<br>
	- developer: i develop code to achieve that design<br>
	<br>
	i can build your website from scratch or work off your template<br>
	i can design phone apps, but cannot develop or publish them<br>
	<br>
	most of my work is on the front end: what the user sees and interacts with<br>
	- html<br>
	- css<br>
	- javascript<br>
	- adobe photoshop / illustrator<br>
	<br>
	i also take on back end work: databases and scripts of more complex sites<br>
	- php<br>
	- mysql<br>
	- ruby on rails<br>
	<br>
	i emphasize<br>
	- mobile: as good as, if not better than the desktop site<br>
	- user interface / experience: the user understands what to do and enjoys doing it<br>
	- rapid development: focus on delivering a working prototype asap over long planning phases<br>
	- clean / efficient code: other developers can easily interpret and edit my code<br>
	<br>
	i am more familiar with<br>
	- mac over pc<br>
	- android over iphone<br>
	<br>
</section>
<!--
To Do
	Resume
	Bio
	Icons
	SEO
		http://moz.com/learn/seo/meta-description
		http://googlewebmastercentral.blogspot.com/2014/03/introducing-new-webmaster-academy_18.html
	Split Social Media from Contact
	Inspiration / Websites I like
		http://itemsandthings.com/
	Github Version Control
	Rework Bio to say: Templates suck, you should hire me to upgrade
	Social Media rebranding
		twitter
		fb - wommy tilliams
	Add
		https://depaul.digication.com/toms_portfolio/Final_Media_Piece
		https://docs.google.com/document/d/16n7Eqc_12aQHAs6kDREl4x1FXbrcznPb0EQKfNwfpac/edit
	Email @wommytilliams.com
-->
{% endhighlight%}

## nueue

[link to nueue](/nueue.html)

{% highlight html %}
---
---
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, inital-scale=1" />
		<meta http-equiv="x-ua-compatible" content="ie=edge">
		<title>{{ site.data.olde.head.title }}</title>
		<style type="text/css">
			body{
				margin: 0;
				font-family: tahoma,sans-serif;
				font-variant: small-caps;

				display: flex;
				flex-direction: row-reverse;
			}
			main, header{ margin: 1rem; }
			header{ width: 20rem; }
			a{
				display: list-item;
				list-style: decimal inside;
			}
			p{ margin: 0; }
			div{ margin-bottom: 18.9px;}
		</style>
		{%- for each in site.data.olde.head.meta %}
		<meta name="{{each.first}}" content="{{each.last}}">
		{%- endfor %}
	</head>
	<body>
		<header>
			{%- for obj in site.data.olde.header %}
			<div>
				<p>{{ obj.first }}</p>
				<nav>
					{%- for each in obj.last %}
					{{ each }}
					{%- endfor %}
				</nav>
			</div>
			{%- endfor %}
		</header>
		<main>
			{%- for obj in site.data.olde.main %}
			<div>
				<p>{{ obj.first }}</p>
				{%- if obj.last %}
				<div>
					{%- for each in obj.last %}
					<p>- {{ each }}</p>
					{%- endfor %}
				</div>
				{%- endif %}
			</div>
			{%- endfor %}
		</main>
		<footer style='display: none;'>
			Tasks
			{%- for state in site.data.olde.tasks %}
			{%- for task in state.last %}
			{%- unless task.first %}
			{{ task | prepend: state.first}}
			{%- else %}
			{{ task.first.first | prepend: state.first }}
				{%- for subtask in task.first.last %}
				{{ subtask | prepend: state.first }}
				{%- endfor %}
			{%- endunless %}
			{%- endfor %}
			{%- endfor %}
		</footer>
	</body>
</html>
{% endhighlight %}

## template
{% highlight html %}
---
---
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, inital-scale=1" />
		<meta http-equiv="x-ua-compatible" content="ie=edge">
		<title>{{"{{ site.data.olde.head.title "}}}}</title>
		<style type="text/css">
			{{"{{ style "}}}}
		</style>
		{{"{%- for each in site.data.olde.head.meta "}}%}
		<meta name="{{"{{ each.first "}}}}" content="{{"{{ each.last "}}}}">
		{{"{%- endfor "}}%}
	</head>
	<body>
		<header>
			{{"{{ header "}}}}
		</header>
		<main>
			{{"{{ main "}}}}
		</main>
		<footer style='display: none;'>
			{{"{{ footer "}}}}
		</footer>
	</body>
</html>
{% endhighlight %}

## {{"{{ style "}}}}

{% highlight css %}
body{
	margin: 0;
	font-family: tahoma,sans-serif;
	font-variant: small-caps;

	display: flex;
	flex-direction: row-reverse;
}
main, header{ margin: 1rem; }
header{ width: 20rem; }
a{
	display: list-item;
	list-style: decimal inside;
}
p{ margin: 0; }
div{ margin-bottom: 18.9px;}
{% endhighlight %}

## {{"{{ header "}}}}

{% highlight liquid %}
{{"{%- for obj in site.data.olde.header "}}%}
<div>
	<p>{{"{{ obj.first "}}}}</p>
	<nav>
		{{"{%- for each in obj.last "}}%}
		{{"{{ each "}}}}
		{{"{%- endfor "}}%}
	</nav>
</div>
{{"{%- endfor "}}%}
{% endhighlight %}

## {{"{{ main "}}}}

{% highlight liquid %}
{{"{%- for obj in site.data.olde.main "}}%}
<div>
	<p>{{"{{ obj.first "}}}}</p>
	{{"{%- if obj.last "}}%}
	<div>
		{{"{%- for each in obj.last "}}%}
		<p>{{"{{ each | prepend: '- ' "}}}}</p>
		{{"{%- endfor "}}%}
	</div>
	{{"{%- endif "}}%}
</div>
{{"{%- endfor "}}%}
{% endhighlight %}

## {{"{{ footer "}}}}

{% highlight liquid %}
{{"{%- for state in site.data.olde.tasks "}}%} # <= grabs the data in olde.yaml.tasks, of which theres two: done and todo
{{"{%- for task in state.last "}}%} # <= grabs the states task array
{{"{%- unless task.first "}}%} # <= check if each task is an array
{{"{{ task | prepend: state.first"}}}} # <= if it is not, prepend the state before the task
{{"{%- else "}}%} # <= if it is: 
{{"{{ task.first.first | prepend: state.first "}}}} # <= print the task-title, prepended with state
	{{"{%- for subtask in task.first.last "}}%} # <= for each item in the sub array
	{{"{{ subtask | prepend: state.first "}}}} # <= print, prepended with state
	{{"{%- endfor "}}%}
{{"{%- endunless "}}%}
{{"{%- endfor "}}%}
{{"{%- endfor "}}%}
{% endhighlight %}

## {{"{{ data "}}}}

{% highlight yaml %}
head:
  title: Tommy Williams
  meta:
    author: Tommy Williams
    description: Tommy Williams's Website - Website Design / Development
    content: Tommy, Williams, Wommy, Tilliams, Website, Websites, Design, Develop, Development, Make, Create
header:
  portfolio:
    - <a href="//aparadi.se/">aparadi.se</a>
    - <a href="//wommytilliams.com/8c/">eightcell</a>
  to hire me for website work<br>contact:
    - <a href="mailto:froggie92@gmail.com?Subject=Job | WommyTilliams.com">email</a>
    - <!-- <a href="tel:+13128189011">Phone</a> -->
  to get an idea of who i am<br>stalk me on social media:
    - <a href="//facebook.com/Froggie92">facebook</a>
    - <a href="//twitter.com/Froggie92">twitter</a>
    - <a href="//instagram.com/wommytilliams">instagram</a>
    - <a href="//plus.google.com/118102255716845472363/">google+</a>
    - <a href="//reddit.com/user/Froggie92/">reddit</a>
main:
  welcome:
  tommy williams is:
    - designer&#58; i design solutions to your problems
    - developer&#58; i develop code to achieve that design
  i can build your website from scratch or work off your template<br>i can design phone apps, but cannot develop or publish them:
  most of my work is on the front end&#58; what the user sees and interacts with:
    - html
    - css
    - javascript
    - adobe photoshop / illustrator
  i also take on back end work&#58; databases and scripts of more complex sites:
    - php
    - mysql
    - ruby on rails
  i emphasize:
    - mobile&#58; as good as, if not better than the desktop site
    - user interface / experience&#58; the user understands what to do and enjoys doing it
    - rapid development&#58; focus on delivering a working prototype asap over long planning phases
    - clean / efficient code&#58; other developers can easily interpret and edit my code
  i am more familiar with:
    - mac over pc
    - android over iphone
tasks:
  '🗹 ':
    - Icons
    - Split Social Media from Contact
    - Inspiration / Websites I like:
      - http://itemsandthings.com/
    - Github Version Control
    - Email @wommytilliams.com
  '☐ ':
    - Resume
    - Bio
    - SEO:
      - http://moz.com/learn/seo/meta-description
      - http://googlewebmastercentral.blogspot.com/2014/03/introducing-new-webmaster-academy_18.html
    - Rework Bio to say&#58; Templates suck, you should hire me to upgrade
    - Social Media rebranding:
      - twitter
      - fb - wommy tilliams
    - Add:
      - https://depaul.digication.com/toms_portfolio/Final_Media_Piece
      - https://docs.google.com/document/d/16n7Eqc_12aQHAs6kDREl4x1FXbrcznPb0EQKfNwfpac/edit
{% endhighlight %}

this took me all day to do because the liquid documentation isnt clear

---

TODO
		in some meta tags: delete trailing ' /'
		viewport meta: cotent+=', initial-scale=1'
		add meta: ie=edge
		move up: title
		move down: metas author description and content
