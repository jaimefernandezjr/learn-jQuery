$(function(){
    var recipe_box = $('#recipe_textbox');
    var add_btn = $('#add_btn');
    var cart = $('.cart');
    var delete_list = $('#delete_list');


    add_btn.on('click', function(){
        // cart.append(recipe_box.val())
        if(recipe_box.val().length > 0){
            cart.append(`<p>Recipe: ${recipe_box.val()} <button class='delete_btn'>Delete</button></p>`);
            $('#recipe_textbox').val('');

            $('.delete_btn').on('click', function(){
                $(this).parent().remove();
            })


        } else {
            alert('Required!');
        }
        
    
    })

    delete_list.on('click', function(){
        // $('#check-list').children().css({"color" : "red"});
        // $('#check-list').find(".unq").css({"color" : "red"});
        // $('#check-list > ul > li').first().css({"color" : "red"});
        // $('#check-list > ul > li').eq(3).css({"color" : "red"});
        $('#check-list > ul > li').filter(".unq").css({"color" : "red"});
    })
   
    //ready document
})