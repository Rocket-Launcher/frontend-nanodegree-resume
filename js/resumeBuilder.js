var name = "1996 BMW 328i";
var role = "Car Info";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
    "name": name,
    "role": role,
    "contact": {
        "mobile": "3162596049",
        "email": "jesse.lake.allen@gmail.com"
    },
    "picture": "images/car.jpg",
    "welcome": "My 328i repair page",
    "skills": ["JavaScript", "Java", "C", "PHP", "SQL"]
};

var car = {
    "cars": [{
        "make": "BMW",
        "model": "328i",
        "year": 1996,
        "engine": "2.8L M52",
        "vin": "WBACD3323TAV18003",
        "mileage": 230000
    }]
}

var projects = {
    "projects": [{
        "maintenance": [{
            "bearingProject": {
                "frontBearings": ["Front Wheel Bearings", "Detroit Axle", 53.25, "1 Year", "Purchased"],
                "rotorSetScrew": ["Rotor Set Screw", "Genuine", 6.02, null, "Purchased"],
                "46mmSocket": ["46mm socket", "Powerbuilt", 12.99, "Lifetime", "Wishlist"]
            },
            "misc": {
                "bleederScrew": ["Brass Bleeder Screw", "Tulga Fifth Wheel Co", 9.95, "Limited Lifetime", "Wishlist"],
                "hoodShocks": ["Hood Shocks", "BOXI", 16.99, "Limited Lifetime", "Wishlist"]
            }
        }],
        "cosmetic": ["front bumper"]
    }]
}

$("#main").append(car.oilChange);
$("#main").append(car["mpg"]);
