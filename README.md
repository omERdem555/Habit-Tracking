# Habit Tracker

A React + TypeScript habit tracking MVP built with Vite.

## Features

- Add daily habits
- Soft-delete / archive habits
- Mark completion for today and undo it
- Current streak tracking
- Total completions and last marked date
- Yearly calendar visualization with clickable day details
- Persistent browser storage via LocalStorage
- State managed with `useReducer`

## Run locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Run with XAMPP

1. Build the app:
   ```bash
   npm run build
   ```
2. Apache XAMPP kök dizininde (`htdocs/Habit-Tracking`) bu proje zaten yer alıyorsa ekstra taşıma gerekmez.
3. Tarayıcıda aç:
   ```text
   http://localhost/Habit-Tracking/
   ```

Bu dizinde `index.php` dosyası `dist/index.html` sayfasına yönlendirme yapar.
