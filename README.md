# NJ State Police Website

A modern, responsive React-based website for the New Jersey State Police department. This project features a dynamic carousel, responsive navigation, and informative sections to serve the public.

## Features

- Dynamic image carousel with auto-play functionality
- Responsive navigation with mobile menu support
- Search functionality
- Quick links section
- Current alerts display
- Mobile-first design approach
- Styled with styled-components

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd nj-police-site
```

2. Install dependencies:
```bash
npm install
```

3. Create the images directory in the public folder:
```bash
mkdir -p public/images
```

4. Add the required images to the `public/images` directory:
- recruit-2020a.jpg
- NJGUNStat-banner.jpg
- cuba-alert-5.jpg
- ocb-banner2.jpg
- Report-Data-Breaches-2.jpg

## Project Structure

```
nj-police-site/
├── public/
│   ├── images/
│   │   ├── recruit-2020a.jpg
│   │   ├── NJGUNStat-banner.jpg
│   │   └── ...
│   └── index.html
├── src/
│   ├── App.js
│   ├── styles.js
│   └── index.js
├── package.json
└── README.md
```

## Running the Application

To start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Styling

The project uses styled-components for styling. Main style definitions can be found in `src/styles.js`. Key styling features include:

- Responsive design breakpoints
- Custom styled components for each section
- Dynamic carousel styling
- Mobile menu animations
- Color themes and transitions

