var select = function (el, all) {
    if (all === void 0) { all = false; }
    el = el.trim();
    var element;
    if (all) {
        element = Array.from(document.querySelectorAll(el));
    }
    else {
        element = document.querySelector(el);
    }
    if (element === null || element.length === 0 || element === undefined) {
        console.log('element not available or element returns null');
    }
    else {
        return element;
    }
};
var inputText = select('#inputText');
var outputText = select('#outputText');
console.log('lalal');
var changeCaseFunction = function () {
    var inpVal = inputText.value.toUpperCase();
    outputText.value = inpVal;
};
inputText.addEventListener('input', function () {
    changeCaseFunction();
});
