$(document).ready(function(){
    $.ajax({
        type:"get",
        url:"https://reqres.in/api/users",
        success: function(response){
            let html_data ="";
            console.log(response.data)
            response.data.forEach((user) => {
                
                html_data +=`<div class="left">
                                    <img src="${user.avatar}" alt="">
                                </div>
                                <div class="right">
                                    <h1>${user.first_name}${user.last_name}</h1>
                                    <a href="mailto:${user.email}">${user.email}</a>
                                </div>`;
                
                });
                $(".box").html(html_data)
        },
        error:function(error){
            console.log(error)
        }
    });
   
    



})
$(document).on("submit","form", function(e){
    e.preventDefault();
    var $this = $(this);
    
    var data = $this.serialize();
    var action = $this.attr("action");
    var method = $this.attr("method");
    $.ajax({
     type: method,
     url: action,
     data: data,
     success: (response)=> {
        console.log(response)
        swal({
            title: "Succses",
            text: "Succsesfully Submited",
            icon: "success",
            button: "ok",
          });

     },
     error:(error)=>{
         console.log(error)
     }
 });
 })
 