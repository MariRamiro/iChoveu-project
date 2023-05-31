const TOKEN = import.meta.env.VITE_TOKEN;
const fetchSearchByTerm = (term) => fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`);

export const searchCities = async (term) => {
  const response = await fetchSearchByTerm(term);
  const data = await response.json();
  console.log(response);
  if (data.length === 0) window.alert('Nenhuma cidade encontrada');
  return data;
};

const fetchWeatherByCityUrl = (cityURL) => fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=${cityURL}`);

export const getWeatherByCity = async (cityURL) => {
  const response = await fetchWeatherByCityUrl(cityURL);
  const data = await response.json();
  const { name, country } = data.location;
  const { temp_c: temp } = data.current;
  const { text: condition, icon } = data.current.condition;

  // const {
  //   current: {
  //     temp_c: temp,
  //     condition: { text, icon } },
  //   location: { name, country },
  // } = data;
  return { name, country, temp, condition, icon };
};
