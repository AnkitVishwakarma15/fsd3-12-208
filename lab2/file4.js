// import { rm } from "fs";
import { mkdir,rm } from "fs/promises";

// await mkdir("upload/resume",{recursive: true});
// await mkdir("upload/images");

//remove directory
await rm("upload",{recursive: true});