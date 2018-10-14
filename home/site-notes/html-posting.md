---
layout: default
title: HTML Posting
---

[site notes](/home/site-notes)


## Using HTML

The document [Posting a Simple Announcement](simple-posting) describes
the main details of getting site access and posting a document using
the simple markdown sysntax.

An alternative is to use HTML documents (ending in `.html` rather than `.md`)
which gives full access to the layout possibilities of the web browser.

There are two variants, posting a document that has the standard
header and looks like "part of the site", or posting a completely
separate HTML document that is treated like a PDF or Word document and
does not have the standard site header and menus.

### Posting a site page via Jekyll, using HTML syntax

Currently the majority of pages on the site use this format, as they were converted from the previous system and so are using HTML rather than the markdown input.

A good simple example to look at is the [Welcome Packs](/parish-council/welcome-packs) page source:  
[https://github.com/souldern/souldern.github.io/blob/master/parish-council/welcome-packs.html](https://github.com/souldern/souldern.github.io/blob/master/parish-council/welcome-packs.html)

This starts with the same jekyll front matter section as for a markdown page, in this case

```
---
layout: default
title: Welcome Packs
---
```

the page just has the main body of the document and the jekyll site builder will add the head and site menu etc.

### Posting complete HTML files.

If you do not add the two ``---``
at the head of the file, Jekyll will
not process the file at all and the file will be posted to the web
exactly as submitted. This means that if you have a complete HTML file
from some other source (perhasp sent to you or saved from a Word
Processor, you do not _have_ to convert it to the site format you can
simply upload it as described in the [File Upload](file-upload) notes.
In this case the resulting page will not have any of the normal menu
options and the reader may have to use the **back** button on the
browser to return to the main part of the site.