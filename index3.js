$(function(){

    $('#load_btn').on('click', function(){
        // $('#main-container').load('sample.txt #data');
        $.get('https://jsonplaceholder.typicode.com/users', function(data, status){
            data.forEach(element => {
                // console.log(element);
                // console.log(element.username);
                $('#main-container').append(`<p> ${element.username} </p>`);
            })
        })
    })



    //ready document
})