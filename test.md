---
layout: _test
title: test
templateEngineOverride: njk,md
eleventyNavigation:
  key: test
  order: 5
nav11tyOptions:
  listElement: nav
  listItemElement: h2
  activeListItemClass: selected
---

{# collections.all | eleventyNavigation | log #}

{{ collections.all | eleventyNavigation | eleventyNavigationToHtml(nav11tyOptions) | safe }}

```
{{ collections.all | eleventyNavigation | dump(2) | safe }}
```

