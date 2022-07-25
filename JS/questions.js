function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni= soruMetni
    this.cevapSecenekleri = cevapSecenekleri
    this.dogruCevap = dogruCevap
}

Soru.prototype.cevabiKontrolEt = function(cevap){
   return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1- Yerli korona aşımızın ismi nedir ?",{A :" Turkovac", B :" Turkosilin", C :" Anti-covid"},"A"),
    new Soru("2- 2022 Kış Olimpiyatları nerede yapılacaktır ?", {A:" Lüksemburg", B:" Pekin", C:" İstanbul"},"B"),
    new Soru("3- 2023 UEFA ŞAMPİYONLAR LİGİ FİNALİ NEREDE OYNANACAKTIR ? ",{A : " İstanbul", B: " Roma", C: " Londra"}, "A"),
    new Soru("4- Dünya Sağlık Örgütü merkezi nerededir ? ", {A:" İsviçre",B:" Venedik",C:" Paris"}, "A"),
    new Soru("5- Mahkemelerin verdiği kararların kesinleşmeden önce denetlenmesini sağlamak amacıyla üst veya yüksek mahkemeye yapılan başvuru, aşağıdakilerin hangisiyle adlandırılır ?", {A:" Tahkim", B: " Ön inceleme", C: " Kanun Yolu"}, "C"),
    new Soru("6- Üç Büyük Dince Kutsal Sayılan Şehir Hangisidir ?",{A :" Mekke", B :" Kudüs", C :" İstanbul"},"B"),
    new Soru("7- Dünyanın ilk haritasını çizen ünlü Türk denizcisi kimdir ?",{A :" Piri Reis", B :" Fatih Sultan Süleyman", C :" Picasso"},"A"),
    new Soru("8- Amerika Kıtası’nı ikiye ayıran önemli su geçitinin adı nedir ?",{A :" Cebelitarık", B :" Panama", C :" Süveyş Kanalı"},"B"),
    new Soru("9- En büyük negatif tam sayı hangisidir ?",{A :" -1", B :" -999", C :" -111"},"A"),
    new Soru("10- İlk atom bombası hangi şehre atılmıştır ?",{A :" Shanghai", B :" Hiroşima", C :" Hong Kong"},"B")
]
