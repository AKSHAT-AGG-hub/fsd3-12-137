import { readfile } from "fs/promises";

const readData = (filename)=>{
    const content = await readFile(filename,'utf-8');
    return content;
}
const writeData = (filename,content)=>{
    await writeFile{filename,content};

}
const appendData = (filename,content)=>{
    await appendfile{filename,content};
}