---
title: SPC minutes
layout:default
---

# SPC minutes

{%- comment -%}
aaa

<ul>
{% for m in site.spc-minutes %}
  <li>
    <a href="{{ m.url }}">
      [{{ m.url }}]
    </a>
  </li>
{% endfor %}
</ul>

bbb

<ul>
{% for col in site.collections %}
  <li>
   label = {{ col.label }}
  </li>
{% endfor %}
</ul>

{%- endcomment -%}

<ul>
{% for  sf in site.static_files %}
  <li>
   <a href="{{sf.path}}">{{ sf.basename }}</a>
  </li>
{% endfor %}
</ul>

ddd