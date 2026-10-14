---
layout: default
title: CV
description: Curriculum vitae of Jonas Nölle, postdoctoral researcher in language evolution.
---

<h1 class="page-title">Curriculum vitae</h1>
<p class="section-intro">
  A short academic CV. Full lists are on the <a href="{{ '/publications/' | relative_url }}">publications</a> and <a href="{{ '/talks/' | relative_url }}">talks</a> pages.
  Email <a href="{{ site.links.email }}">{{ site.author.email }}</a>.
</p>

<h2>Positions</h2>
<ol class="timeline">
{% for job in site.data.positions %}
  <li>
    <p class="when">{{ job.start }} – {{ job.end }}</p>
    <p class="what">
      <strong>{{ job.role }}</strong><br>
      {% if job.url %}<a href="{{ job.url }}">{{ job.org }}</a>{% else %}{{ job.org }}{% endif %}
      {% if job.place %}<span class="place"> · {{ job.place }}</span>{% endif %}
    </p>
    {% if job.note %}<p class="note">{{ job.note }}</p>{% endif %}
  </li>
{% endfor %}
</ol>
<p>
  Earlier, I tutored in linguistics and cognitive science at Edinburgh and was a writing tutor at the PPLS Writing Centre, with more than 90 individual appointments.
  I was a research assistant at the Interacting Minds Centre in Aarhus, including on the seed-fund project Contextual Factors Shaping the Emergence of Communication Systems, and a student assistant in general linguistics at TU Berlin.
</p>

<h2>Education</h2>
<ol class="timeline">
{% for item in site.data.education %}
  <li>
    <p class="when">{{ item.years }}</p>
    <p class="what">
      <strong>{{ item.degree }}</strong>, {{ item.field }}<br>
      {{ item.org }}{% if item.unit %}, {{ item.unit }}{% endif %}
    </p>
    {% if item.thesis %}
    <p class="edu-note">
      Thesis: {% if item.thesis_url %}<a href="{{ item.thesis_url }}">{{ item.thesis }}</a>{% else %}<em>{{ item.thesis }}</em>{% endif %}
    </p>
    {% endif %}
    {% if item.note %}<p class="edu-note">{{ item.note }}</p>{% endif %}
  </li>
{% endfor %}
</ol>

<h2>Editorial work</h2>
<ul class="plain-list">
  <li>General Editor, <a href="{{ site.links.journal }}"><em>Language and Cognition</em></a> (Cambridge University Press).</li>
  <li>Handling Editor, <em>Cognitive Processing</em> (Springer), since 2023.</li>
  <li>Co-editor, proceedings of EVOLANG XVI (Plovdiv, 2026) and chair of the scientific committee and co-editor of the proceedings of EVOLANG XV (Madison, 2024).</li>
  <li>Guest editor, <em>Language Dynamics and Change</em> 10(1–2), 2020, two special issues on new directions in language evolution research.</li>
</ul>

<h2>Teaching</h2>
<p>Guest teaching at Aarhus (2014), the University at Buffalo (2021), Glasgow (2023), and Edinburgh (2025, 2026), including a keynote on virtual reality at the Baltic Summer School of Digital Humanities (Tallinn, 2021).</p>
<p>Tutor, University of Edinburgh:</p>
<ul>
  <li>Introduction to Linguistics and English Language (2016, 2017)</li>
  <li>Origins and Evolution of Language (2016, 2018, 2019)</li>
  <li>Introduction to Language Research (2018, 2019)</li>
  <li>Introduction to Cognitive Science (2016–2019)</li>
</ul>
<p>Tutor, Technische Universität Berlin: Introduction to Computational Linguistics (2011, 2012), Text Linguistics (2012), Linguistics in Occupation (2013).</p>
<p>Methods workshops on virtual reality (Glasgow, 2022; Toruń, 2024), open science (Edinburgh, 2019, 2021), and LaTeX (2020).</p>

<h2>Supervision</h2>
<ul>
  <li>Yichen Wu, PhD in Psychology, University of Glasgow, co-supervised with Rachael Jack, defended 2026. Also his MRes in Psychology (2022).</li>
  <li>Haoyue Wang, MSc in Psychological Science, University of Glasgow (2024), with Rachael Jack.</li>
  <li>Yueyao Yang, MSc in Research Methods of Psychological Science, University of Glasgow, with Rachael Jack.</li>
  <li>MSc theses in Evolution of Language and Cognition at Edinburgh: Rayn Epremian (with Matthew Spike), Isabell Seeger (2018, with Simon Kirby), Giorgia Lano (2018, with Marieke Schouwstra), and Tian Li (2017, with Jennifer Culbertson).</li>
</ul>
<p>
  I have supervised research assistants in Aarhus, Edinburgh, Glasgow, and Toruń on virtual reality, 3D face capture, multimodal psychophysics, and dyadic experiments.
</p>

<h2>Service and organisation</h2>
<ul>
  <li>Co-founder and co-organiser of <a href="{{ site.links.mosaic }}">MOSAIC</a> (Multimodal Social Interactions Group), since 2021. I also maintain <a href="https://mosaicseminar.uk">mosaicseminar.uk</a>.</li>
  <li>Co-organiser, International Society for Gesture Studies conference, Nijmegen, 2025.</li>
  <li>Workshop convenor at ICLC 15 (Nishinomiya, 2019), the International Conference on Spatial Cognition (Rome, 2018), and the Societas Linguistica Europaea (Tallinn, 2018).</li>
  <li>Session chair at EVOLANG (2026), ICLC (2024), and Protolang (2017, 2019, 2021).</li>
</ul>
<p>
  I review for <em>Cognition</em>, <em>Journal of Experimental Psychology: General</em>, <em>Philosophical Transactions of the Royal Society B</em>, <em>Psychonomic Bulletin &amp; Review</em>, <em>Topics in Cognitive Science</em>, <em>PLOS ONE</em>, <em>Journal of Language Evolution</em>, and other journals, and I serve on the programme committees of CogSci, EVOLANG, and Protolang. I have also reviewed for the National Science Centre of Poland.
</p>

<h2>Awards and funding</h2>
<ul>
  <li>Principal’s Career Development Scholarship, University of Edinburgh (full tuition and stipend, 2016–2019).</li>
  <li>Doctoral fellowship of the Studienstiftung des deutschen Volkes (2016–2019), after its undergraduate scholarship (from 2012) and study-abroad scholarship (2013–2015).</li>
  <li>Co-wrote the seed-fund project Contextual Factors Shaping the Emergence of Communication Systems, Interacting Minds Centre, Aarhus (2016).</li>
  <li>Wiley-Blackwell prize for best presentation (StuTS, 2013) and audience award for best presentation (StuTS, 2014).</li>
  <li>Invited participant, UCSB Center for Spatial Studies specialist meeting on universals and variation in spatial referencing (Santa Barbara, 2016).</li>
</ul>

<h2>Public engagement</h2>
<ul>
  <li>Creating Communication, Edinburgh International Science Festival (2018).</li>
  <li>Language evolves! Interactive activities with primary schools in Edinburgh (2019).</li>
  <li>Popular-science article on spatial cognition, “Woran merkt man, dass man in die falsche Richtung geht?”, <em>ZEIT WISSEN</em> (2016).</li>
</ul>

<h2>Languages</h2>
<p>German (native). English (proficient). Basic Danish, Dutch, Spanish, Mandarin, and Korean. Latin (Latinum).</p>
