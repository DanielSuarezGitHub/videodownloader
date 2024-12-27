const fs = require('fs')
const { filterFormats } = require('@distube/ytdl-core')
const ytdl = require("ytdl-core")

let link = prompt("Video Link")
let name = prompt("file name")

ytdl(link, { filter: 'audioandvideo', quality: 'highestaudio'}).pipe(fs.createWriteStream(`${name}.mp4`))

