import app from "./app.ts";

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Acquisitions service is running on http://localhost:${PORT}\n`);
});
