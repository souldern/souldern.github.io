---
title: SPC minutes
layout:default
---

# SPC minutes

<ul>
{% for  sf in site.static_files %}
 {% if sf.path contains "spc-minutes-files/" %}
  <li>
   <a href="{{sf.path}}">{{ sf.basename }}</a>
  </li>
  {% endif %}
{% endfor %}
</ul>

