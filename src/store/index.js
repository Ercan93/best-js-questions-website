import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions: [
      {
        header: " 1. Çıktısı nedir?\r\n\r\n",
        sourceCode:
          'function sayHi() {\r\n  console.log(name);\r\n  console.log(age);\r\n  var name = "Lydia";\r\n  let age = 21;\r\n}\r\n\r\nsayHi();\r\n',
        selections: [
          " `Lydia` ve `undefined`\r\n",
          " `Lydia` ve `ReferenceError`\r\n",
          " `ReferenceError` ve `21`\r\n",
          " `undefined` ve `ReferenceError`\r\n "
        ],
        description:
          ' Cevap: D\r\n\r\nFonksiyonun içinde, önce `var` anahtar kelimesi ile `name` değişkenini tanımladık. Bu demektir ki, değişken varsayılan değeri olan `undefined` ile "hoisting" (hafızada alan oluşturma aşaması) olur, ta ki gerçekten değişkene değer ataması yaptığımız satıra varana dek. `name` değişkenini loglayama çalıştığımız satırda henüz değişkeni tanımlamadık, bu yüzden hala `undefined` değerini saklıyor.\r\n \r\n`let` (ve `const`) anahtar kelimelerine sahip değişkenler de "hoisted" olur, ama `var`\'ın aksine <i>ilk değer ataması</i> yapılmaz. Değişkenleri tanımladığımız (ilk değer ataması yaptığımız) satırdan önce erişilebilir değillerdir. Bu, "geçici ölü alan / geçici değişmez çıktı alanı", "temporal dead zone", olarak adlandırılır. Değişkenlere, tanımlanmadan önce erişmeye çalıştığımız zaman, Javascript `ReferenceError` hatası fırlatır.\r\n\r\n\r\n',
        trueAnswer: "D"
      },
      {
        header: " 2. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          "for (var i = 0; i < 3; i++) {\r\n  setTimeout(() => console.log(i), 1);\r\n}\r\n\r\nfor (let i = 0; i < 3; i++) {\r\n  setTimeout(() => console.log(i), 1);\r\n}\r\n",
        selections: [
          " `0 1 2` ve `0 1 2`\r\n",
          " `0 1 2` ve `3 3 3`\r\n",
          " `3 3 3` ve `0 1 2`\r\n "
        ],
        description:
          " Cevap: C\r\n\r\nJavascript'deki olay kuyruğundan dolayı, `setTimeout` callback fonksiyonu, döngü uygulandıktan _sonra_ çağrılır. `i` değişkeni, ilk döngü sırasında `var` anahtar kelimesi ile tanımlandığından, bu değişken globaldir. Döngü boyunca, `++` unary operatörünü kullanarak, `i`'nin değerini her seferinde `1` arttırdık. İlk örnekte, `setTimeout` callback fonksiyonu çağrıldığı zaman, `i`'nin değeri `3`'e eşitti.\r\n\r\nİkinci döngüde, `i` değişkeni `let` anahtar kelimesi kullanılarak tanımlandı: `let` (ve `const`) ile tanımlanan değişkenler \"block-scope\"dur (block `{}` arasındaki herhangi bir şeydir). Her bir tekrarda, `i` yeni değere sahip olacak ve her değer döngü içinde \"scoped\" olacak.\r\n\r\n\r\n",
        trueAnswer: "C"
      },
      {
        header: " 3. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          "const shape = {\r\n  radius: 10,\r\n  diameter() {\r\n    return this.radius * 2;\r\n  },\r\n  perimeter: () => 2 * Math.PI * this.radius\r\n};\r\n\r\nconsole.log(shape.diameter());\r\nconsole.log(shape.perimeter());\r\n",
        selections: [
          " `20` ve `62.83185307179586`\r\n",
          " `20` ve `NaN`\r\n",
          " `20` ve `63`\r\n",
          " `NaN` ve `63`\r\n "
        ],
        description:
          " Cevap: B\r\n\r\n`diameter` sıradan bir fonksiyonken, `perimeter`'in arrow fonksiyon olduğuna dikkat edin.\r\n\r\nArrow fonksiyonlarda, `this` anahtar kelimesi, sıradan fonksiyonların aksine, kendi sardığı mevcut scope'u referans alır. Bu demektir ki, `perimeter`'i çağırdığımız zaman, `shape` objesini değil, kendi sardığı scope'u referans alıyor (örneğin window).\r\n\r\nBu objede, `radius` değeri olmadığından `undefined` döndürüyor. \r\n ",
        trueAnswer: "B"
      },
      {
        header: " 4. Çıktısı Nedir?\r\n\r\n",
        sourceCode: '+true;\r\n!"Lydia";\r\n',
        selections: [
          " `1` and `false`\r\n",
          " `false` and `NaN`\r\n",
          " `false` and `false`\r\n "
        ],
        description:
          ' Cevap: A\r\n\r\nArtı (unary plus), işlemeye çalıştığı değişkeni sayıya çevirmeye çalışır. `true` `1` ve `false` `0` demektir.\r\n\r\n`\'Lydia\'` harf dizisi doğrusal ("truthy") bir değerdir. Aslında sorduğumuz şey, "bu doğrusal değer yanlış-ımsı ("falsy") mı?". Bu da `false` döndürür. \r\n\r\n\r\n',
        trueAnswer: "A"
      },
      {
        header: " 5. Hangisi doğru?\r\n\r\n",
        sourceCode:
          'const bird = {\r\n  size: "small"\r\n};\r\n\r\nconst mouse = {\r\n  name: "Mickey",\r\n  small: true\r\n};\r\n',
        selections: [
          " `mouse.bird.size` geçerli değildir\r\n",
          " `mouse[bird.size]` geçerli değildir\r\n",
          ' `mouse[bird["size"]]` geçerli değildir\r\n',
          " Hepsi geçerlidir\r\n "
        ],
        description:
          ' Cevap: A\r\n\r\nJavascript\'te, tüm nesne keyleri string\'dir (Symbol olmadıkları müddetçe). Keyleri, string olarak _yazmadıysak_ bile, arka planda string\'e çevrilirler.\r\n\r\nJavascript, ifadeleri yorumlar (ya da açar ("unboxes")). Köşeli parentez notasyonu kullandığımız zaman, Javascript ilk `[` görür ve `]` bulana kadar devam eder. Ancak ondan sonra ifadeyi hesaplar.\r\n\r\n`mouse[bird.size]`: Önce `bird.size` çalıştırılır, o da `"small"` demektir. `mouse["small"]`, `true` döndürür.\r\n\r\nAncak, nokta notasyonunda bu gerçekleşmez. `mouse`, `bird` diye bir keye sahip değildir ki bu da `mouse.bird`, `undefined` demektir. Sonra, nokta notasyonunu kullanarak `size`\'a ulaşmak istiyoruz: `mouse.bird.size`. `mouse.bird`, `undefined` olduğundan, aslında ulaşmaya çalıştığımız `undefined.size`. Bu geçerli değil ve `Cannot read property "size" of undefined`\'a benzer bir hata fırlatacaktır.\r\n\r\n\r\n',
        trueAnswer: "A"
      },
      {
        header: " 6. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'let c = { greeting: "Hey!" };\r\nlet d;\r\n\r\nd = c;\r\nc.greeting = "Hello";\r\nconsole.log(d.greeting);\r\n',
        selections: [
          " `Hello`\r\n",
          " `Hey!`\r\n",
          " `undefined`\r\n",
          " `ReferenceError`\r\n",
          " `TypeError`\r\n "
        ],
        description:
          ' Cevap: A\r\n\r\nJavascript\'te tüm nesneler, birbirlerine eşitlendikleri zaman _referansları_ ile etkileşime girerler.\r\n\r\nÖnce, `c` değişkeni bir nesnenin değerini tutuyor. Sonra, `d`\'ye aynı referansı atadık ki bu referans da `c`\'nin sahip olduğu nesnedir.\r\n<img src="https://i.imgur.com/ko5k0fs.png" width="200">\r\n\r\nBir nesneyi değiştirdiğiniz zaman, hepsini değiştirirsiniz.\r\n ',
        trueAnswer: "A"
      },
      {
        header: " 7. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          "let a = 3;\r\nlet b = new Number(3);\r\nlet c = 3;\r\n\r\nconsole.log(a == b);\r\nconsole.log(a === b);\r\nconsole.log(b === c);\r\n",
        selections: [
          " `true` `false` `true`\r\n",
          " `false` `false` `true`\r\n",
          " `true` `false` `false`\r\n",
          " `false` `true` `true`\r\n "
        ],
        description:
          ' Cevap: C\r\n\r\n`new Number()` yerleşik bir yapıcı fonksiyondur ("function constructor"). Sayı ("number") gibi gözükse de gerçekten bir sayı değil: bir kaç ekstra özelliğe sahip ve o bir nesne.\r\n\r\n`==` operatörünü kullandığımız zaman, sadece aynı _değer_\'e sahip olup olmadığını kontrol eder. İkisi de `3` değerine sahip, yani `true` döndürür.\r\n\r\nAncak, `===` kullandığımız zaman değer _ve_ tip aynı olmalıdır. Öyle değil: `new Number()`, sayı ("number") değildir, **nesne**dir. İkisi de `false` döndürür.\r\n\r\n\r\n',
        trueAnswer: "C"
      },
      {
        header: " 8. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'class Chameleon {\r\n  static colorChange(newColor) {\r\n    this.newColor = newColor;\r\n    return this.newColor;\r\n  }\r\n\r\n  constructor({ newColor = "green" } = {}) {\r\n    this.newColor = newColor;\r\n  }\r\n}\r\n\r\nconst freddie = new Chameleon({ newColor: "purple" });\r\nconsole.log(freddie.colorChange("orange"));\r\n',
        selections: [
          " `orange`\r\n",
          " `purple`\r\n",
          " `green`\r\n",
          " `TypeError`\r\n "
        ],
        description:
          ' Cevap: D\r\n\r\n`colorChange` fonksiyonu statiktir. Statik methodlar, sadece oluşturuldukları kurucuda var olmak için tasarlanmıştır ve herhangi bir "children"a aktarılamaz. `freddie`, "child" olduğundan, fonksiyon aktarılmadı ve `freddie` üzerinden erişilebilir değil: `TypeError` hatası fırlatılır.\r\n\r\n\r\n',
        trueAnswer: "D"
      },
      {
        header: " 9. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          "let greeting;\r\ngreetign = {}; // Yazım hatası!\r\nconsole.log(greetign);\r\n",
        selections: [
          " `{}`\r\n",
          " `ReferenceError: greetign is not defined`\r\n",
          " `undefined`\r\n "
        ],
        description:
          ' Cevap: A\r\n\r\nNesneyi loglar çünkü global nesne üzerinde boş bir nesne oluşturduk. `greeting`\'i `greetign` olarak yanlış yazdığımız zaman, JS yorumlayıcısı bunu `global.greetign = {}` olarak gördü (ya da tarayıcı içinde `window.greetign = {}`).\r\n\r\nBundan kaçınmak için, `"use strict"` kullanabiliriz. Bu, bir değişkene herhangi bir atama yapmadan önce tanımladığınızdan emin olmanızı sağlar.\r\n\r\n\r\n',
        trueAnswer: "A"
      },
      {
        header: " 10. Bunu yaptığımız zaman ne gerçekleşir?\r\n\r\n",
        sourceCode:
          'function bark() {\r\n  console.log("Woof!");\r\n}\r\n\r\nbark.animal = "dog";\r\n',
        selections: [
          " Hiç bir şey, tamamen iyi!\r\n",
          " `SyntaxError`. Fonksiyonlara bu şekilde özellik atayamazsın.\r\n",
          ' `"Woof"` şeklinde loglanır.\r\n',
          " `ReferenceError`\r\n "
        ],
        description:
          ' Cevap: A\r\n\r\nJavascript\'te bu mümkün, çünkü fonksiyonlar nesnedir! (Primitive tiplere nazaran her şey nesnedir)\r\n\r\nFonksiyon özel bir nesne tipidir. Yazdığınız kod asıl fonksiyon değil. Fonksiyon, özelliklere sahip bir nesnedir. Bu özellik çalıştırabilme kapasitesine sahiptir ("invocable").\r\n ',
        trueAnswer: "A"
      },
      {
        header: " 11. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'function Person(firstName, lastName) {\r\n  this.firstName = firstName;\r\n  this.lastName = lastName;\r\n}\r\n\r\nconst member = new Person("Lydia", "Hallie");\r\nPerson.getFullName = function() {\r\n  return `${this.firstName} ${this.lastName}`;\r\n};\r\n\r\nconsole.log(member.getFullName());\r\n',
        selections: [
          " `TypeError`\r\n",
          " `SyntaxError`\r\n",
          " `Lydia Hallie`\r\n",
          " `undefined` `undefined`\r\n "
        ],
        description:
          " Cevap: A\r\n\r\nSıradan fonksiyonlarla yaptığınız gibi bir yapıcıya (\"constructor\") özellik ekleyemezsiniz. Eğer, tek seferde tüm nesnelere özellik eklemek isterseniz, bunun yerine prototype kullanmalısınız. Yani bu durumda,\r\n```js\r\nPerson.prototype.getFullName = function() {\r\n  return `${this.firstName} ${this.lastName}`;\r\n};\r\n```\r\n\r\n`member.getFullName()` çalışmış olacak. Bu neden faydalı? Diyelim ki, yapıcının kendisine bu methodu ekledik. Belki de tüm `Person` instance'leri bu methoda ihtiyaç duymuyor. Bu özelliğe sahip olduklarından dolayı, her bir instance hafızadan yer alır, bu da bir sürü hafıza israfı demek. Bunun yerine, eğer sadece prototype'a eklersek, hafızadan sadece bir tek yer alırız ve yine de tüm instanceler bu özelliğe erişebilir!\r\n ",
        trueAnswer: "A"
      },
      {
        header: " 12. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'function Person(firstName, lastName) {\r\n  this.firstName = firstName;\r\n  this.lastName = lastName;\r\n}\r\n\r\nconst lydia = new Person("Lydia", "Hallie");\r\nconst sarah = Person("Sarah", "Smith");\r\n\r\nconsole.log(lydia);\r\nconsole.log(sarah);\r\n',
        selections: [
          ' `Person {firstName: "Lydia", lastName: "Hallie"}` ve `undefined`\r\n',
          ' `Person {firstName: "Lydia", lastName: "Hallie"}` ve `Person {firstName: "Sarah", lastName: "Smith"}`\r\n',
          ' `Person {firstName: "Lydia", lastName: "Hallie"}` ve `{}`\r\n',
          '`Person {firstName: "Lydia", lastName: "Hallie"}` ve `ReferenceError`\r\n '
        ],
        description:
          " Cevap: A\r\n\r\n`sarah` için `new` anahtar kelimesi kullanmadık. `new` kullandığınız zaman, oluşturduğumuz yeni boş nesneyi referans gösterir. Lakin, `new`'i eklemezseniz, **global nesne**'yi referans gösterir!\r\n\r\n`this.firstName`, `\"Sarah\"`'a eşittir ve `this.lastName`, `\"Smith\"`'e eşittir dedik. Aslında yaptığımız, `global.firstName = 'Sarah'` ve `global.lastName = 'Smith'` diye tanımlamaydı. `sarah`'ın kendisi `undefined` olarak kalır.\r\n\r\n\r\n",
        trueAnswer: "A"
      },
      {
        header: " 13. Olay silsilesinin (event propagation) üç aşaması nedir?",
        sourceCode: null,
        selections: [],
        description:
          ' Cevap: D\r\n\r\n**capturing** aşaması süresince, olay ata ("ancestor) elemanlardan hedef elemana doğru gider. Daha sonra **target** elemana ulaşır ve **bubbling** başlar. \r\n\r\n<img src="https://i.imgur.com/N18oRgd.png" width="200">\r\n ',
        trueAnswer: "D"
      },
      {
        header: " 14. Bütün nesneler prototiplere sahiptir.",
        sourceCode: null,
        selections: [],
        description:
          ' Cevap: B\r\n\r\nBütün nesneler prototiplere ("prototypes") sahiptir, **temel nesne**, **base object**, hariç. Temel nesne, kullanıcı tarafından oluşturulmuş nesnedir, ya da `new` anahtar kelimesi kullanarak oluşturulmuş bir nesnedir. Temel nesne bazı method ve özelliklere erişebilir, `.toString` gibi. Yerleşik gelen Javascript methodlarını kullanabilme sebebi budur! Buna benzer tüm methodlar prototip üzerinden erişebilir. Her ne kadar Javascript, methodu direkt olarak nesneniz üzerinden bulamasa da, prototip zinciri üzerinden aşağıya doğru gider ve orada bulur, böylece sizin için erişebilir yapar.\r\n\r\n\r\n',
        trueAnswer: "B"
      },
      {
        header: " 15. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'function sum(a, b) {\r\n  return a + b;\r\n}\r\n\r\nsum(1, "2");\r\n',
        selections: [
          " `NaN`\r\n",
          " `TypeError`\r\n",
          ' `"12"`\r\n',
          " `3`\r\n "
        ],
        description:
          ' Cevap: C\r\n\r\nJavascript **dinamik tipli dil**dir: değişkenlerin hangi tip olduğunu belirtmeyiz. Değerler otomatik olarak diğer tipi bilmeden dönüştürebilir, bu _implicit type coercion_, _örtük tip dönüşümü_, olarak adlandırılır. **Coercion** bir tipi diğer bir tipe dönüştürmektir.\r\n\r\nBu örnekte, JavaScript sayı olan `1`\'i string\'e dönüştürüyor, fonksiyonun mantıklı olması ve değer döndürmesi için. Sayısal tip (`1`) ve string tip (`2`)\'nin toplanması sırasında, sayıya string olarak muamele edilir. Stringleri `"Hello" + "World"` şeklinde birleştirebiliriz, yani burada olan `"1" + "2"` ki bu da `"12"` döndürür.\r\n ',
        trueAnswer: "C"
      },
      {
        header: " 16. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          "let number = 0;\r\nconsole.log(number++);\r\nconsole.log(++number);\r\nconsole.log(number);\r\n",
        selections: [
          " `1` `1` `2`\r\n",
          " `1` `2` `2`\r\n",
          " `0` `2` `2`\r\n",
          " `0` `1` `2`\r\n "
        ],
        description:
          " Cevap: C\r\n\r\n**son ek**, **postfix**, `++` unary operatörü:\r\n\r\n\r\n1. Değer döndürür (`0` döndürür)\r\n2. Değeri arttırır (sayı şimdi `1`)\r\n\r\n**ön ek**, **prefix**, `++` unary operatörü:\r\n\r\n1. Değeri arttırır (sayı şimdi `2`)\r\n2. Değeri döndürür (`2` döndürür)\r\n\r\nBurada `0 2 2` döner.\r\n ",
        trueAnswer: "C"
      },
      {
        header: " 17. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'function getPersonInfo(one, two, three) {\r\n  console.log(one);\r\n  console.log(two);\r\n  console.log(three);\r\n}\r\n\r\nconst person = "Lydia";\r\nconst age = 21;\r\n\r\ngetPersonInfo`${person} is ${age} years old`;\r\n',
        selections: [
          ' `"Lydia"` `21` `["", " is ", " years old"]`\r\n',
          ' `["", " is ", " years old"]` `"Lydia"` `21`\r\n',
          ' `"Lydia"` `["", " is ", " years old"]` `21`\r\n '
        ],
        description:
          ' Cevap: B\r\n\r\nEğer "tagged template literals" kullanırsanoz, ilk argumanın değeri her zaman string değerler dizisidir. Geriye kalan argumanlar, ifadeye geçilen değerleri alır.\r\n ',
        trueAnswer: "B"
      },
      {
        header: " 18. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'function checkAge(data) {\r\n  if (data === { age: 18 }) {\r\n    console.log("You are an adult!");\r\n  } else if (data == { age: 18 }) {\r\n    console.log("You are still an adult.");\r\n  } else {\r\n    console.log(`Hmm.. You don\'t have an age I guess`);\r\n  }\r\n}\r\n\r\ncheckAge({ age: 18 });\r\n',
        selections: [
          " `You are an adult!`\r\n",
          " `You are still an adult.`\r\n",
          " `Hmm.. You don't have an age I guess`\r\n "
        ],
        description:
          " Cevap: C\r\n\r\nEşitliği test ederken, nesneler _referanslarına_ göre kıyaslanırken primitifler _değerlerine_ göre kıyaslanır. Javascript, nesnelerin referanslarının hafızada aynı konumda olup olmadığını kontrol eder.\r\n\r\nKıyasladığımız iki nesne bu şekilde değilse: parametre olarak geçtiğimiz nesne, hafızada eşitliğini kontrol ettiğimiz nesneden farklı bir konumu referans gösterir.\r\n\r\nBu sebepten, `{ age: 18 } === { age: 18 }` ve `{ age: 18 } == { age: 18 }`, ikisi de `false` döndürür.\r\n ",
        trueAnswer: "C"
      },
      {
        header: " 19. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          "function getAge(...args) {\r\n  console.log(typeof args);\r\n}\r\n\r\ngetAge(21);\r\n",
        selections: [
          ' `"number"`\r\n',
          ' `"array"`\r\n',
          ' `"object"`\r\n',
          ' `"NaN"`\r\n '
        ],
        description:
          ' Cevap: C\r\n\r\nYayma operatorü, "spread operator", (`...args`) argumanların dahil olduğu bir dizi döndürür. Dizi bir nesnedir, bu yüzden `typeof args` `"object"` döndürür.\r\n ',
        trueAnswer: "C"
      },
      {
        header: " 20. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'function getAge() {\r\n  "use strict";\r\n  age = 21;\r\n  console.log(age);\r\n}\r\n\r\ngetAge();\r\n',
        selections: [
          " `21`\r\n",
          " `undefined`\r\n",
          " `ReferenceError`\r\n",
          " `TypeError`\r\n "
        ],
        description:
          ' Cevap: C\r\n\r\n`"use strict"` ile, yanlışlıkla global değişkenler tanımlamadığınızdan emin olabilirsiniz. `age` değişkenini hiç tanımlamadık ve `"use strict"` kullandığımızdan, referans hatası fırlatacaktır. Eğer `"use strict"` kullanmasaydık, `age` özelliği global nesneye eklenmiş olacağından, çalışmış olacaktı.\r\n ',
        trueAnswer: "C"
      },
      {
        header: " 21. `sum`'ın değeri nedir?\r\n\r\n",
        sourceCode: 'const sum = eval("10*10+5");\r\n',
        selections: [
          " `105`\r\n",
          ' `"105"`\r\n',
          " `TypeError`\r\n",
          ' `"10*10+5"`\r\n '
        ],
        description:
          " Cevap: A\r\n\r\n`eval`, string olarak geçilen kodu çalıştırır. Eğer bir ifadeyse, bu durumdaki gibi, ifadeyi çalıştırır. İfade `10 * 10 + 5`. Bu `105` sayısını döndürür.\r\n ",
        trueAnswer: "A"
      },
      {
        header: " 22. cool_secret ne kadar süre boyunca erişebilinir?\r\n\r\n",
        sourceCode: 'sessionStorage.setItem("cool_secret", 123);\r\n',
        selections: [
          " Sonsuza kadar, veri kaybolmaz.\r\n",
          " Kullanıcı sekmeyi kapatınca.\r\n",
          " Kullanıcı tamamen tarayıcıyı kapattığı zaman, sadece sekmeyi değil.\r\n",
          " Kullanıcı bilgisayarını kapattığı zaman.\r\n "
        ],
        description:
          " Cevap: B\r\n\r\n`sessionStorage` içinde saklanan veri _sekme_ kapatıldıktan sonra kaldırılır.\r\n\r\nEğer `localStorage` kullandıysanız, veri sonsuza kadar orada olacaktır, örnek olarak `localStorage.clear()` çalıştırılmadığı sürece. \r\n ",
        trueAnswer: "B"
      },
      {
        header: " 23. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          "var num = 8;\r\nvar num = 10;\r\n\r\nconsole.log(num);\r\n",
        selections: [
          " `8`\r\n",
          " `10`\r\n",
          " `SyntaxError`\r\n",
          " `ReferenceError`\r\n "
        ],
        description:
          ' Cevap: B\r\n\r\n`var` anahtar kelimesi ile aynı isme sahip birden çok değişken tanımlayabilirsiniz. O halde değişken son değeri tutacak.\r\n\r\nBunu `let` ya da `const` ile yapamazsınız, "block-scoped" olduklarından dolayı.\r\n ',
        trueAnswer: "B"
      },
      {
        header: " 24. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'const obj = { 1: "a", 2: "b", 3: "c" };\r\nconst set = new Set([1, 2, 3, 4, 5]);\r\n\r\nobj.hasOwnProperty("1");\r\nobj.hasOwnProperty(1);\r\nset.has("1");\r\nset.has(1);\r\n',
        selections: [
          " `false` `true` `false` `true`\r\n",
          " `false` `true` `true` `true`\r\n",
          " `true` `true` `false` `true`\r\n",
          " `true` `true` `true` `true`\r\n "
        ],
        description:
          " Cevap: C\r\n\r\nTüm nesne anahtarları (Symbol'ler hariç) arka planda string'dir, kendiniz string olarak yazmasanız bile. Bu sebepten `obj.hasOwnProperty('1')` da `true` döndürür.\r\n\r\nSet için bu şekilde çalışmaz. Setimizde `'1'` yok: `set.has('1')` `false` döndürür. Setimiz sayısal tip `1`'e sahip, `set.has(1)` `true` döndürür.\r\n ",
        trueAnswer: "C"
      },
      {
        header: " 25. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'const obj = { a: "one", b: "two", a: "three" };\r\nconsole.log(obj);\r\n',
        selections: [
          ' `{ a: "one", b: "two" }`\r\n',
          ' `{ b: "two", a: "three" }`\r\n',
          ' `{ a: "three", b: "two" }`\r\n',
          " `SyntaxError`\r\n "
        ],
        description:
          ' Cevap: C\r\n\r\nEğer aynı ada sahip iki tane anahtarınız, "key", varsa, anahtar değiştirilecektir. Hala ilk konumunda olacaktır ama son belirtilen değerle birlikte.\r\n ',
        trueAnswer: "C"
      },
      {
        header:
          ' 26. JavaScript global yürütme konteksti, "global execution context", sizin için iki şey oluşturur: global nesne, ve "this" anahtar kelimesi.',
        sourceCode: null,
        selections: [],
        description:
          " Cevap: A\r\n\r\nTemel yürütme konteksti, global yürütme kontekstidir: kodunuzda her yerde erişilebilir olan şeydir.\r\n ",
        trueAnswer: "A"
      },
      {
        header: " 27. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          "for (let i = 1; i < 5; i++) {\r\n  if (i === 3) continue;\r\n  console.log(i);\r\n}\r\n",
        selections: [
          " `1` `2`\r\n",
          " `1` `2` `3`\r\n",
          " `1` `2` `4`\r\n",
          " `1` `3` `4`\r\n "
        ],
        description:
          ' Cevap: C\r\n\r\nEğer belirli şart `true` döndürürse, `continue` ifadesi yinelemeyi, "iteration", atlar.\r\n ',
        trueAnswer: "C"
      },
      {
        header: " 28. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'String.prototype.giveLydiaPizza = () => {\r\n  return "Just give Lydia pizza already!";\r\n};\r\n\r\nconst name = "Lydia";\r\n\r\nname.giveLydiaPizza();\r\n',
        selections: [
          ' `"Just give Lydia pizza already!"`\r\n',
          " `TypeError: not a function`\r\n",
          " `SyntaxError`\r\n",
          " `undefined`\r\n "
        ],
        description:
          " Cevap: A\r\n\r\n`String`, özellikler de ekleyebileceğimiz tümleşik bir yapıcıdır. Prototipine bir method ekledim sadece. Primitif stringler, string prototip fonksiyonu tarafından üretilen string nesnesine otomatik olarak dönüştürülür. Bu yüzden, tüm stringler (string nesneleri) bu methoda erişebilir!\r\n ",
        trueAnswer: "A"
      },
      {
        header: " 29. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'const a = {};\r\nconst b = { key: "b" };\r\nconst c = { key: "c" };\r\n\r\na[b] = 123;\r\na[c] = 456;\r\n\r\nconsole.log(a[b]);\r\n',
        selections: [
          " `123`\r\n",
          " `456`\r\n",
          " `undefined`\r\n",
          " `ReferenceError`\r\n "
        ],
        description:
          ' Cevap: B\r\n\r\nNesne keyleri otomatik olarak stringe dönüştürülür. `a` nesnesine değeri `123` olacak şekilde, bir nesneyi key olarak atamaya çalışıyoruz.\r\n\r\nAncak, bir nesnesi string hale getirince, `"[object Object]"` olur. Dolayısıyla burada söylediğimiz, `a["object Object"] = 123`. Sonra, aynı şeyi tekrar yapmayı deniyoruz. `c`, dolaylı olarak string hale getirdiğimiz başka bir nesne. O halde, `a["object Object"] = 456`.\r\n\r\nSonra, `a[b]`\'yi logluyoruz, ki aslında o da `a["object Object"]`. Onu da `456` olarak atamıştık, o yüzden `456` döndürür.\r\n ',
        trueAnswer: "B"
      },
      {
        header: " 30. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'const foo = () => console.log("First");\r\nconst bar = () => setTimeout(() => console.log("Second"));\r\nconst baz = () => console.log("Third");\r\n\r\nbar();\r\nfoo();\r\nbaz();\r\n',
        selections: [
          " `First` `Second` `Third`\r\n",
          " `First` `Third` `Second`\r\n",
          " `Second` `First` `Third`\r\n",
          " `Second` `Third` `First`\r\n "
        ],
        description:
          ' Cevap: B\r\n\r\nBir `setTimeout` fonksiyonumuz var ve ilk onu çalıştırdık. Yine de en son loglandı.\r\n\r\nBunun nedeni tarayıcılarda, "runtime engine"\'a sahip olmamamızdan, `WebAPI` denilen bir şeye sahibiz. `WebAPI`, örneğin DOM ile çalışması için bize, `setTimeout` fonksiyonunu verir.\r\n\r\n_callback_ WebAPI\'a eklendikten sonra, `setTimeout` fonksiyonun kendisi (callback hariç!) hafıza bloğundan atılır, "popped off the stack".\r\n\r\n<img src="https://i.imgur.com/X5wsHOg.png" width="200">\r\n\r\nŞimdi, `foo` çalıştı ve `"First"` loglandı.\r\n\r\n<img src="https://i.imgur.com/Pvc0dGq.png" width="200">\r\n\r\n`foo` hafıza bloğundan atıldı ve `baz` çalıştı. `"Third"` loglandı.\r\n\r\n<img src="https://i.imgur.com/WhA2bCP.png" width="200">\r\n\r\nWebAPI, her ne zaman bir şeyler hazırsa hafıza bloğuna öylece ekleyemez. Onun yerine callback fonksiyonunu, _queue_ diye adlandıralan bir şeye ekler.\r\n\r\n<img src="https://i.imgur.com/NSnDZmU.png" width="200">\r\n\r\nBurası olay döngüsünün çalışmaya başlayacapı yerdir. **olay döngüsü**, **event loop**, hafıza bloğuna ve iş kuyruğuna, "task queue", bakar. Eğer hafıza bloğu boşsa, kuyruktaki ilk şeyi alır ve hafıza bloğuna ekler.\r\n\r\n<img src="https://i.imgur.com/uyiScAI.png" width="200">\r\n\r\n`bar` çalıştı, `"Second"` loglandı ve hafıza bloğundan atıldı.\r\n ',
        trueAnswer: "B"
      },
      {
        header: " 31. Butona tıklandığında, event.target nedir?\r\n\r\n",
        sourceCode:
          "html\r\n<div onclick=\"console.log('first div')\">\r\n  <div onclick=\"console.log('second div')\">\r\n    <button onclick=\"console.log('button')\">\r\n      Click!\r\n    </button>\r\n  </div>\r\n</div>\r\n",
        selections: [
          " Dıştaki `div`\r\n",
          " İçteki `div`\r\n",
          " `button`\r\n",
          " İç içe olan tüm elemanlar listesi.\r\n "
        ],
        description:
          ' Cevap: C\r\n\r\nOlaya sebep olan en derindeki iç eleman, olayın hedefidir ("event.target"). `event.stopPropagation` kullanarak "bubbling"\'i durdurabilirsiniz.\r\n ',
        trueAnswer: "C"
      },
      {
        header:
          " 32. Paragrafa tıkladığınız zaman, çıktı olarak ne loglanır?\r\n\r\n",
        sourceCode:
          "html\r\n<div onclick=\"console.log('div')\">\r\n  <p onclick=\"console.log('p')\">\r\n    Click here!\r\n  </p>\r\n</div>\r\n",
        selections: [
          " `p` `div`\r\n",
          " `div` `p`\r\n",
          " `p`\r\n",
          " `div`\r\n "
        ],
        description:
          ' Cevap: A\r\n\r\nEğer `p`\'ye tıklarsak, iki log görürüz: `p` ve `div`. Olay silsilesi, "event propagation", sırasında, 3 aşama vardır: "capturing", "target", ve "bubbling". Varsayılan olarak, olay işleyiciler, "event handlers", "bubbling" aşamasında (`useCapture`\'ı `true` olarak ayarlanmadığı müddetçe) çalıştırılır. En derin elemandan dışa doğru gider.\r\n ',
        trueAnswer: "A"
      },
      {
        header: " 33. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'const person = { name: "Lydia" };\r\n\r\nfunction sayHi(age) {\r\n  console.log(`${this.name} is ${age}`);\r\n}\r\n\r\nsayHi.call(person, 21);\r\nsayHi.bind(person, 21);\r\n',
        selections: [
          " `undefined is 21` `Lydia is 21`\r\n",
          " `function` `function`\r\n",
          " `Lydia is 21` `Lydia is 21`\r\n",
          " `Lydia is 21` `function`\r\n "
        ],
        description:
          " Cevap: D\r\n\r\nİkisinde de, `this` anahtar kelimesinin referans olmasını istediğimiz nesneyi geçebiliriz. Ancak, `.call` _anında çalıştırılır_!\r\n\r\n`.bind.` fonksiyonun _kopyasını_ döndürür, ama konteksle bağlı şekilde. Anında çalıştırılmaz.\r\n ",
        trueAnswer: "D"
      },
      {
        header: " 34. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          "function sayHi() {\r\n  return (() => 0)();\r\n}\r\n\r\nconsole.log(typeof sayHi());\r\n",
        selections: [
          ' `"object"`\r\n',
          ' `"number"`\r\n',
          ' `"function"`\r\n',
          ' `"undefined"`\r\n '
        ],
        description:
          ' Cevap: B\r\n\r\n`sayHi` fonksiyonu, anında çalıştırılan fonksiyonun, "immediately invoked function (IIFE)", döndürdüğü değeri döndürür. Bu fonksiyon `0` döndürdü, k, tipi `"number"`\'dır.\r\n\r\nBilginize; 7 tane tümleşik tip vardır: `null`, `undefined`, `boolean`, `number`, `string`, `object`, `symbol`, ve `bigint`. Fonksiyonlar nesne olduklarından, `"function"` tip değildir. Fonksiyonun tipi `"object"`\'dir.\r\n ',
        trueAnswer: "B"
      },
      {
        header: " 35. Bu değerlerden hangileri yanlış-ımsıdır (falsy)?\r\n\r\n",
        sourceCode:
          '0;\r\nnew Number(0);\r\n("");\r\n(" ");\r\nnew Boolean(false);\r\nundefined;\r\n',
        selections: [
          " `0`, `''`, `undefined`\r\n",
          " `0`, `new Number(0)`, `''`, `new Boolean(false)`, `undefined`\r\n",
          " `0`, `''`, `new Boolean(false)`, `undefined`\r\n",
          " All of them are falsy\r\n "
        ],
        description:
          " Cevap: A\r\n\r\nSadece 6 tane yanlış-ımsı, \"falsy\", değer vardır:\r\n\r\n- `undefined`\r\n- `null`\r\n- `NaN`\r\n- `0`\r\n- `''` (empty string)\r\n- `false`\r\n\r\nFonksiyon yapıcıları, `new Number` ve `new Boolean` gibi, doğrusaldır.\r\n ",
        trueAnswer: "A"
      },
      {
        header: " 36. Çıktısı Nedir?\r\n\r\n",
        sourceCode: "console.log(typeof typeof 1);\r\n",
        selections: [
          ' `"number"`\r\n',
          ' `"string"`\r\n',
          ' `"object"`\r\n',
          ' `"undefined"`\r\n '
        ],
        description:
          ' Cevap: B\r\n\r\n`typeof 1` `"number"` döndürür.\r\n`typeof "number"` `"string"` döndürür.\r\n ',
        trueAnswer: "B"
      },
      {
        header: " 37. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          "const numbers = [1, 2, 3];\r\nnumbers[10] = 11;\r\nconsole.log(numbers);\r\n",
        selections: [
          " `[1, 2, 3, 7 x null, 11]`\r\n",
          " `[1, 2, 3, 11]`\r\n",
          " `[1, 2, 3, 7 x empty, 11]`\r\n",
          " `SyntaxError`\r\n "
        ],
        description:
          ' Cevap: C\r\n\r\nDizi içinde, dizinin uzunluğunu aşan bir elemana değer atadığınızda, JavaScript "boş alanlar, "empty slots", denilen bir şey oluşturur. Bunların değeri aslında `undefined` olsa da şöyle bir şey görürsünüz:\r\n\r\n`[1, 2, 3, 7 x empty, 11]`\r\n\r\nnerede çalıştırdığınıza bağlı olarak (her tarayıcı, node, vb... için farklıdır.)\r\n ',
        trueAnswer: "C"
      },
      {
        header: " 38. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          "(() => {\r\n  let x, y;\r\n  try {\r\n    throw new Error();\r\n  } catch (x) {\r\n    (x = 1), (y = 2);\r\n    console.log(x);\r\n  }\r\n  console.log(x);\r\n  console.log(y);\r\n})();\r\n",
        selections: [
          " `1` `undefined` `2`\r\n",
          " `undefined` `undefined` `undefined`\r\n",
          " `1` `1` `2`\r\n",
          " `1` `undefined` `undefined`\r\n "
        ],
        description:
          " Cevap: A\r\n\r\n`catch` bloğu `x` argumanını alıyor. Argumanları geçtiğimiz zaman, bu değişken olan `x` ile aynı değildir. Bu `x` değişkeni block-scoped'dur.\r\n\r\nSonra, bu block-scoped değişkeni `1`'e eşit olarak ayarladık ve `y` değişkeninin değerini ayarladık. Block-scoped `x` değişkenini logladık, ki değeri `1`'e eşitti.\r\n\r\n`catch` bloğunun dışında, `x` hala `undefined`, ve `y` `2`'dir. `catch` bloğunun dışında, `console.log(x)` çalıştırmak istediğimizde `undefined` döndürür ve `y` `2` döndürür.\r\n ",
        trueAnswer: "A"
      },
      {
        header: " 39. JavaScript'teki her şey ya bir...",
        sourceCode: null,
        selections: [],
        description:
          " Cevap: A\r\n\r\nJavaScript sadece primitif ve nesne tiplerine sahiptir.\r\n\r\nPrimitif tipler, `boolean`, `null`, `undefined`, `bigint`, `number`, `string`, ve `symbol`.\r\n\r\nPrimitif ve nesneyi birbirinden ayıran, primitif tiplerin herhangi bir özelliğe ya da metoda sahip olmamasıdır; ancak, fark edeceğiniz üzere `'foo'.toUpperCase()` `'FOO'` olarak değer döndürür ve `TypeError` ile sonuçlanmaz. Bunun sebebi, string gibi primitif bir tip üzerinde özelliğe ya da methoda erişmeye çalıştığınızda, JavaScript sarıcı sınıflardan, \"wrapper classes\", birini kullanarak nesneyi dolaylı şekilde sarar, örneğin `String`, ve sonrasında ifade çalıştıktan sonra anında sarıcıyı ayırır. `null` ve `undefined` dışındaki tüm primitifler bu şekilde davranır.\r\n ",
        trueAnswer: "A"
      },
      {
        header: " 40. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          "[[0, 1], [2, 3]].reduce(\r\n  (acc, cur) => {\r\n    return acc.concat(cur);\r\n  },\r\n  [1, 2]\r\n);\r\n",
        selections: [
          " `[0, 1, 2, 3, 1, 2]`\r\n",
          " `[6, 1, 2]`\r\n",
          " `[1, 2, 0, 1, 2, 3]`\r\n",
          " `[1, 2, 6]`\r\n "
        ],
        description:
          " Cevap: C\r\n\r\n`[1, 2]` başlangıç değerimizdir. Başladığımız değer budur ve `acc`'nin en ilk değeridir. İlk tur süresince, `acc` `[1,2]`'dir ve `cur` `[0, 1]`'dir. Onları birleştiririz ve `[1, 2, 0, 1]` olarak sonuçlanır.\r\n\r\nSonra, `acc` `[1, 2, 0, 1]`'dir ve `cur` `[2, 3]`'dür. Onları birleştiririz ve `[1, 2, 0, 1, 2, 3]` elde ederiz.\r\n ",
        trueAnswer: "C"
      },
      {
        header: " 41. Çıktısı Nedir?\r\n\r\n",
        sourceCode: '!!null;\r\n!!"";\r\n!!1;\r\n',
        selections: [
          " `false` `true` `false`\r\n",
          " `false` `false` `true`\r\n",
          " `false` `true` `true`\r\n",
          " `true` `true` `false`\r\n "
        ],
        description:
          ' Cevap: B\r\n\r\n`null` yanlış-ımsıdır, "falsy". `!null` `true` döndürür. `!true` `false` döndürür.\r\n\r\n`""` yanlış-ımsıdır. `!""` `true` döndürür. `!true` `false` döndürür.\r\n\r\n`1` doğrusaldır. `!1` `false` döndürür. `!false` `true` döndürür.\r\n ',
        trueAnswer: "B"
      },
      {
        header: " 42. `setInterval` methodu tarayıcıda ne döndürür?\r\n\r\n",
        sourceCode: 'setInterval(() => console.log("Hi"), 1000);\r\n',
        selections: [
          " benzersiz bir id\r\n",
          " belirtilen milisayine tutarı\r\n",
          " gönderilen fonksiyon\r\n",
          " `undefined`\r\n "
        ],
        description:
          ' Cevap: A\r\n\r\nBenzersiz bir id döndürür. Bu id, süre aralığını, "interval", `clearInterval()` fonksiyonu ile temizlemek için kullanılabilinir.\r\n ',
        trueAnswer: "A"
      },
      {
        header: " 43. Ne döndürür?\r\n\r\n",
        sourceCode: '[..."Lydia"];\r\n',
        selections: [
          ' `["L", "y", "d", "i", "a"]`\r\n',
          ' `["Lydia"]`\r\n',
          ' `[[], "Lydia"]`\r\n',
          ' `[["L", "y", "d", "i", "a"]]`\r\n '
        ],
        description:
          ' Cevap: A\r\n\r\nString, yinelenebilirdir, "iterable". Yayma operatörü, yenilenebilirin her bir karakterini bir elemana eşler.\r\n ',
        trueAnswer: "A"
      },
      {
        header: " 44. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          "function* generator(i) {\r\n  yield i;\r\n  yield i * 2;\r\n}\r\n\r\nconst gen = generator(10);\r\n\r\nconsole.log(gen.next().value);\r\nconsole.log(gen.next().value);\r\n",
        selections: [
          " `[0, 10], [10, 20]`\r\n",
          " `20, 20`\r\n",
          " `10, 20`\r\n",
          " `0, 10 and 10, 20`\r\n "
        ],
        description:
          " Cevap: C\r\n\r\nSıradan fonksiyonlar yürütmenin başlamasının ardından yarı yolda durdurulamaz. Ancak, bir generator fonksiyon yarı yolda \"durdurabilir\" ve sonra nerede kaldıysa devam edebilir. Bir generator fonksiyon ne zaman `yield` anahtar kelimesiyle karşılaşsa, yield'de belirtilen değeri verir. Dikkat edin, generator fonksiyon değeri _döndürmez_ (_return_), değeri _verir_ (_yield_). \r\n\r\nÖnce, generator fonksiyonu `i`'yi `10`'a eşitleyerek başlatıyoruz. `next()` metodunu kullanarak generator fonksiyonu çalıştırıyoruz. İlk kez generator fonksiyonu çalıştırdığımızda, `i` `10`'a eşit. Fonksiyon ilk `yield` anahtar kelimesi ile karşılaşıyor: `i`'nin değerini veriyor. Generatır şimdi \"durdu\", ve `10` loglandı.\r\n\r\nSonra, `next()` metodunu kullanarak fonksiyonu tekrar çalıştırıyoruz. Fonksiyon önceki kaldığı yerden çalışmaya devam ediyor, `i` hala `10`'a eşit. Şimdi, fonksiyon sıraki `yield` anahtar kelimesi ile karşılaşıyor, ve `i * 2`'yi veriyor, yani fonksiyon `10 * 2` veriyor, ki o da `20`'dir. `10, 20` şeklinde sonuçlanıyor.\r\n ",
        trueAnswer: "C"
      },
      {
        header: " 45. Ne döndürür?\r\n\r\n",
        sourceCode:
          'const firstPromise = new Promise((res, rej) => {\r\n  setTimeout(res, 500, "one");\r\n});\r\n\r\nconst secondPromise = new Promise((res, rej) => {\r\n  setTimeout(res, 100, "two");\r\n});\r\n\r\nPromise.race([firstPromise, secondPromise]).then(res => console.log(res));\r\n',
        selections: [
          ' `"one"`\r\n',
          ' `"two"`\r\n',
          ' `"two" "one"`\r\n',
          ' `"one" "two"`\r\n '
        ],
        description:
          " Cevap: B\r\n\r\n`Promise.race` methoduna birçok promise geçtiğimiz zaman, _ilk_ çözümlenen/reddedilen, \"resolves/rejects\", promise'i çözümler/reddeder . `setTimeout` methoduna, zamanlayıcı, \"timer\", geçtik: ilk promise (`firstPromise`) için 500ms, ve ikinci promise (`secondPromise`) için 100ms. Bu demektir ki `secondPromise` `'two'` değeriyle birlikte önce çözümlenir. `res` sakladığı `'two'` değeriyle loglanır.\r\n ",
        trueAnswer: "B"
      },
      {
        header: " 46. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'let person = { name: "Lydia" };\r\nconst members = [person];\r\nperson = null;\r\n\r\nconsole.log(members);\r\n',
        selections: [
          " `null`\r\n",
          " `[null]`\r\n",
          " `[{}]`\r\n",
          ' `[{ name: "Lydia" }]`\r\n '
        ],
        description:
          ' Cevap: D\r\n\r\nÖnce, `person` değişkenini, `name` özelliğine sahip bir nesne değeriyle birlikte tanımlarız.\r\n\r\n<img src="https://i.imgur.com/TML1MbS.png" width="200">\r\n\r\nSonra, `members` olarak adlandırdığımız değişkeni tanımlarız. Bu dizinin ilk elemanını, `person` değişkeninin değerine eşit olarak ayarlarız. Nesneler, birbirlerine eşitlendiklerinde, _referans_ üzerinden etkileşime girer. Bir referansı, bir değişkenden diğerine atadığınız zaman, o referansın _kopyasını_ oluşturursunuz. (değişkenlerin _aynı_ referansa sahip olmadığına dikkat edin!)\r\n\r\n<img src="https://i.imgur.com/FSG5K3F.png" width="300">\r\n\r\nSonra, `person` değişkenini `null`\'a eşit olarak ayarlarız.\r\n\r\n<img src="https://i.imgur.com/sYjcsMT.png" width="300">\r\n\r\nSadece `person` değişkeninin değerini değiştiriyoruz, dizideki ilk elemanı değil, ilk eleman nesneyi gösteren farklı (kopyalanmış) bir referansa sahip. `members` içindeki ilk eleman hala orijinal nesneyi gösteren referansını saklıyor. `members` dizisini logladığımız zaman, ilk elemanın hala sakladığı nesnenin değeri loglanır.  \r\n ',
        trueAnswer: "D"
      },
      {
        header: " 47. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'const person = {\r\n  name: "Lydia",\r\n  age: 21\r\n};\r\n\r\nfor (const item in person) {\r\n  console.log(item);\r\n}\r\n',
        selections: [
          ' `{ name: "Lydia" }, { age: 21 }`\r\n',
          ' `"name", "age"`\r\n',
          ' `"Lydia", 21`\r\n',
          ' `["name", "Lydia"], ["age", 21]`\r\n '
        ],
        description:
          " Cevap: B\r\n\r\n`for-in` döngüsüyle, nesne keyleri boyunca ileryebiliriz, bu durumda `name` ve `age`. Temelde, nesne keyleri stringdir (eğer Symbol değilse). Her döngüde, `item`'in değerini, döngü sırasındaki geçerli key olarak eşitleriz. Önce, `item` `name`'e eşittir, ve loglanır. Sonra loglanan `item`, `age`'e eşittir.\r\n ",
        trueAnswer: "B"
      },
      {
        header: " 48. Çıktısı Nedir?\r\n\r\n",
        sourceCode: 'console.log(3 + 4 + "5");\r\n',
        selections: [
          ' `"345"`\r\n',
          ' `"75"`\r\n',
          " `12`\r\n",
          ' `"12"`\r\n '
        ],
        description:
          ' Cevap: B\r\n\r\nOperatör birleşme özelliği, "operator associativity, derleyicinin ifadeleri çalıştırdığı sıradır, ya soldan sağa ya da sağdan soladır. Bu sadece, eğer tüm operatörler _aynı_ önceliğe sahipse gerçekleşir. Sadece tek tip operatörümüz var: `+`. Toplama için birleşme özelliği soldan sağadır.\r\n\r\n`3 + 4` önce çalıştırılır. `7` sayısı olarak sonuçlanır.\r\n\r\nTip baskısından, "coercion", dolayı `7 + \'5\'`, `"75"` olarak sonuçlanır. JavaScript `7` sayısını string\'e çevirir, 15. soruya bakabilirsiniz. İki string\'i `+` operatörünü kullanarak birleştirebiliriz. `"7" + "5"` `"75"` olarak sonuçlanır.\r\n ',
        trueAnswer: "B"
      },
      {
        header: " 49. `num` ın değeri nedir?\r\n\r\n",
        sourceCode: 'const num = parseInt("7*6", 10);\r\n',
        selections: [" `42`\r\n", ' `"42"`\r\n', " `7`\r\n", " `NaN`\r\n "],
        description:
          " Cevap: C\r\n\r\nSadece string içindeki ilk sayılar döndürülür. _Sayı tabanına_ (hangi tipte sayıya çözümlemek istediğimizi belirtmek için geçilen ikinci argüman: 10'lu, onaltılı, sekizli, ikili tabanda vb...) bağlı olarak, `parseInt` string içindeki hangi karakterlerin geçerli olduğunu kontrol eder. Sayı tabanında, geçerli olmayan bir karaktere denk geldiğinde, çözümleyi durdurur ve sonraki gelen karakterleri görmezden gelir.\r\n\r\n`*` geçerli bir sayı değil. `parseInt` sadece `\"7\"`'yi ondalık sistemde `7`'ye çözümler. `num`, `7` değerini saklıyor artık.\r\n ",
        trueAnswer: "C"
      },
      {
        header: " 50. Çıktısı Nedir`?\r\n\r\n",
        sourceCode:
          '[1, 2, 3].map(num => {\r\n  if (typeof num === "number") return;\r\n  return num * 2;\r\n});\r\n',
        selections: [
          " `[]`\r\n",
          " `[null, null, null]`\r\n",
          " `[undefined, undefined, undefined]`\r\n",
          " `[ 3 x empty ]`\r\n "
        ],
        description:
          ' Cevap: C\r\n\r\nDizi üzerinde eşleme yaparken, `num`\'ın değeri, o anda döngüye giren elemanın değerine eşittir. Bu durumda, elemanlar sayı, yani `typeof num === "number"` koşul ifadesi `true` durdurur. map fonksiyonu yeni bir dizi oluşturur ve fonksiyondan dönen değerleri yerleştirir. \r\n\r\nAncak, biz değer döndürmüyoruz. Bir fonksiyondan değer döndürmediğimiz zaman, fonksiyon `undefined` döndürür. Dizideki her eleman için, fonksiyon bloğu çağrılır, yani her bir eleman için `undefined` döndürürüz.\r\n ',
        trueAnswer: "C"
      },
      {
        header: " 51. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'function getInfo(member, year) {\r\n  member.name = "Lydia";\r\n  year = "1998";\r\n}\r\n\r\nconst person = { name: "Sarah" };\r\nconst birthYear = "1997";\r\n\r\ngetInfo(person, birthYear);\r\n\r\nconsole.log(person, birthYear);\r\n',
        selections: [
          ' `{ name: "Lydia" }, "1997"`\r\n',
          ' `{ name: "Sarah" }, "1998"`\r\n',
          ' `{ name: "Lydia" }, "1998"`\r\n',
          ' `{ name: "Sarah" }, "1997"`\r\n '
        ],
        description:
          ' Cevap: A\r\n\r\nArgümanlar _değer_ olarak geçilir, değerleri nesne olmadıkları müddetçe, eğer öyleyse _referans_ olarak geçilir. `birthYear` nesne değil string olduğundan değer olarak geçilir. Argümanları değer olarak geçtiğimizde, o değerin bir _kopyası_ oluşturulur (46. soruya göz atın).\r\n\r\n`birthYear` değişkeni `"1997"` değeri için referansa sahip. `year` argümanı da ayrıca `"1997"` değeri için referansa sahip, ama `birthYear`\'ın sahip olduğu referansın değeri ile aynı değer değil. `year`\'ın değerini `"1998"`\'e eşit olarak ayarlayıp güncellediğimizde, sadece `year`\'ın değerini güncelleriz. `birthYear` hala `"1997"`\'e eşittir.\r\n\r\n`person`\'ın değeri bir nesnedir. `member` argümanı _aynı_ nesne için (kopyalanmış) referansa sahip. `member` nesnesinin özelliğini değiştirdiğimizde, `person`\'ın değeri de ayrıca değişmiş olacaktır, ikisi de aynı nesne için referansa sahip olduklarından. `person`\'ın `name` özelliği şimdi `"Lydia"` değerine eşittir.\r\n ',
        trueAnswer: "A"
      },
      {
        header: " 52. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'function greeting() {\r\n  throw "Hello world!";\r\n}\r\n\r\nfunction sayHi() {\r\n  try {\r\n    const data = greeting();\r\n    console.log("It worked!", data);\r\n  } catch (e) {\r\n    console.log("Oh no an error!", e);\r\n  }\r\n}\r\n\r\nsayHi();\r\n',
        selections: [
          ' `"It worked! Hello world!"`\r\n',
          ' `"Oh no an error: undefined`\r\n',
          " `SyntaxError: can only throw Error objects`\r\n",
          ' `"Oh no an error: Hello world!`\r\n '
        ],
        description:
          " Cevap: D\r\n\r\n`throw` ifadesi ile, özelleştirilmiş hatalar oluşturabiliriz. Bu ifade ile, hatalar fırlatabilirsiniz. Hata durumu, \"exception\", bir <b>string</b>, <b>sayı</b>, <b>doğru/yanlış</b> ya da <b>nesne</b> olabilir. Bu durumda, bizim hata durumumuz string olan `'Hello world'`.\r\n\r\n`catch` ifadesi ile, eğer `try` bloğunda bir hata durumu fırlatılmışsa ne yapacağımızı belirtebiliriz. Bir hata durumu fırlatıldı: `'Hello world'` string'i. `e` artık bu string'e eşit, ki onu logluyoruz. `'Oh an error: Hello world'` olarak sonuç veriyor.\r\n ",
        trueAnswer: "D"
      },
      {
        header: " 53. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'function Car() {\r\n  this.make = "Lamborghini";\r\n  return { make: "Maserati" };\r\n}\r\n\r\nconst myCar = new Car();\r\nconsole.log(myCar.make);\r\n',
        selections: [
          ' `"Lamborghini"`\r\n',
          ' `"Maserati"`\r\n',
          " `ReferenceError`\r\n",
          " `TypeError`\r\n "
        ],
        description:
          ' Cevap: B\r\n\r\nBir özellik döndürdüğünüz zaman, özelliğin değeri _döndürülen_ değere eşittir, yapıcı fonksiyon içinde atanmış değere değil. `"Maserati"` string\'ini döndürüyoruz, yani `myCar.make` `"Maserati"`\'ye eşittir.\r\n ',
        trueAnswer: "B"
      },
      {
        header: " 54. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          "(() => {\r\n  let x = (y = 10);\r\n})();\r\n\r\nconsole.log(typeof x);\r\nconsole.log(typeof y);\r\n",
        selections: [
          ' `"undefined", "number"`\r\n',
          ' `"number", "number"`\r\n',
          ' `"object", "number"`\r\n',
          ' `"number", "undefined"`\r\n '
        ],
        description:
          " Cevap: A\r\n\r\n`let x = y = 10;` aslında şunun için kısa yazımdır:\r\n\r\n```y = 10;\r\nlet x = y;\r\n```\r\n\r\n`y`'yi `10`'a eşit olarak ayarladığımızda, aslında global nesneye `y` özelliğini ekliyoruz (tarayıcıda `window`, Node içinde `global`). Tarayıcıda, `window.y` artık `10`'a eşit.\r\n\r\nSonra, `x` değişkenini `y`'nin değeri ile birlkte tanımlıyoruz ki o da `10`. `let` anahtar kelimesi ile tanımlanan değişkenler _block scope_'dur, onlar sadece tanımlandıkları blok içinde sınırlıdır; bu durumda anında çalıştırılan fonksiyon, \"immediately-invoked function (IIFE)\", ile sınırlı. `typeof` operatörünü kullandığımız zaman, `x` operandı tanımlı değil: `x`'e tanımlandığı bloğun dışından erişmeye çalışıyoruz. Bu, `x` tanımlanmadı demektir. Bir değer ataması yapılmamış ya da tanımlanmamış değerlerin tipi `\"undefined\"`'dır. `console.log(typeof x)` `\"undefined\"` döndürür.\r\n\r\nAncak, `y`'yi `10`'a eşitlerken global değişken `y`'yi oluşturduk. Bu değer kodunuzun herhangi bir yerinden erişilebilinir. `y` tanımlı ve `\"number\"` tipinde değeri saklıyor. `console.log(typeof y)` `\"number\"` döndürür.\r\n ",
        trueAnswer: "A"
      },
      {
        header: " <a name=20190629></a>55. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'class Dog {\r\n  constructor(name) {\r\n    this.name = name;\r\n  }\r\n}\r\n\r\nDog.prototype.bark = function() {\r\n  console.log(`Woof I am ${this.name}`);\r\n};\r\n\r\nconst pet = new Dog("Mara");\r\n\r\npet.bark();\r\n\r\ndelete Dog.prototype.bark;\r\n\r\npet.bark();\r\n',
        selections: [
          ' `"Woof I am Mara"`, `TypeError`\r\n',
          ' `"Woof I am Mara"`,`"Woof I am Mara"`\r\n',
          ' `"Woof I am Mara"`, `undefined`\r\n',
          " `TypeError`, `TypeError`\r\n "
        ],
        description:
          " Cevap: A\r\n\r\n`delete` anahtar kelimesini kullanarak özellikleri hem nesnelerden hem de prototip üzerinden silebiliriz. Prototip üzerindeki bir özellik silindiğinde, artık prototip zincirinde kullanıma müsait değildir. Bu durumda, `bark` fonksiyonu, `delete Dog.prototype.bark` ardından, prototip üzerinden kullanılabilir değildir fakat yine de erişmeye çalışıyoruz.\r\n\r\nFonksiyon olmayan bir şeyi çalıştırmayı denediğimiz zaman, `TypeError` fırlatılır. Bu durumda, `pet.bark` `undefined` olduğundan, `TypeError: pet.bark is not a function` fırlatıldı.\r\n ",
        trueAnswer: "A"
      },
      {
        header: " 56. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          "const set = new Set([1, 1, 2, 3, 4]);\r\n\r\nconsole.log(set);\r\n",
        selections: [
          " `[1, 1, 2, 3, 4]`\r\n",
          " `[1, 2, 3, 4]`\r\n",
          " `{1, 1, 2, 3, 4}`\r\n",
          " `{1, 2, 3, 4}`\r\n\r\n\r\n"
        ],
        description:
          " Cevap: D\r\n\r\n`Set` nesnesi _benzersiz_ değerlerin koleksiyonudur: bir değer, set içinde sadece bir kez bulunabilir.\r\n\r\nYinelenebilir `[1, 1, 2, 3, 4]`'i çift `1` değeriyle birlikte geçtik. Set içinde aynı değere iki kere sahip olamayacağımızdan, bir tanesi kaldırıldı. Sonuç, `{1, 2, 3, 4}`.\r\n ",
        trueAnswer: "D"
      },
      {
        header: " 57. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          "// counter.js\r\nlet counter = 10;\r\nexport default counter;\r\n",
        selections: [],
        description:
          " Cevap: C\r\n\r\nİçe aktarılan, \"imported\", modul _salt okur_'dur: içe aktarılan modulü değiştiremezsiniz. Sadece, dışa aktarım yapan modul değerini değiştirebilir.\r\n\r\n`myCounter`'ın değerini arttırmaya çalıştığımız zaman, hata fırlatır: `myCounter` salt okurdur ve değiştirilemez.\r\n ",
        trueAnswer: "C"
      },
      {
        header: " 58. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'const name = "Lydia";\r\nage = 21;\r\n\r\nconsole.log(delete name);\r\nconsole.log(delete age);\r\n',
        selections: [
          " `false`, `true`\r\n",
          ' `"Lydia"`, `21`\r\n',
          " `true`, `true`\r\n",
          " `undefined`, `undefined`\r\n "
        ],
        description:
          " Cevap: A\r\n\r\n`delete` operatörü doğru/yanlış, \"boolean\", değer döndürür: silme başarılıysa `true`, değilse `false` döndürecektir. Ancak, `var`, `const` ya da `let` anahtar kelimeleri ile tanımlanan değişkenler, `delete` kullanılarak silinemez.\r\n\r\n`name` değişkeni `const` anahtar kelimesi ile tanımlandı, yani silinme işlemi başarılı değil: `false` döndü. `age`'i `21`'e eşitlediğimizde, global nesneye `age` diye özellik ekledik aslında. Bu yöntemle, sorunsuz şekilde nesnelerden özellikleri silebilirsiniz, böylelikle `delete age` `true` döndürür.\r\n ",
        trueAnswer: "A"
      },
      {
        header: " 59. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          "const numbers = [1, 2, 3, 4, 5];\r\nconst [y] = numbers;\r\n\r\nconsole.log(y);\r\n",
        selections: [
          " `[[1, 2, 3, 4, 5]]`\r\n",
          " `[1, 2, 3, 4, 5]`\r\n",
          " `1`\r\n",
          " `[1]`\r\n "
        ],
        description:
          ' Cevap: C\r\n\r\nListelerden değerleri ya da nesnelerden özellikleri, yıkım yoluyla, "destructuring", çıkarabiliriz. Örneğin:\r\n\r\n```[a, b] = [1, 2];\r\n```\r\n\r\n<img src="https://i.imgur.com/ADFpVop.png" width="200">\r\n\r\n`a`\'nın değeri `1` ve `b`\'nin değeri `2`\'dir. Bu soruda aslında yaptığımız şuydu:\r\n\r\n```[y] = [1, 2, 3, 4, 5];\r\n```\r\n\r\n<img src="https://i.imgur.com/NzGkMNk.png" width="200">\r\n\r\nBu demektir ki, `y`\'nin değeri dizideki ilk değere eşit, o da `1` sayısıdır. `y`\'yi logladığımız zaman, `1` döndürülür.\r\n ',
        trueAnswer: "C"
      },
      {
        header: " 60. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'const user = { name: "Lydia", age: 21 };\r\nconst admin = { admin: true, ...user };\r\n\r\nconsole.log(admin);\r\n',
        selections: [
          ' `{ admin: true, user: { name: "Lydia", age: 21 } }`\r\n',
          ' `{ admin: true, name: "Lydia", age: 21 }`\r\n',
          ' `{ admin: true, user: ["Lydia", 21] }`\r\n',
          " `{ admin: true }`\r\n "
        ],
        description:
          ' Cevap: B\r\n\r\nNesneleri `...` yayma operatörü kullanarak birleştirmek, kombine etmek, mümkündür. Bir nesnenin key/değer kopyasını oluşturmanıza olanak sunar, ve key/değerleri diğer nesneye ekler. Bu durumda, `user` nesnesinin kopyasını oluşturuyoruz, ve onları `admin` nesnesine ekliyoruz. `admin` nesnesi şimdi kopyalanan key/değerleri de içeriyor, ki bu da `{ admin: true, name: "Lydia", age: 21 }` olarak sonuç verir.\r\n ',
        trueAnswer: "B"
      },
      {
        header: " 61. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'const person = { name: "Lydia" };\r\n\r\nObject.defineProperty(person, "age", { value: 21 });\r\n\r\nconsole.log(person);\r\nconsole.log(Object.keys(person));\r\n',
        selections: [
          ' `{ name: "Lydia", age: 21 }`, `["name", "age"]`\r\n',
          ' `{ name: "Lydia", age: 21 }`, `["name"]`\r\n',
          ' `{ name: "Lydia"}`, `["name", "age"]`\r\n',
          ' `{ name: "Lydia"}`, `["age"]`\r\n '
        ],
        description:
          ' Cevap: B\r\n\r\n`defineProperty` methodu ile, nesnelere yeni özellikler ekleyebiliriz, ya da var olanları değiştirebiliriz. `defineProperty` methodu kullanarak bir nesneye özellik eklediğimiz zaman, varsayılan olarak _sıralanabilir değildir_, "_not enumerable_". `Object.keys` methodu, bir nesneden tüm _sıralanabilir_ özelliklerin adını döndürür, bu durumda sadece `"name"`.\r\n\r\n`defineProperty` methodu kullanılarak eklenen özellikler, varsayılan olarak değişmezdir. Bu davranışı `writable`, `configurable` ve `enumerable` kullaranak ezebilirsiniz. Bu yöntemle, `defineProperty` methodu nesnelere eklediğiniz özellikler üzerinde size çok daha fazla kontrol verir.\r\n ',
        trueAnswer: "B"
      },
      {
        header: " 62. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'const settings = {\r\n  username: "lydiahallie",\r\n  level: 19,\r\n  health: 90\r\n};\r\n\r\nconst data = JSON.stringify(settings, ["level", "health"]);\r\nconsole.log(data);\r\n',
        selections: [
          ' `"{"level":19, "health":90}"`\r\n',
          ' `"{"username": "lydiahallie"}"`\r\n',
          ' `"["level", "health"]"`\r\n',
          ' `"{"username": "lydiahallie", "level":19, "health":90}"`\r\n '
        ],
        description:
          ' Cevap: A\r\n\r\n`JSON.stringify`\'ın ikinci argumanı _değiştiricidir_, _"replacer"_. Değiştirici bir fonksiyon ya da bir dizi olabilir, ve değerlerin hangilerinin ve nasıl string\'e dönüşeceğini kontrol etmenize izin verir.\r\n\r\nEğer değiştirici _dizi_ ise, sadece dizi içinde ismi geçem özellikler JSON string\'e dahil edilmiş olur. Bu durumda, sadece  `"level"` ve `"health"` isimli özellikler dahil edildi, `"username"` dışarıda bırakıldı. `data`, `"{"level":19, "health":90}"` eşittir.\r\n\r\nEğer değiştirici _fonksiyon_ ise, stringe dönüştürülen her özellik için bu fonksiyon çağrılır. Bu fonksiyondan dönen değer, JSON stringe eklenmiş olacak özelliğin değeri olacaktır. Eğer değer `undefined`\'sa, bu özellik JSON stringe dahil edilmez.\r\n ',
        trueAnswer: "A"
      },
      {
        header: " 63. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          "let num = 10;\r\n\r\nconst increaseNumber = () => num++;\r\nconst increasePassedNumber = number => number++;\r\n\r\nconst num1 = increaseNumber();\r\nconst num2 = increasePassedNumber(num1);\r\n\r\nconsole.log(num1);\r\nconsole.log(num2);\r\n",
        selections: [
          " `10`, `10`\r\n",
          " `10`, `11`\r\n",
          " `11`, `11`\r\n",
          " `11`, `12`\r\n "
        ],
        description:
          " Cevap: A\r\n\r\n`++` unary operatörü _önce_ operandın değerini döndürür, _sonra_ operandın değerini arttırır. `increaseNumber` fonksiyonu önce değeri `10` olan `num`'ın değerini döndürdüğünden, `num1`'ın değeri `10`'dur, ve `num`'ın değeri ancak bundan sonra artar.\r\n\r\n`increasePassedNumber`'a `num1`'i geçtiğimizden, `num2`'nin değeri `10`'dur. `number` `10`'a eşittir (`num1`'ın değeri. Bir kez daha, `++` operatörü _önce_ operandın değerini döndürür, _sonra_ operandın değerini arttırır. `number`'ın değeri `10`, yani `num2` `10`'a eşittir.)\r\n ",
        trueAnswer: "A"
      },
      {
        header: " <a name=20190707></a>64. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          "const value = { number: 10 };\r\n\r\nconst multiply = (x = { ...value }) => {\r\n  console.log((x.number *= 2));\r\n};\r\n\r\nmultiply();\r\nmultiply();\r\nmultiply(value);\r\nmultiply(value);\r\n",
        selections: [
          " `20`, `40`, `80`, `160`\r\n",
          " `20`, `40`, `20`, `40`\r\n",
          " `20`, `20`, `20`, `40`\r\n",
          " `NaN`, `NaN`, `20`, `40`\r\n "
        ],
        description:
          " Cevap: C\r\n\r\nES6'da, parametrelere varsayılan değer atayabiliriz. Eğer fonksiyona değer geçilmezse ya da parametrenin değeri `undefined` ise, parametrenin değeri varsayılan değer olacaktır. Bu örnekte, `value` nesnesinin özelliklerini yeni nesneye yaydık, böylece `x` varsayılan değer olarak `{ number: 10}`'a sahip.\r\n\r\nVarsayılan argüman _çağrı sırasında_, \"_call time_\", çalıştırılır. Fonksiyonu her çağırdığımızda, _yeni_ bir nesne oluşturulur. `multiply` fonksiyonunu ilk iki seferde değer geçmeden çağırdık: `x` varsayılan değeri olan `{ number: 10 }`'a sahip. Sonra, bu sayının çarpılmış değerini logluyoruz, o da `20`.\r\n\r\nÜçüncü kez, `multiply`'ı çağırdığımız zaman, argüman geçiyoruz: `value` isimli nesne. `*=` operatörü aslında `x.number = x.number * 2` için kısa yazımdır: `x.number`'ın değerini değiştiriyoruz ve çarpılmış değer olan `20`'yi logluyoruz.\r\n\r\nDördüncü kez, `value` nesnesini tekrar geçiyoruz. `x.number` önceden `20`'ye değiştirilmişti, yani `x.number *= 2` `40` loglar.\r\n ",
        trueAnswer: "C"
      },
      {
        header: " 65. Çıktısı Nedir?\r\n\r\n",
        sourceCode: "[1, 2, 3, 4].reduce((x, y) => console.log(x, y));\r\n",
        selections: [
          " `1` `2` and `3` `3` and `6` `4`\r\n",
          " `1` `2` and `2` `3` and `3` `4`\r\n",
          " `1` `undefined` and `2` `undefined` and `3` `undefined` and `4` `undefined`\r\n",
          " `1` `2` and `undefined` `3` and `undefined` `4`\r\n "
        ],
        description:
          " Cevap: D\r\n\r\n`reduce` methodunun aldığı ilk argüman _biriktiricidir_, \"_accumulator_\", bu örnekte `x`. İkinci argüman _o anki değerdir_, `y`. reduce methodu ile, dizideki her eleman üzerinde callback fonksiyonunu çalıştırırız, bu da en sonunda tek bir değer sonuçlanabilir.\r\n\r\nBu örnekte, geriye bir değer döndürmüyoruz, sadece biriktiricinin değerini ve o anki değeri logluyoruz.\r\n\r\nBiriktiricinin değeri, bir önceki callback fonksiyonunun dönen değerine eşittir. Eğer, opsiyonel olan `initialValue` agümanını `reduce` methoduna geçmezseniz, biriktiricinin değeri, ilk çağrılışta gelen elemana eşit olur.\r\n\r\nİlk çağrılışta, biriktirici (`x`) `1`'dir, ve `y`'nin o anki değeri `2`'dir. callback fonksiyonundan bir şey döndürmüyoruz, biriktiriciyi ve o anki değeri logluyoruz: `1`  ve `2` loglanır.\r\n\r\nEğer bir fonksiyondan değer döndürmezseniz, fonksiyon `undefined` döndürür. Sonraki çağrılışta, biriktirici `undefined`, ve o anki geçerli değer `3`'tür. `undefined` ve `3` loglanır.\r\n\r\nDördündü çağrıda, tekrar callback fonksiyonundan değer döndürmüyoruz. Biriktirici tekrar `undefined`, ve o anki geçerli değer `4`. `undefined` ve `4` loglanır.\r\n\r\n\r\n  \r\n",
        trueAnswer: "D"
      },
      {
        header:
          " 66. Hangi yapıcı method (constructor) ile `Dog` sınıfından başarılı şekilde kalıtım yapabiliriz?\r\n\r\n",
        sourceCode:
          "class Dog {\r\n  constructor(name) {\r\n    this.name = name;\r\n  }\r\n};\r\n\r\nclass Labrador extends Dog {\r\n  // 1 \r\n  constructor(name, size) {\r\n    this.size = size;\r\n  }\r\n  // 2\r\n  constructor(name, size) {\r\n    super(name);\r\n    this.size = size;\r\n  }\r\n  // 3\r\n  constructor(size) {\r\n    super(name);\r\n    this.size = size;\r\n  }\r\n  // 4 \r\n  constructor(name, size) {\r\n    this.name = name;\r\n    this.size = size;\r\n  }\r\n\r\n};\r\n",
        selections: [" 1\r\n", " 2\r\n", " 3\r\n", " 4\r\n "],
        description:
          " Cevap: B\r\n\r\nTüretilmiş bir sınıfta, `super`'i çağırmadan önce `this` anahtar kelimesine erişemezsiniz. Eğer erişmeyi denerseniz, ReferenceError fırlatır: 1 ve 4 referans hatası fırlatır.\r\n\r\n`super` anahtar kelimesiyle, parent sınıfın yapıcı methodunu verilen argümanlarla beraber çağırırız. Parent sınıfın yapıcısı `name` argümanını alıyor, bu yüzden `super`'e `name`'i vermemiz gerek.\r\n\r\n`Dog` sınıfı iki argüman alıyor, `name` `Animal` sınıfından türediğinden, ve `size` `Dog` sınıfı üzerinde ekstra özellik olarak. İkisinin de `Dog` yapıcı methoduna  geçilmesi gerek, bu da 2. yapıcı methodda doğru şekilde kullanılarak yapılmıştır.\r\n ",
        trueAnswer: "B"
      },
      {
        header: " 67. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          "// index.js\r\nconsole.log('running index.js');\r\nimport { sum } from './sum.js';\r\nconsole.log(sum(1, 2));\r\n\r\n// sum.js\r\nconsole.log('running sum.js');\r\nexport const sum = (a, b) => a + b;\r\n",
        selections: [
          " `running index.js`, `running sum.js`, `3`\r\n",
          " `running sum.js`, `running index.js`, `3`\r\n",
          " `running sum.js`, `3`, `running index.js`\r\n",
          " `running index.js`, `undefined`, `running sum.js`\r\n "
        ],
        description:
          ' Cevap: B\r\n\r\n`import` anahtar kelimesiyle, tüm içe aktarılan modüller _ilk çözümlenir_, "_pre-parsed_". Bu şu demektir, içe aktarılan modüller _önce_ çalışır, içe aktarım yapan dosyadaki kodlar _sonra_ çalıştırılır.\r\n\r\nCommonJS\'deki `require()` ve `import` arasındaki fark budur! `require()` ile, bağımlılıkları kod çalışmaya başladığında yükleyebilirsiniz. `import` yerine `require` kullanmış olsaydık, `running index.js`, `running sum.js`, `3` konsolda loglanmış olacaktı.\r\n ',
        trueAnswer: "B"
      },
      {
        header: " 68. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          "console.log(Number(2) === Number(2))\r\nconsole.log(Boolean(false) === Boolean(false))\r\nconsole.log(Symbol('foo') === Symbol('foo'))\r\n",
        selections: [
          " `true`, `true`, `false`\r\n",
          " `false`, `true`, `false`\r\n",
          " `true`, `false`, `true`\r\n",
          " `true`, `true`, `true`\r\n "
        ],
        description:
          " Cevap: A\r\n\r\nHer Symbol tamamen benzersizdir. Symbol'e geçilen argümanın amacı, Symbol'e bir açıklama vermektir. Symbol'ün değeri geçilen argümana bağlı değildir. Eşitliği test ederken, tamamen yeni iki symbol oluşturuyoruz: ilki `Symbol('foo')` ve ikincisi `Symbol('foo')`. Bu iki değer benzersiz ve birbirlerine eşit değil, `Symbol('foo') === Symbol('foo')` `false` döndürür.\r\n ",
        trueAnswer: "A"
      },
      {
        header: " 69. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'const name = "Lydia Hallie"\r\nconsole.log(name.padStart(13))\r\nconsole.log(name.padStart(2))\r\n',
        selections: [
          ' `"Lydia Hallie"`, `"Lydia Hallie"`\r\n',
          ' `"           Lydia Hallie"`, `"  Lydia Hallie"` (`"[13x whitespace]Lydia Hallie"`, `"[2x whitespace]Lydia Hallie"`)\r\n',
          ' `" Lydia Hallie"`, `"Lydia Hallie"` (`"[1x whitespace]Lydia Hallie"`, `"Lydia Hallie"`)\r\n',
          ' `"Lydia Hallie"`, `"Lyd"`, \r\n '
        ],
        description:
          " Cevap: C\r\n\r\n`padStart` methoduyla, bir string'in başlangıcına dolgu yapabiliriz. Bu methoda geçilen değer, dolguyla beraber string'in _toplam_ uzunluğudur. `\"Lydia Hallie\"`'in uzunluğu `12`, `name.padStart(13)` string'in başlangıcına 1 boşluk eker, çünkü 12 + 1 = 13.\r\n\r\nEğer `padStart` methoduna geçilen argüman, string'in uzunluğundan daha azsa, dolgu yapılmaz.\r\n ",
        trueAnswer: "C"
      },
      {
        header: " <a name=20190714></a>70. Çıktısı Nedir?\r\n\r\n",
        sourceCode: 'console.log("🥑" + "💻");\r\n',
        selections: [
          ' `"🥑💻"`\r\n',
          " `257548`\r\n",
          " Emojilerin kod numaralarını gösteren string\r\n",
          " Hata\r\n "
        ],
        description:
          ' Cevap: A\r\n\r\n`+` operatörü ile stringleri birleştirebilirsiniz. Bu örnekte, `"🥑"` ile `"💻"` birleştiriyoruz, `"🥑💻"` olarak sonuçlanıyor.\r\n\r\n\r\n',
        trueAnswer: "A"
      },
      {
        header:
          " 71. console.log ifadesinden sonra yorum satırı olarak gelen değerleri nasıl loglayabiliriz?\r\n\r\n",
        sourceCode:
          'function* startGame() {\r\n  const answer = yield "Do you love JavaScript?";\r\n  if (answer !== "Yes") {\r\n    return "Oh wow... Guess we\'re gone here";\r\n  }\r\n  return "JavaScript loves you back ❤️";\r\n}\r\n\r\nconst game = startGame();\r\nconsole.log(/* 1 */); // Do you love JavaScript?\r\nconsole.log(/* 2 */); // JavaScript loves you back ❤️\r\n',
        selections: [
          ' `game.next("Yes").value` ve `game.next().value`\r\n',
          ' `game.next.value("Yes")` ve `game.next.value()`\r\n',
          ' `game.next().value` ve `game.next("Yes").value`\r\n',
          ' `game.next.value()` ve `game.next.value("Yes")`\r\n '
        ],
        description:
          ' Cevap: C\r\n\r\nGenerator fonksiyon `yield` anahtar kelimesini gördüğünde çalışmasını "durdurur". Öncelikle, fonksiyonun "Do you love JavaScript?" stringini vermesini sağlamamız gerek ki bu `game.next().value` çağrılarak yapılabilir.\r\n\r\nİlk `yield` anahtar kelimesi bulunana dek her satır çalıştırılır. Fonksiyonun içinde, ilk satırda `yield` anahtar kelimesi var: çalışma ilk yield ile durur. _Bu demektir ki `answer` değişkeni henüz tanımlanmadı!_\r\n\r\n`game.next("Yes").value` çağırdığımız zaman, önceki `yield` `next()` fonksiyonuna geçilen parametlerin değeri ile değiştirilir, bu durumda `"Yes"`. `answer` değişkeninin değeri artık `"Yes"`\'e eşit. if ifadesi `false` döndürür, ve `JavaScript loves you back ❤️` loglanır.\r\n ',
        trueAnswer: "C"
      },
      {
        header: " 72. Çıktısı Nedir?\r\n\r\n",
        sourceCode: "console.log(String.raw`Hello\\nworld`);\r\n",
        selections: [
          " `Hello world!`\r\n",
          " `Hello` <br />&nbsp; &nbsp; &nbsp;`world`\r\n",
          " `Hello\\nworld`\r\n",
          " `Hello\\n` <br /> &nbsp; &nbsp; &nbsp;`world`\r\n "
        ],
        description:
          ' Cevap: C\r\n\r\n`String.raw` kaçış karakterlerinin (`\\n`, `\\v`, `\\t` vb.) göz ardı edildiği bir string döndürür. Ters bölü işareti şöyle bir şey gibi sonuçlanabileceğinden sorun olabilir:\r\n\r\n`` const path = `C:\\Documents\\Projects\\table.html` ``\r\n\r\nŞöyle sonuçlanır:\r\n\r\n`"C:DocumentsProjects able.html"`\r\n\r\n`String.raw` ile, kaçış karakteri basitçe göz ardı edilir ve yazdırılır:\r\n\r\n`C:\\Documents\\Projects\\table.html`\r\n\r\nBu örnekte, string `Hello\\nworld`, dolayısıyla `Hello\\nworld` olarak loglanır.\r\n ',
        trueAnswer: "C"
      },
      {
        header: " 73. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'async function getData() {\r\n  return await Promise.resolve("I made it!");\r\n}\r\n\r\nconst data = getData();\r\nconsole.log(data);\r\n',
        selections: [
          ' `"I made it!"`\r\n',
          ' `Promise {<resolved>: "I made it!"}`\r\n',
          " `Promise {<pending>}`\r\n",
          " `undefined`\r\n "
        ],
        description:
          " Cevap: C\r\n\r\nAsenkron bir fonksiyon her zaman promise döndürür. `await` promise'ı çözmek için beklemeli: `getData()`'yı `data`'ya eşitlemek için çağırdığımız zaman bekleyen promise döndürülür.\r\n\r\nÇözülmüş değer olan `\"I made it\"`'e erişmek isteseydik, `data` üzerinde `.then()` methodunu kullanabilirdik:\r\n\r\n`data.then(res => console.log(res))`\r\n\r\nBu `\"I made it!\"` loglardı.\r\n ",
        trueAnswer: "C"
      },
      {
        header: " 74. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'function addToList(item, list) {\r\n  return list.push(item);\r\n}\r\n\r\nconst result = addToList("apple", ["banana"]);\r\nconsole.log(result);\r\n',
        selections: [
          " `['apple', 'banana']`\r\n",
          " `2`\r\n",
          " `true`\r\n",
          " `undefined`\r\n "
        ],
        description:
          " Cevap: B\r\n\r\n`push()` methodu yeni dizinin _uzunluğunu_ döndürür. Önceden, dizi bir eleman içeriyordu (`\"banana\"`) ve uzunluğu 1'di. Diziye `\"apple\"`'ı ekledikten sonra, dizi iki eleman içerir ve uzunluğu `2`'dir. `addToList` fonksiyonundan döndürülen budur.\r\n\r\n`push` methodu orijinal diziyi değiştirir. Eğer _dizinin uzunluğunu_ değil de _diziyi_ döndürmek isterseniz, `item`'i ekledikten sonra `list`'i döndürmelisiniz.\r\n ",
        trueAnswer: "B"
      },
      {
        header: " 75. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          "const box = { x: 10, y: 20 };\r\n\r\nObject.freeze(box);\r\n\r\nconst shape = box;\r\nshape.x = 100;\r\n",
        selections: [
          " `{ x: 100, y: 20 }`\r\n",
          " `{ x: 10, y: 20 }`\r\n",
          " `{ x: 100 }`\r\n",
          " `ReferenceError`\r\n "
        ],
        description:
          " Cevap: B\r\n\r\n`Object.freeze` bir nesneye özellik eklemeyi, silmeyi ya da değiştirmeyi olanaksız kılar (özelliğin değeri başka bir nesneye ait olmadıkça)\r\n\r\n`shape` değişkenini oluşturup, donmuş `box` nesnesine eşitlediğimiz zaman, `shape` de ayrıca donmuş nesneyi referans eder. `Object.isFrozen` kullanarak bir nesnenin dondurulmuş olup olmadığını kontrol edebilirsiniz. Bu örnekte, `shape` değişkeni donmuş bir nesneyi referans gösterdiğinden, `Object.isFrozen(shape)` `true` döndürür.\r\n\r\n`shape` donmuş olduğundan, ve `x`'in değeri bir nesne olmadığından, `x` özelliğini değiştiremeyiz. `x` hala `10`'a eşit, ve `{ x: 10, y: 20 }` loglanır.\r\n ",
        trueAnswer: "B"
      },
      {
        header: " 76. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'const { name: myName } = { name: "Lydia" };\r\n\r\nconsole.log(name);\r\n',
        selections: [
          ' `"Lydia"`\r\n',
          ' `"myName"`\r\n',
          " `undefined`\r\n",
          " `ReferenceError`\r\n "
        ],
        description:
          " Cevap: D\r\n\r\nEşitliğin sağ tarafındaki nesneden `name` özelliğini çıkarttığımız zaman, `myName` isimli değişkene, o özelliğin değeri olan `\"Lydia\"`'yı atıyoruz.\r\n\r\n`{ name: myName }` ile, JavaScript'e diyoruz ki; eşitliğin sağ tarafındaki `name` özelliğinin değeriyle birlikte `myName` diye bir değişken tanımlamak istiyoruz.\r\n\r\n`name`'i loglamayı denediğimizden dolayı, ki bu değişken tanımlanmamış, ReferenceError fırlatılır. \r\n ",
        trueAnswer: "D"
      },
      {
        header: " 77. Bu bir saf (pure) fonksiyon mu?\r\n\r\n",
        sourceCode: "function sum(a, b) {\r\n  return a + b;\r\n}\r\n",
        selections: [" Evet\r\n", " Hayır\r\n "],
        description:
          " Cevap: A\r\n\r\nSaf fonksiyon, aynı argümanlar geçildiği zaman, _her zaman_ aynı sonucu döndüren fonksiyondur.\r\n\r\n`sum` fonksiyonu her zaman aynı sonucu döndürür. Eğer `1` ve `2` geçersek, _her zaman_ `3` döndürecektir. Eğer `5` ve `10` geçersek, _her zaman_ `15` döndürür, bunun gibi devam eder... Saf fonksiyonun tanımlaması budur.\r\n ",
        trueAnswer: "A"
      },
      {
        header: " 78. Çıktısı nedir?\r\n\r\n",
        sourceCode:
          "const add = () => {\r\n  const cache = {};\r\n  return num => {\r\n    if (num in cache) {\r\n      return `From cache! ${cache[num]}`;\r\n    } else {\r\n      const result = num + 10;\r\n      cache[num] = result;\r\n      return `Calculated! ${result}`;\r\n    }\r\n  };\r\n};\r\n\r\nconst addFunction = add();\r\nconsole.log(addFunction(10));\r\nconsole.log(addFunction(10));\r\nconsole.log(addFunction(5 * 2));\r\n",
        selections: [
          " `Calculated! 20` `Calculated! 20` `Calculated! 20`\r\n",
          " `Calculated! 20` `From cache! 20` `Calculated! 20`\r\n",
          " `Calculated! 20` `From cache! 20` `From cache! 20`\r\n",
          " `Calculated! 20` `From cache! 20` `Error`\r\n "
        ],
        description:
          " Cevap: C\r\n\r\n`add` fonksiyonu _ezberlenmiş_, \"_memoized_\", bir fonksiyondur. Ezberleme ile, fonksiyonun sonuçlarını, fonksiyonun daha hızlı çalışması için cache'leyebiliriz. Bu örnekte, önceki dönen değerleri saklayan bir `cache` nesnesi oluşturuyoruz.\r\n\r\nEğer `addFunction` fonksiyonunu aynı argüman ile tekrar çağırırsak, önce cache içinde o değerin hali hazırda olup olmadığını kontrol eder. Eğer varsa, cache değeri döndürülecektir ki böylece çalışma zamanından tasarruf sağlanır. Eğer yoksa, cache'lenmemişse, değeri hesaplayıp ardından saklayacaktır.\r\n\r\n`addFunction` fonksiyonunu üç kez aynı değer ile çağırıyoruz: ilk çağırmada, `num` `10`'a eşit olduğu zaman fonksiyonun değeri henüz cache'lenmemiş. `num in cache` if ifadesi `false` döndürür\r\n ve else bloğu çalıştırılır: `Calculated! 20` loglanır, ve sonuç cache nesnesine eklenir. `cache` şimdi şuna benziyor; `{ 10: 20 }`\r\n\r\nİkincide, `cache` nesnesi `10` için döndürülen değeri içeriyor. `num in cache` if ifadesi `true` döndürür, ve `'From cache! 20'` loglanır. \r\n\r\nÜçüncü sefer de, fonksiyona `5 * 2` geçiyoruz ki bu da `10` olarak değerlendirilir. `cache` nesnesi `10` için döndürülen değeri içeriyor. `num in cache` if ifadesi `true` döndürür, ve `'From cache! 20'` loglanır.\r\n ",
        trueAnswer: "C"
      },
      {
        header: " <a name=20190726></a>79. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"]\r\n\r\nfor (let item in myLifeSummedUp) {\r\n  console.log(item)\r\n}\r\n\r\nfor (let item of myLifeSummedUp) {\r\n  console.log(item)\r\n}\r\n',
        selections: [
          ' `0` `1` `2` `3` ve `"☕"` ` "💻"` `"🍷"` `"🍫"`\r\n',
          ' `"☕"` ` "💻"` `"🍷"` `"🍫"` ve `"☕"` ` "💻"` `"🍷"` `"🍫"`\r\n',
          ' `"☕"` ` "💻"` `"🍷"` `"🍫"` ve `0` `1` `2` `3`\r\n',
          '  `0` `1` `2` `3` ve `{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`\r\n '
        ],
        description:
          ' Cevap: A\r\n\r\n_for-in_ döngüsü ile, **sayılabilir** (**enumerable**) özellikler üzerinde iterasyon yapabiliriz. Dizilerde, sayılabilir özellikler dizi elemanlarının "keyleridir", ki bu keyler aslında dizinin indeksidir. Diziyi şöyle görebilirsiniz:\r\n\r\n`{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`\r\n\r\nBurada keyler, sayılabilir özelliklerdir. `0` `1` `2` `3` loglanır.\r\n\r\n_for-of_ döngüsü ile, **yinelenebilirler** (**iterables**) üzerinde iterasyon yapabiliriz. Dizi, yinelebilirdir. Dizi üzerinde iterasyon yaptığımız zaman, `item` değişkeni o anda iterasyon yapılan elemana eşittir, `"☕"` ` "💻"` `"🍷"` `"🍫"` loglanır.\r\n ',
        trueAnswer: "A"
      },
      {
        header: " 80. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          "const list = [1 + 2, 1 * 2, 1 / 2]\r\nconsole.log(list)\r\n",
        selections: [
          ' `["1 + 2", "1 * 2", "1 / 2"]`\r\n',
          ' `["12", 2, 0.5]`\r\n',
          " `[3, 2, 0.5]`\r\n",
          "  `[1, 1, 1]`\r\n "
        ],
        description:
          " Cevap: C\r\n\r\nDizi elemanları herhangi bir değeri tutabilir. Sayılar, stringler, nesneler, başka diziler, null, doğru/yanlış değerler, undefined, ve date, fonksiyonlar, hesaplamalar gibi başka ifadeler.\r\n\r\nEleman dönen değere eşit olacaktır. `1 + 2` `3` döndürür, `1 * 2` `2` döndürür, ve `1 / 2` `0.5` döndürür.\r\n ",
        trueAnswer: "C"
      },
      {
        header: " 81. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          "function sayHi(name) {\r\n  return `Hi there, ${name}`\r\n}\r\n\r\nconsole.log(sayHi())\r\n",
        selections: [
          " `Hi there, `\r\n",
          " `Hi there, undefined`\r\n",
          " `Hi there, null`\r\n",
          "  `ReferenceError`\r\n "
        ],
        description:
          " Cevap: B\r\n\r\nVarsayılan olarak, fonksiyona bir değer geçilmedikçe, argümanlar `undefined` değerine sahiptir. Bu örnekte, `name` argümanı için bir değer geçmedik.\r\n\r\nES6'da, bu varsayılan `undefined` değerini varsayılan parametreler ile ezebiliriz. Örneğin;\r\n\r\n`function sayHi(name = \"Lydia\") { ... }`\r\n\r\nBu örnekte, eğer bir değer geçmeseydik ya da `undefined` geçseydik, `name` her zaman `Lydia`'a eşit olacaktı.\r\n ",
        trueAnswer: "B"
      },
      {
        header: " 82. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'var status = "😎"\r\n\r\nsetTimeout(() => {\r\n  const status = "😍"\r\n\r\n  const data = {\r\n    status: "🥑",\r\n    getStatus() {\r\n      return this.status\r\n    }\r\n  }\r\n\r\n  console.log(data.getStatus())\r\n  console.log(data.getStatus.call(this))\r\n}, 0)\r\n',
        selections: [
          ' `"🥑"` ve `"😍"`\r\n',
          ' `"🥑"` ve `"😎"`\r\n',
          ' `"😍"` ve `"😎"`\r\n',
          ' `"😎"` ve `"😎"`\r\n '
        ],
        description:
          ' Cevap: B\r\n\r\n`this` anahtar kelimesinin değeri, onu nerede kullandığınıza bağlıdır. **method** içinde, `getStatus` methodu gibi, `this` anahtar kelimesi _methodun bağlı olduğu nesneyi_ referans gösterir. Method `data` nesnesine ait, bu yüzden `this` `data` nesnesini referans gösterir. `this.status`\'ü logladığımız zaman, `data` nesnesindeki `status` özelliği loglanır, ki o da `"🥑"`.\r\n\r\n`call` methodu ile, `this` anahtar kelimesinin referans gösterdiği nesneyi değiştirebiliriz. **fonksiyon** içinde, `this` anahtar kelimesi _fonksiyonun ait olduğu nesneyi_ referans gösterir. _global nesne_ üzerinde `setTimeout` fonksiyonu tanımladık, yani `setTimeout` fonksiyonu içinde, `this` anahtar kelimesi _global nesneyi_ referans gösterir. Global nesnede, değeri `"😎"` olan _status_ olarak adlandırılmış bir değişken var. `this.status`\'ü logladığımız zaman, `"😎"` loglanır.\r\n ',
        trueAnswer: "B"
      },
      {
        header: " 83. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'const person = {\r\n  name: "Lydia",\r\n  age: 21\r\n}\r\n\r\nlet city = person.city\r\ncity = "Amsterdam"\r\n\r\nconsole.log(person)\r\n',
        selections: [
          ' `{ name: "Lydia", age: 21 }`\r\n',
          ' `{ name: "Lydia", age: 21, city: "Amsterdam" }`\r\n',
          ' `{ name: "Lydia", age: 21, city: undefined }`\r\n',
          ' `"Amsterdam"`\r\n '
        ],
        description:
          " Cevap: A\r\n \r\n`city` değişkenini, `person` nesnesindeki `city` özelliğinin değerine eşitledik. `person` nesnesinde `city` diye isimlendirilmiş bir özellik yok, bu yüzden `city` değişkeni `undefined` değerine sahip olur.\r\n\r\n`person` nesnesinin kendisini referans _göstermediğimize_ dikkat edin! Sadece `city` değişkenini, `person` nesnesindeki `city` özelliğinin o andaki değerine eşitledik.\r\n\r\nSonra, `city`'i `\"Amsterdam\"` string'ine eşitledik. Bu `person` nesnesini değiştirmez: bu nesneye referans yok.\r\n  \r\n`person` nesnesini logladığımız zaman, değişikliğe uğramamış nesne döndürülür.\r\n ",
        trueAnswer: "A"
      },
      {
        header: " 84. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'function checkAge(age) {\r\n  if (age < 18) {\r\n    const message = "Sorry, you\'re too young."\r\n  } else {\r\n    const message = "Yay! You\'re old enough!"\r\n  }\r\n\r\n  return message\r\n}\r\n\r\nconsole.log(checkAge(21))\r\n',
        selections: [
          ' `"Sorry, you\'re too young."`\r\n',
          ' `"Yay! You\'re old enough!"`\r\n',
          " `ReferenceError`\r\n",
          " `undefined`\r\n "
        ],
        description:
          " Cevap: C\r\n\r\n`const` ve `let` anahtar kelimesine sahip değişkenler _block-scoped_'dur. Blok süslü parantezler (`{}`) arasındaki herhangi bir şeydir. Bu örnekte, if/else ifadesindeki süslü parantezlerdir. Bir değişkene, tanımlandığı blok dışından erişemezsiniz, ReferenceError fırlatılır.\r\n ",
        trueAnswer: "C"
      },
      {
        header: " 85. Loglanacak değer ne tür olur?\r\n\r\n",
        sourceCode:
          "fetch('https://www.website.com/api/user/1')\r\n  .then(res => res.json())\r\n  .then(res => console.log(res))\r\n",
        selections: [
          " `fetch` methodunun sonucu.\r\n",
          " `fetch` methodunun ikinci kez çağrılmasından dönen sonuç.\r\n",
          " Bir önceki `.then()`'in sonucu.\r\n",
          " Her zaman `undefined` olacaktır. \r\n "
        ],
        description:
          " Cevap: C\r\n\r\nİkinci `.then` içindeki `res`'in değeri bir önceki `.then`'den dönen değere eşittir. Bunun gibi, değerlerin bir sonraki yöneticiye (handler) geçileceği şekilde, `.then`'leri birbirlerine bağlayabilirsiniz,\r\n ",
        trueAnswer: "C"
      },
      {
        header:
          " 86. `true`'yu argüman olarak geçemediğiniz durumda, hangi seçenek `hasName`'i `true`'ya eşitlemenin yoludur?\r\n\r\n",
        sourceCode: "function getName(name) {\r\n  const hasName = //\r\n}\r\n",
        selections: [
          " `!!name`\r\n",
          " `name`\r\n",
          " `new Boolean(name)`\r\n",
          " `name.length`\r\n "
        ],
        description:
          " Cevap: A\r\n\r\n`!!name` ile, `name`'in değerinin doğrusal ya da yanlış-ımsı olup olmadığını belirleriz. Eğer `name` doğrusalsa, ki test etmek istediğimiz bu, `!name` `false` döndürür. `!false` (bu da `!!name` ne demekse o demektir gerçekte) `true` döndürür.\r\n\r\n`hasName`'i `name`'e eşitleyerek, `hasName`'i `getName` fonksiyonuna hangi değeri geçtiyseniz ona eşitlersiniz, `true` değerine değil.\r\n\r\n`new Boolean(true)` nesne (object wrapper) döndürür, doğru/yanlış (boolean) değerinin kendisini değil.\r\n\r\n`name.length` geçilen argümanın uzunluğunu döndürür, `true` olup olmadığını değil.\r\n ",
        trueAnswer: "A"
      },
      {
        header: " <a name=20190805></a>87. Çıktısı Nedir?\r\n\r\n",
        sourceCode: 'console.log("I want pizza"[0])\r\n',
        selections: [
          ' `"""`\r\n',
          ' `"I"`\r\n',
          " `SyntaxError`\r\n",
          " `undefined`\r\n "
        ],
        description:
          ' Cevap: B\r\n\r\nBir string içindeki belli bir indeksteki karakteri almak için, köşeli parantez notasyonunu kullanabilirsiniz. String içindeki ilk karakterin indeksi 0\'dır, ve böylece devam eder. Bu örnekte indeksi 0 olan elemanı istiyoruz, `"I"` karakteri, loglanır.\r\n\r\nBu yöntemin IE7 ve altında desteklenmediğine dikkat edin. Bu durumda, `.charAt()` kullanabilirsiniz.\r\n ',
        trueAnswer: "B"
      },
      {
        header: " 88. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          "function sum(num1, num2 = num1) {\r\n  console.log(num1 + num2)\r\n}\r\n\r\nsum(10)\r\n",
        selections: [
          " `NaN`\r\n",
          " `20`\r\n",
          " `ReferenceError`\r\n",
          " `undefined`\r\n "
        ],
        description:
          " Cevap: B\r\n\r\nVarsayılan parametrenin değerini fonksiyonun başka parametresine eşitleyebilirsiniz, varsayılan parametreden _önce_ tanımladıkları müddetçe. `sum` fonksiyonuna `10` değerini geçtik. Eğer `sum` fonksiyonu sadece 1 argüman alırsa, `num2` değeri geçilmedi demektir, ve `num1`'ın değeri geçtiğimiz `10` değerine eşittir bu durumda. `num2`'nun varsayılan değeri `num1`'dır ki o da `10`'dur. `num1 + num2` `20` döndürür.\r\n \r\nEğer varsayılan parametrenin değerini, _sonrasında_ (sağında) tanımlanmış bir parametreye eşitlemeye çalışıyorsanız, parametrenin değeri henüz oluşturulmamıştır, hata fırlatacaktır.\r\n ",
        trueAnswer: "B"
      },
      {
        header: " 89. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          '// module.js \r\nexport default () => "Hello world"\r\nexport const name = "Lydia"\r\n\r\n// index.js \r\nimport * as data from "./module"\r\n\r\nconsole.log(data)\r\n',
        selections: [
          ' `{ default: function default(), name: "Lydia" }`\r\n',
          " `{ default: function default() }`\r\n",
          ' `{ default: "Hello world", name: "Lydia" }`\r\n',
          " `module.js`'e ait global nesne\r\n "
        ],
        description:
          " Cevap: A\r\n\r\n`import * as name` yazımı ile, `module.js` dosyası içindeki _tüm `export`'ları_ `index.js` dosyası içinde `data` olarak adlandırdığımız yeni bir nesneye aktarıyoruz. `module.js` dosyası içinde, iki `export` var: varsayılan export ve isimlendirilmiş export. Varsayılan export `\"Hello World\"` string'i döndüren bir fonksiyon ve isimlendirilmiş export `\"Lydia\"` değerine sahip `name` olarak isimlendirilmiş değişken.\r\n\r\n`data` nesnesi varsayılan exportlar için `default` özelliğine, isilendirilmiş exportlar için isimlendirilmiş export'un ismi olan ve değeri isimlendirilmiş export'un değeri olan özelliklere sahiptir.\r\n ",
        trueAnswer: "A"
      },
      {
        header: " 90. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'class Person {\r\n  constructor(name) {\r\n    this.name = name\r\n  }\r\n}\r\n\r\nconst member = new Person("John")\r\nconsole.log(typeof member)\r\n',
        selections: [
          ' `"class"`\r\n',
          ' `"function"`\r\n',
          ' `"object"`\r\n',
          ' `"string"`\r\n '
        ],
        description:
          ' Cevap: C\r\n\r\nSınıflar fonksiyon yapıcıları için "syntactical sugar"dır. `Person` sınıfına denk olan sınıf yapıcısı şöyle olabilirdi:\r\n\r\n```function Person() {\r\n  this.name = name\r\n}\r\n```\r\n\r\nBir fonksiyon yapıcısını `new` ile çağırmak `Person` "instance" oluşturur, `typeof` anahtar kelimesi instance için `"object"` döndürür. `typeof member` `"object"` döndürür.\r\n ',
        trueAnswer: "C"
      },
      {
        header: " 91. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          "let newList = [1, 2, 3].push(4)\r\n\r\nconsole.log(newList.push(5))\r\n",
        selections: [
          " `[1, 2, 3, 4, 5]`\r\n",
          " `[1, 2, 3, 5]`\r\n",
          " `[1, 2, 3, 4]`\r\n",
          " `Error`\r\n "
        ],
        description:
          " Cevap: D\r\n\r\n`.push` methodu dizinin _yeni uzunluğunu_ döndürür, dizinin kendisini değil! `newList`'i  `[1, 2, 3].push(4)`'a eşitleyerek, `newList`'i dizinin yeni uzunluğuna eşitledik: `4`.\r\n\r\nSonra, `.push` methodunu `newList` üzerinde kullanmayı denedik. `newList` sayısal değer `4` olduğundan, `.push` methodunu kullanamayız: TypeError fırlatılır.\r\n ",
        trueAnswer: "D"
      },
      {
        header: " 92. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'function giveLydiaPizza() {\r\n  return "Here is pizza!"\r\n}\r\n\r\nconst giveLydiaChocolate = () => "Here\'s chocolate... now go hit the gym already."\r\n\r\nconsole.log(giveLydiaPizza.prototype)\r\nconsole.log(giveLydiaChocolate.prototype)\r\n',
        selections: [
          " `{ constructor: ...}` `{ constructor: ...}` \r\n",
          " `{}` `{ constructor: ...}` \r\n",
          " `{ constructor: ...}` `{}`\r\n",
          " `{ constructor: ...}` `undefined`\r\n "
        ],
        description:
          " Cevap: D\r\n\r\nSıradan fonksiyonlar, `giveLydiaPizza` gibi, `constructor` özelliği olan `prototype` nesnesi özelliğine sahiptir. Ancak ok fonksiyonlar (arrow functions), `giveLydiaChocolate` gibi, bu `prototype` özelliğine sahip değildir. `giveLydiaChocolate.prototype` ile `prototype` özelliğine erişmeye çalışıldığında `undefined` döndürülür. \r\n ",
        trueAnswer: "D"
      },
      {
        header: " 93. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'const person = {\r\n  name: "Lydia",\r\n  age: 21\r\n}\r\n\r\nfor (const [x, y] of Object.entries(person)) {\r\n  console.log(x, y)\r\n}\r\n',
        selections: [
          " `name` `Lydia` ve `age` `21`\r\n",
          ' `["name", "Lydia"]` ve `["age", 21]` \r\n',
          ' `["name", "age"]` ve `undefined`\r\n',
          " `Error`\r\n "
        ],
        description:
          ' Cevap: A\r\n\r\n`Object.entries(person)` key ve nesneleri içeren dizilerden oluşan dizi döndürür:\r\n\r\n`[ [ \'name\', \'Lydia\' ], [ \'age\', 21 ] ]` \r\n\r\n`for-of` döngüsünü kullanarak, dizi içindeki her bir elemanı gezebiliriz, alt dizileri bu örnekte. for-of döngüsü içinde alt dizileri `const [x, y]` kullanarak parçalayabiliriz. `x` alt dizideki ilk elemana, `y` alt dizideki ikinci elemana eşittir.\r\n\r\nİlk alt dizi `[ "name", "Lydia" ]`, `x` `"name"`\'e ve `y` `"Lydia"`\'ya eşittir.\r\nİkinci alt dizi `[ "age", 21 ]`, `x` `"age"`\'e ve `y` `21`\'a eşittir.\r\n ',
        trueAnswer: "A"
      },
      {
        header: " 94. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'function getItems(fruitList, ...args, favoriteFruit) {\r\n  return [...fruitList, ...args, favoriteFruit]\r\n}\r\n\r\ngetItems(["banana", "apple"], "pear", "orange")\r\n',
        selections: [
          ' `["banana", "apple", "pear", "orange"]`\r\n',
          ' `[["banana", "apple"], "pear", "orange"]` \r\n',
          ' `["banana", "apple", ["pear"], "orange"]`\r\n',
          " `SyntaxError`\r\n "
        ],
        description:
          ' Cevap: D\r\n\r\n`...args` bir "rest" parametredir. "Rest" parametresinin değeri geriye kalan tüm argümanları içeren bir dizidir, ve **sadece son parametre olabilir.** Bu örnekte, rest parametresi ikindi parametreydi. Bu mümkün değildir ve syntax hatası fırlatılacaktır.\r\n\r\n```function getItems(fruitList, favoriteFruit, ...args) {\r\n  return [...fruitList, ...args, favoriteFruit]\r\n}\r\n\r\ngetItems(["banana", "apple"], "pear", "orange")\r\n```\r\n\r\nYukarıdaki örnek çalışır. `[ \'banana\', \'apple\', \'orange\', \'pear\' ]` dizisini döndürür.\r\n ',
        trueAnswer: "D"
      },
      {
        header: " <a name=20190817></a>95. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          "function nums(a, b) {\r\n  if\r\n  (a > b)\r\n  console.log('a is bigger')\r\n  else \r\n  console.log('b is bigger')\r\n  return \r\n  a + b\r\n}\r\n\r\nconsole.log(nums(4, 2))\r\nconsole.log(nums(1, 2))\r\n",
        selections: [
          " `a is bigger`, `6` ve `b is bigger`, `3`\r\n",
          " `a is bigger`, `undefined` ve `b is bigger`, `undefined`\r\n",
          " `undefined` ve `undefined`\r\n",
          " `SyntaxError`\r\n "
        ],
        description:
          " Cevap: B\r\n\r\nJavaScript'te, noktalı virgülü (`;`) özellikle yazmak _zorunda değiliz_, ancak JavaScript motoru ifadelerden sonra noktalı virgül eklemektedir. bu **Automatic Semicolon Insertion**, **Otomatik Noktalı Virgül Ekleme**, olarak adlandırılır. İfade, örneğin, değişkenler ya da `throw`, `return`, `break`, vb. gibi anahtar kelimeler olabilir. \r\n\r\nBurada, bir `return` ifadesi yazdık, ve _yeni bir satırda_ başka bir değer olarak `a + b`. Ancak, `a + b` yeni satırda olduğundan, JavaScript motoru onun aslında bizim döndürmek istediğimiz değer olduğunu bilmiyor. Onun yerine, `return`'den sonra otomatik olarak noktalı virgül ekliyor. Şöyle düşünebilirsiniz: \r\n  \r\n```  return;\r\n  a + b\r\n```\r\n\r\nFonksiyon `return` anahtar kelimesinden sonra çalışmayı durduracağından, `a + b` asla ulaşılamaz demektir. Eğer hiçbir değer döndürülmezse, fonksiyon `undefined` döndürür. Dikkat etmeniz gereken, `if/else` ifadelerinden sonra otomatik ekleme yapılmadığıdır!\r\n ",
        trueAnswer: "B"
      },
      {
        header: " 96. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'class Person {\r\n  constructor() {\r\n    this.name = "Lydia"\r\n  }\r\n}\r\n\r\nPerson = class AnotherPerson {\r\n  constructor() {\r\n    this.name = "Sarah"\r\n  }\r\n}\r\n\r\nconst member = new Person()\r\nconsole.log(member.name)\r\n',
        selections: [
          ' `"Lydia"`\r\n',
          ' `"Sarah"`\r\n',
          " `Error: cannot redeclare Person`\r\n",
          " `SyntaxError`\r\n "
        ],
        description:
          " Cevap: B\r\n\r\nSınıfları diğer sınıf/fonksiyon yapıcılara eşitleyebiliriz. Bu örnekte, `Person`'ı `AnotherPerson`'a eşitliyoruz. Bu yapıcıdaki `name` `Sarah`'dır, yani `Person` instance'ı olan `member` üzerindeki `name` özelliği `\"Sarah\"`'tır.\r\n ",
        trueAnswer: "B"
      },
      {
        header: " 97. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          "const info = {\r\n  [Symbol('a')]: 'b'\r\n}\r\n\r\nconsole.log(info)\r\nconsole.log(Object.keys(info))\r\n",
        selections: [
          " `{Symbol('a'): 'b'}` ve `[\"{Symbol('a')\"]`\r\n",
          " `{}` ve `[]`\r\n",
          ' `{ a: "b" }` ve `["a"]`\r\n',
          " `{Symbol('a'): 'b'}` ve `[]`\r\n "
        ],
        description:
          ' Cevap: D\r\n\r\nSymbol _sayılabilir_, "_enumerable_" değildir. Object.keys methodu nesne üzerindeki tüm _sayılabilir_ özellikleri döndürür. Symbol gizli kalır ve boş bir dizi döndürülür. Tüm nesne loglandığı zaman, bütün özellikler görülebilir, sayılabilir olmayanlar bile.\r\n\r\nBu symbol\'ün birçok  özelliğinden birisidir: tamamen benzersiz bir değer temsil etmenin yanında (ki nesneler üzerindeki kazara isim çakışmasını önler, örneğin aynı nesneye özellikler eklemek isteyen 2 kütüphaneyle çalışırken), ayrıca bu yolla nesne üzerindeki özellikleri "saklayabilirsiniz" (gerçi tamamen değil. `Object.getOwnPropertySymbols()` methodunu kullanarak symbol\'lere hala erişebilirsiniz).\r\n ',
        trueAnswer: "D"
      },
      {
        header: " 98. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'const getList = ([x, ...y]) => [x, y]\r\nconst getUser = user => { name: user.name, age: user.age }\r\n\r\nconst list = [1, 2, 3, 4]\r\nconst user = { name: "Lydia", age: 21 }\r\n\r\nconsole.log(getList(list))\r\nconsole.log(getUser(user))\r\n',
        selections: [
          " `[1, [2, 3, 4]]` ve `undefined`\r\n",
          ' `[1, [2, 3, 4]]` ve `{ name: "Lydia", age: 21 }`\r\n',
          ' `[1, 2, 3, 4]` ve `{ name: "Lydia", age: 21 }`\r\n',
          ' `Error` ve `{ name: "Lydia", age: 21 }`\r\n '
        ],
        description:
          " Cevap: A\r\n\r\n`getList` fonksiyonu argüman olarak bir dizi alır. `getList` fonksiyonunun parentezleri arasında, bu diziyi anında parçalıyoruz. Şu şekilde görebilirsiniz:\r\n\r\n `[x, ...y] = [1, 2, 3, 4]`\r\n\r\n `...y` rest parametresi ile, dizi içinde \"geriye kalan\" tüm argümanları topluyoruz. Geriye kalan argümanlar `2`, `3`, ve `4` bu durumda. `y`'nin değeri tüm rest parametleri içeren bir dizi. `x`'in değeri `1`'a eşit, yani `[x, y]` logladığımız zaman, `[1, [2, 3, 4]]` loglanır.\r\n\r\n `getUser` fonksiyonu bir nesne alıyor. Ok fonksiyonlar ile, eğer sadece bir değer döndürmek istiyorsak süslü parentezleri yazmak _zorunda değiliz._ Ancak, bir ok fonksiyondan bir _nesne_ döndürmek istiyorsanız, parentezler arasında yazmak zorundasınız, aksi halde değer döndürülmez! Aşağıdaki fonksiyon bir nesne döndürecektir:\r\n\r\n```const getUser = user => ({ name: user.name, age: user.age })```\r\n\r\nBu örnekte değer döndürülmediği için, fonksiyon `undefined` döndürür.\r\n ",
        trueAnswer: "A"
      },
      {
        header: " 99. Çıktısı Nedir?\r\n\r\n",
        sourceCode: 'const name = "Lydia"\r\n\r\nconsole.log(name())\r\n',
        selections: [
          " `SyntaxError`\r\n",
          " `ReferenceError`\r\n",
          " `TypeError`\r\n",
          " `undefined`\r\n "
        ],
        description:
          " Cevap: C\r\n\r\n `name` değişkeni string bir değer saklıyor, ki bu bir fonksiyon değil, bu yüzden çağrılamaz.\r\n\r\nTypeError'lar bir değer beklenilen tipte olmadığı zaman fırlatılır. `name`'i çağırmaya çalıştığımızdan, JavaScript `name`'in bir fonksiyon olmasını bekliyor. Ancak o bir string, bu yüzden TypeError fırlatılır: name is not a function! \r\n\r\nSyntaxError'lar JavaScript'in geçerli olmadığı bir şeyler yazdığız zaman fırlatılır, örneğin `return`'ü `retrun` olarak yazdığınız zaman.  \r\n\r\nReferenceError'lar erişmeye çalıştığınız değer için JavaScript referans bulamadığı zaman fırlatılır.\r\n ",
        trueAnswer: "C"
      },
      {
        header: " 100. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          "// 🎉✨ 100. soru! ✨🎉\r\n\r\nconst output = `${[] && 'Im'}possible!\r\nYou should${'' && `n't`} see a therapist after so much JavaScript lol`\r\n",
        selections: [
          " `possible! You should see a therapist after so much JavaScript lol`\r\n",
          " `Impossible! You should see a therapist after so much JavaScript lol`\r\n",
          " `possible! You shouldn't see a therapist after so much JavaScript lol`\r\n",
          " `Impossible! You shouldn't see a therapist after so much JavaScript lol`\r\n "
        ],
        description:
          ' Cevap: B\r\n\r\n`[]` doğrusal bir değerdir. `&&` operatörü ile, eğer soldaki değer doğrusal bir değerse sağdaki değer döndürülür. Bu örnekte, soldaki değer `[]` doğrusal bir değerdir, böylece `"Im"` döndürülür.\r\n\r\n`""` yanlış-ımsı bir değerdir. Eğer soldaki değer yanlış-ımsı ise, bir şey döndürülmez. `n\'t` döndürülmedi. \r\n ',
        trueAnswer: "B"
      },
      {
        header: " 101. Çıktısı Nedir?\r\n\r\n",
        sourceCode:
          'const one = (false || {} || null)\r\nconst two = (null || false || "")\r\nconst three = ([] || 0 || true)\r\n\r\nconsole.log(one, two, three)\r\n',
        selections: [
          " `false` `null` `[]`\r\n",
          ' `null` `""` `true`\r\n',
          ' `{}` `""` `[]`\r\n',
          " `null` `null` `true`\r\n "
        ],
        description:
          ' Cevap: C\r\n\r\n`||` operatörü ile, ile doğrusal operand\'ı döndürebiliriz. Eğer tüm değerler yanlış-ımsı ise, son operand döndürülür.\r\n\r\n`(false || {} || null)`: boş nesne `{}` doğrusal bir değerdir. İlk (ve tek) doğrusal değer, döndürülür. `one` `{}` eşittir.\r\n\r\n`(null || false || "")`: tüm operand\'lar yanlış-ımsı. Bu demektir ki son operand, `""` döndürülür. `two` `""` eşittir.\r\n\r\n`([] || 0 || "")`: boş dizi `[]` doğrusal bir değerdir. Bu ilk doğrusal değer, döndürülür. `three` `[]` eşittir.\r\n\r\n',
        trueAnswer: "C"
      }
    ]
  },
  getters: {
    getQuestions(state) {
      return state.questions;
    }
  },
  mutations: {},
  actions: {}
});
