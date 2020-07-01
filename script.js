let input = document.getElementById("location");

// math for averages

function calculateAverage(temps) {
    return Math.round((temps.reduce ((a,b) => a + b, 0) / temps.length) -273);
}
// fetch
document.getElementById("run").addEventListener("click", function() {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + input.value + "&appid=a97de3c9b494930adff776986a307752").then((response) => {
        return response.json();
    })
        .then((data) => {
            console.log(data);

            // city

            document.getElementById("cityname").innerHTML= data['city']['name'];
            let tempList = [];
            let descriptionList = [];
            let iconList = [];
            for (let i = 0; i<40; i++) {
                tempList.push(data['list'][i]['main']['temp']);
                descriptionList.push(data['list'][i]['weather'][0]['description']);
                iconList.push(data['list'][i]['weather'][0]['icon']);
            }
            //days

            let dayOne = tempList.slice(0,8);
            let dayTwo = tempList.slice(8,16);
            let dayThree = tempList.slice(16,24);
            let dayFour = tempList.slice(24,32);
            let dayFive = tempList.slice(32,40);

            // averages

            let tempDayOne = calculateAverage(dayOne);
            let tempDayTwo = calculateAverage(dayTwo);
            let tempDayThree = calculateAverage(dayThree);
            let tempDayFour = calculateAverage(dayFour);
            let tempDayFive = calculateAverage(dayFive);

            // Inserting temperatures

            document.getElementById("temp1").innerHTML= tempDayOne + " " + "&#8451";
            document.getElementById("temp2").innerHTML= tempDayTwo + " " + "&#8451";
            document.getElementById("temp3").innerHTML= tempDayThree + " " + "&#8451";
            document.getElementById("temp4").innerHTML= tempDayFour + " " + "&#8451";
            document.getElementById("temp5").innerHTML= tempDayFive + " " + "&#8451";


            // Cutting all descriptions up in the 5 days

            let descriptionDayOne = descriptionList.slice(0,8);
            let descriptionDayTwo = descriptionList.slice(8,16);
            let descriptionDayThree = descriptionList.slice(16,24);
            let descriptionDayFour = descriptionList.slice(24,32);
            let descriptionDayFive = descriptionList.slice(32,40);


            document.getElementById("descriptionDay1").innerHTML= "Day: " + descriptionDayOne[3];
            document.getElementById("descriptionNight1").innerHTML= "Night: " + descriptionDayOne[6];
            document.getElementById("descriptionDay2").innerHTML= "Day: " + descriptionDayTwo[3];
            document.getElementById("descriptionNight2").innerHTML= "Night: " + descriptionDayTwo[6];
            document.getElementById("descriptionDay3").innerHTML= "Day: " + descriptionDayThree[3];
            document.getElementById("descriptionNight3").innerHTML= "Night: " + descriptionDayThree[6];
            document.getElementById("descriptionDay4").innerHTML= "Day: " + descriptionDayFour[3];
            document.getElementById("descriptionNight4").innerHTML= "Night: " + descriptionDayFour[6];
            document.getElementById("descriptionDay5").innerHTML= "Day: " + descriptionDayFive[3];
            document.getElementById("descriptionNight5").innerHTML= "Night: " + descriptionDayFive[6];

        })
});

