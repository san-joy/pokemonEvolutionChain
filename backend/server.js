const express = require("express");
const cors = require("cors");
const app = express();
const pokemonRoutes = require("./routes/pokemonRoute")

const PORT = process.env.PORT || 3000;
app.use(cors());
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use("/api", pokemonRoutes);


