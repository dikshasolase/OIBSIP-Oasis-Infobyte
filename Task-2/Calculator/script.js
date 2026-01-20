const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (button.classList.contains("clear")) {
            display.value = "";
        } 
        else if (button.classList.contains("delete")) {
            display.value = display.value.slice(0, -1);
        } 
        else if (value === "√") {
            // Square root of current value
            if (display.value !== "") {
                display.value = Math.sqrt(eval(display.value));
            }
        } 
        else if (button.classList.contains("equals")) {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        } 
        else {
            display.value += value;
        }
    });
});
