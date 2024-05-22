async function getToken() {
  function toTimestamp(expDate) {
    // Given date string
    const dateString = expDate;

    // Split the date and time parts
    const [datePart, timePart] = dateString.split(" ");

    // Split the date into day, month, and year
    const [day, month, year] = datePart.split(".").map(Number);

    // Split the time into hours and minutes
    const [hours, minutes] = timePart.split(":").map(Number);

    // Create a Date object
    const date = new Date(year, month - 1, day, hours, minutes);

    // Get the timestamp (milliseconds since Unix epoch)
    const timestamp = date.getTime();
  }

  function isExpiredToken() {
    let expireDate = localStorage.getItem("expireDate");
    if (!expireDate) {
      return false;
    }

    let expDate = toTimestamp(expireDate);
    let currentDate = Date.now();

    if (expDate < currentDate) {
      return true;
    }
    return false;
  }

  isExpiredToken();

  if (
    localStorage.getItem("expireDate") ||
    !localStorage.getItem("token") ||
    isExpiredToken()
  ) {
    const resp = await fetch(import.meta.env.VITE_API_TOKEN_URL, {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(
          import.meta.env.VITE_CLIENT_ID + ":" + import.meta.env.VITE_SECRET_KEY
        )}`,
      },
      body: "grant_type=client_credentials",
    });
    const auth = await resp.json();
    const expireDate = getOneHourLater();
    localStorage.setItem("expireDate", expireDate);
    localStorage.setItem("token", auth.access_token);
  } else {
    return {
      date: localStorage.getItem("expireDate"),
      token: localStorage.getItem("token"),
    };
  }
}

function getOneHourLater() {
  let currentDate = new Date();
  let oneHourLater = new Date(currentDate.getTime() + 3600000);
  let day = String(oneHourLater.getDate()).padStart(2, "0");
  let month = String(oneHourLater.getMonth() + 1).padStart(2, "0");
  let year = oneHourLater.getFullYear();
  let hours = String(oneHourLater.getHours()).padStart(2, "0");
  let minutes = String(oneHourLater.getMinutes()).padStart(2, "0");

  return `${day}.${month}.${year} ${hours}:${minutes}`;
}

const oneHourLaterFormatted = getOneHourLater();

export { getToken };
