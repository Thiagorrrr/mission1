function stepsText(className) {
    let itemName = className;
    let typeText = $("." + itemName + "__wrapper-text");
    let typeListItem = $("." + itemName + "__list-item");

    typeListItem.addClass(itemName + "__list-item--false");
    typeListItem.eq(0).removeClass(itemName + "__list-item--false");
    typeListItem.eq(0).addClass(itemName + "__list-item--true");

    typeText.addClass(itemName + "__wrapper-text--false");
    typeText.eq(0).removeClass(itemName + "__wrapper-text--false");
    typeText.eq(0).addClass(itemName + "__wrapper-text--true");

    $("." + itemName + "__list-item").on('click', function (e) {
        let name = $(this).attr('data-name');

        //reset click class
        typeListItem.addClass(itemName + "__list-item--false");
        typeListItem.removeClass(itemName + "__list-item--true");

        typeText.addClass(itemName + "__wrapper-text--false")
        typeText.removeClass(itemName + "__wrapper-text--true")

        //add class
        $(this).addClass(itemName + "__list-item--true");
        $(this).removeClass(itemName + "__list-item--false");

        $('#' + name).addClass(itemName + "__wrapper-text--true")
        $('#' + name).removeClass(itemName + "__wrapper-text--false")
    })
}
function smoothScroll(top) {
    let name = $('#'+top)
    window.scroll({
        top: name.offset().top, 
        left: 0, 
        behavior: 'smooth'
      });
}

$(document).ready(function () {
    stepsText("settings")
    stepsText("type");
    stepsText("diamond");
    stepsText("certificates");
})

