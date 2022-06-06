console.log("Hola mundo!");

//Mine
function searchBar(valor) {
	document.getElementById('searchBanner').value = valor;
	console.log("--> " + valor);
	var mydata = JSON.parse(data);
}
console.log("--> " + searchBar);

//Quitar comentario
/*document.addEventListener("DOMContentLoaded", function(event) {
	switch(IsMobile()) {
		case true:
			document.getElementById("mobile-v").src = "https://www.unitec.mx/videos/licenciaturas-v.mp4";
			break;
		default:
			document.getElementById("mobile-v").src = "https://www.unitec.mx/videos/licenciaturas-d.mp4";
			break;
	}
	var v = document.getElementsByTagName("video")[0];
	v.play();
});*/

function IsMobile() {
	var Uagent = navigator.userAgent || navigator.vendor || window.opera;
	return(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(Uagent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(Uagent.substr(0, 4)));
};
//Quitar comentario
//const endpoint = 'https://www.unitec.mx/wp-content/themes/temaunitec/assets/frontend/json/min/json_oferta_educativa.min.json';
//const cities = [];
//fetch(endpoint).then(blob => blob.json()).then(data => cities.push(...data));

//Mine
const endpoint = 'C:\Users\steph\OneDrive\Documentos\UNITEC\Servicio Social\Buscador\resources\data\json_oferta_educativa.json';
const cities = [];
fetch(endpoint).then(blob => blob.json()).then(data => cities.push(...data));

function setText(valor, link) {
	// var serchi = document.querySelector('.search');
	// serchi.removeEventListener("blur", removeList, true);
	var button = document.getElementById('linkBanner');
	button.classList.remove("inhabilitado");
	document.getElementById('searchBanner').value = valor;
	document.getElementById('linkBanner').href = "%%CLICK_URL_ESC%%" + link.toLowerCase();
	var a = document.getElementById('suggestions');
	while(a.hasChildNodes()) {
		a.removeChild(a.firstChild);
	}
	document.getElementById("suggestions").style.height = "0px";
}

function findMatches(wordToMatch, cities) {
	return cities.filter(place => {
		const regex = new RegExp(wordToMatch, 'gi');
		//console.log(place);
		return place.carrera.match(regex) || place.url.match(regex);
	});
}

function displayMatches(e) {
	const matchedArray = findMatches(e.target.value, cities);
	const html = matchedArray.map(place => {
		const regex = new RegExp(e.target.value, 'gi');
		const cityName = place.carrera.replace(regex, `${e.target.value}`)
		const stateName = place.url.replace(regex, `${e.target.value}`)
		return `
              <li class="opc" onclick="setText('${cityName}','${stateName}');">
                  ${cityName}
              </li>
              `
	}).join('');
	suggestions.innerHTML = html;
	var cantidad = document.getElementsByClassName("opc").length;
	/*Cada Opcion mide 52 px*/
	document.getElementById("suggestions").style.height = "260px";
	//alert( document.getElementById('suggestions').offsetHeight );
	///alert(cantidad);
	switch(cantidad) {
		case 1:
			document.getElementById("suggestions").style.height = "52px";
			break;
		case 2:
			document.getElementById("suggestions").style.height = "104px";
			break;
		case 3:
			document.getElementById("suggestions").style.height = "156px";
			break;
		case 4:
			document.getElementById("suggestions").style.height = "208px";
			break;
		default:
			document.getElementById("suggestions").style.height = "260px";
			break;
	}
}

function removeList(e) {
	//alert(e.target.value);
	var valorSet = e.target.value;
	if(valorSet == null || valorSet == "" || valorSet.length < 3) {
		var a = document.getElementById('suggestions');
		while(a.hasChildNodes()) {
			a.removeChild(a.firstChild);
		}
		document.getElementById("suggestions").style.height = "0px";
	}
}
const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
search.addEventListener('keypress', displayMatches);
search.addEventListener('blur', removeList);
//search.addEventListener('focus', displayMatches);
