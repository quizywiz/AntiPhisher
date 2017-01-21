// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */
var table = {"office":"office.com",
"paypal":"paypal.com",
"espn":"espn.com",
"chase":"chase.com",
"indeed":"indeed.com",
"alibaba":"alibaba.com",
"bankofamerica":"bankofamerica.com",
"skype":"skype.com",
"wellsfargo":"wellsfargo.com",
"forbes":"forbes.com",
"zillow":"zillow.com",
"shutterstock":"shutterstock.com",
"businessinsider":"businessinsider.com",
"scribd":"scribd.com",
"samsung":"samsung.com",
"target":"target.com",
"hdfc":"hdfcbank.com",
"icici":"icicibank.com",
"americanexpress":"americanexpress.com",
"capitalone":"capitalone.com",
"behance":"behance.net",
"fedex":"fedex.com",
"jpmc":"jpmorganchase.com",
"jpmorganchase":"jpmorganchase.com",
"bloomberg":"bloomberg.com",
"wsj":"wsj.com",
"reuters":"reuters.com",
"att":"att.com",
"verizon":"verizonwireless.com",
"wiley":"wiley.com",
"hm":"hm.com",
"techcrunch":"techcrunch.com",
"springer":"springer.com",
"investing":"investing.com",
"intel":"intel.com",
"adp":"adp.com",
"cnn":"cnn.com",
"zara":"zara.com",
"fidelity":"fidelity.com",
"costco":"costco.com",
"realtor":"realtor.com",
"investopedia":"investopedia.com",
"cisco":"cisco.com",
"123rf":"123rf.com",
"eventbrite":"eventbrite.com",
"google":"google.com",
"youtube":"youtube.com",
"facebook":"facebook.com",
"yahoo":"yahoo.com",
"wikipedia":"wikipedia.org",
"twitter":"twitter.com",
"linkedin":"linkedin.com",
"wordpress":"wordpress.com",
"tumblr":"tumblr.com",
"msn":"msn.com",
"microsoft":"microsoft.com",
"microsoft":"microsoftstore.com",
"apple":"apple.com",
"stackoverflow":"stackoverflow.com",
"pinterest":"pinterest.com",
"office":"office.com",
"github":"github.com",
"paypal":"paypal.com",
"adobe":"adobe.com",
"imgur":"imgur.com",
"dropbox":"dropbox.com",
"ask":"ask.com",
"soundcloud":"soundcloud.com",
"wikia":"wikia.com",
"cnet":"cnet.com",
"blogger":"blogger.com",
"godaddy":"godaddy.com",
"salesforce":"salesforce.com",
"vimeo":"vimeo.com",
"mediafire":"mediafire.com",
"slideshare":"slideshare.net",
"myway":"myway.com",
"livejournal":"livejournal.com",
"skype":"skype.com",
"huffingtonpost":"huffingtonpost.com",
"mozilla":"mozilla.org",
"trello":"trello.com",
"aol":"aol.com",
"wordpress":"wordpress.org",
"sourceforge":"sourceforge.net",
"bongacams":"bongacams.com",
"amazon":"amazon.com",
"ebay":"ebay.com",
"netflix":"netflix.com",
"amazon":"amazon.co.uk",
"walmart":"walmart.com",
"bestbuy":"bestbuy.com",
"steam":"steampowered.com",
"etsy":"etsy.com",
"ikea":"ikea.com",
"target":"target.com",
"homedepot":"homedepot.com",
"groupon":"groupon.com",
"bbc":"bbc.com",
"macy":"macys.com",
"newegg":"newegg.com",
"nike":"nike.com",
"cambridge":"cambridge.org",
"nordstrom":"nordstrom.com",
"humblebundle":"humblebundle.com",
"bhphotovideo":"bhphotovideo.com",
"bodybuilding":"bodybuilding.com",
"kohls":"kohls.com",
"costco":"costco.com",
}
function getCurrentTabUrl(callback) {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query

  var url = new URL(window.location.href);
  // `domain` now has a value like 'example.com'
  /*chrome.tabs.query(queryInfo, function(tabs) {
    // chrome.tabs.query invokes the callback with a list of tabs that match the
    // query. When the popup is opened, there is certainly a window and at least
    // one tab, so we can safely assume that |tabs| is a non-empty array.
    // A window can only have one active tab at a time, so the array consists of
    // exactly one tab.
    var tab = tabs[0];

    // A tab is a plain object that provides information about the tab.
    // See https://developer.chrome.com/extensions/tabs#type-Tab
    var url = tab.url;
    // check
    // tab.url is only available if the "activeTab" permission is declared.
    // If you want to see the URL of other tabs (e.g. after removing active:true
    // from |queryInfo|), then the "tabs" permission is required to see their
    // "url" properties.

  */
  callback(url.hostname);

  // Most methods of the Chrome extension APIs are asynchronous. This means that
  // you CANNOT do something like this:
  //
  // var url;
  // chrome.tabs.query(queryInfo, function(tabs) {
  //   url = tabs[0].url;
  // });
  // alert(url); // Shows "undefined", because chrome.tabs.query is async.
}


/**/

document.addEventListener('DOMContentLoaded', function(event) {
  //window.alert("o")
  console.log("listen")
  getCurrentTabUrl(function(url) {
    function checkDomain(ur) 
    {
      function endsWith(str, suffix) {
        return str.substr(-suffix.length) === suffix;
      } 
      var the_domain = ur;
      the_domain.replace("www.","")
      console.log(ur)
      var map = new Map()
      for(var key in table) {
        if(table.hasOwnProperty(key)) {
          if(map.has(key)) {
            map.set(key, _.union(map.get(key), [table[key]]));
          } else {
            map.set(key, [table[key]]);
          }
        }
      }
      //map.set('facebook', ['facebook.com'])
      //map.set('paypal', ['paypal.com'])
      //map.set('microsoft', ['microsoft.com','microsoftstore.com'])
      console.log(map)
      var is_key = false
      var is_good = false
      for (var [key,value] of map.entries()) {
        var str = value;
          var res = the_domain.includes(key);
          if (res == true) {
            console.log("is a KEY website")
            console.log(value)
            is_key = true
            for (var i = 0; i < value.length; i++) {
              console.log("the site "+value[i])
              if(endsWith(the_domain, value[i]) 
                && (the_domain.length == value[i].length 
                  || the_domain[the_domain.length - value[i].length - 1]=='.')) {
                is_good = true
              }
            }
          }
      }
      if (is_key && !is_good) {
        console.log("bad website")
        return true
      } else {
        console.log("not bad website")
        return false
      }
    }
    //var found = true
    var found = checkDomain(url)
    if (found == true) {
      window.alert("Bad Website D: EXITEXITEXIT " + url);
      var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
      if (!location.ancestorOrigins.contains(extensionOrigin)) {
        var iframe = document.createElement('iframe');
    // Must be declared at web_accessible_resources in manifest.json
      iframe.src = chrome.runtime.getURL('frame.html');

    // Some styles for a fancy sidebar
      iframe.style.cssText = 'position:fixed;top:0;right:0;display:block;' +
                           'width:450px;height:40%;z-index:1000;overflow:hidden';
      document.body.appendChild(iframe);
}
    }
  });
});
