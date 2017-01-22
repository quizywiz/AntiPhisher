

document.getElementById("stayOnPage").addEventListener("click",stayOnPage);
document.getElementById("leavePage").addEventListener("click",leavePage);
console.log("script");
function leavePage() {
  parent.location.href = 'https://facebook.com';
}

function stayOnPage() {
	console.log("stay on page")
	
   	parent.postMessage('closeIframe', '*');
}
