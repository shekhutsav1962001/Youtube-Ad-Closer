// console.log("from fn.js");
var myVar = setInterval(skipAdd, 500);
function skipAdd() {
    if (document.getElementsByClassName('ytp-ad-text ytp-ad-skip-button-text')[0]) {
        document.getElementsByClassName('ytp-ad-text ytp-ad-skip-button-text')[0].click()
    }
    if (document.getElementsByClassName('ytp-ad-overlay-close-button').length) {
        for (let index = 0; index < document.getElementsByClassName('ytp-ad-overlay-close-button').length; index++) {
            document.getElementsByClassName('ytp-ad-overlay-close-button')[index].click()
        }
    }
}
