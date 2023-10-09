const bill = document.getElementById("bill");
const guest = document.getElementById("guest");
const service = document.getElementById("inputGroupSelect02");
const tipAmount = document.getElementById("tip-amount");


calculateTip = () => {
    // getting the values from  the input elements
    const billValue = parseFloat(bill.value);
    const guestValue = parseFloat(guest.value);
    const serviceValue = parseFloat(service.value);

    // if tip amount is not a number, it will prompt a validation error
    if (isNaN(billValue) || isNaN(guestValue) || isNaN(serviceValue)) {
        tipAmount.innerHTML = "Please enter valid numbers.";
        showTip();
    } else {
        const tipValue = ((billValue * serviceValue) / guestValue) // bill amount multiply to service quality % divided by the number of guests
        .toFixed(2);

        tipAmount.innerHTML = "Give ₱" + tipValue + " each"; // else, tip amount will display
        showTip();
    }

    // clear fields after prompting the tip value below
    bill.value = "";
    guest.value = "";
    service.value = "0";
        
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