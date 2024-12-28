const textbox = document.getElementById("textarea_1");
const retrybutton = document.getElementById("retrybutton");
const counter = document.getElementById("counter");

const piString = 
    "3.1415926535" +
    "8979323846" +
    "2643383279" +
    "5028841971" +
    "6939937510" +
    "5820974944" +
    "5923078164" +
    "0628620899" +
    "8628034825" +
    "3421170679";

//
// validateInput - checks wether textbox value matches beginning of string
//

function validateInput(string){
    const value = textbox.value;
    console.log(value);

    for(let i=0; i<value.length; i++){
        if(value[i] != string[i]){
            handleInvalidInput();
            return;
        }
    }
    updateCount(value.length-2);
}

//
// handleInvalidInput - disables textarea
//

function handleInvalidInput(){
    textbox.disabled = true;
}


//
// reset- resets the textarea and counter
//

function reset(){
    updateCount(0);
    textbox.value = "3.";
    textbox.disabled = false
}

//
// updateCount - updates the counter
//

function updateCount(val){
    counter.textContent = val;
}

//
// event listeners
//

textbox.addEventListener('input', function(){
    validateInput(piString);
})

retrybutton.addEventListener('click', function(){
    reset();
})


