function getParamValue(paramName)
{
  var url = window.location.search.substring(1); //get rid of "?" in querystring
  var qArray = url.split('&'); //get key-value pairs
  for (var i = 0; i < qArray.length; i++)
  {
      var pArr = qArray[i].split('='); //split key and value
      if (pArr[0] == paramName)
          return pArr[1]; //return value
  }
}
var current = getParamValue('current');
var target = getParamValue('target');
window.onload = function() {

  var t1 = document.getElementById("mainDiv");
  console.log(t1)

  document.getElementById("mainDiv").innerHTML = "<h2>You have reached " + current + ". We think you are trying to reach " + target + ".</h2>" + document.getElementById("mainDiv").innerHTML;
    document.getElementById("stayOnPage").addEventListener("click",stayOnPage);
    document.getElementById("leavePage").addEventListener("click",leavePage);
    console.log("script");

}



function leavePage() {
  parent.location.href = 'http://' + target;
}

function stayOnPage() {
	console.log("stay on page")

   	parent.postMessage('closeIframe', '*');
}
