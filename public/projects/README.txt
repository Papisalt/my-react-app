Project screenshots live in this folder.

How to add a screenshot to a card:

1. Save the image here, for example:      public/projects/my-project.png
2. Reference it in src/pages/Projects.jsx:  image: '/projects/my-project.png'
3. Describe what it shows (screen readers): imageAlt: 'Home page of My Project'

If you leave 'image' empty, the card shows a gradient cover printing the
project title and its status, so the grid looks finished while you collect
the screenshots. The cover disappears on its own once you add the image.

Tip: export at 1600 x 1000 pixels (16:10) so every card lines up neatly.
Keep each file under about 300 KB so the page stays fast.