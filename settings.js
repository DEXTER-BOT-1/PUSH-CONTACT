const fs = require('fs')

global.fotomenfess = fs.readFileSync("./menfess.jpg")
global.owner = ["94789958225"]

global.help = {
Menu(pushname){
  return `Halo ${pushname}

Type .confess
`
}
}