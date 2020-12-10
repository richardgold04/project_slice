function pageLoaded() {

	//ToDo applikáció készítése, alapértelmezésben 10 üres mező áll rendelkezésre, de hozzá adhatun újakat. Minden mezőben van egy checkbox, amivel bepipálható, hogy készen van-e a feladat, egy input mező, ami módosítható, valamint egy törlés és hozzáadás gomb.

	//Létrehozok egy változót a root ID-jú html tagnek

	let	theRoot = document.querySelector("#root");

	//Meghatározzuk a maximum számot egy változóban, majd egy másik változóba elmentjük a HTML struktúrát.

	let max = 10;

	let row = `
		<div class="">
			<input type="checkbox">
			<input type="text">
			<input type="submit" value="Delete" class="delete">
		</div>
	`;

	//Ezt a változót 10-szer duplikáljuk for ciklussal, majd insertAdjacentHTML-lel hozzáadjuk a root-hoz a html kódot.

	for(let index = 0; index < max; index++){

		theRoot.insertAdjacentHTML("beforeend", row);
	}

	//Hozzá kell adnunk egy gombot a lista végére  plusz gombnak (insertAdjacentHTML, afterend).

	theRoot.insertAdjacentHTML("afterend",`
		<input type="submit" value="Add" id="add">
		`);

	//Hozzáadunk egy click eseményt a gombhoz, addEventListener-rel.

	function newItem() {

		theRoot.insertAdjacentHTML("beforeend", row);

		//TODO: Az újonnan érkezett sorokra is rá kell rakni az 59. sorban lévő eseményfigyelőt 
	}

	document.querySelector("#add").addEventListener("click", newItem);

	//Kijelölöm class név alapján az összes törlés gombot querySelectorAll-lal és elmentem egy változóba.

	let delButtons = theRoot.querySelectorAll(".delete")

	console.log(delButtons)

	//For ciklusba rakjuk ezeket a gombokat és rárakjuk a click eseményt.

	function removeItem(e) {
		console.log(e.target)
		e.target.parentElement.remove();
	}

	for(let index = 0; index < delButtons.length; index++){
		delButtons[index].addEventListener("click", removeItem);
	}

}

window.addEventListener("load", pageLoaded);