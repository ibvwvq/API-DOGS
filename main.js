
$("#randomDogBtn").click(function(){
    randomDog();
})

function randomDog(){
    $.getJSON("https://dog.ceo/api/breeds/image/random")
    .done(addDogInImg)
    .fail(function(){
        console.log("Dog");
    })
}
function addDogInImg(data){
    console.log(data.message);
    $("#img").attr("src",data.message);
    console.log("Новая собачка")
}

randomDog();
     
var checkTextarea = (e) => {
    var breedInput = $("#breed").val().trim();
    $('#breedBogBtn').prop('disabled', breedInput === '');
  };

$("#breedBogBtn").on("click",function(){
    var breedInput = $("#breed").val().trim();
    var url = 'https://dog.ceo/api/breed/' + breedInput + '/images';
   $.ajax({ 
    url : url,
    method: 'GET'
}).done(function(response) {
    console.log(response);

    if(response.status ==="success"){
        var random = Math.floor(Math.random() * response.message.length);
        var dogPhoto = response.message[random];
        if(dogPhoto==null){
            alert("Такой породы не найдено");
        }
        $("#img").attr("src",dogPhoto);
    }
    
    
  })
});

$(document).on('keyup', '#breed', checkTextarea);