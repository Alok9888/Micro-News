# Micro News Portal

A modern, responsive news portal built with React that aggregates and displays news articles from The Guardian API. This project demonstrates a clean, professional news website layout with optimized image handling and proper author attribution.

## 🚀 Features

- Modern, responsive design
- Dynamic news article layout with optimized image resolution
- Category-based article filtering
- Smooth animations and transitions
- Newsletter subscription functionality
- Video content support
- Markdown rendering for article content
- Parallax scrolling effects
- Mobile-friendly interface
- Proper author attribution throughout the site

## 🛠️ Tech Stack

- React 19
- Vite
- Bootstrap 5
- SASS
- Axios
- React Router DOM
- Various UI enhancement libraries:
  - FancyApps UI
  - AOS (Animate On Scroll)
  - React Scroll Parallax
  - Video.js
  - Isotope Layout

## 📦 Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd micro-news-portal
```

2. Install dependencies:
```bash
bun install
```

3. Create a `.env.local` file in the root directory and add your API key:
```
VITE_GUARDIAN_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
bun run dev
```

## 🔧 Configuration

The project is currently configured to use The Guardian API, but it's designed to be flexible. To use a different news API:

1. Modify the API service in `src/services/guardianApi.js`
2. Update the data transformation logic to match your API's response format
3. Adjust the environment variables accordingly

## 📁 Project Structure

```
src/
├── assets/         # Static assets (images, fonts, etc.)
├── components/     # Reusable React components
├── content/        # Static content and data
├── pages/          # Page components
├── services/       # API and other services
├── App.jsx         # Main application component
├── index.scss      # Global styles
└── main.jsx        # Application entry point
```

## 🖼️ Image Handling

The project includes optimized image handling:

- Standard resolution (1000px) for most article listings
- High resolution (2000px) for featured articles and article detail pages
- Automatic image resolution adjustment based on context
- Fallback images for articles without images

## 👤 Author Attribution

The project properly displays author information:

- Author names are shown for all articles
- Fallback to "The Guardian" when no author is specified
- Consistent author display across all components

## 🎨 Customization

The project maintains a clean separation between the UI components and the data source. To customize:

1. **Layout**: Modify components in the `components/` directory
2. **Styling**: Update SASS files in `src/assets/scss/`
3. **Data Source**: Modify the API service in `src/services/`
4. **Image Resolution**: Adjust the `ensureHighResImage` function in `guardianApi.js`

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📫 Contact

For any queries or suggestions, please open an issue in the repository.

