    function profile(person) {
        var src = "Images/About/" + person + ".jpg";
        show_image("Images/About/" + person + ".jpg", "Profile");
    }


    function show_image(src, alt) {
        var img = document.createElement("img");
        var element = document.getElementsByClassName("console")[0];
        img.src = src;
        img.alt = alt;
        element.appendChild(img);
    }

        function profile1(person) {
        var src = "Images/About/"  + person + ".jpg";
        show_image1("Images/About/"  + person + ".jpg", "Profile");
    }


    function show_image1(src, alt) {
        var img = document.createElement("img");
        var element = document.getElementsByClassName("console")[1];
        img.src = src;
        img.alt = alt;
        element.appendChild(img);
    }

        function profile2(person) {
        var src = "Images/About/"  + person + ".jpg";
        show_image2("Images/About/"  + person + ".jpg", "Profile");
    }


    function show_image2(src, alt) {
        var img = document.createElement("img");
        var element = document.getElementsByClassName("console")[2];
        img.src = src;
        img.alt = alt;
        element.appendChild(img);
    }

        function profile3(person) {
        var src = "Images/About/"  + person + ".jpg";
        show_image3("Images/About/"  + person + ".jpg", "Profile");
    }


    function show_image3(src, alt) {
        var img = document.createElement("img");
        var element = document.getElementsByClassName("console")[3];
        img.src = src;
        img.alt = alt;
        element.appendChild(img);
    }
