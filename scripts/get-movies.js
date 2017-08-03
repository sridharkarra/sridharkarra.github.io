/**
 * Created by sai on 6/26/17.
 */
// "https://api.themoviedb.org/3/movie/550?api_key=b868e882fe7e015d72bf381f7e7704a3"
// "https://api.themoviedb.org/3/search/movie?api_key=b868e882fe7e015d72bf381f7e7704a3&language=en-US&query=Jack+Reacher"

$(document).ready(function() {
    var myFavMovies = [
        "Die Hard",
        "Harry Potter",
        "Star Wars",
        "Lord of the Rings",
        "Bourne Identity"
    ];
    var movieOptions = [
        "popular-movies",
        "popular-kids-movies",
        "highest-rated-movies"
    ];
    var movieOptionsurl = [
        "/discover/movie?sort_by=popularity.desc",
        "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc",
        "/discover/movie??certification_country=US&certification=R&sort_by=vote_average.desc"
    ];

    //Clear Button to clear search text and search results

    $("#clear-button").click(clearInfo)

    function clearInfo() {
        document.getElementById("search-movie").value = "";
   //     document.getElementById("search-dropdown").value = "";
        $("#output-movies").empty();
        $("#output-movies-criteria").empty();
    }

    //movie loop to loop through the fav movie array list

    function movieLoop() {
        for (i = 0; i < myFavMovies.length; i++) {
            getMovieData(myFavMovies[i]);
        }
    }

    //// Search for movies using pre-defined discover options listed in dropdown menu
    //
    //document.getElementById("search-dropdown").onchange = function() {
    //    var x = document.getElementById("search-dropdown").value;
    //    $("#output-movies").empty();
    //    $("#output-movies-criteria").empty();
    //    getDiscoverData(x);
    //};
    //
    //// Get movie data for pre-defined discover options listed in dropdown menu
    //
    //function getDiscoverData(searchMovie) {
    //    $("#output-movies-criteria").append(
    //        "<div>Search results for " + searchMovie + "</div>"
    //    );
    //    for (i = 0; i < movieOptions.length; i++) {
    //        if (searchMovie === movieOptions[i]) {
    //            $.ajax("https://api.themoviedb.org/3" + movieOptionsurl[i])
    //
    //                .done(function(movies) {
    //                    var listOfMovies = movies.results; //[0]
    //                    for (var i = 0; i < listOfMovies.length; i++) {
    //                        printMovieData(listOfMovies[i]);
    //                    }
    //                })
    //
    //                .fail(function(error) {
    //                    $("#output-movies-criteria").html(error.responseText);
    //                });
    //        }
    //    }
    //}

    //	Function is triggered when user enter search text and clicks Search button

    $("#search-button").click(getMovieData);

    $('#search-movie').keypress(function (e) {
        var key = e.which;
        if(key == 13)  // the enter key code
        {
            $("#search-button").trigger('click');
        }
    });

    // Get movie data for search text entered in text box and clicked on search button

    function getMovieData(/*searchMovie*/) {
        $("#output-movies").empty();
        $("#output-movies-criteria").empty();
        var searchMovie = $("#search-movie").val();

        $.ajax(
            "https://api.themoviedb.org/3/search/movie?api_key=b868e882fe7e015d72bf381f7e7704a3&language=en-US&query=" +
            searchMovie)
            .done(function(movies) {
                var listOfMovies = movies.results; //[0]
                $("#output-movies-criteria").append("<div>Total search results for ' <mark>" + searchMovie + "</mark> ' : " + movies.total_results + "</div>");
                for (var i = 0; i < listOfMovies.length; i++) {
                    printMovieData(listOfMovies[i]);
                }
            })
            .fail(function(error) {
                $("#output-movies-criteria").html(error.responseText);
            });

    }

    //add movie details and image to the the html

    function printMovieData(printMovie) {
//     $("#output-movies").append("<div class='movie-image-container'><span>" + printMovie.original_title + "</span><br><img src='https://image.tmdb.org/t/p/original" + printMovie.poster_path + "' /></div>")

        $("#output-movies").append("<div class='movie-image-container'>"
            + "<img class = 'img-rounded' src='https://image.tmdb.org/t/p/original" + printMovie.poster_path + "' />"
            + "<div class='movie-details-container'>"
            + "<p><mark>Movie Title</mark> : " + printMovie.original_title +"</p>"
            + "<p><mark>Release Date</mark>: " + printMovie.release_date +"</p>"
            + "<p><mark>Rating</mark>: " + printMovie.vote_average+"</p>"
            + "<p><mark>Plot</mark>: " + printMovie.overview+"</p></div>"
        )
    }
});
