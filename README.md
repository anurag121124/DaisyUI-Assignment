# FlexGrid Analytics Dashboard

This project is a responsive dashboard layout built for "FlexGrid Analytics." It uses HTML, CSS, DaisyUI, and Tailwind CSS to create a visually appealing and functional interface. The layout is designed to adapt gracefully across devices, ensuring a seamless user experience.

---

## **Instructions for Viewing the Project**

### **Prerequisites**
1. A modern browser (e.g., Chrome, Firefox, Edge).
2. A local web server (optional for advanced testing).

### **Steps to View**
1. Clone or download the project folder.
2. Open the `index.html` file in a web browser.
3. To view the responsive behavior:
   - Resize the browser window.
   - Test the layout on devices like smartphones, tablets, or desktops.

---

## **Approach Taken**

### **1. Layout and Responsiveness**
- **Header**: Implemented using FlexBox for alignment and includes a sticky behavior.
  - Contains a logo, search bar, and user avatar with a dropdown menu.
- **Sidebar**: Designed as a fixed vertical menu on larger screens and collapsible on smaller screens.
  - Utilized Tailwind’s `hidden` class and `transform` utilities for collapsibility.
- **Main Content**:
  - **Analytics Cards**: Built with DaisyUI’s `card` component, arranged in a responsive grid.
  - **Table Section**: Used DaisyUI’s `table` class to ensure responsiveness and modern design.
- **Footer**: Fixed at the bottom of the page, aligned with social media icons.

### **2. DaisyUI Utilization**
- Styled components like buttons, cards, tables, and badges using DaisyUI classes.
- Applied DaisyUI utilities for hover effects and transitions.
- Incorporated DaisyUI’s dark mode toggle with the `swap` component.

### **3. Media Queries for Responsiveness**
- Used Tailwind CSS breakpoints to adapt the layout for:
  - Mobile devices (stacked layout, hidden sidebar).
  - Tablets (two-column card layout, collapsible sidebar).
  - Desktops (four-column card layout, fixed sidebar).

### **4. Aesthetic Design**
- Clean and minimalistic design using DaisyUI’s default theme.
- Applied hover effects and subtle animations for interactivity.

---

## **Folder Structure**
```plaintext
FlexGrid-Analytics/
|-- index.html       # Main HTML file
|-- styles.css       # Custom CSS for additional styling
|-- assets/          # Contains images and icons
|-- script.js        # JavaScript for interactivity (if needed in the future)
```

---

## **Features**
- **Dark Mode**: Toggle between light and dark themes.
- **Responsive Design**: Adapts seamlessly to mobile, tablet, and desktop screens.
- **Interactive Components**: Includes hover effects and transitions.

---

## **Potential Enhancements**
1. Implement a JavaScript-based sidebar toggle for improved interactivity.
2. Add advanced chart visualizations using Chart.js.
3. Include additional pages for deeper analytics.

---

## **Credits**
- **DaisyUI**: For pre-designed components and utilities.
- **FontAwesome**: For icons used throughout the layout.

---

### **Author**
Anurag Singh
