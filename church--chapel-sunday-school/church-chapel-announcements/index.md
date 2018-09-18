---
title: Sunday School Announcements
layout: default
---


# Announcements



<ul class="category-list">
  {%- assign sorted = site.pages | sort: 'date' -%}
  {%- for page in sorted -%}
  {%- if page.category contains "ssannounce" %}
  <li><a href="/{{page.path | replace: '.html', ''}}">{{page.title}}</a> [{{page.date}}]
    <blockquote style="background-color:yellow">

{% if page.content contains '<!--excerpt.start-->' and page.content contains '<!--excerpt.end-->' %}
	{{ ((page.content | split:'<!--excerpt.start-->' | last) | split: '<!--excerpt.end-->' | first) | strip_html | truncatewords: 40 }}
{% else %}
	{{ page.content | strip_html | truncatewords: 40 }}
{% endif %}

</blockquote>

  </li>
  {%- endif -%}
  {%- endfor %}
</ul>

