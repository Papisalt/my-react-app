Design files live in this folder.

How to add a logo or design to a card:

1. Save the image here, for example:          public/designs/my-logo.png
2. Reference it in src/pages/Designs.jsx:
     Logos   -> image: '/designs/my-logo.png'
     Designs -> image: '/designs/my-poster.png'
3. Describe what it shows (screen readers):   imageAlt: 'Monogram of the letters J and V'

If you leave 'image' empty the card shows a gradient cover printing the title
and its category, so the grid still looks finished while you collect the files.

Tips:
- Logos work best on a square canvas, around 800 x 800 pixels, PNG with a
  transparent background.
- Other design work reads well at 800 x 800 or 4:5, exported as PNG or JPG.
- Keep each file under about 300 KB so the page stays fast.
- Only put files here that you have the rights to publish.