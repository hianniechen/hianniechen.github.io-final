var number1;
        var min;
        var max;
        var time = 0;
        $('#aa3').text("　");

        //數字
        var btnl = $('button');
        for (var i = 0; i < btnl.length; i++) {
            $(btnl[i]).click(function () {
                var btn = event.srcElement;
                if ($('#start').prop('disabled') == true) {
                    if ($('#aa3').text() == "　") {
                        $('#aa3').text("");
                        $('#aa3').text(btn.innerText);
                    }
                    else {
                        $('#aa3').text($('#aa3').text() + btn.innerText);
                    }
                }
            });
        };

        //清除
        $("#NULL").click(function () {
            $('#aa3').text("　");
        });
        //確認
        $("#Check").click(function () {
            var q1 = parseInt($('#aa3').text());

            time++;
            if (q1 == number1) {
                alert("恭喜你！猜對了");
                console.log("The " + time + " time(s)" + "  恭喜!   答案是:  " + q1);

                $('#start').prop('disabled', false);
                $('#Check').prop('disabled', true);
                $('#NULL').prop('disabled', true);
                $('#ret').prop('disabled', true);
            }
            else if (q1 > number1) {
                console.log("The " + time + " time(s)" + min + "  <    " + q1 + "    <  " + max);
                if (q1 < max) {
                    max = q1;
                }
                $('#aa2').text(max);
            }
            else {
                console.log("The " + time + " time(s)" + min + "  <    " + q1 + "    <  " + max);
                if (q1 > min) {
                    min = q1;
                }
                $('#aa1').text(min);
            }
            $('#aa3').text("　");
        });
        //開始
        $("#start").click(function () {
            number1 = Math.floor(Math.random() * 100);
            max = 100;
            min = 0;
            time = 0;

            $('#aa1').text(min);
            $('#aa2').text(max);
            $('#aa3').text("　");

            $('#ret').prop('disabled', false);
            $('#Check').prop('disabled', false);
            $('#NULL').prop('disabled', false);
            $('#start').prop('disabled', true);
        });
        //放棄
        $("#ret").click(function () {

            $('#aa1').text("");
            $('#aa2').text("");
            $('#aa3').text("　");

            $('#ret').prop('disabled', true);
            $('#Check').prop('disabled', true);
            $('#NULL').prop('disabled', true);
            $('#start').prop('disabled', false);
        });