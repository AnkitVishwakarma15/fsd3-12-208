
import {writeFile, appendFile} from "fs/promises";

// await writeFile("hello.txt","js is easy i am the good person");
await appendFile("hello.txt","\nFS is much easy than others");
