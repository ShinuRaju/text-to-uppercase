const select:Function = (el:string, all:boolean = false) => {
    el = el.trim();
    let element:any;
    
	if (all) {
        element =  Array.from (document.querySelectorAll(el)) 
    } else {
        element =  document.querySelector(el)
    }

    if( element === null || element.length === 0 || element === undefined ){
		console.log('element not available or element returns null')
    }else{
        return element;
    }
}

const inputText:HTMLTextAreaElement = select('#inputText');
const outputText : HTMLTextAreaElement = select('#outputText');


let changeCaseFunction = () => {
    let inpVal = inputText.value.toUpperCase();
    outputText.value = inpVal;

}

inputText.addEventListener('input', () => {
    changeCaseFunction();
})
