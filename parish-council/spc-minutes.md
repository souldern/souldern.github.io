---
title: SPC minutes
layout:default
---

# SPC minutes

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

ccc