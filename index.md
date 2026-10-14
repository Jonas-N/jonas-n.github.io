---
layout: default
title: Home
description: >-
  Jonas Nölle is a postdoctoral researcher at the Centre for Language Evolution
  Studies in Toruń and an affiliate at the University of Glasgow. He studies
  how communication adapts to the people and places it is used in.
---

<section class="identity">
  <img class="portrait" src="{{ '/assets/img/jonas.jpg' | relative_url }}" width="724" height="724" alt="Portrait of Jonas Nölle">
  <div>
    <p class="eyebrow">Experimental cognitive scientist</p>
    <h1>Jonas Nölle</h1>
    <p class="role">
      Postdoctoral Researcher,
      <a href="{{ site.links.cles }}">Centre for Language Evolution Studies</a>,
      Nicolaus Copernicus University in Toruń
    </p>
    <p class="role">
      Affiliate,
      <a href="{{ site.links.glasgow }}">School of Psychology and Neuroscience</a>,
      University of Glasgow
    </p>
    <p class="role place">Toruń · Glasgow</p>
    <ul class="contact-links">
      <li><a href="{{ site.links.email }}">{{ site.author.email }}</a></li>
      <li><a rel="me" href="{{ site.links.orcid }}">ORCID</a></li>
      <li><a rel="me" href="{{ site.links.scholar }}">Google Scholar</a></li>
      <li><a rel="me" href="{{ site.links.github }}">GitHub</a></li>
      <li><a rel="me" href="{{ site.links.mastodon }}">Mastodon</a></li>
      <li><a rel="me" href="{{ site.links.x }}">X</a></li>
      <li><a href="{{ site.links.mosaic }}">MOSAIC</a></li>
    </ul>
  </div>
</section>

<div class="prose">
  <p>
    I study how communication adapts to the people who use it and the places they use it in.
    The work sits between language evolution, experimental semiotics, and multimodal social interaction.
    I use laboratory experiments, virtual reality, and data-driven analyses of facial movement to ask how linguistic structure, spatial language, and pragmatic signals emerge and change in interaction.
  </p>
  <p>
    I am a General Editor of <a href="{{ site.links.journal }}"><em>Language and Cognition</em></a> and a Handling Editor of <em>Cognitive Processing</em>.
    I co-founded <a href="{{ site.links.mosaic }}">MOSAIC</a>, the Multimodal Social Interactions Group, and I have edited the proceedings of the Evolution of Language conference.
    Before Toruń I was a postdoc on the FACESYNTAX project with Rachael Jack in Glasgow, a research scientist at the Max Planck Institute for Psycholinguistics, and a PhD student at the Centre for Language Evolution in Edinburgh.
  </p>
</div>

<h2>Interests</h2>
<ul class="interests">
  <li>Language evolution</li>
  <li>Experimental semiotics</li>
  <li>Spatial language</li>
  <li>Multimodal communication</li>
  <li>Facial signals</li>
  <li>Virtual reality</li>
  <li>Cultural evolution</li>
</ul>

<h2>Selected work</h2>
<p class="section-intro">A fuller list is on the <a href="{{ '/publications/' | relative_url }}">publications</a> page. Recent talks are on the <a href="{{ '/talks/' | relative_url }}">talks</a> page.</p>

{% for pub in site.data.publications %}
  {% if pub.featured %}
    {% include pub.html pub=pub %}
  {% endif %}
{% endfor %}
