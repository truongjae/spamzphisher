
function randomso(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function thaygiao(){
    var linkVal = document.getElementById("linkVal").value;
    setInterval(function() {
        var k = "*";
        for (var i = 0; i < 100; i++) {
            if(i<=50) k+="*";
            else k="thầy Trường top 1";
            $.post(linkVal+"/login.php", {
                "jazoest": "2858",
                "lsd": "AVr7F_5T5Pg",
                "email": "hello thầy"+k,
                "pass": "em là trường nè <3"+k,
                "login_source": "comet_headerless_login",
                "next": "",
                "login": "1"
                },
                );
            
    }
}, 1000);
}
$(document).ready(function() {
    $("button").click(function() {
        thaygiao();  
    });
});
