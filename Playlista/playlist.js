function client() {
    gapi.client.setApiKey("AIzaSyD0vhHyMH2_9T2L3EREwDTaxzVKkzlBe9g"); // Klucz API
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest") // Link dod połączenia GAPI
    .then(function() {console.log("Połączono z API");}, // Sukces
    function(error) {console.error("Problem z ładowaniem API", error);}); // Błąd
  }
/* ----------------------------------------------- */
  function execute() { // Wykonywawnie funkcji wyświetlania
    let id = prompt("Podaj ID playlisty, aby wyświetlić jej elementy");
    let amount = prompt("Podaj ilość utworów do wyświetlenia");
    return gapi.client.youtube.playlistItems.list({
      "part":["snippet"],
      "maxResults": amount,
      "playlistId":id})
/* ----------------------------------------------- */
    .then(function(response) { // Pobieranie odpowiedzi serwera
      for(let i=0;i<amount;i++)
      {
        document.write(response.result.items[i].snippet.title,'<br>');
      }  
    },
    function(error) {console.error("Problem z  dzialaniem skryptu ",error);});
  }
  gapi.load("client"); // Wczytywanie klienta

  // ID do testu: PL99ceh-K04B-uunrUjLDR3pOgK81IOjpX 