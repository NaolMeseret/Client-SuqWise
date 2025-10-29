const pool = require("../models/db");

async function check() {
  try {
    const [rows] = await pool.query("SHOW TABLES FROM suqwise_app;");
    console.log("Tables in suqwise_app:");
    rows.forEach((r) => console.log(r[Object.keys(r)[0]]));
  } catch (err) {
    console.error("Error checking schema:", err.message);
    process.exit(1);
  } finally {
    try {
      await pool.end();
    } catch (e) {}
  }
}

if (require.main === module) check();
