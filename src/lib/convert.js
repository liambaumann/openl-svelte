import yaml from "js-yaml";
import fs from "fs";
var inputfile = "courses.yml";
var outputfile = "courses.json";
var obj = yaml.load(fs.readFileSync(inputfile, { encoding: "utf-8" }));
// this code if you want to save
fs.writeFileSync(outputfile, JSON.stringify(obj, null, 2));
