export default async function handler(req, res) {
  const cities = [
    { name: "宜蘭市", query: "Yilan,TW" },
    { name: "羅東鎮", query: "Luodong,TW" },
    { name: "五結鄉", query: "Wujie,TW" }
  ];
  const apiKey = process.env.OWM_API_KEY || "你的APIKEY"; // 本地測試可直接寫 key
  const fetchWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.query}&appid=${apiKey}&units=metric&lang=zh_tw`;
    const res = await fetch(url);
    return res.json();
  };
  const weatherData = await Promise.all(cities.map(fetchWeather));
  res.status(200).json(weatherData);
}
