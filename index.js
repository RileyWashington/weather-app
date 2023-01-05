function showConditions(response) {
    console.log(response.data);
    document.querySelector("h1").innerHTML = response.data.name;
    document.querySelector("#cityTemp").innerHTML = Math.round(
      response.data.main.temp
    );
  }
  
  function searchCity(event) {
    event.preventDefault();
    let apiKey = "50c2acd53349fabd54f52b93c8650d37";
    let city = document.querySelector("#search-text-input").value;
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(`${apiURL}`).then(showConditions);
  }
  
  let form = document.querySelector("form");
  form.addEventListener("submit", searchCity);
  
  let currentDate = new Date();
  console.log(currentDate);
  console.log(currentDate.getDay());
  console.log(currentDate.getHours());
  console.log(currentDate.getMinutes());
  
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  
  let day = days[currentDate.getDay()];
  let hour = [currentDate.getHours()];
  let minute = [currentDate.getMinutes()];
  
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${day} ${hour}:${minute}`;
  