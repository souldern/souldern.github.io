---
title: Sunday School Announcements
layout: default
---


# Announcements



<ul class="category-list">
  <li> first</li>
  {%- assign sorted = site.pages | sort: 'title' -%}
  {%- for page in sorted -%}
  {%- if page.category contains "ssannounce" %}
  <li id="{{page.path  | remove_first: ".html" }}"><a href="{{ page.url }}">{{ page.title | markdownify | remove: "<p>" | remove: "</p>" | strip_newlines }}</a></li>
  {%- endif -%}
  {%- endfor %}
</ul>

