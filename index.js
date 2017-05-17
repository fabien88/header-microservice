module.exports = (req, res) => {
  const {
    ['user-agent'] : userAgent,
    ['accept-language'] : acceptLanguage,
    ['x-forwarded-for'] : ipaddress,
  } = req.headers;

  const matchSoftware = userAgent.match(/\((.*?)\)/);
  const software = matchSoftware ? matchSoftware[1] : userAgent;

  const language = acceptLanguage.substring(0,2);

  res.end(JSON.stringify({ ipaddress, software,  language }))
}
