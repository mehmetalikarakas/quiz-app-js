function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni= soruMetni
    this.cevapSecenekleri = cevapSecenekleri
    this.dogruCevap = dogruCevap
}

Soru.prototype.cevabiKontrolEt = function(cevap){
   return cevap === this.dogruCevap
}

let soru1 = new Soru("Hangisi Farklıdır ?",{a : "HTML", b: "CSS", c: "C#"})

let sorular = [
    new Soru("1- Yerli korona aşımızın ismi nedir ?",{A :" Turkovac", B :" Turkosilin", C :" Anti-covid"},"A"),
    new Soru("2- 2022 Kış Olimpiyatları nerede yapılacaktır ?", {A:" Lüksemburg", B:" Pekin", C:" İstanbul"},"B"),
    new Soru("3- 2023 UEFA ŞAMPİYONLAR LİGİ FİNALİ NEREDE OYNANACAKTIR ? ",{A : " İstanbul", B: " Roma", C: " Londra"}, "A"),
    new Soru("4- Dünya Sağlık Örgütü merkezi nerededir ? ", {A:" İsviçre",B:" Venedik",C:" Paris"}, "A"),
    new Soru("5- Mahkemelerin verdiği kararların kesinleşmeden önce denetlenmesini sağlamak amacıyla üst veya yüksek mahkemeye yapılan başvuru, aşağıdakilerin hangisiyle adlandırılır ?", {A:" Tahkim", B: " Ön inceleme", C: " Kanun Yolu"}, "C")
]
