const apiDomain = "https://restcountries.com/v3.1";

// Fetch all countries
async function fetchCountries() {
  try {
    if (!apiDomain) {
      return [];
    }
    const res = await fetch(`${apiDomain}/all`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

// Fetch a single country
async function fetchCountry(cca3) {
  try {
    if (!apiDomain) {
      return null;
    }
    const res = await fetch(`${apiDomain}/alpha?codes=${cca3}`);

    if (!res) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return cca3;
  }
}

export { fetchCountries, fetchCountry };
