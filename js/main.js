/* JQUERY RANGE SLIDER INITIALIZATION */

$('#fan-speed-slider').jRange({
    from: 1,
    to: 5,
    step: 1,
    scale: [1,2,3,4,5],
    format: '%s',
    width: 412,
    showLabels: true,
    snap: true,
    theme: "theme-blue"
});

/* JQUERY RANGE SLIDER INITIALIZATION */


/* ROUND SLIDER INITIALIZATION */

$("#slider").roundSlider({
    handleShape: "dot",
    width: 54,
    radius: 150,
    value: 24,
    sliderType: "min-range",
    lineCap: "round",
    startAngle: 270,
    max: 38,
    mouseScrollAction: true,
    tooltipFormat: "tooltipVal2",
    create: "createEvent",
    drag: "traceEvent",
    change: "changeEvent"
});



// CUSTOM VALUE FUNCTION FOR THE ROUND SLIDER
function tooltipVal2(args) {
    if(args.value < 27) {
        return args.value + "&#176; C <br> <span>Cooling...</span> ";
    } else if (args.value == 27) {
        return args.value + "&#176; C";
    } else {
        return args.value + "&#176; C <br> <span>Heating...</span> ";
    }
}

// EVENT FUNCTIONS FOR THE ROUND SLIDER
function createEvent(e) {
    let obj1 =  $("#slider").data("roundSlider");
    let value = obj1.getValue();
    dots(value);
}

function traceEvent(e) {
    let obj1 =  $("#slider").data("roundSlider");
    let value = obj1.getValue();
    dots(value);
}

function changeEvent(e) {
    let obj1 =  $("#slider").data("roundSlider");
    let value = obj1.getValue();
    dots(value);
}

// INTERACTIVE SLIDER SCALE FUNCTION FOR THE ROUND SLIDER
function dots(value) {

    if(value >= 5 ) {
        $(".slider-scale__point:nth-child(1)").addClass("slider-scale__point--active");
    } else {
        $(".slider-scale__point:nth-child(1)").removeClass("slider-scale__point--active");
    }

    if(value >= 10 ) {
        $(".slider-scale__point:nth-child(2)").addClass("slider-scale__point--active");
    } else {
        $(".slider-scale__point:nth-child(2)").removeClass("slider-scale__point--active");
    }

    if(value >= 14 ) {
        $(".slider-scale__point:nth-child(3)").addClass("slider-scale__point--active");
    } else {
        $(".slider-scale__point:nth-child(3)").removeClass("slider-scale__point--active");
    }

    if(value >= 19 ) {
        $(".slider-scale__point:nth-child(4)").addClass("slider-scale__point--active");
    } else {
        $(".slider-scale__point:nth-child(4)").removeClass("slider-scale__point--active");
    }

    if(value >= 24 ) {
        $(".slider-scale__point:nth-child(5)").addClass("slider-scale__point--active");
    } else {
        $(".slider-scale__point:nth-child(5)").removeClass("slider-scale__point--active");
    }

    if(value >= 29 ) {
        $(".slider-scale__point:nth-child(6)").addClass("slider-scale__point--active");
    } else {
        $(".slider-scale__point:nth-child(6)").removeClass("slider-scale__point--active");
    }

    if(value >= 34 ) {
        $(".slider-scale__point:nth-child(7)").addClass("slider-scale__point--active");
    } else {
        $(".slider-scale__point:nth-child(7)").removeClass("slider-scale__point--active");
    }

}

/* ROUND SLIDER INITIALIZATION */