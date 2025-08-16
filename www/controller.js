$(document).ready(function () {
    eel.expose(DisplayMessage);
    function DisplayMessage(message) {
        // Just update the paragraph text
        $(".siri-message").text(message);

        // Restart text animation if you want
        $(".siri-message").textillate('start');
    }
});

// $(document).ready(function () {
//     eel.expose(DisplayMessage);
//     function DisplayMessage(message) {
//         $(".siri-message").append("<li>" + message + "</li>");
//     }
// });

$(document).ready(function () {
    eel.expose(ShadowHood);
    function ShadowHood() {
        // Show Ovel
        $('#Ovel').prop("hidden", false);

        // Hide SiriWave
        $('#SiriWave').prop("hidden", true);
    }
})



