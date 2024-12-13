document.addEventListener("DOMContentLoaded" , function(){

    

    const inputbox = document.getElementById("inputtext");
    const searchbutton = document.getElementById("search");
    const windspeed = document.getElementById("windspeedvalue");
    const temp = document.getElementById("temperature");
    const humidity = document.getElementById("humidityvalue");
    const image = document.getElementById("weatherimage");
    const mausam = document.getElementById("mausam");
    const place = document.getElementById("location");
    const hidden = document.querySelector(".hidden");
  const errorcontainer = document.querySelector(".error")
    async function fetchweather(location){
       
       const API_KEY = "342c368d2d31f07a4ddb0d580c0981ba";
      try{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY }`;
            searchbutton.textContent="searching..";
            searchbutton.disabled = true;

            const response = await fetch(url);
            if(!response.ok){
                throw new Error("Location not found");
            }
            const data = await response.json();
          
            
            console.log(data);

             updateweather(data);
        }
        catch(error){
            
            errorcontainer.style.display="flex"; 
        }
        finally{
            searchbutton.textContent = "Get Wheather";
      searchbutton.disabled = false;
        }

    }
    function validlocation(location){
        if(location === ""){
            alert("enter your city");
            return false;
        }
    return true;

    
}
   
    function updateweather(data){
        hidden.style.display="flex";
        temp.innerHTML = Math.round(data.main.temp)+"°C";
        windspeed.innerHTML= data.wind.speed+"km/H";
        humidity.innerHTML = data.main.humidity+"%";
        place.innerHTML = data.name;
        mausam.innerHTML = data.weather[0].description;
        
          if(data.cod === `404`){
             errorcontainer.style.display="flex"; 
             return;
          }
        switch(data.weather[0].main){
            case 'Clouds':
                image.src="Clouds.png"
                break;
            case 'Mist':
                image.src="mist.png" 
                break;  
            case 'Snow':
                image.src="snow.png"
                break;   
            case 'Haze':
                image.src="Haze.png"
                break;
            case 'Smoke':
                image.src="Haze.png"
                break;  
            case 'Rain':
                image.src="rain.png"
                break;          
            default:
                 image.src = "clear.png"
        }


    }

    searchbutton.addEventListener('click' , function(){
        const location = inputbox.value ;
        console.log("location" , location);
        if(validlocation(location)){
          fetchweather(location);
        }
    })

}) 