$(document).ready(function(){
    $.ajax({
        type:"get",
        url:"https://traveller.talrop.works/api/v1/places/categories/",
        success:function(response){
            let html_data=""
            response.data.forEach((place)=> {
            html_data += `<li>
            <a href="#">
                <img
                    class="rest"
                    src="${place.image}"
                    alt="Image"
                />
                <span>${place.name}</span>
            </a>
        </li>`
            })
            $("div.head ul").html(html_data)
        }
    })
    $.ajax({
        type:"get",
        url:"https://traveller.talrop.works/api/v1/places/",
        success:function(response){
            let html_data=""
            response.data.forEach((place)=> {
            html_data += `<div class="item">
            <a href="#">
                <div class="top">
                    <img src="${place.image}" alt="Image" />
                </div>
                <div class="middle"><h3>${place.name}</h3></div>
                <div class="bottom">
                    <img src="images/place.svg" alt="Image" />
                    <span>${place.location}</span>
                </div>
            </a>
        </div>`
            })
            $("div.items").html(html_data)
        }
    })
})