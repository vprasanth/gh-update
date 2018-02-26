const fetch = require('sketch-polyfill-fetch')

export default function(context) {
	// const sketch = context.api();
	// log(sketch.api_version);

  // context.document.showMessage("It's alive 🙌");
  const doc = context.document;
  const selection = context.selection;
  // fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => {
  //     context.document.showMessage(res.status);
  //     return res.json();
  //   })
  //   .then(body => {
  //   	// context.document.showMessage(body.filter(item => item.name));
  //   	log(body.filter(item => item.name));
  //   });

  // var openPanel = NSOpenPanel.openPanel()
  // openPanel.setCanChooseDirectories(false)
  // openPanel.setCanChooseFiles(true)
  // openPanel.setCanCreateDirectories(false)
  // openPanel.setDirectoryURL(NSURL.fileURLWithPath('~/Documents/'))

  // openPanel.setTitle('Choose a file')
  // openPanel.setPrompt('Choose')
  // openPanel.runModal()

  // var app = [NSApplication sharedApplication];
  // [app displayDialog:"This is an alert box!" withTitle:"Alert Box Title"];
  //
  // var doc = context.document;
  // var result = [doc askForUserInput:"How many copies do you want?" initialValue:"10"];

  if (!selection.length) {
  	doc.showMessage("At Least One Artboard Not Selected");
    return;
  }
}
