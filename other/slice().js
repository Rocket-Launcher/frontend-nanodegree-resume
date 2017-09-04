var s = "audacity";

var udacityizer = function(s) {
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    s = "U" + s.slice(2);


    return s;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));
