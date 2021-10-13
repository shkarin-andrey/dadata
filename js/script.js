$(document).ready(function () {
    var token = '7b37f20fe94c0ef52699fe85d1cb97f96d043dea';
    $(".address").suggestions({
        token: token,
        type: "ADDRESS",
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });
    $(".job").suggestions({
        token: token,
        type: "PARTY",
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });
    $(".fio").suggestions({
        token: token,
        type: "NAME",
        onSelect: function(suggestion) {
            console.log(suggestion);
        }
    });
});