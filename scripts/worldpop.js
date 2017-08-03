/**
 * Created by sai on 7/10/17. World population js
 */

//$(document).ready(function() {


    $("#clear-button").click(clearInfo);
    $("#search-age").click(getCurrentPop);
    $("#search").click(getCountryPop);
    $("#search-world").click(getCountryList)

    function clearInfo() {
        document.getElementById("countryPop").value = "";
        document.getElementById("countryName").value = "";
        document.getElementById("year").value = "";
        document.getElementById("age").value = "";
        $("#output-pop").empty();
        $("#output-pop-age").empty();
        $("#output-pop-world").empty();
    }


    $('#searchCountry').keypress(function (e) {
        var key = e.which;
        if(key == 13)  // the enter key code
        {
            $("#search-age").trigger('click');
        }
    });

    function getCountryList(){
        $.ajax({type:"GET",dataType:"json", url: "http://api.population.io:80/1.0/countries/"})
            .done(function(list) { //[0]
                console.log(list.countries.length)
                for (var i = 0; i < list.countries.length; i++) {
                    console.log(list.countries[i])
                   // $("#output-pop-world").append("<h3>" + countryname[0].toUpperCase() + countryname.slice(1).toLowerCase() + "</h3>")
                    $.ajax("http://api.population.io:80/1.0/population/" + list.countries[i] + "/today-and-tomorrow/")
                        .done(function(data) {
                            $("#output-pop-world").append("<h3>" + list.countries[i] + "=" + data.total_population[0].population + "</h3>");

                        })
                        .fail(function(error) {
                            $("#output-pop-world").append("<h3>Error getting data</h3>");
                        });
                }

            })
            .fail(function(error) {
                $("#output-pop").html(error.responseText);
            });
    }

    function getCountryPop(){
        $("#output-pop").empty();
        var searchCountry = $("#countryPop").val() || value;
        searchCountry = searchCountry[0].toUpperCase() + searchCountry.slice(1).toLowerCase();

        $.ajax("http://api.population.io:80/1.0/population/" + searchCountry + "/today-and-tomorrow/")
            .done(function(list) { //[0]
                $("#output-pop").append("<h3>Population of " +  searchCountry+ " is: " + list.total_population[0].population  + "</h3>");

            })
            .fail(function(error) {
                $("#output-pop").html(error.responseText);
            });

    }



    function getCurrentPop(/*searchMovie*/) {
        $("#output-pop-age").empty();
        var searchCountry = $("#countryName").val();
        searchCountry = searchCountry[0].toUpperCase() + searchCountry.slice(1).toLowerCase();
        var searchYear = $("#year").val();
        var searchAge = $("#age").val();
        var dt = new Date().getFullYear();

        if (searchYear < dt){
            if(searchAge!==""){
                $.ajax("http://api.population.io:80/1.0/population/" + searchYear + "/" + searchCountry + "/" + searchAge + "/")
                    .done(function(list) { //[0]
                        console.log(list, list.length);
                        for (var i = 0; i < list.length; i++) {
                            //console.log(list[i])
                            $("#output-pop-age").append("<div>Females: " + list[i].females + "</div>");
                            $("#output-pop-age").append("<div>Males: " + list[i].males + "</div>");

                        }
                    })
                    .fail(function(error) {
                        $("#output-pop-age").html(error.responseText);
                    });
                }
                else{
                $.ajax("http://api.population.io:80/1.0/population/" + searchYear + "/" + searchCountry+"/")
                    .done(function(list) { //[0]
                        console.log(list, list.length);
                        for (var i = 0; i < list.length; i++) {
                            //console.log(list[i])
                            $("#output-pop-age").append("<div>Age: " + list[i].age + "</div>");
                            $("#output-pop-age").append("<div>Females: " + list[i].females + "</div>");
                            $("#output-pop-age").append("<div>Males: " + list[i].males + "</div>");
                            $("#output-pop-age").append("<br>");

                        }
                    })
                    .fail(function(error) {
                        $("#output-pop-age").html(error.responseText);
                    });
            }
        }
        else {
            $("#output-pop-age").append("<div>Enter valid year</div>")
        }
    }




//});

//http://api.population.io:80/1.0/population/1980/Brazil/