---
title: SPC minutes
layout: default
---

# SPC minutes

<ul class="flist">
{% assign files = site.static_files | reverse %}
{% for  sf in files %}
 {% if sf.path contains "/spc-minutes/" %}
  <li>
   <a href="{{sf.path}}">{{ sf.basename }}</a>
  </li>
  {% endif %}
{% endfor %}
</ul>

