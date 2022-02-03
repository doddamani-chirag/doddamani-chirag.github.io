const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

function focusFunction() {
    document.getElementById('myInput').style.background = "yellow" ;
}

function blurFunction() {
    document.getElementById('myInput').style.background = "red" ;
}

function myFunction() {
    alert("The Form was Submited.");
}

function focuFunction() {
    document.getElementById('myIput').style.background = "blue" ;
}

function bluFunction() {
    document.getElementById('myIput').style.background = "purple" ;
}

function myFunction (){
    document.getElementById('event') .innerHTML='SENT';
        // GET ID OF INPUT FIELD WITH ID = "NUMB"
        let x = document.getElementById('myIput').value;

        //  IF X IS NOT A NUMBER OR LESS THAN ONE OR GREATER THAN TEN
        let text;
        if (isNaN(x) || x < 10 ||  x > 9 ){
        text = "Input Not Valid";
        } else {
            text = "Input OK";
        }
        document.getElementById("fun").innerHTML = text;
    }

    function myForm() {
        alert("The Form was Submited.");
    }