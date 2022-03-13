$(document).ready(function () {
    console.log("script loaded");
    var inputText;

    $("#bSetText").click(function () {
        inputText = $("#tbInput1").val(); // textbox, dropdownlist, listbox
        $("#sOutput1").text(inputText); // span, label, p
    });

    $("#bSetHtml").click(function () {
        inputText = $("#tbInput1").val();
        $("#sOutput2").html('<label style="color:blue;font-size:24px;"><b>' + inputText + '</b></label>');
    });

    $("#bSetValue").click(function () {
        inputText = $("#tbInput1").val();
        $("#tbOutput1").val(inputText);
    });
});