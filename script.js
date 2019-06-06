$(document).ready(function(){

    $('#btn0').on('click',function() {
        const text = document.getElementById("addText").value;
        const color = ['#f72e67', '#ff6397', '#b037f2', '#37b0f1', '#12ccc5', '#e9ed21'];
        const rand = color[Math.floor(Math.random() * color.length)];
        const add = "<div class='test_color' name='checker' id='changeColor1' style='background-color:" + rand + ";'>" +
            "<input type='checkbox' class='checkColor'>" + text + "</div>";
        $('.listing').append(add);

        function changeColor() {
            $(".checkColor").on('click',function () {
                if ($(".checkColor").is(':checked')) {
                    $(".colorBtn").click(function() {
                        const radioValue = $(this).attr("value");
                        console.log(radioValue);
                        if (radioValue) {
                            $(".test_color:has(':checked')").css('background-color', radioValue );
                            console.log($(".test_color"));
                            console.log(radioValue);
                        }
                    });
                }
            });
        }
        changeColor();
    });
});
