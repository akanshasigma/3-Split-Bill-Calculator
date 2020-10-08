function calculateShare() {
    var amt = document.getElementById("amt").value;
    var disc = document.getElementById("disc").value;
    var people = document.getElementById("people").value;

    //validation
    if (amt == "" || people == "" || disc == 2 ) {
        alert("Please enter all the values");
        return;
    }

    if (isNaN(amt) || isNaN(people)) {
        alert("Please enter a valid number");
        return;
    }

    if (people === "" || people <= 1) {
        people = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    //Calculate share
    var discount = amt * disc;
    var total = (amt - discount) / people;
    // rounding up to 2 decimal points
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    //document.write(total);

    //Display shared amount
    document.getElementById("share").style.display = "block";
    document.getElementById("result").innerHTML = total;
}

    //Hide the share amount on loading
    document.getElementById("share").style.display = "none";
    document.getElementById("each").style.display == "none";

    //Call function
    document.getElementById("calculate").onclick = function() {
        calculateShare();
};