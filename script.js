var kullanicilar = [
    {email:"mustafa@gmail.com",sifre:"123456"},
    {email:"kazım@gmail.com",sifre:"kazım456"},
    {email:"meryem@gmail.com",sifre:"meryem123"},
    {email:"gamze@gmail.com",sifre:"gamze1456"}
]

 var tivitler=[
    {email:"mustafa@gmail.com", tivit:"Süper Ligin Şampiyonu Galatsaray oldu."},
    {email:"kazım@gmail.com", tivit:"Bugün hava bembeyaz."},
    {email:"meryem@gmail.com",tivit:"Postumu Beğenmeyi unutmayın"},
    {email:"gamze@gmail.com",tivit:"Keşke Lunaparka gitsem."}
 ]

 var email = prompt("email?") 
 var sifre = prompt("sifre?")

 function giris() {
    if((email == kullanicilar[0].email && kullanicilar[0].sifre) ||
       (email == kullanicilar[1].email && kullanicilar[1].sifre) ||
       (email == kullanicilar[2].email && kullanicilar[2].sifre) ||
       (email == kullanicilar[3].email && kullanicilar[3].sifre)){
        console.log(tivitler)        
 }
}
 giris(email,sifre)