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
  <li>x</li>
  {%- endif -%}
  {%- endfor %}
</ul>

