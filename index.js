$(document).ready(function () {
    function displayTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        // Determine AM or PM
        var meridiem = "AM";
        if (hours >= 12) {
            meridiem = "PM";
        }
        // Convert 24-hour clock to 12-hour format
        hours = hours % 12;
        hours = hours ? hours : 12; // Show '12' instead of '0'
        // Add leading zeros for single-digit numbers
        if (hours < 10) hours = "0" + hours;
        if (minutes < 10) minutes = "0" + minutes;
        if (seconds < 10) seconds = "0" + seconds;
        // Get handle for clock div and display time
        var clockDiv = document.getElementById("clock");
        clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    }
    // Run the displayTime function every second
    setInterval(displayTime, 1000);
    // Initial call to display time immediately
    displayTime();
});
