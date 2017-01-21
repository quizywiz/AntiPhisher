// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */
var table = {"office":"Office.com",
"paypal":"Paypal.com",
"espn":"Espn.com",
"chase":"chase.com",
"indeed":"Indeed.com",
"alibaba":"Alibaba.com",
"bankofamerica":"Bankofamerica.com",
"skype":"Skype.com",
"wellsfargo":"Wellsfargo.com",
"forbes":"Forbes.com",
"zillow":"Zillow.com",
"shutterstock":"Shutterstock.com",
"businessinsider":"Businessinsider.com",
"scribd":"Scribd.com",
"samsung":"Samsung.com",
"target":"Target.com",
"hdfc":"Hdfcbank.com",
"icici":"Icicibank.com",
"americanexpress":"Americanexpress.com",
"capitalone":"Capitalone.com",
"behance":"Behance.net",
"fedex":"Fedex.com",
"jpmc":"Jpmorganchase.com",
"jpmorganchase":"Jpmorganchase.com",
"bloomberg":"Bloomberg.com",
"wsj":"Wsj.com",
"reuters":"Reuters.com",
"att":"Att.com",
"verizon":"Verizonwireless.com",
"wiley":"Wiley.com",
"hm":"Hm.com",
"techcrunch":"Techcrunch.com",
"springer":"Springer.com",
"investing":"Investing.com",
"intel":"Intel.com",
"adp":"Adp.com",
"cnn":"cnn.com",
"zara":"Zara.com",
"fidelity":"Fidelity.com",
"costco":"Costco.com",
"realtor":"Realtor.com",
"investopedia":"Investopedia.com",
"cisco":"Cisco.com",
"123rf":"123rf.com",
"eventbrite":"Eventbrite.com",
"google":"Google.com",
"youtube":"youtube.com",
"facebook":"facebook.com",
"yahoo":"Yahoo.com",
"wikipedia":"wikipedia.org",
"twitter":"twitter.com",
"linkedin":"linkedin.com",
"wordpress":"Wordpress.com",
"tumblr":"Tumblr.com",
"msn":"Msn.com",
"microsoft":"microsoft.com",
"microsoft":"microsoftstore.com",
"apple":"Apple.com",
"stackoverflow":"Stackoverflow.com",
"pinterest":"pinterest.com",
"office":"Office.com",
"github":"github.com",
"paypal":"Paypal.com",
"adobe":"Adobe.com",
"imgur":"Imgur.com",
"dropbox":"dropbox.com",
"ask":"Ask.com",
"soundcloud":"Soundcloud.com",
"wikia":"Wikia.com",
"cnet":"Cnet.com",
"blogger":"Blogger.com",
"godaddy":"Godaddy.com",
"salesforce":"Salesforce.com",
"vimeo":"vimeo.com",
"mediafire":"Mediafire.com",
"slideshare":"Slideshare.net",
"myway":"Myway.com",
"livejournal":"Livejournal.com",
"skype":"Skype.com",
"huffingtonpost":"Huffingtonpost.com",
"mozilla":"mozilla.org",
"trello":"Trello.com",
"aol":"Aol.com",
"wordpress":"Wordpress.org",
"sourceforge":"Sourceforge.net",
"bongacams":"Bongacams.com",
"amazon":"Amazon.com",
"ebay":"Ebay.com",
"netflix":"Netflix.com",
"amazon":"Amazon.co.uk",
"walmart":"Walmart.com",
"bestbuy":"Bestbuy.com",
"steam":"steampowered.com",
"etsy":"etsy.com",
"ikea":"Ikea.com",
"target":"Target.com",
"homedepot":"Homedepot.com",
"groupon":"groupon.com",
"bbc":"bbc.com",
"macy":"Macys.com",
"newegg":"Newegg.com",
"nike":"Nike.com",
"cambridge":"Cambridge.org",
"nordstrom":"Nordstrom.com",
"humblebundle":"humblebundle.com",
"bhphotovideo":"Bhphotovideo.com",
"bodybuilding":"Bodybuilding.com",
"kohls":"Kohls.com",
"costco":"Costco.com",
};
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
              console.log(value[i])
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
    }
  });
});
