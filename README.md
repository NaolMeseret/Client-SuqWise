# 🛍️ SuQwise Backend API

A simple and powerful RESTful API built with **Node.js**, **Express**, and **MySQL**, designed to serve product, user, and review data for the SuQwise e-commerce platform.

---

## 🚀 Base URL

For local development:

```
http://localhost:5000/api
```

If deployed (example):

```Perfect, Shambel 👏 — you’re almost production-ready!
Since your backend now handles **users**, **products**, **reviews**, and **database seeding**, let’s create a **professional `README.md`** file that clearly explains everything for your **frontend developer** (or anyone consuming your API).

Here’s a clean, well-structured example 👇

---

# 🛍️ SuQwise Backend API

A simple and powerful RESTful API built with **Node.js**, **Express**, and **MySQL**, designed to serve product, user, and review data for the SuQwise e-commerce platform.

---

## 🚀 Base URL

For local development:

```

http://localhost:5000/api

```

If deployed (example):

```

https://suqwise-backend.onrender.com/api

````

---

## ⚙️ Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/suqwise-backend.git
   cd suqwise-backend
````

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create `.env` file:**

   ```env
   PORT=5000
   JWT_SECRET=your_jwt_secret
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=suqwise
   ```

4. **Run the server:**

   ```bash
   npm start
   ```

   The API will run on `http://localhost:5000`.

---

## 📁 Folder Structure

```
suqwise-backend/
├── controllers/
│   ├── user.controller.js
│   ├── product.controller.js
│   └── review.js
├── models/
│   ├── user.model.js
│   ├── product.model.js
│   └── review.model.js
├── routes/
│   ├── user.routes.js
│   ├── product.routes.js
│   └── reviewroute.js
├── db.js
├── app.js
├── server.js
└── .env
```

---

## 🧾 API Documentation

### 🧍‍♂️ User Routes

**Base URL:** `/users`

| Method | Endpoint    | Description         | Auth Required |
| ------ | ----------- | ------------------- | ------------- |
| POST   | `/register` | Register new user   | ❌            |
| POST   | `/login`    | Login existing user | ❌            |
| PUT    | `/:id`      | Update user info    | ✅            |
| DELETE | `/:id`      | Delete user         | ✅            |

---

### 🛒 Product Routes

**Base URL:** `/products`

| Method | Endpoint | Description              |
| ------ | -------- | ------------------------ | ---------------- |
| V      | GET      | `/`                      | Get all products |
| GET    | `/:id`   | Get single product by ID |
| POST   | `/`      | Add a new product        |
| PUT    | `/:id`   | Update product           |
| DELETE | `/:id`   | Delete product           |

**Example Product Response:**

```json
{
  "id": 2,
  "sku": "PROD-E-200002",
  "title": "Ultrabook Slim 14",
  "description": "Ultrabook Slim 14 full description",
  "base_price": "1299.00",
  "image_url": "https://cdn.example.com/images/ultrabook-14.jpg",
  "rating": "4.60",
  "delivery_time_days": 5,
  "store_id": 1,
  "store_name": "Main Store",
  "category_id": 1,
  "category_name": "Electronics",
  "created_at": "2025-10-27T10:11:00.000Z",
  "updated_at": "2025-10-27T10:11:00.000Z"
}
```

---

### ⭐ Review Routes

**Base URL:** `/api/reviews`

| Method | Endpoint              | Description                            |
| ------ | --------------------- | -------------------------------------- |
| POST   | `/`                   | Create a new review                    |
| GET    | `/product/:productId` | Get all reviews for a specific product |
| PUT    | `/:reviewId`          | Edit a review                          |
| DELETE | `/:reviewId`          | Delete a review                        |

**Example Create Review Request:**

```json
{
  "user_id": 1,
  "product_id": 2,
  "rating": 5,
  "comment": "Excellent laptop, very fast and lightweight!"
}
```

**Example Response:**

```json
{
  "message": "Review created successfully",
  "review": {
    "id": 101,
    "user_id": 1,
    "product_id": 2,
    "rating": 5,
    "comment": "Excellent laptop, very fast and lightweight!",
    "created_at": "2025-10-29T10:11:00.000Z"
  }
}
```

---

### 🌱 Seed Route

**Base URL:** `/api/seed`

Used to populate the database with sample data for development/testing.

**Endpoint:**

```
GET /api/seed
```

**Response:**

```json
{ "message": "Database seeded successfully" }
```

---

## 💬 Example Frontend Fetch

Example (React or Vanilla JS):

```js
// Get all products
fetch("http://localhost:5000/api/products")
  .then((res) => res.json())
  .then((data) => console.log(data))

// Get reviews for a product
fetch("http://localhost:5000/api/reviews/product/2")
  .then((res) => res.json())
  .then((data) => console.log(data))
```

