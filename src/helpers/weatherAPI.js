const TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const response = await fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`);
  const data = await response.json();
  if (data.length === 0) window.alert('Nenhuma cidade encontrada');
  return data;
};

export const getWeatherByCity = async (cityURL) => {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`);
  const data = await response.json();
  const { name, country } = data.location;
  const { temp_c: temp } = data.current;
  const { text: condition, icon } = data.current.condition;
  return { name, country, temp, condition, icon };
};

export const getForecastWeekdays = async (url) => {
  const week = 7;
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?lang=pt&key=${TOKEN}&q=${url}&days=${week}`);
  const data = await response.json();
  const { forecastDay } = data.forecast;
  const forecastList = forecastDay.map((info) => {
    const { information } = info;
    const { maxtemp_c: maxTemp, minitempo_c: minTemp } = info.day;
    const { text: condition, icon } = info.day.condition;
    return { information, maxTemp, minTemp, condition, icon };
  });
  return forecastList;
};
