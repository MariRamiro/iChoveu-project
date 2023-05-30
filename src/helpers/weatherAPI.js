const TOKEN = import.meta.env.VITE_TOKEN;
const fetchSearchByTerm = (term) => fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`);

export const searchCities = async (term) => {
  const response = await fetchSearchByTerm(term);
  const data = await response.json();
  const { name } = data;
  if (name.length === 0) window.alert('Nenhuma cidade encontrada');
  return data;
};

const fetchWeatherByCityUrl = (cityURL) => `http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`;

export const getWeatherByCity = async (cityURL) => {
  const response = fetchWeatherByCityUrl(cityURL);
  const data = await response.json();
  const {
    current: {
      temp_c: temp,
      condition: { text, icon } },
    location: { name, country },
  } = data;
  return { name, country, temp, text, icon };
};
