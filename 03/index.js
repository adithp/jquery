$("button").on("click",function() {
    $("input").val("Adith P");
    $("h1.first").text("Your A Man");
    $("h1.second").html("<span>Hello</span>");
    $("p.q").append("adith");
    $("p.w").prepend("Your");
    $("p.e").after("<h1>Next</h1>");
    $("p.r").before("<h1>Previous</h1>");

});