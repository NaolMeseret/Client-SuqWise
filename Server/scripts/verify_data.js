const pool = require("../models/db");

async function verify() {
  try {
    console.log("Checking connection and core tables...");

    const queries = {
      products_count: "SELECT COUNT(*) AS c FROM products",
      stores_count: "SELECT COUNT(*) AS c FROM stores",
      categories_count: "SELECT COUNT(*) AS c FROM categories",
      brands_count: "SELECT COUNT(*) AS c FROM brands",
    };

    for (const [k, q] of Object.entries(queries)) {
      try {
        const [rows] = await pool.query(q);
        console.log(`${k}:`, rows[0].c);
      } catch (err) {
        console.warn(`${k} query failed:`, err.message);
      }
    }

    console.log("\nSample products (5):");
    try {
      const [rows] = await pool.query(
        "SELECT id, sku, title, base_price, owner_store_id, category_id FROM products ORDER BY id DESC LIMIT 5"
      );
      console.table(rows);
    } catch (err) {
      console.warn("Sample products query failed:", err.message);
    }

    console.log("\nSample stores (5):");
    try {
      const [rows] = await pool.query(
        "SELECT id, name, domain FROM stores LIMIT 5"
      );
      console.table(rows);
    } catch (err) {
      console.warn("Sample stores query failed:", err.message);
    }

    console.log("\nSample categories (5):");
    try {
      const [rows] = await pool.query(
        "SELECT id, name, slug FROM categories LIMIT 10"
      );
      console.table(rows);
    } catch (err) {
      console.warn("Sample categories query failed:", err.message);
    }

    console.log("\nSample brands (5):");
    try {
      const [rows] = await pool.query(
        "SELECT id, name, slug FROM brands LIMIT 10"
      );
      console.table(rows);
    } catch (err) {
      console.warn("Sample brands query failed:", err.message);
    }
  } catch (err) {
    console.error("Verification failed:", err.message);
    process.exitCode = 1;
  } finally {
    try {
      await pool.end();
    } catch (e) {}
  }
}

if (require.main === module) verify();

module.exports = verify;
