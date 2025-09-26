const path=require("path")



let basename=path.basename("C:/Users/HP/OneDrive/Desktop/Ajeesha/node/demo.txt")
console.log(basename)



let joined=path.join("C:/Users/HP/OneDrive/Desktop","Ajeesha/node/demo.txt")
console.log(joined)



let resolved=path.resolve("workingfolder")
console.log(resolved)



let directory=path.dirname("C:/Users/HP/OneDrive/Desktop/Ajeesha/node/demo.txt")
console.log(directory)



let extension=path.extname("C:/Users/HP/OneDrive/Desktop/Ajeesha/node/demo.txt")
console.log(extension)



let absolute=path.isAbsolute("C:/Users/HP/OneDrive/Desktop/Ajeesha/node/demo.txt")
console.log(absolute)



let parse=path.parse("C:/Users/HP/OneDrive/Desktop/Ajeesha/node/demo.txt")
console.log(parse)



let normalize=path.normalize("C:/Users/HP/OneDrive//Desktop//../Ajeesha/node/demo.txt")
console.log(normalize)