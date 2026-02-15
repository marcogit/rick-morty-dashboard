# Rick and Morty Character Dashboard

[Check the Walkthrough & Visual Documentation here!](./WALKTHROUGH.md)
A dashboard application built with **Nuxt 3**, **Pinia**, and **Tailwind CSS** to manage characters from the Rick and Morty API. This project demonstrates authentication flow, state management, API consumption, and responsive UI implementation.

## 🚀 Deployment

The easiest way to deploy this Nuxt 3 project is using **Vercel** or **Netlify**.

### Deploy to Vercel (Recommended)

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/new).
3. Import your repository.
4. Vercel will automatically detect Nuxt 3 and configure the build settings.
5. Click **Deploy**.

### Deploy to Netlify

1. Push your code to a GitHub repository.
2. Go to [Netlify](https://app.netlify.com/start).
3. Connect your GitHub account and select the repository.
4. Settings should be auto-detected (Build command: `npm run build`, Publish directory: `dist` or `.output/public`).
5. Click **Deploy site**.

- **Framework**: [Nuxt 3](https://nuxt.com/) (Vue 3 + Composition API)
- **State Management**: [Pinia](https://pinia.vuejs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **API**: [Rick and Morty API](https://rickandmortyapi.com/)

## ✨ Key Features

- **Authentication (Simulated)**:
  - Login page with form validation.
  - Protected routes using Nuxt middleware (`auth`).
  - Token-based session simulation (persisted via cookies).
- **Character Dashboard**:
  - Grid view of characters with status indicators.
  - Real-time search filtering.
  - Pagination controls.
- **Favorites Management**:
  - Add/remove characters to favorites.
  - Persisted state using user's browser storage.
  - Dedicated favorites view.
- **Responsive Design**: Optimized for mobile and desktop views.

## 🛠️ Setup & Installation

Ensure you have [Node.js](https://nodejs.org/) installed (LTS recommended).

1.  **Clone the repository**:

    ```bash
    git clone <repository-url>
    cd prueba_tecnica
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    # or
    pnpm install
    # or
    yarn install
    ```

3.  **Run Development Server**:
    Start the development server at `http://localhost:3000`:

    ```bash
    npm run dev
    ```

4.  **Build for Production**:
    Build the application for production deployment:

    ```bash
    npm run build
    ```

    Preview the production build locally:

    ```bash
    npm run preview
    ```

## 🏗️ Architecture & Decisions

### 1. Component Structure

- Separated UI components (e.g., `CharacterCard`, `NavBar`) from business logic.
- Used **Nuxt pages** for routing and **layouts** for consistent structure.

### 2. State Management (Pinia)

- **Auth Store**: Manages simulated authentication state (token) and user session.
- **Favorites Store**: Handles the global state of favorite characters, with persistence to `localStorage` to survive page reloads.

### 3. Usage of Composables

- **`useCharacters`**: Encapsulates API fetching logic, pagination handling, and search state. This keeps components clean and logic reusable.

### 4. Styling

- Used **Tailwind CSS** for rapid UI development and ensuring responsiveness across devices.
- Custom components for recurring elements (Buttons, Inputs).

## 📂 Project Structure

- `components/`: Reusable UI components (CharacterCard, NavBar, etc.).
- `composables/`: Shared logic (e.g., `useCharacters` for API calls).
- `layouts/`: App layouts.
- `middleware/`: Route middleware (e.g., `auth` for protection).
- `pages/`: Application views and routing.
- `stores/`: Pinia state stores (`auth`, `favorites`).
- `types/`: TypeScript interfaces/types.
- `assets/css/`: Global styles and Tailwind configuration access.

## 🧪 Verification

To verify the implementation:

1.  Navigate to `/` -> You should be redirected to `/login`.
2.  Log in with any email and a password > 6 chars.
3.  Browse characters, use search, and navigate pages.
4.  Add characters to favorites and check the `/favorites` page.
