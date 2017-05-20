$(function () {
//Select the button, choose click as the event
    $('#findButton').on('click', function () {
        var searchTerm = $('#veggieInput').val().toLowerCase();  //get search term from input box
        var listItems = $('li');  //variable for all list items (recipes)
        var count = listItems.length; //Count how many recipes there are

        listItems.each(function () {
            if (!$(this).text().toLowerCase().includes(searchTerm)) {
                $(this).hide("slow");
            }
        });

        $('#viewAllButton').on('click', function () {
            var listItems = $("li");
            listItems.show();
        });

        listItems.each(function () {
            if (!$(this).text().toLowerCase().includes(searchTerm)) {
                $(this).fadeOut();
                count -= 1; //If a match isn't found, count subtracts 1
                if (count == 0) {
                    $('.list-group').append("<p>No recipe found. Would you like to add a new recipe?</p>");
                    $('<div><input id="NewRecipeInput" type="text" placeholder="Enter New Recipe Here" /></div>').appendTo('.list-group');
                    $('<input type="button" id="EnterButton" value="Enter"/>').appendTo('.list-group');
                    $('#EnterButton').on('click', function(){
                        var newRecipeAdded = $('#NewRecipeInput').val();
                        $('.list-group').append('<li>' + newRecipeAdded + '</li>');
                        alert("Recipe Added!");

                        $('p').hide();
                        $('#NewRecipeInput').hide();
                        $('#EnterButton').hide();
                        $('ul li').each(function () {
                            $(this).show();
                        });
                    });
                }
            }
        });

    });



});