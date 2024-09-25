//API: Gelen istekleri izler ve isteklere cevap gönderir.
//gerekli modülleri çağırdık:
const http = require("http");
const fs = require("fs");

//kendi oluşturduğumuz fonksiyonu import etmek için:
const replaceTemplate = require("./modules/replaceTemplate");

//http modülünün içerisinde çeşitli methodlar var:

//createServer(), verdiğimiz dinleyici fonksiyonu api'ye her istek geldiğinde tetikler, bu fonksiyon 2 parametre alır:
//1 request > istek ile ilgili veriler
//2 response > cevap göndermemizi sağlayacak nesne
//Bu fonksiyon içerisinde gelen isteğe göre cevap gönderilir:

//Routing:
//API'ye gelen isteiğin hangi endpoint (uç nokta/yol) e geldğini tespit edip ona göre farklı cevaplar gönderme işlemine routing nedir.
//Routing için client'ın hangi yola hangi http methodu ile istek attıldığı bilinmesi gerekiyor.

//html şablon verilerine erişelim:
let tempOverview = fs.readFileSync("./templates/overview.html", "utf-8");
let tempProduct = fs.readFileSync("./templates/product.html", "utf-8");
let tempCard = fs.readFileSync("./templates/card.html", "utf-8");

//json dosyasındaki verilere eriş:

let jsonData = fs.readFileSync("./dev-data/data.json", "utf-8");

//json verisini js formatına çevir:
const data = JSON.parse(jsonData);

const server = http.createServer((request, response) => {
  console.log("😀api ye istek geldi");

  //HTML içeriği için başlık ayarla:
  response.setHeader("Content-Type", "text/html; charset=utf-8");

  //gelen isteğin url'sine göre farklı cevap gönder:

  switch (request.url) {
    case "/overview":
      //meyveler dizisindeki eleman sayısı kadar kart oluştur:
      const cards = data.map((el) => tempCard);
      //anasayfa html'indeki kartlar alanına card html kodlarını ekle:
      tempOverview = tempOverview.replace("{%PRODUCT_CARDS%", cards);
      return response.end(tempOverview);
    case "/product":
      return response.end(tempProduct);
    default:
      return response.end("<h1>Tanimlanmayan Yol</h1>");
  }
  //gelen isteğe gönderilecek yanıt :
  response.end("Merhaba Dünya!!!!");
});

//Bir dinleyici oluşturup hangi porta gelen isteklerin dinleneceği söylenmeli

server.listen("3535", "127.0.0.1", () => {
  console.log("😉IP adresinin 3535 portuna gelen istekler dinlenmeye alindi");
});
