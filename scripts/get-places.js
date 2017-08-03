// //google places key = AIzaSyDUluD74hw8GEm_vYGAQARo6OS2-h5vzIU

$(document).ready(function() {

//   //Clear Button to clear search text and search results

//   document.getElementById('clear-button').onclick = function(){
//     document.getElementById('search-place').value = '';
//     $("#output-places").empty();
//   }

//     //get movie data to get data from api
//   $("#search-button").click(getPlaceData)

//   function getPlaceData(/*searchMovie*/){
//     var getPlace = $("#search-place").val()

//   	 $.ajax("https://source.unsplash.com/category/buildings/?" + getPlace)

//      .done(function(places){
//       var listOfPlaces = places.results//[0]
//       for(var i =0; i <listOfPlaces.length; i++) {
//       	printPlaceData(listOfPlaces[i])
//       }
//     })
//     .fail(function(error){
//       console.log(error)
//     })
//   }

//   //add movie name and image to the the html

//   function printPlaceData(printPlace){
//     $("#output-places").append("<li class='place-image-container'>" + printPlace.name + "</li>" )
//   }

// });





    var travellinks = [
        "http://media-cdn.tripadvisor.com/media/photo-s/01/d6/68/97/mt-rainier-natl-park.jpg",
        "http://i.ytimg.com/vi/PtWeqZsuzpE/maxresdefault.jpg",
        "http://www.fla-keys.com/img/main/section-keywest-1.jpg",
        "http://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg"
    ];

    var travelnames = ["Mt.Rainier", "London", "Key West", "New York"];

    // $("#search-button").click(populatePlaces);
    populatePlaces()

    function populatePlaces() {
        for (var i = 0; i < travellinks.length; i++) {
            // console.log(i, travelnames[i]);
            var img=travellinks[i]
            $("#output-places").append("<div class='movie-image-container'><img class='img-responsive img-circle' src='"+img+"' /><br><span>" + travelnames[i] + "</span></div>")
        }
        $("#search-button").hide();
    }

});

