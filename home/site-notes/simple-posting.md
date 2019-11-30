---
layout: default
title: Simple Posting
---

[site notes](/home/site-notes)

## Posting a Simple Announcement

### GitHub Account

In order to be able to edit the site you do need a
  [GitHub account](https://github.com/join?source=header-home).
  Once you have a GitHub user
  name, [contact the site  maintainers](/home/contact-website)
  and ask to be added to
  the [Souldern GitHub Organisation](https://github.com/orgs/souldern/people)
  which will give you write access to the site.
  
### First Post
In your web browser go to

[https://github.com/souldern/souldern.github.io/tree/master/home/announcements](https://github.com/souldern/souldern.github.io/tree/master/home/announcements)

Log in to GitHub if you are not already logged in and click on the **Create New File** button
which will open

[https://github.com/souldern/souldern.github.io/new/master/home/announcements](https://github.com/souldern/souldern.github.io/new/master/home/announcements)

with a blank new announcement.

1. Set a filename ending with `.md` in the small text box following `souldern.github.io/home/announcements/`
  for example `Yin and Yang.md`

2. In the main text box for the post add the date (yyyy-mm-dd)  and title so that it looks like

   ```
   ---
   date: 2018-10-13
   title: Yin and Yang
   ---
   
   # New Meeting
   Please come to our meeting on **Wednesday**!
   ```

   It is important not to forget the two rows of `---` which separate the front matter.

3. Add the content of your post. Leave blank lines for a new paragraph,  you can have `**bold**` (**bold**) or `_italic_` (_italic_) or many other styles.

4. Post your announcement.  Before committing the file you may optionally write a message in the text box for the log, then press the large green **Commit new file** button.

5. **View your post on the web** After a minute or so the post should appear at  
   [https://souldern.github.io/home/announcements/Yin%20and%20Yang](https://souldern.github.io/home/announcements/Yin%20and%20Yang)
   using whatever name you gave in the original text box. A link should also appear on the home page, and
   the [Announcements page](https://souldern.github.io/home/announcements/).

### Editing or Deleting Your Post.

1. In the [Announcements list](https://github.com/souldern/souldern.github.io/tree/master/home/announcements) find your file (there is a find file button to enter the filename if you do not see it immediately) and click on the link. This places you back in the edit view used above.

2. If you want to delete the post click on the bin icon and then commit the change to confirm the deletion.

3. To edit the post, click on the pencil icon.

   1. To add a subheading use `##` for example

      ```
      ## Agenda
      ```

    2. To add a list, simply leave a blank line, then start each item with a number and `.` :

       ```
     
        1. First item
        2. Second item
        3. AOB
       ```
     
    3. To add an image, use

       ```
       ![yin and yang](yinyang.png)
       ```

       Where the first part in `[]` is the "alt text" and the `()` is the file name.

    4. To upload the image file return to  
       [https://github.com/souldern/souldern.github.io/tree/master/home/announcements](https://github.com/souldern/souldern.github.io/tree/master/home/announcements)
       Then use the **upload files** button to select the file, or drag and drop the image file on to the site.

       As for file editing, you will need to use the green **Commit** button to confirm the upload.
       

### Final Result on the Web

[https://souldern.github.io/home/announcements/Yin and Yang](https://souldern.github.io/home/announcements/Yin%20and%20Yang)

### Further Reading

The "kramdown" syntax used in these pages supports all kinds of lists, and font changes etc, see this [Quick Reference Guide](https://kramdown.gettalong.org/quickref.html).