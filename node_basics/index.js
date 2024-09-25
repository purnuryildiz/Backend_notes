//* FS (FileSystem) -- Nodejs modüllerinden biri

//* sunucular ve uygulamalar üzerinde dosya ve dizinlerle(klasörlerle) çalışılmasını sağlar. Bu modül sayesinde ;
//dosya okuma, yazma , oluşturma , silme , yeniden adlandırma gibi işlemler gerçekleştirilebilir.
//asenkron ve senkron olarak kullanılabilir.

//!Modüller kullanabilmek için önce çağrılır(import etme):

const fs = require("fs");

//Daha sonra fs modülünün methodlarını kullanabileceğiz:

//1-READING
const text = fs.readFileSync("./data/örnek.txt", "utf-8");
console.log(text);

//2-WRITING

//*Gönderilecek metin içeriğini hazırla
const newText = ` The beauty of learning something new lies in the journey itself. Every step, whether successful or challenging, brings us closer to understanding. It’s not just about reaching the destination, but about the experiences and growth we encounter along the way. With each obstacle overcome, we gain confidence and wisdom. This is true for every skill, from programming to art, and even in the way we approach life. The key is persistence, a willingness to adapt, and the courage to embrace the unknown. In the end, the journey shapes us more than the achievement
${text}
Oluşturma tarihi: 
${new Date().toLocaleDateString()} 
`;

fs.writeFileSync("./data/output.txt", newText);
//*(Var olan bir output dosyası varsa gidip onu güncelliyor , yoksa kendi oluşturuyor)

//3-DELETE
fs.unlinkSync("./data/bozuk.txt");

//4- Klasör(Dizin) Oluşturma
fs.mkdirSync("change");

//5- Dosya ya da dizinin adını değiştirme
fs.renameSync("change", "pürnur");
