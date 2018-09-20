---
title: SPC minutes
layout:default
---

# SPC minutes

<ul>
{% for  sf in site.static_files |reverse %}
 {% if sf.path contains "/spc-minutes/" %}
  <li>
   <a href="{{sf.path}}">{{ sf.basename }}</a>
  </li>
  {% endif %}
{% endfor %}
</ul>

