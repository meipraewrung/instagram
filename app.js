$(function(){
    $("#hello").click(function(){
        console.log("hello,JQuery");
        $("#name").addClass("display-1");
        $("#photo").attr("src", "images/download1.jpg");
    });
    $("#getDOM").click(function(){
        var name = $("#name").html();
        console.log(name);
    });
    $("#setDOM").click(function(){
        $("#name").html("Praewrung Panyanukit");
    });
    $("#addhobby").click(function(){
        var newhobby = $("#newhobby").val();
        $("#hobby").append("<li>" + newhobby + "</li>");
        $("#newhobby").val("");
    });
    $("#clearhobby").click(function(){
        $("#hobby").empty("");
    });
});