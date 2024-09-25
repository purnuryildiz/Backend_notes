//card html ini ve ürün bilgilerini parametre olarak alacak
//card html'inin içerisinde değişken olarak tanımlanan değerlerin yerine ürün bilgilerini ekleyecek bir fonksyion yazalım:

const replaceTemplate = (html, data) => {
  let output = html.replace("{%PRODUCTNAME%}", data.productName);

  //oluşturduğumuz yeni(güncellenmiş) card html ini döndür:
  return output;
};

//replaceTemplate ismindeki fonksiyonu farklı dosyalarda kullanma niyetimiz varsa export etmemiz gerekli:

module.exports = replaceTemplate;
