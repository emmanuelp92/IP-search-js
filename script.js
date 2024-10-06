//const url = 'https://ip-directory.p.rapidapi.com/lookup/142.147.89.228?risk=true&hostname=false';
const url = "";
const OPTIONS = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "1172edceb7mshda02b806bcbe268p16a91cjsn8e4ebe19e56d",
    "x-rapidapi-host": "ip-reputation-geoip-and-detect-vpn.p.rapidapi.com",
  },
};

const searchIpInfo = (ip) => {
  return fetch(
    `https://ip-reputation-geoip-and-detect-vpn.p.rapidapi.com/?ip=${ip}`,
    OPTIONS
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

const $ = (selector) => document.querySelector(selector);

const $form = $("#form");
const $input = $("#input");
const $submit = $("#submit");
const $results = $("#results");

$form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const { value } = $input;
  if (!value) return;

  $submit.setAttribute("disabled", "");
  $submit.setAttribute("aria-busy", "true");

  console.log(searchIpInfo(value));
  const ipInfo = await searchIpInfo(value);

  if (ipInfo) {
    $results.innerHTML = JSON.stringify(ipInfo, null, 2);
  }
  $submit.removeAttribute("disabled");
  $submit.removeAttribute("aria-busy");
});
