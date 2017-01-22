

document.getElementById("stayOnPage").addEventListener("click",stayOnPage);
document.getElementById("leavePage").addEventListener("click",leavePage);
console.log("script");
function leavePage() {
  parent.location.href = 'https://facebook.com';
}

function stayOnPage() {
    parent.postMessage('closeIframe', '*');
}
