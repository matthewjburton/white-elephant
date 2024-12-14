# Full-Stack Project Template

This template provides a ready-to-use setup for building full-stack applications using **React**, **Vite**, **Express**, **Node.js**, **TypeScript**, **Playwright**, **Vitest**, **Prettier**, **ESLint**, and a CI/CD pipeline. It is structured with separate folders for the **frontend**, **backend**, and **end-to-end tests**. This template aims to streamline the development of full-stack applications, offering a robust setup with the latest tools and best practices.

---

## Table of Contents

- [Project Structure](#project-structure)
- [Frontend](#frontend)
- [Backend](#backend)
- [End-to-End Tests](#end-to-end-tests)
- [CI/CD Pipeline](#cicd-pipeline)
- [Getting Started](#getting-started)
- [Commands](#commands)

---

## Project Structure

```
.
├── .github
│   └── workflows
│       └── pipeline.yml
├── backend/
│   ├── migrations/
│   ├── src/
│   │   ├── app.ts
│   │   ├── controllers/
│   │   │   ├── ping.ts
│   │   │   └── testing.ts
│   │   ├── index.ts
│   │   ├── models/
│   │   └── util/
│   │       ├── config.ts
│   │       ├── logger.ts
│   │       └── middleware.ts
│   └── tests/
│       ├── example.test.js
│       ├── helper.js
│       └── testSetup.js
├── end-to-end-tests/
│   ├── test-results/
│   └── tests/
│       ├── example.spec.js
│       └── helper.js
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── services/
    │   ├── App.tsx
    │   ├── main.tsx
    │   └── types.ts
    └── tests/
        ├── Example.test.tsx
        └── testSetup.ts
```

---

## Frontend

The **frontend** folder contains a **React** application set up with **Vite** and **TypeScript**. It includes the necessary configurations for **ESLint**, **Prettier**, and **Vitest** to ensure code quality, style, and testing. The frontend is designed to be highly modular, allowing you to easily add components, services, and hooks.

### Key Technologies

- **React**: Frontend UI library.
- **Vite**: Build tool for fast development and production builds.
- **TypeScript**: Static typing for better code quality and tooling.
- **ESLint**: JavaScript linter to enforce coding standards.
- **Prettier**: Code formatter for consistent code style.
- **Vitest**: Unit testing framework for React components.

### Getting Started (Frontend)

1. **Install Dependencies:**

```bash
cd frontend
npm install
```

2. **Development Mode:**

To start the development server:

```bash
npm run dev
```

This will run the app locally at http://localhost:3000 (by default).

3. **Build for Production:**

To create a production build:

```bash
npm run build
```

4. **Run Tests:**

To run unit tests using Vitest:

```bash
npm run test
```

---

## Backend

The **backend** folder is set up for building a **Node.js** and **Express** API using **TypeScript**. It includes configuration files for **ESLint**, **Vitest**, and other necessary utilities to streamline development.

### Key Technologies

- **Express**: Web framework for building REST APIs.
- **Node.js**: Server-side JavaScript runtime.
- **TypeScript**: Static typing for better maintainability.
- **ESLint**: Linter for consistent code.
- **Vitest**: Unit testing framework for the backend.

### Environment Configuration

Before running the backend server, you need to set up environment variables.

1. Create a `.env` File:

Duplicate the provided `.env.example` file:

```bash
cp .env.example .env
```

2. Fill Out the Environment Variables:

Open the `.env` file and fill in the required values:

```env
PORT=3000
TEST_DATABASE_URI=your_test_database_uri
DEV_DATABASE_URI=your_dev_database_uri
PROD_DATABASE_URI=your_prod_database_uri
```

Replace `your_test_database_uri`, `your_dev_database_uri`, and `your_prod_database_uri` with the respective database connection strings.

### Getting Started (Backend)

1. **Install Dependencies:**

```bash
cd backend
npm install
```

2. **Development Mode:**

To start the development server with ts-node-dev:

```bash
npm run dev
```

This will start the backend API on the default port (usually http://localhost:3000).

3. **Build for Production:**

To build the backend for production:

```bash
npm run build
```

4. **Run Tests:**

To run unit tests for the backend:

```bash
npm run test
```

---

# End-to-End Tests

The **end-to-end-tests** folder is configured with **Playwright** for automated browser testing. Playwright tests simulate real user interactions to ensure the frontend and backend work together as expected.

## Key Technologies

- **Playwright**: End-to-end testing framework for browser automation.
- **Vitest**: Test runner for Playwright tests.
- **TypeScript**: For writing type-safe tests.

## Getting Started (End-to-End Tests)

1. **Install Dependencies:**

```bash
cd end-to-end-tests
npm install
```

2. **Run Playwright Tests:**

To execute end-to-end tests:

```bash
npm run test
```

This will run the Playwright tests to ensure that the frontend and backend work as expected.

---

# CI/CD Pipeline

The template includes a **CI/CD pipeline** configured in GitHub Actions, located in the `.github/workflows/pipeline.yml` file. The pipeline automatically runs linting, testing, and building processes when pushing changes to the repository or creating pull requests.

## Steps in the CI/CD Pipeline:

1. **Linting:** Runs ESLint on both frontend and backend code to ensure code quality.
2. **Testing:** Executes unit tests for both frontend and backend using Vitest and Playwright for end-to-end tests.
3. **Build:** Builds the frontend and backend projects for production.
4. **Deployment:** The pipeline can deploy the application and tag releases upon merging pull requests into the main branch.

## Setting the Respository Secrets

The pipeline requires two GitHub secrets to function:

- `TEST_DATABASE_URI`: URI of the test database.
- `FLY_AUTH_TOKEN`: Authentication token for deployment.

### Adding Secrets to the Repository

1. Navigate to your repository on GitHub.
2. Go to **Settings** > **Secrets and Variables** > **Actions** > **New Repository Secret**.
3. Add the following secrets:
   - `TEST_DATABASE_URI`
   - `FLY_AUTH_TOKEN`

## Using the Pipeline

- The pipeline will automatically run on pushes and pull requests.
- To skip the deploy and tag steps in a pull request, include `#skip` in any commit message within the pull request.

## Branch Protection

To maintain code quality and deployment reliability, enable branch protection on the main branch.

### Setting Up Branch Protection Rules:

1. Go to **Settings** > **Branches** > **Rulesets** > **New Ruleset**.
2. Add `include default branch` to the **Target branches**
3. Configure the ruleset to:
   - **Require a pull request before merging**.
   - **Require status checks to pass before merging**.
4. Add the following required status checks:
   `deployment_pipeline`
   `tag_release`

By following these steps, the CI/CD pipeline will enforce high standards for your code and ensure smooth deployments.

---

# Getting Started

To get started with the template, follow these steps:

1. **Clone the Repository:**

```bash
git clone https://github.com/matthewb-ATEC/template.git
cd template
```

2. **Detach from the Repository:**

```bash
rm -rf .git
git init
git add .
git commit -m "Initial commit - based on template"
git remote add origin https://github.com/matthewb-ATEC/your-new-project.git
git push -u origin main
```

3. **Install Dependencies:**

Install dependencies for the frontend, backend, and end-to-end tests.

```bash
cd frontend
npm install
cd ../backend
npm install
cd ../end-to-end-tests
npm install
```

4. **Run the Development Server:**

- Frontend: npm run dev in the frontend directory.
- Backend: npm run dev in the backend directory.

5. **Run Tests:**

- Unit tests for frontend: npm run test in the frontend directory.
- Unit tests for backend: npm run test in the backend directory.
- End-to-end tests: npm run test in the end-to-end-tests directory.

---

# Commands

## Frontend Commands

- npm run dev: Start the frontend development server.
- npm run build: Build the frontend for production.
- npm run test: Run frontend unit tests.

## Backend Commands

- npm run dev: Start the backend server in development mode.
- npm run build: Build the backend for production.
- npm run test: Run backend unit tests.

## End-to-End Test Commands

- npm run test: Run end-to-end Playwright tests.

---

# Customizing the Template

This template is designed to be easily customizable. You can add more frontend and backend features by editing the respective code in the frontend and backend directories. Additionally, you can modify the CI/CD pipeline in .github/workflows/pipeline.yml to suit your project's needs.

---

# Contributing

Feel free to fork and modify this template for your own projects. Contributions are welcome!
