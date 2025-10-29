const fs = require("fs");
const path = require("path");
const pool = require("../models/db");

async function run(filePath) {
  const full = path.resolve(filePath);
  if (!fs.existsSync(full)) {
    console.error("SQL file not found:", full);
    process.exit(1);
  }
  const sql = fs.readFileSync(full, "utf8");
  try {
    console.log("Executing SQL file:", full);
    const [result] = await pool.query(sql);
    console.log(
      "Execution result:",
      result && result.affectedRows !== undefined
        ? `affectedRows=${result.affectedRows}`
        : "ok"
    );
  } catch (err) {
    console.error("SQL execution failed:", err);
    process.exit(1);
  } finally {
    try {
      await pool.end();
    } catch (e) {}
  }
}

if (require.main === module) {
  const f =
    process.argv[2] ||
    path.join(__dirname, "..", "sql", "insert_electronics_products.sql");
  run(f).catch((e) => {
    console.error(e);
    process.exit(1);
  });
}

module.exports = run;
