import { writefile, appendFile, readfile } from "fs/promises";

await appendFile("hello.txt", "/nfs is much easy than others😂");

const content = await readFile("hello.txt", "utf-8");
