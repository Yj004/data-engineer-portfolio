# Profile Image Instructions

To add your profile image to the portfolio:

1. Save the image you shared as `profile-image.jpg` in this directory (`data-engineer-portfolio/public/images/`)

2. The image has been configured in the About component with:
   - A blue gradient background that matches the theme
   - A stylish border with the theme's accent color
   - A hover effect that shows the original image colors

3. If you want to adjust the styling, you can modify the following in `src/components/About.tsx`:
   - The background gradient: `bg-gradient-to-b from-primary to-blue-600`
   - The image blend mode: `mix-blend-overlay hover:mix-blend-normal`
   - The border styling: `border-2 border-secondary`

The image path is set to `/images/profile-image.jpg` which will be correctly resolved when the app is running. 