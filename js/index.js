let content = document.querySelector("main .container .row");
document.querySelector("form input").addEventListener("input", searching);

async function getLink(country) {
  let response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=242580ffadf942b2a72134018241410&q=${country}&days=3`
  );
  let data = await response.json();
  getDay1(data);
  getDay2(data);
  getDay3(data);
}

function searching(typing) {
  getLink(typing.target.value);
}

function getDay1(data) {
  let date1 = new Date(data.forecast.forecastday[0].date);
  let day1 = date1.toLocaleDateString("en-US", { weekday: "long" });
  content.innerHTML = `<div class="col-lg-4">
                    <div class="inner">
                        <div class="header d-flex justify-content-between">
                            <div class="day sec-color">${day1}</div>
                            <div class="date sec-color">${data.forecast.forecastday[0].date}</div>
                        </div>
                        <div class="forecast-body p-3 ps-4">
                            <div class="location pt-3 sec-color">${data.location.name}</div>
                            <div class="temp">${data.current.temp_c}<sup>o</sup>C</div>
                            <div class="state-img">
                                <img src="${data.current.condition.icon}" width="70">
                            </div>
                            <div class="state py-3">${data.current.condition.text}</div>
                            <div class="conditions pb-3"><span class="sec-color"><img src="./imgs/icon-umberella.png">
                                    ${data.current.humidity}%</span><span class="px-4 sec-color"><img src="./imgs/icon-wind.png" alt="">
                                    ${data.current.wind_kph} km/h</span><span class="sec-color"><img src="./imgs/icon-compass.png"> ${data.current.wind_dir}</span>
                            </div>
                        </div>
                    </div>
                </div>`;
}

function getDay2(data) {
  let date2 = new Date(data.forecast.forecastday[1].date);
  let day2 = date2.toLocaleDateString("en-US", { weekday: "long" });
  content.innerHTML += ` <div class="col-lg-4">
            <div class="inner-2 d-flex flex-column h-100">
              <div class="header">
                <div class="day-2 sec-color">${day2}</div>
              </div>
              <div
                class="forecast-body-2 d-flex flex-column align-items-center justify-content-center h-75"
              >
                <div class="state-img mb-2">
                  <img src="${data.forecast.forecastday[1].day.condition.icon}" width="50" />
                </div>
                <div class="temp-2 mt-3 h4 fw-bolder mb-0">
                  ${data.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C
                </div>
                <div class="temp-2-min mb-3 sec-color">${data.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>C</div>
                <div class="state">${data.forecast.forecastday[1].day.condition.text}</div>
              </div>
            </div>
          </div>`;
}

function getDay3(data) {
  let date3 = new Date(data.forecast.forecastday[2].date);
  let day3 = date3.toLocaleDateString("en-US", { weekday: "long" });
  content.innerHTML += `<div class="col-lg-4">
            <div class="inner-3 d-flex flex-column h-100">
              <div class="header">
                <div class="day-3 sec-color">${day3}</div>
              </div>
              <div
                class="forecast-body-3 d-flex flex-column align-items-center justify-content-center h-75"
              >
                <div class="state-img mb-2">
                  <img src="${data.forecast.forecastday[2].day.condition.icon}" width="50" />
                </div>
                <div class="temp-3 mt-3 h4 fw-bolder mb-0">
                  ${data.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C
                </div>
                <div class="temp-3-min mb-3 sec-color">${data.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C</div>
                <div class="state">${data.forecast.forecastday[2].day.condition.text}</div>
              </div>
            </div>
          </div>`;
}

getLink("Cairo");
