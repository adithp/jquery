$(document).ready(function(){
    $('[data-toggle="datepicker"]').datepicker({
        endDate: new Date(),
        startDate:"11/08/2020",
    });
    $('select').selectric();
})