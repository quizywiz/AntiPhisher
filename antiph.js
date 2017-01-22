// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback- called when the URL of the current tab
 *   is found.
 */



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
  chrome.storage.sync.get("table", function(obj){
    var table = obj["table"]
    getCurrentTabUrl(function(url) {
      function checkDomain(ur)
      {
        function endsWith(str, suffix) {
          return str.substr(-suffix.length) === suffix;
        }
        var the_domain = ur;
        the_domain.replace("www.","")
        the_domain = the_domain.toLowerCase()
        console.log(ur)
        var map = new Map()
        for(var key in table) {
          map.set(key, table[key])

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
        var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
        if (!location.ancestorOrigins.contains(extensionOrigin)) {
          var iframe = document.createElement('iframe');
          // Must be declared at web_accessible_resources in manifest.json
          iframe.src = chrome.runtime.getURL('frame.html');

          // Some styles for a fancy sidebar
          iframe.style.cssText = 'position:fixed;top:0;right:0;display:block;' +
                             'width:450px;height:150px;z-index:1000;overflow:hidden;background-color:white';
          document.body.appendChild(iframe);
          function closeIFrame(){
            document.body.removeChild(iframe);
          }
        }
      }
    })
  })
});
