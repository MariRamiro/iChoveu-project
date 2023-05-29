const TOKEN = import.meta.env.VITE_TOKEN;
const fetchSearchByTerm = (term) => fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`);

export const searchCities = async (term) => {
  const response = await fetchSearchByTerm(term);
  const data = await response.json();
  const { name } = data;
  if (name !== term) window.alert('Nenhuma cidade encontrada');
  return data;
};

const fetchWeatherByCityUrl = (cityURL) => `http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`;

export const getWeatherByCity = async (cityURL) => {
  const response = await fetchWeatherByCityUrl(cityURL);
  const data = await response.json();
  const { temp_c, condition.text, condition.icon } = data.current;
  return {`temp: ${temp_c}, condition: ${condition.text}, icon: ${condition.icon}`};
};
