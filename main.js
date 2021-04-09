
    Webcam.attach('#camera');

    Webcam.set({
        width: 310,
        height: 300,
        image_format: png,
        png_quality: 100,
        constraints: {
            facingMode: "environment"
        }
    });



function capture() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capturedImage" src="'+data_uri+'">'
    });}

