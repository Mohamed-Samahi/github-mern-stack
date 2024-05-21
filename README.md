# GitHub Explorer App

GitHub Explorer is a web application that allows users to search for GitHub profiles and explore their repositories. The app provides detailed information about the repositories, including languages used, descriptions, number of stars and forks, and a button to clone the repository directly. It also features an explore page for logged-in users to browse popular repositories by programming language with pagination and caching for improved performance.

## Features

- **User Search**: Search for GitHub users and view their profiles, including repositories, followers, join date, and profile picture.
- **Repository Details**: View detailed information about repositories, including languages used, descriptions, number of stars and forks, and a clone button.
- **Caching**: Searched users and paginated repositories are cached for faster data retrieval and better performance.
- **Authentication**: Supported with Passport.js for secure user authentication.
- **Explore Page**: Logged-in users can explore popular repositories by programming language, with endless pagination and caching for recent results.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Express.js
- **Authentication**: Passport.js
- **Build Tool**: Vite

## Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/github-mern-stack.git
    ```

2. **Navigate to each folder and install dependencies**:

    For the backend, run the installation command at the root folder, where the package.json file exists:
    ```sh
    npm install
    cd ..
    ```

    For the frontend, navigate to the frontend folder and run the installation command:
    ```sh
    cd front-end
    npm install
    cd ..
    ```

3. **Set up environment variables**:
    Create a `.env` file at the top level of the app (in the `github-mern-stack` directory) and add the following environment variables:

    ```env
    GITHUB_API_KEY=your_github_api_key
    MONGO_URI=your_mongodb_connection_string
    GITHUB_CLIENT_ID=your_github_client_id
    GITHUB_CLIENT_SECRET=your_github_client_secret
    SESSION_SECRET=your_session_secret
    ```

    - **GITHUB_API_KEY**: Obtain this by creating a personal access token on GitHub. Go to your GitHub account settings, navigate to Developer settings -> Personal access tokens, and generate a new token with the necessary permissions.
    - **MONGO_URI**: This is your MongoDB connection string. You can get this from your MongoDB Atlas account or from your local MongoDB setup.
    - **GITHUB_CLIENT_ID** and **GITHUB_CLIENT_SECRET**: Register a new OAuth application on GitHub to get these. Go to your GitHub account settings, navigate to Developer settings -> OAuth Apps, and create a new OAuth app. The Client ID and Client Secret will be provided to you.

4. **Run the application**:
    First, start the backend server:
    ```sh
    cd backend
    npm run dev
    ```

    Then, start the frontend development server:
    ```sh
    cd front-end
    npm run dev
    ```

## Usage

1. **Search for GitHub Users**: Enter a GitHub username in the search bar to view their profile and repositories.
2. **Explore Popular Repositories**: Log in and navigate to the Explore page to browse popular repositories by programming language.
3. **Clone Repositories**: Click the clone button on any repository to copy the clone URL to your clipboard.

## Contact

For any questions or feedback, please open an issue on GitHub or contact me at [mohamedsamahi.work@gmail.com](mailto:mohamedsamahi.work@gmail.com).

## More Projects

For more projects, visit my portfolio at [mohamed-samahi.vercel.app](https://mohamed-samahi.vercel.app/).
