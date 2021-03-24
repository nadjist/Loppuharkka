let tallennaTahan;

let enter = document.getElementById("teksti");

//lukee enterin painalluksen, otettu suoraan netistä
enter.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("nappula").click();
  }
});

//tyhjentää oikean puoleisen divin
function Tyhjenna() {
  document.getElementById("boksioik").innerHTML = "";
}

//toiminnallisuudet
function toiminnallisuudet() {
  //tähän tallennetaan inputiin syötetty arvo
  tallennaTahan = document.getElementById("teksti").value;

  if (tallennaTahan === "google") {
    //ruutu tyhjennetään ensin
    //luodaan a-elementti ja a-elementin teksti
    //lisätään a-elementtiin tekstielementti
    //a-elementille lisätään ominaisuudet href ja target
    //kaikki jatkossa tehdyt elementit ja touhut perustuu tähän samaan kaavaan
    Tyhjenna();
    let siirrytaanko = document.createElement("a");
    let linkkiteksti = document.createTextNode("Siirrytäänkö googleen");
    siirrytaanko.appendChild(linkkiteksti);
    siirrytaanko.href = "http://google.fi";
    siirrytaanko.target = "_blank";
    document.getElementById("boksioik").appendChild(siirrytaanko);
  } else if (tallennaTahan === "listaa") {
    //luodaan lista mahdollisista hakusanoista ja lista ja loopin avulla generoidaan ne näkyviin
    let lista = [
      "google",
      "listaa",
      "Nadja",
      "1-999",
      "soita",
      "tee popup",
      "vaihda",
      "funktio",
      "uusiksi",
    ];
    Tyhjenna();
    for (let i = 0; i < lista.length; i++) {
      let klikkaa = document.createElement("a");
      let vali = document.createElement("br");
      let listaus = document.createTextNode(lista[i]);
      klikkaa.appendChild(listaus);
      klikkaa.appendChild(vali);
      document.getElementById("boksivas").appendChild(klikkaa);
      klikkaa.onclick = function () {
        //jos valitsee listasta '1-999' niin randomgeneroidaan luku 1-999 väliltä inputiin :D
        if (lista[i] === "1-999") {
          document.getElementById("teksti").value =
            Math.floor(Math.random() * 999) + 1;
        } else {
          //muuten laitetaan vaan listassa lukeva teksti sinne inputtiin
          document.getElementById("teksti").value = lista[i];
        }
      };
    }
  } else if (tallennaTahan === "Nadja") {
    Tyhjenna();
    let omakuva = document.createElement("img");
    omakuva.src =
      "https://media-exp1.licdn.com/dms/image/C4D03AQFP_lUXc6RppQ/profile-displayphoto-shrink_800_800/0/1551027304867?e=1620864000&v=beta&t=fJ0B69DIusaRc4PTpL93IDdK_Bd4rjg30p0r0pl55jQ";
    document.getElementById("boksioik").appendChild(omakuva);
  } else if (tallennaTahan >= 1 && tallennaTahan <= 999) {
    Tyhjenna();
    for (let i = 0; i <= tallennaTahan; i++) {
      let generoitu = document.createElement("p");
      let vali = document.createElement("br");
      let teksti = document.createTextNode(i + " Generoitua tekstiä");
      generoitu.appendChild(teksti);
      generoitu.appendChild(vali);
      document.getElementById("boksioik").appendChild(generoitu);
    }
  } else if (tallennaTahan === "soita") {
    let aani = document.createElement("audio");
    aani.src = "./aani.mp3";
    aani.play();
  } else if (tallennaTahan === "tee popup") {
    Tyhjenna();
    let ruksi = document.createElement("button");
    let ruksinX = document.createTextNode("x");
    ruksi.id = "ruksi";
    let popup = document.createElement("div");
    popup.id = "ilmestynyt";
    popup.innerHTML = "<p>Tässä <b>pyydetty </b>popup</p>";
    ruksi.appendChild(ruksinX);
    popup.appendChild(ruksi);
    document.getElementById("boksioik").appendChild(popup);

    popup.onclick = () => document.getElementById("ilmestynyt").remove();
  } else if (tallennaTahan === "vaihda") {
    document.body.style.backgroundColor = "red";
  } else if (tallennaTahan === "funktio") {
    function Funktio() {
      Tyhjenna();
      console.log("Funktio toimii");

      let suorita = document.createElement("input");
      suorita.id = "suorita";
      let nappi = document.createElement("button");
      nappi.id = "nappi";
      let napinteksti = document.createTextNode("Suorita");
      nappi.appendChild(napinteksti);
      document.getElementById("boksioik").appendChild(suorita);
      document.getElementById("boksioik").appendChild(nappi);

      document.getElementById("nappi").onclick = function () {
        let inputinArvo = document.getElementById("suorita").value;

        if (inputinArvo === "") {
          console.log("anna komento");
        } else if (inputinArvo === "reload") {
          window.location.reload();
        } else {
          console.log("Kirjoitit: " + inputinArvo);
        }
      };
    }
    Funktio();
  } else if (tallennaTahan === "uusiksi") {
    window.location.reload();
  } else {
    Tyhjenna();
    let eiTunnista = document.createElement("p");
    eiTunnista = document.createTextNode("komentoa ei tunnistettu");
    document.getElementById("boksioik").appendChild(eiTunnista);
  }
  //loput vaikutti hirveen yksiselitteisiltä, niin en sitten kommentoinut enempää :'D
}
