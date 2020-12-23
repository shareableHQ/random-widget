// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: pink; icon-glyph: code;

let json = await loadItems()
console.log(json)
if (config.runsInWidget) {
  let widget = createWidget(json)
  Script.setWidget(widget)
  Script.complete()
} else {
  Safari.open(json[2])
}

function createWidget(json){
  let w = new ListWidget()
  w.backgroundColor = new Color("#FF2D55")
  w.addSpacer(1)
  let titleTxt = w.addText(json[0])
  titleTxt.font = Font.boldRoundedSystemFont(18)
  titleTxt.textColor = new Color("#FFFFFF")
  let dateTxt = w.addText("by " + json[1])
  dateTxt.font = Font.regularRoundedSystemFont(16)
  dateTxt.textColor = new Color("#FFFFFF")
  return w
}

async function loadItems() {
  let endpoint = "https://api-shareable.vercel.app/random"
  let req = new Request(endpoint)
  let json = await req.loadJSON()
  let name = json.name
  let author = json.author
  let url = json.url
  let info = [name, author, url]
  return info
}
