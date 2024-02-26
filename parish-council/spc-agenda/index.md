---
title: SPC Agenda
layout: default
---

# SPC Agenda

<ul class="flist">
{% assign files = site.static_files | reverse %}
{% for  sf in files %}
 {% if sf.path contains "/spc-agenda/" %}
  <li>
   <a href="{{sf.path}}">{{ sf.basename }}</a>
  </li>
  {% endif %}
{% endfor %}
</ul>

