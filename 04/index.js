$("button.first").on("click",function() {
    console.log($("a").attr("href"));
});
$("button.second").on("click",function() {
   $("a").attr("href","https://google.com")
});