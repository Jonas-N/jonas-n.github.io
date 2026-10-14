---
layout: default
title: Publications
description: Journal articles, chapters, proceedings, preprints, and thesis by Jonas Nölle.
---

<h1 class="page-title">Publications</h1>
<p class="section-intro">
  Peer-reviewed papers, chapters, and proceedings, plus public preprints that are not yet the version of record.
  Conference abstracts are listed with the <a href="{{ '/talks/' | relative_url }}">talks</a>.
  A name in bold is mine. Where a published paper has an open preprint, both links are given.
</p>

<h2>Journal articles</h2>
{% for pub in site.data.publications %}
  {% if pub.type == "article" %}
    {% include pub.html pub=pub %}
  {% endif %}
{% endfor %}

<h2>Book chapters</h2>
{% for pub in site.data.publications %}
  {% if pub.type == "chapter" %}
    {% include pub.html pub=pub %}
  {% endif %}
{% endfor %}

<h2>Conference proceedings</h2>
{% for pub in site.data.publications %}
  {% if pub.type == "proceedings" %}
    {% include pub.html pub=pub %}
  {% endif %}
{% endfor %}

<h2>Preprints</h2>
{% for pub in site.data.publications %}
  {% if pub.type == "preprint" %}
    {% include pub.html pub=pub %}
  {% endif %}
{% endfor %}

<h2>Thesis</h2>
{% for pub in site.data.publications %}
  {% if pub.type == "thesis" %}
    {% include pub.html pub=pub %}
  {% endif %}
{% endfor %}

<h2>Edited volumes</h2>
{% for pub in site.data.publications %}
  {% if pub.type == "edited" %}
    {% include pub.html pub=pub %}
  {% endif %}
{% endfor %}
