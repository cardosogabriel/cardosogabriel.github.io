Compile Less
=======================================

- Go to the template folder: /anniversary-website and run

$ ./compile-less.sh

Steps for production preparation
=======================================

- Edit variables.less and change @image-path to production assets path.
- Then compile css to pick previous change.
- Create new website page on site and upload all needed resource files.
- Then check that all resource links inside page html are correct
  - change anniversary.css path to production path
  - change all image paths to production paths
  
While changing paths from local ones to production ones take extra care to check
are uploaded resource path correct - Drupal will add numeric prefixes if 
resource file already exist with the same name.

TODO
=======================================

- Instead of using font awesome and svg images for various icons we should 
  create our own font icon resource. Use http://fontello.com/ service for this.
- Try to convert all background images to sprites.
