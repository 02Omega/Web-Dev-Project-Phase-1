This project is a React application that replicates the main features of the Airbnb homepage. It focuses on building a responsive and interactive user interface using functional components and React hooks.

## Project Description

The Airbnb Clone includes the following main components:

- Navbar: Displays the logo, navigation links, and user menu.
- SearchBar: Allows users to input a location and initiate a search.
- Categories: Shows a horizontally scrollable list of category buttons.
- ListingCard: Displays property information including image, title, type, capacity, price, and rating.
- Footer: Contains links to different pages and social media icons.

The application uses React hooks for state management and side effects, and Tailwind CSS for styling.


## Assumptions and Design Decisions

1. Mock Data: The application uses mock listing data instead of fetching from a real API.

2. Styling: Tailwind CSS was chosen which allows for rapid development and easy customization.

3. Responsiveness: The layout is designed to be responsive, adapting to both desktop and mobile devices.

4. State Management: React's built-in useState hook is used for managing local state.

5. Performance: The useEffect hook is used to fetch mock data when the component mounts

6. Accessibility: Basic accessibility features are implemented

7. Component Structure: The application is structured into reusable components.

8. Category Filtering: A simple category filtering mechanism is implemented.