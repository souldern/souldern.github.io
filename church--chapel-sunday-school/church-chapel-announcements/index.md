---
title: Sunday School Announcements
layout: default
---


# Announcements



<ul class="category-list">
  <li> first</li>
  {%- assign sorted = site.pages  -%}
  {%- for page in sorted -%}
  {%- if page.category contains "ssannounce" %}
  <li><a href="{{page.path | replace: '.html', ''}}">x</a> {{page.title}}</li>
  {%- endif -%}
  {%- endfor %}
</ul>

