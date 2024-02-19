import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/api/anima", (req, res) => {
  const record = [
    { name: "Naruto", ranking: 1, mc: "Naruto" },
    { name: "Dragonballz", ranking: 2, mc: "Goku" },
    { name: "One-piece", ranking: 3, mc: "luffy" },
    { name: "Chainswaman", ranking: 4, mc: "Danji" },
  ];
  res.json(record)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
