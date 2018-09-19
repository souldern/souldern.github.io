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