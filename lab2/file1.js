
import {writeFile, appendFile,readFile} from "fs/promises";

await writeFile("hello.txt","js is easy i am the good person 😘😘");
// await appendFile("hello.txt","\nFS is much easy than others");
// await appendFile("hello.txt","\nMy name is Ankit Vishwakarma");

const content = await readFile("hello.txt","utf-8");
console.log(content);