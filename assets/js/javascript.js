var currentTime = moment().format("hh:mm:ss a")
var timeBlockEl = $(".time-block")
timeBlockEl.each(function (i, block) {
    var blockID = $[(block).attr("id")]
    var localText = localStorage.getItem(parseInt(blockID)) || "";
    $(block).children("textarea").val(localText)
    console.log(localText)
    console.log(blockID)
}) 



function currentDate() {
    var day = moment().format("dddd MMMM, Do");
    var time = moment().format("hh:mm:ss a");
    $("#currentDay").text("Today's Date is " + day + " at " + time);
}

currentDate();
setInterval(currentDate, 1000)

var saveButton = $(".saveBtn")


$('.time-block').on('click', 'button', saveToLocal)
function saveToLocal(event) {
var element = event.target;
var hour = $(element).parent('time-block').attr('id');
var task = $(element).sibling("textarea").val();
console.log(element)
localStorage    
}