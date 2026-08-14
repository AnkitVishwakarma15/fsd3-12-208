# File System (FS Module)
- fs module directily communicate with operating system wether than 
the common operation in file or folder 
    1. File -> writeFile , readFile , appendFile
    2. Folder ->  Mkdir/Md,
              rmdir/rm,
              readdir
    3. File metadat -> stat,
                   lstat,
                   rstat
    4. Watch -> watch,unwatch
    5. Stream -> readStream(),
            WriteStream()
All function are Promise so it must be cald with away keyword

# CRUD PROJECT()
- assume we are making a cart related project 
  1. user can add any product (id,name,price,qty) into cart
  2. user can see all the items of cart 
  3. user can remove item from cart
  4. user can also update quantity of product 
  5. all the items shild be stored after temination of project 
  