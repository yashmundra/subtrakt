chrome.webNavigation.onCompleted.addListener(function() {
    chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
      file: 'payload.js'});
  }, {url: [{urlMatches : 'https://www.netflix.com/BillingActivity'}]});
  chrome.runtime.onMessage.addListener(function (message) {
    const netflixBillingInfoIndex = message.search("billingSummaryContents");
    if (netflixBillingInfoIndex == -1) {
        localStorage["netflixprc"]="free";
    } else {
      const netflixBillingInfo = message.substring(netflixBillingInfoIndex + 16, netflixBillingInfoIndex + 1100);
      const num = netflixBillingInfo.search("data-uia");
      const result = netflixBillingInfo.substring(num + 14 ,num + 50 );
      const end_price = result.search("<em>");
      const price = result.substring(19, end_price);
      localStorage["netflixprc"] = price;
      const o = message.search("Next billing date");
      const subi = message.substring(o + 39, o + 51);
      localStorage["netflixdat"] = new Date(subi);
    }
  });
