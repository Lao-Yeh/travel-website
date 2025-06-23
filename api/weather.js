export default async function handler(req, res) {
  const { location } = req.query;
  const apiKey = 'CWA-34476997-F821-45C5-8BDE-8F5F7A4E6609'; // 你的中央氣象局 API Key
  const url = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-001?Authorization=${apiKey}&locationName=${encodeURIComponent(location)}`;
  const response = await fetch(url);
  const data = await response.json();
  res.status(200).json(data);
}
