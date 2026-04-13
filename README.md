# Anass El Ghalabzouri — Portfolio

A premium full-stack portfolio website with a **Dreamy 3D Glassmorphism** aesthetic.

**Frontend**: React 18 + Vite + Framer Motion + Tailwind CSS  
**Backend**: Laravel 10 REST API

---

## Quick Start

### Frontend

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

Open http://localhost:5173

### Backend

```bash
cd backend

# 1. Install Laravel if not already present
composer create-project laravel/laravel . "^10.0"

# 2. Copy files (overwrite with the provided ones)
# The files in this folder go into the corresponding Laravel directories.

# 3. Set up environment
cp .env.example .env
php artisan key:generate

# 4. Create database
mysql -u root -e "CREATE DATABASE anass_portfolio;"

# 5. Run migrations and seeders
php artisan migrate
php artisan db:seed

# 6. Start the server
php artisan serve
```

API runs at http://localhost:8000

---

## How to install the Backend files into a fresh Laravel project

After `composer create-project laravel/laravel backend "^10.0"`:

| File in this repo                                      | Destination in Laravel project                         |
|--------------------------------------------------------|--------------------------------------------------------|
| `backend/routes/api.php`                               | `routes/api.php`                                       |
| `backend/app/Models/*.php`                             | `app/Models/`                                          |
| `backend/app/Http/Controllers/*.php`                   | `app/Http/Controllers/`                                |
| `backend/database/migrations/*.php`                    | `database/migrations/`                                 |
| `backend/database/seeders/*.php`                       | `database/seeders/`                                    |
| `backend/config/cors.php`                              | `config/cors.php`                                      |
| `backend/.env.example`                                 | `.env` (then edit credentials)                         |

---

## API Endpoints

| Method | Endpoint              | Description            |
|--------|-----------------------|------------------------|
| GET    | `/api/projects`       | List all projects      |
| GET    | `/api/projects/{id}`  | Single project detail  |
| GET    | `/api/skills`         | List all skills        |
| POST   | `/api/contact`        | Send contact message   |

**POST /api/contact** body:
```json
{ "name": "John", "email": "john@example.com", "message": "Hello..." }
```

---

## Frontend Environment

Create `frontend/.env`:
```
VITE_API_URL=http://localhost:8000/api
```

---

## Project Structure

```
portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx        Fixed glass navbar
│   │   │   ├── Hero.jsx          Asymmetric hero with floating cards
│   │   │   ├── Sparkles.jsx      Floating sparkle particles
│   │   │   ├── TiltCard.jsx      3D perspective tilt wrapper
│   │   │   ├── FilterBar.jsx     Glass filter strip
│   │   │   ├── ProjectCard.jsx   Individual project card
│   │   │   ├── ProjectsGrid.jsx  Animated project grid
│   │   │   ├── Skills.jsx        Animated skill progress bars
│   │   │   ├── Contact.jsx       Glass contact form + social links
│   │   │   └── Footer.jsx        Minimal dark footer
│   │   ├── hooks/
│   │   │   └── useScrollReveal.js
│   │   ├── services/
│   │   │   └── api.js
│   │   └── styles/
│   │       └── globals.css
│   └── ...
└── backend/
    ├── app/Http/Controllers/
    ├── app/Models/
    ├── database/migrations/
    ├── database/seeders/
    └── routes/api.php
```

---

## Features

- Glassmorphism design with `backdrop-filter: blur()`
- Floating animated cards in the Hero section
- 3D perspective tilt on project cards (mouse-driven)
- Staggered Framer Motion scroll reveals
- Animated skill progress bars (triggered on scroll)
- Sparkle particle system
- Contact form with validation + Laravel API backend
- Filter bar for projects (tech, type, year, category)
- Responsive design (mobile-first)
- Works without the backend (fallback data included)

---

## Author

**Anass El Ghalabzouri**  
Full Stack Developer (React + Laravel)  
📍 Tanger, Maroc  
📧 anassreda88@gmail.com  
🔗 [linkedin.com/in/anass-el-ghalabzouri](https://linkedin.com/in/anass-el-ghalabzouri)  
🐙 [github.com/Anasselghalbzouri](https://github.com/Anasselghalbzouri)
