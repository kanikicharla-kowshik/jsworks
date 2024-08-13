// Initial balance
var balance = 1000000;

// Function to update balance display
function updateBalance() {
    document.getElementById("bal").textContent = ("Available Balance:"+balance)
}

// Debit button functionality
if(document.getElementById("sub")){
document.getElementById("sub").addEventListener("click", () => {
        let pin = +prompt("Enter Pin")
        if(pin == 7899){
        let amount = parseInt(document.getElementById("debt_amt").value);
        if (!isNaN(amount) && amount > 0 && amount <= balance) {
            balance -= amount;
            updateBalance();
        } else {
            alert("Please enter a valid amount or ensure sufficient balance");
        }
    }
    else
        alert("enter correct pin")
    });
    }

// Credit button functionality
else if(document.getElementById("add")){
document.getElementById("add").addEventListener("click", () => {
    let pin = +prompt("Enter Pin")
    if(pin == 7899){
        let amount = parseInt(document.getElementById("amt").value);
        if (!isNaN(amount) && amount > 0) {
            balance += amount;
            updateBalance();
        } 
        else {
            alert("Please enter a valid amount");
        }
    }
    else
        alert("enter correct pin")

});
}

else {
    document.getElementById("acc").addEventListener("click",()=>{
    let pin= +prompt("Enter pin")
    if(pin==7899){
        location.href=("account.html")
    }
    else
        alert("enter correct pin")
})
}