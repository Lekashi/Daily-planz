setInterval(currentDate, 1000)
setInterval(checkTime, 15000);
checkTime();
currentDate();
localFetch();
$(".saveBtn").on("click", localSave)
var time = parseInt(moment().hour());

function checkTime() {
    for (let i = 9; i < 18; i++) {
        var timeElArr = $(`#${i}`)

        if (i > time) {
            timeElArr.addClass("future");
        } else if (i < time) {
            timeElArr.addClass("past");
        } else {
            timeElArr.addClass("present");
        }
    }
}

    function currentDate() {
        var day = moment().format("dddd MMMM, Do");
        var currentTime = moment().format("hh:mm:ss a");
        $("#currentDay").text("Today's Date is " + day + " at " + currentTime);
    }

    function localSave(res) {
        var taskEl = res.target;
        var hour = $(taskEl).siblings('textarea').attr('id');
        var task = $(taskEl).siblings("textarea").val();
        localStorage.setItem(hour, task)
    }

    function localFetch() {
        for (let i = 9; i < 18; i++) {
            $(`#${i}`).val(localStorage.getItem(i));
        }
    }