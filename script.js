// this function takes a string (searchTerm) and queries the Tumblr API to find
// posts tagged with that string
var queryTumblrApi = function(searchTerm) {
    // base Tumblr API url
    var url = "https://api.tumblr.com/v2/tagged?api_key=YCGzzpJM5T4oFCf6G9SrjiRum32gbsxSFdIqmFdHCmQbHxYD2b&tag=";
    // adds search term to the end of the URL
    url = url + searchTerm;
    
    // calls the API with the URL that includes the search term
    $.ajax({
        url: url,
        dataType: "jsonp"
    })
    // this function happens after the response is back from the API
    .done(function(response) {
        console.log(response);
        // TO-DOs
        // 1: add a for loop that goes over each item in the array of posts in the response
        // 2: inside the loop, console.log each post
        // 3: console.log the blog name, post title, and post url for each post
        // 4: insert blog name and post title in the HTML of the results page
        // 5: link the post title to the post url
    });
}


// this function happens when the page is done loading
$(document).ready(function() {

    // this function happens when you click any button with the class "marsh"
    $(".marsh").click(function(event) {
        // get the text from the button
        var buttonName = event.currentTarget.innerText;
        // call the queryTumblrApi function with the text from the button
        queryTumblrApi(buttonName);
    });

    
});
