const db = require("./db");

async function findByEmail(email) {
  const [rows] = await db.query("SELECT * FROM users WHERE email = ? LIMIT 1", [
    email,
  ]);
  return rows && rows.length ? rows[0] : null;
}

async function findById(id) {
  const [rows] = await db.query(
    "SELECT id, email, first_name, last_name, phone, created_at FROM users WHERE id = ? LIMIT 1",
    [id]
  );
  return rows && rows.length ? rows[0] : null;
}

async function createUser({
  email,
  password_hash,
  first_name = null,
  last_name = null,
  phone = null,
}) {
  const [result] = await db.query(
    "INSERT INTO users (email, password_hash, first_name, last_name, phone) VALUES (?, ?, ?, ?, ?)",
    [email, password_hash, first_name, last_name, phone]
  );
  return await findById(result.insertId);
}

// Update user fields by ID
async function updateUser(id, { email, first_name, last_name, phone, password_hash }) {
  const [result] = await db.query(
    `UPDATE users 
     SET email = COALESCE(?, email),
         first_name = COALESCE(?, first_name),
         last_name = COALESCE(?, last_name),
         phone = COALESCE(?, phone),
         password_hash = COALESCE(?, password_hash),
         updated_at = NOW()
     WHERE id = ?`,
    [email, first_name, last_name, phone, password_hash, id]
  );
  return result.affectedRows ? await findById(id) : null;
}

// Delete user by ID
async function deleteUser(id) {
  const [result] = await db.query("DELETE FROM users WHERE id = ?", [id]);
  return result.affectedRows > 0;
}

module.exports = {
  findByEmail,
  createUser,
  findById,
  updateUser,
  deleteUser,
};
