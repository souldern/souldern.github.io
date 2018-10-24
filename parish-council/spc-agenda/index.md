---
title: SPC Agenda
layout:default
---

# SPC Agenda

<ul class="flist">
{% for  sf in site.static_files |reverse %}
 {% if sf.path contains "/spc-agenda/" %}
  <li>
   <a href="{{sf.path}}">{{ sf.basename }}</a>
  </li>
  {% endif %}
{% endfor %}
</ul>

