# Student Academic Dashboard - HTML Version

This is a standalone HTML/CSS/JavaScript version of the Student Academic Dashboard that displays semester-wise academic performance.

## Files Structure

```
html-version/
├── index.html          # Main HTML file
├── styles.css          # All styling (responsive design)
├── script.js           # JavaScript functionality and data
└── README.md           # This file
```

## Features

- **Student Profile Display**: Shows student information including photo, name, roll number, branch, year, and CGPA
- **Semester Overview**: Grid layout showing all 8 semesters with GPA and completion status
- **Detailed Semester View**: Comprehensive table showing subject-wise marks breakdown
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Print Support**: Print-friendly version of semester details
- **Export Functionality**: Export semester data as CSV
- **Navigation**: Smooth navigation between dashboard and semester details

## How to Use

1. **Open the Dashboard**: Open `index.html` in any modern web browser
2. **View Semesters**: Click on any completed semester card to view detailed marks
3. **Navigate**: Use the "Back to Home" button to return to the main dashboard
4. **Print**: Use the Print button in semester details to print the marks table
5. **Export**: Use the Export button to download semester data as CSV

## Semester Data

The application includes complete data for:
- **Semester 1**: GPA 8.83 (10 subjects)
- **Semester 2**: GPA 9.28 (10 subjects)
- **Semester 3**: GPA 8.95 (11 subjects)
- **Semester 4**: GPA 8.95 (11 subjects)
- **Semesters 5-8**: Not completed yet (will show "coming soon" message)

## Customization

### Update Student Information
Edit the `studentData.student` object in `script.js`:

```javascript
student: {
    name: "Your Name",
    rollNumber: "Your Roll Number",
    branch: "Your Branch",
    year: "Your Year",
    cgpa: "Your CGPA",
    profilePhoto: "path/to/your/photo.jpg"
}
```

### Add/Update Semester Data
Edit the `studentData.semesters` array in `script.js` to add new semesters or update existing ones.

### Styling Changes
Modify `styles.css` to change colors, fonts, layout, or add new styling.

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Any modern browser with ES6 support

## Technical Details

- **Pure HTML/CSS/JS**: No frameworks or libraries required
- **Responsive**: Uses CSS Grid and Flexbox for layout
- **Font Icons**: Uses Font Awesome for icons
- **Modern JavaScript**: ES6+ features for clean code
- **Print Styles**: Optimized CSS for printing
- **Local Storage Ready**: Can be extended to save user preferences

## Features Included

✅ Student profile with photo  
✅ Semester cards with GPA display  
✅ Detailed marks table  
✅ Subject type badges (Theory/Lab)  
✅ Grade badges with color coding  
✅ Print functionality  
✅ CSV export  
✅ Responsive design  
✅ Smooth navigation  
✅ Browser history support  
✅ URL hash navigation  

## Deployment

Simply upload all files to any web server or hosting service. No server-side processing required - it's a pure client-side application.

You can also run it locally by opening `index.html` directly in your browser.