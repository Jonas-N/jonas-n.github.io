---
layout: default
title: Talks
description: Invited talks, conference presentations, and posters by Jonas Nölle.
---

<h1 class="page-title">Talks</h1>
<p class="section-intro">
  Invited talks, peer-reviewed conference talks, and posters.
</p>

<h2>Invited</h2>
{% for talk in site.data.talks %}
  {% if talk.type == "invited" %}
    {% include talk.html talk=talk %}
  {% endif %}
{% endfor %}

<h2>Conference talks</h2>
{% for talk in site.data.talks %}
  {% if talk.type == "conference" %}
    {% include talk.html talk=talk %}
  {% endif %}
{% endfor %}

<h2>Posters</h2>
{% for talk in site.data.talks %}
  {% if talk.type == "poster" %}
    {% include talk.html talk=talk %}
  {% endif %}
{% endfor %}
