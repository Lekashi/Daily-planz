var currentTime = moment().format("hh:mm:ss a")

function currentDate() {
    var day = moment().format("dddd MMMM, Do");
    var time = moment().format("hh:mm:ss a");
    $("#currentDay").text("Today's Date is " + day + " at " + time);
}
currentDate();
setInterval(currentDate, 1000)

var saveButton = $(".saveBtn")

saveButton.on('click' , function () {

console.log($(this).siblings(".description").val())
    })