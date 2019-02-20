checkBillingDates();

setTimeout(checkBillingDates, 86400000)

function checkBillingDates() {
  const today = new Date();

  const spotifyBillingDate = new Date(localStorage["spotifydat"]);
  const netflixBillingDate = new Date(localStorage["netflixdat"]);

  if (spotifyBillingDate !== "null") {
    if (today.getDate() == (spotifyBillingDate.getDate() - 1)) {
      alert("Your Spotify bill is due tomorrow!");
      const spotifyUpdatedDate = spotifyBillingDate + 30;
      localStorage["spotifydat"] = spotifyUpdatedDate;
    }
  }

  if (netflixBillingDate !== "null") {
    if (today.getDate() == (netflixBillingDate.getDate() - 1)) {
      alert("Your Netflix bill is due tomorrow!");
      const netflixUpdatedDate = netflixBillingDate + 30;
      localStorage["netflixdat"] = netflixUpdatedDate;
    }
  }
}
