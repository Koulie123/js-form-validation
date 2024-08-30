import './style.css';
let labels = document.querySelectorAll('input');
labels.forEach(element => {
    console.log("Adding event");
    element.addEventListener("invalid", (event) => {
        if (!element.valid){
            console.log(`The ${element} is valid`);
            alert("This element is not valid, please correct it immediatly!!!");
        }
    })
    element.addEventListener("change", () => {
        element.checkValidity();
    })
});
