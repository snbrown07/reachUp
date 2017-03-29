$(document).ready(function() {
    var queryParams = $.getQueryParameters();
    console.log(queryParams);
    var hash = window.location.hash;
    var token = hash.substring(14, hash.length);
    console.log(token);
    $.ajax({
            url: "https://api.instagram.com/v1/tags/" + queryParams.term + "/media/recent?access_token=" + token,
            dataType: "jsonp"
        })
        .done(function(response) {
            console.log(response);
        });
    $("#other").click(function() {
        $(".hidden").toggle();
    });
    $(".marsh").click(function(event) {
        var name = event.currentTarget.innerText;
        window.location = "https://api.instagram.com/oauth/authorize/?client_id=ef30f2a1acd34e4b89b5d2d70d357e91&redirect_uri=https://preview.c9users.io/snbrown07/reach-up-project/index.html?term=" + name + "&response_type=token&scope=public_content"

    });
});
