# OpsZLandscape

A comprehensive landscape view of Operations and DevOps tools, platforms, and companies. This interactive web application provides a collapsible, searchable interface to explore the operations technology ecosystem.

## Features

- **Collapsible Categories**: All categories start collapsed by default for a focused view
- **Search & Filter**: Find specific companies or tools quickly
- **Multiple View Modes**: Switch between grid and card views
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Interactive Navigation**: Smooth animations and hover effects
- **Statistics View**: Comprehensive analytics of the landscape

## Technology Stack

- **React 18** with modern hooks and functional components
- **Vite** for fast development and optimized builds
- **CSS3** with custom animations and responsive design
- **GitHub Pages** ready for deployment

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kashishdatta/OpsZLandscape.git
cd OpsZLandscape/opsz-landscape-vite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── LandscapeGrid.jsx    # Main landscape view with collapsible categories
│   ├── NavigationBar.jsx    # Top navigation with search and filters
│   └── StatsView.jsx        # Statistics and analytics view
├── data/
│   └── landscapeData.js     # Landscape data with companies and categories
├── App.jsx                  # Main application component
└── main.jsx                 # Application entry point
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with React and Vite for optimal performance
- Icons from Feather Icons
- Company logos from Clearbit Logo API
