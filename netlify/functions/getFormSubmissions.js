// functions/getFormSubmissions.js
// const fetch = require("node-fetch");

exports.handler = async (event) => {
  const API_ENDPOINT = `https://api.netlify.com/api/v1/forms/YOUR_FORM_ID/submissions?access_token=${process.env.YOUR_ACCESS_TOKEN}`;

  try {
    const response = await fetch(API_ENDPOINT, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      // Not OK - handle responses other than 2xx
      return { statusCode: response.status, body: response.statusText };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Fetch error:", error);
    return { statusCode: 500, body: JSON.stringify({ msg: error.message }) };
  }
};
