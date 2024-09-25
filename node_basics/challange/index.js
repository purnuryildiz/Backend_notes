const fs = require("fs");

// 1-) title dosyasını okuyun
const title = fs.readFileSync("./challange/title.txt", "utf-8");
console.log(title);
// 2-) content dosyasını okuyun
const content = fs.readFileSync("./challange/content.txt", "utf-8");
console.log(content);
// 3-) title dosyasındaki başlığa ve content dosyasındaki içeriğe sahip bir dosya oluşturun.
fs.writeFileSync(title, content);
