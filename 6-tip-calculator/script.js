const bill = document.getElementById("bill");
const guest = document.getElementById("guest");
const service = document.getElementById("service");
const tipAmount = document.getElementById("tip-amount");

calculateTip = () => {
    // bill amount multiply to service quality % divided by the number of guests
    const tipValue = ((bill.value * service.value) / (guest.value))
    .toFixed(2);

    // clear fields after prompting the tip value below
    bill.value = "";
    guest.value = "";
    service.value = "";

    // if tip amount is not a number, no tip required will prompt
    if (tipValue === "NaN") {
        tipAmount.innerHTML = "No Tip Required";
        showTip();
    } else {
        tipAmount.innerHTML = "Give ₱" + tipValue + " each"; // else, tip amount will show
        showTip();
    }
};

/* tip amount will show
see .tip-amount.show in css properties 
prompt will last for 3 seconds */
showTip = () => {
    let i = tipAmount;
    i.className = "show";

    setTimeout(function() {
    i.className = i.className.replace("show", "");
    }, 3000);
};