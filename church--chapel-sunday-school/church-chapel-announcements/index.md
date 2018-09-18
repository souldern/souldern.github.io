---
title: Sunday School Announcements
layout: default
---


# Announcements



<ul class="category-list">
  {%- assign sorted = site.pages  -%}
  {%- for page in sorted -%}
  {%- if page.category contains "ssannounce" %}
  <li><a href="{{page.path | replace: '.html', ''}}">{{page.title}}</a>
    zzz{{ page.excerpt }}zzz
  </li>
  {%- endif -%}
  {%- endfor %}
</ul>

