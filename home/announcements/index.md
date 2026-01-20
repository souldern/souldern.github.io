---
title: Announcements
layout: default
---


# Announcements



<ul class="category-list">
  {%- assign pdates= site.pages | group_by: 'date'  | sort: 'name' | reverse -%}
  {%- for pday in pdates -%}
  {%- assign sorted = pday.items | sort: 'time' | reverse -%}
  {%- for page in sorted -%}
  {%- if page.path contains "home/announcements/" and page.path != "home/announcements/index.md" %}
  <li><a href="/{{page.path | replace: '.html', ''| replace: '.md', ''}}">{{page.title}}</a> [{{page.date}}]
    <blockquote style="background-color:lightgoldenrodyellow; border;border-radius:1em;">

      {% if page.path contains '.md' %}
      {{ page.content | markdownify| strip_html | truncatewords: 40 }}
      {% else %}
{% if page.content contains '<!--excerpt.start-->' and page.content contains '<!--excerpt.end-->' %}
     {%- assign pc = page.content | split:'<!--excerpt.start-->' | last -%}
     {%- assign pcc = pc| split:'<!--excerpt.end-->' | first -%}
	{{ pcc | strip_html | truncatewords: 40 }}
{% else %}
	{{ page.content | strip_html | truncatewords: 40 }}
{% endif %}
{% endif %}

</blockquote>

  </li>
  {%- endif -%}
  {%- endfor %}
  {%- endfor %}
</ul>

