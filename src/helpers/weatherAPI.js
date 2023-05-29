const TOKEN = import.meta.env.VITE_TOKEN;
const fetchWeatherByTerm = (term) => fetch(`http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`);

export const searchCities = async (term) => {
  const response = await fetchWeatherByTerm(term);
  const data = await response.json();
  const { name } = data;
  if (name !== term) window.alert('Nenhuma cidade encontrada');
  return data;
};

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};
