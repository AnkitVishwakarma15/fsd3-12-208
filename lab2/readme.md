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