<script setup lang="ts">

const social = {
	// "email": "tom@technomad.media",
	"facebook": "https://facebook.com/Froggie92",
	"twitter": "https://twitter.com/froggie92",
	"googleplus": "https://plus.google.com/u/0/118102255716845472363/posts",
	"instagram": "https://instagram.com/wommytilliams/"
}

</script>

<template>
  <!--
  <nav id="mobileNav" onclick="toggle( 'toggleMe' )">
    <img
      src="https://d33wubrfki0l68.cloudfront.net/7957d689ba4e848224380060c822ae1197e98975/c5ac8/assets/img/hamburger.svg"
      id="hamburger"
    />
    <nav id="toggleMe" style="display: none">
      <a href="/" class="selected">home</a><span>Experience</span
      ><a href="/experience/branding">Branding</a
      ><a href="/experience/clients">Clients</a
      ><a href="/experience/resume">Resume</a><span>Experiments</span
      ><a href="/experiments/feed">Feed</a><a href="/experiments/grid">Grid</a
      ><a href="/media">Media</a>
    </nav>
  </nav>
  -->
  <div id="mainNav">
    <div>
      <nav>
        <h2 class="selected"><a href="/">home</a></h2>
        <h2><span>experience</span>
        </h2>
        <nav>
          <h2 v-for="ea in ['branding','clients','resume']"><a href="/experience/{{ ea }}">{{ ea }}</a></h2>
        </nav>
        <h2><span>experiments</span></h2>
        <nav>
          <h2><a href="/experiments/feed">feed</a></h2>
          <h2><a href="/experiments/grid">grid</a></h2>
        </nav>
        <h2><a href="/media">media</a></h2>
      </nav>

      <nav id="social">
        <h2>contact</h2>

        <a
          href="mailto:tom@technomad.media?Subject=Job | from wommytilliams.com"
          target="_blank"
        >
          <img
            class="social"
            src="https://d33wubrfki0l68.cloudfront.net/c519cf5e306067718c8831e1575f319164433881/fcc2e/assets/img/social/email.svg"
          />
          <h2>tom@technomad.media</h2>
        </a>

        <a
          v-for="(link, index) in social"
          href
          onclick=" noDiscriminate(' {{ link }} ') "
        >
          <img
            src="https://d33wubrfki0l68.cloudfront.net/20c257ed4513f0c4d042e80bb84bc2cf8a03e590/e6a2b/assets/img/social/facebook.svg"
            class="social"
          />
          <h2>{{ index }}</h2>
        </a>

      </nav>
    </div>
  </div>
</template>

<style>
#mainNav {
  @apply
    h-[90vh]
    flex flex-col
    justify-between
  ;
  & nav {
    @apply flex flex-col;
    & nav {
      margin-left: 1rem;
      @apply w-fit;
    }
  & > a,
  & > h2 {
    padding-block: .125rem;
    padding-inline: 0.5rem;
    font-size: 1.25rem;
    @apply w-fit;
  }
  }
}
#social {
  & a {
    @apply flex;
    /* line-height: 2; */
  }
}
.social {
  width: 1.75rem;
  height: 1.75rem;
}
</style>
