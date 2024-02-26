---
title: SPC minutes
layout: default
---

# SPC minutes

<ul class="flist">
{% for  sf in site.static_files %}
 {% if sf.path contains "/spc-minutes/" %}
  <li>
   <a href="{{sf.path}}">{{ sf.basename }}</a>
  </li>
  {% endif %}
{% endfor %}
</ul>

