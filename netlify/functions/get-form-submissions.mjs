// functions/get-form-submissions.js

export default async (req, context) => {
  const API_ENDPOINT = `https://api.netlify.com/api/v1/forms/65faa9ef27f0350008a03f5a/submissions?access_token=${process.env.YOUR_ACCESS_TOKEN}`;

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

    return new Response(JSON.stringify(data));
  } catch (error) {
    console.error("Fetch error:", error);
    return { statusCode: 500, body: JSON.stringify({ msg: error.message }) };
  }
};
