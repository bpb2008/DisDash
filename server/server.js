import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pg from "pg";
import { expressjwt } from "express-jwt";
import JwksRsa from "jwks-rsa";

dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT;
const { Pool } = pg;

app.use(
  cors({
    origin: process.env.URL || "http://localhost:5173",
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept",
  })
);

const pool = new Pool({
  connectionString: process.env.LOCALHOST_DATABASE_URL,
});

const checkJwt = expressjwt({
  secret: JwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://process.env.VITE_AUTH0_DOMAIN/.well-known/jwks.json`,
  }),
  audience: "",
  issuer: ``,
  algorithms: ["RS256"],
});

app.use(checkJwt);

app.post("/api/users", async (req, res) => {
  const { auth0_id, email, name } = req.body;

  try {
    let user = await pool.query("SELECT * FROM users WHERE auth0_id = $1", [
      auth0_id,
    ]);

    if (user.rows.length === 0) {
      user = await pool.query(
        "INSERT INTO users (auth0_id, email, name) VALUES ($1, $2, $3) RETURNING *",
        [auth0_id, email, name]
      );
    }
    res.json(user.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.get("/api/travel-plans/:user_id", async (req, res) => {
  const { user_id } = req.params;

  try {
    const plans = await pool.query(
      "SELECT * FROM travel_plans WHERE user_id = $1",
      [user_id]
    );
    res.json(plans.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.post("/addFlight", async (req, res) => {
  const {
    airline,
    flightNumber,
    departureDate,
    departureTime,
    returnDate,
    returnTime,
  } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO flights (airline, flightNumber, departureDate, departureTime, returnDate, returnTime) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        airline,
        flightNumber,
        departureDate,
        departureTime,
        returnDate,
        returnTime,
      ]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.log("Error adding new flight information:", error);
    res.status(500).json({ error: "Internal Service Error" });
  }
});

app.post("/addHotel", async (req, res) => {
  const { hotelName, checkInDate, checkInTime, checkOutDate, checkOutTime } =
    req.body;

  try {
    const result = await pool.query(
      "INSERT INTO hotels (hotelName, checkInDate, checkInTime, checkOutDate, checkOutTime) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [hotelName, checkInDate, checkInTime, checkOutDate, checkOutTime]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.log("Error adding new hotel information:", error);
    res.status(500).json({ error: "Internal Service Error" });
  }
});

app.post("/addThemePark", async (req, res) => {
  const { themeParkName, themeParkDate, themeParkTickets } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO themeparks (themeParkName, themeParkDate, themeParkTickets) VALUES($1, $2, $3) RETURNING *",
      [themeParkName, themeParkDate, themeParkTickets]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.log("Error adding new theme park information:", error);
    res.status(500).json({ error: "Internal Service Error" });
  }
});

app.post("/addDining", async (req, res) => {
  const { restaurantName, diningDate, diningTime } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO dining (restaurantName, diningDate, diningTime) VALUES($1, $2, $3) RETURNING *",
      [restaurantName, diningDate, diningTime]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.log("Error adding new dining information:", error);
    res.status(500).json({ error: "Internal Service Error" });
  }
});

app.post("/addRentalCar", async (req, res) => {
  const { rentalCompany, pickUpDate, pickUpTime, dropOffDate, dropOffTime } =
    req.body;

  try {
    const result = await pool.query(
      "INSERT INTO rentalcar (rentalCompany, pickUpDate, pickUpTime, dropOffDate, dropOffTime) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [rentalCompany, pickUpDate, pickUpTime, dropOffDate, dropOffTime]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.log("Error adding new rental car information:", error);
    res.status(500).json({ error: "Internal Service Error" });
  }
});

app.post("/addActivity", async (req, res) => {
  const { activity, activityDate, activityTime } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO activities (activity, activityDate, activityTime) VALUES($1, $2, $3) RETURNING *",
      [activity, activityDate, activityTime]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.log("Error adding new activity:", error);
    res.status(500).json({ error: "Internal Service Error" });
  }
});
