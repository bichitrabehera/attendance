// backend/models/UserModel.js
import { Pool } from 'pg';
import bcrypt from 'bcrypt';

const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
});

// Register a new user
export const registerUser = async (email, usn, password) => {
  const hashedPassword = await bcrypt.hash(password, 10); // 10 = salt rounds
  const query = 'INSERT INTO users (email, usn, password) VALUES ($1, $2, $3) RETURNING *';
  const values = [email, usn, hashedPassword];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Login user
export const loginUser = async (email, password) => {
  const query = 'SELECT * FROM users WHERE email = $1';
  const values = [email];
  const result = await pool.query(query, values);

  const user = result.rows[0];
  if (!user) return null;

  const isMatch = await bcrypt.compare(password, user.password);
  return isMatch ? user : null;
};
