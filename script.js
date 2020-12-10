function pageLoaded() {

//ToDo applikáció készítése, alapértelmezésben 10 üres mező áll rendelkezésre, de hozzá adhatun újakat. Minden mezőben van egy checkbox, amivel bepipálható, hogy készen van-e a feladat, egy input mező, ami módosítható, valamint egy törlés és hozzáadás gomb

//Létrehozok egy változót a root ID-jú html tagnek


//Meghatározzuk a maximum számot egy változóban, majd a változóba elmentjük a HTML struktúrát.


//Ezt a változót 10-szer duplikáljuk for ciklussal, majd insertAdjacentHTML-lel hozzáadjuk a root-hoz a html kódot. Hozzá kell adnunk egy gombot a lista végére  plusz gombnak (insertAdjacentHTML, afterend).


//Hozzáadunk egy click eseményt a gombhoz, addEventListener-rel.


//Kijelölöm class név alapján az összes törlés gombot querySelectorAll-lal és elmentem egy változóba.


//For ciklusba rakjuk ezeket a gombokat és rárakjuk a click eseményt.



}

window.addEventListener("load", pageLoaded);