---

## 🩺 Health Check

```
GET /api/health
```

**Response:**

```json
{ "status": "ok" }
```

---

## 🧠 Notes for Frontend Developers

- All data is returned in **JSON** format.
- CORS is enabled — no proxy needed.
- Use the full base URL (`/api/...`) for requests.
- JWT token required for protected routes (user update, delete).

---

Would you like me to make this README downloadable as a real `README.md` file (ready to put in your repo)?

https://suqwise-backend.onrender.com/api

````

---

## ⚙️ Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/suqwise-backend.git
   cd suqwise-backend
````

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create `.env` file:**

   ```env
   PORT=5000
   JWT_SECRET=your_jwt_secret
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=suqwise
   ```

4. **Run the server:**

   ```bash
   npm start
   ```

   The API will run on `http://localhost:5000`.

---

## 📁 Folder Structure

```
suqwise-backend/
├── controllers/
│   ├── user.controller.js
│   ├── product.controller.js
│   └── review.js
├── models/
│   ├── user.model.js
│   ├── product.model.js
│   └── review.model.js
├── routes/
│   ├── user.routes.js
│   ├── product.routes.js
│   └── reviewroute.js
├── db.js
├── app.js
├── server.js
└── .env
```

---

## 🧾 API Documentation

### 🧍‍♂️ User Routes

**Base URL:** `/users`

| Method | Endpoint    | Description         | Auth Required |
| ------ | ----------- | ------------------- | ------------- |
| POST   | `/register` | Register new user   | ❌            |
| POST   | `/login`    | Login existing user | ❌            |
| PUT    | `/:id`      | Update user info    | ✅            |
| DELETE | `/:id`      | Delete user         | ✅            |

---

### 🛒 Product Routes

**Base URL:** `/products`

| Method | Endpoint | Description              |
| ------ | -------- | ------------------------ |
| GET    | `/`      | Get all products         |
| GET    | `/:id`   | Get single product by ID |
| POST   | `/`      | Add a new product        |
| PUT    | `/:id`   | Update product           |
| DELETE | `/:id`   | Delete product           |

**Example Product Response:**

```json
{
  "id": 2,
  "sku": "PROD-E-200002",
  "title": "Ultrabook Slim 14",
  "description": "Ultrabook Slim 14 full description",
  "base_price": "1299.00",
  "image_url": "https://cdn.example.com/images/ultrabook-14.jpg",
  "rating": "4.60",
  "delivery_time_days": 5,
  "store_id": 1,
  "store_name": "Main Store",
  "category_id": 1,
  "category_name": "Electronics",
  "created_at": "2025-10-27T10:11:00.000Z",
  "updated_at": "2025-10-27T10:11:00.000Z"
}
```

---

### ⭐ Review Routes

**Base URL:** `/api/reviews`

| Method | Endpoint              | Description                            |
| ------ | --------------------- | -------------------------------------- |
| POST   | `/`                   | Create a new review                    |
| GET    | `/product/:productId` | Get all reviews for a specific product |
| PUT    | `/:reviewId`          | Edit a review                          |
| DELETE | `/:reviewId`          | Delete a review                        |

**Example Create Review Request:**

```json
{
  "user_id": 1,
  "product_id": 2,
  "rating": 5,
  "comment": "Excellent laptop, very fast and lightweight!"
}
```

**Example Response:**

```json
{
  "message": "Review created successfully",
  "review": {
    "id": 101,
    "user_id": 1,
    "product_id": 2,
    "rating": 5,
    "comment": "Excellent laptop, very fast and lightweight!",
    "created_at": "2025-10-29T10:11:00.000Z"
  }
}
```

---

### 🌱 Seed Route

**Base URL:** `/api/seed`

Used to populate the database with sample data for development/testing.

**Endpoint:**

```
GET /api/seed
```

**Response:**

```json
{ "message": "Database seeded successfully" }
```

---

## 💬 Example Frontend Fetch

Example (React or Vanilla JS):

```js
// Get all products
fetch("http://localhost:5000/api/products")
  .then((res) => res.json())
  .then((data) => console.log(data))

// Get reviews for a product
fetch("http://localhost:5000/api/reviews/product/2")
  .then((res) => res.json())
  .then((data) => console.log(data))
```

---

## 🩺 Health Check

```
GET /api/health
```

**Response:**

```json
{ "status": "ok" }
```

---

## 🧠 Notes for Frontend Developers

- All data is returned in **JSON** format.
- CORS is enabled — no proxy needed.
- Use the full base URL (`/api/...`) for requests.
- JWT token required for protected routes (user update, delete).
