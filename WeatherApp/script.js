// variables for the city/weather search
var currentCity = $("#current-city");
var currTemp = $("#temperature");
var currHumi= $("#humidity");
var currWindSp=$("#wind-speed");
var currUVindex= $("#uv-index");
var listCity=[];

var city="";
var searchCity = $("#search-city");
var searchButton = $("#search-button");

function find(c){
    for (var i=0; i<listCity.length; i++){
        if(c.toUpperCase()===listCity[i]){
            return -1;
        }
    }
    return 1;
}
//API Key
var APIKey="13d655e88e5c1e8536d13e0ccbc25740";


function displayWeather(event){
    event.preventDefault();
    if(searchCity.val().trim()!==""){
        city=searchCity.val().trim();
        currentWeather(city);
    }
}

function currentWeather(city){
    
    var queryURL= "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=" + APIKey;
    $.ajax({
        url:queryURL,
        method:"GET",
    }).then(function(response){

        //image url
        var weatherImg= response.weather[0].icon;
        var imgURL="https://openweathermap.org/img/wn/"+weatherImg +"@2x.png";
        var date=new Date(response.dt*1000).toLocaleDateString();
        
        $(currentCity).html(response.name +"("+date+")" + "<img src="+imgURL+">");

       
        var tempF = (response.main.temp);
        $(currTemp).html((tempF).toFixed(2)+"&#8457");
        $(currHumi).html(response.main.humidity+"%");
        var ws=response.wind.speed;
        var windsmph=(ws).toFixed(1);
        $(currWindSp).html(windsmph+"MPH");
        
        UVIndex(response.coord.lon,response.coord.lat);
        forecast(response.id);

            // Sorage Info 
        if(response.cod===200){
            listCity=JSON.parse(localStorage.getItem("cityname"));
            console.log(listCity);
            if (listCity === null){
                listCity = [];
                listCity.push(city.toUpperCase()
                );
                localStorage.setItem("cityname",JSON.stringify(listCity));
                addToList(city);
            }else {
                if(find(city)>0){
                    listCity.push(city.toUpperCase());
                    localStorage.setItem("cityname",JSON.stringify(listCity));
                    addToList(city);
                }
            }
        }

    });
}
function UVIndex(ln,lt){
    var uvqURL="https://api.openweathermap.org/data/2.5/uvi?appid="+ APIKey+"&lat="+lt+"&lon="+ln;
    $.ajax({
            url:uvqURL,
            method:"GET"
            }).then(function(response){
                $(currUVindex).html(response.value);
            });
}
    
function forecast(cityid){
    
    var queryforcastURL="https://api.openweathermap.org/data/2.5/forecast?id="+ cityid + "&units=imperial" + "&appid=" + APIKey;
    $.ajax({
        url:queryforcastURL,
        method:"GET"
    }).then(function(response){
        
        for (i = 0; i < 5; i++){
            var date= new Date((response.list[((i+1)*8)-1].dt)*1000).toLocaleDateString();
            var imgURL= response.list[((i+1)*8)-1].weather[0].icon;
            var imgURL="https://openweathermap.org/img/wn/"+imgURL+".png";
            var tempK= response.list[((i+1)*8)-1].main.temp;
            var tempF=(((tempK))).toFixed(2);
            var humidity= response.list[((i+1)*8)-1].main.humidity;
        
            $("#Date"+i).html(date);
            $("#Img"+i).html("<img src="+imgURL+">");
            $("#Temp"+i).html(tempF+"&#8457");
            $("#Humidity"+i).html(humidity+"%");
        }
        
    });
}

function addToList(c){
    var listEl= $("<li>"+c.toUpperCase()+"</li>");
    $(listEl).attr("class","list-group-item");
    $(listEl).attr("data-value",c.toUpperCase());
    $(".list-group").append(listEl);
}


function invokePastSearch(event){
    var liEl=event.target;
    if (event.target.matches("li")){
        city=liEl.textContent.trim();
        currentWeather(city);
    }

}

function loadlastCity(){
    $("ul").empty();
    var listCity = JSON.parse(localStorage.getItem("cityname"));
    if(listCity!==null){
        listCity=JSON.parse(localStorage.getItem("cityname"));
        for(i=0; i<listCity.length;i++){
            addToList(listCity[i]);
        }
        city=listCity[i-1];
        
    }

}


$("#search-button").on("click",displayWeather);
$(document).on("click",invokePastSearch);
$(window).on("load",loadlastCity);
