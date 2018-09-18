---
title: Sunday School Announcements
layout: default
---


# Announcements



<ul class="category-list">
  {%- assign sorted = site.pages  -%}
  {%- for page in sorted -%}
  {%- if page.category contains "ssannounce" %}
  <li><a href="/{{page.path | replace: '.html', ''}}">{{page.title}}</a>
    <p>qqq</p>
    <p class="post-excerpt">

{% if page.content contains '<!--excerpt.start-->' and page.content contains '<!--excerpt.end-->' %}
	{{ ((page.content | split:'<!--excerpt.start-->' | last) | split: '<!--excerpt.end-->' | first) | strip_html | truncatewords: 20 }}
{% else %}
	{{ page.content | strip_html | truncatewords: 20 }}
{% endif %}

</p>

  </li>
  {%- endif -%}
  {%- endfor %}
</ul>

