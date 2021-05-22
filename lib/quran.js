import fs from "fs";
import path from "path";

const quranDir = path.join(process.cwd(), "data/quran/json");

export async function getQuranData(chapter) {
    const fileName = `${chapter}.json`;
    const fullPath = path.join(quranDir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const quranjson = JSON.parse(fileContents);
    return quranjson;
}