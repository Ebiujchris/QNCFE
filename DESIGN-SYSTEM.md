# QNC Solutions - Design System

## Overview
Consistent design across all pages based on the current homepage layout.

## Color Palette
- **Primary Maroon**: `#7c2d12` (burgundy/maroon)
- **Dark Maroon**: `#991b1b`
- **Primary Blue**: `#1e40af`
- **Light Blue**: `#3b82f6`
- **Background**: `linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)`
- **Text Dark**: `#1f2937`
- **Text Gray**: `#374151`

## Page Structure

### 1. Hero Section (All Pages)
```
- Background: Image with gradient overlay
- Gradient: linear-gradient(135deg, rgba(30, 64, 175, 0.9), rgba(124, 45, 18, 0.8))
- Height: 40vh - 50vh
- Content: Centered title + subtitle
- Floating decorative circles
```

### 2. Content Section
```
- Background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)
- Padding: 40px - 60px vertical
- Cards: Glass morphism effect
  - background: rgba(255, 255, 255, 0.25)
  - backdropFilter: blur(10px)
  - border: 1px solid rgba(255, 255, 255, 0.3)
  - borderRadius: 16px
  - boxShadow: 0 8px 32px rgba(0, 0, 0, 0.1)
```

### 3. Grid Layouts
```
- 2 columns: minmax(450px, 1fr)
- 3 columns: minmax(300px, 1fr)
- Gap: 20px - 30px
- Responsive: auto-fit
```

### 4. Images
```
- Border radius: 12px
- Object fit: cover
- Box shadow: 0 4px 15px rgba(0,0,0,0.2)
- Hover effect: transform scale(1.05)
```

### 5. Typography
```
- Page Title (h1): 2.5rem, bold, gradient text
- Section Title (h2): 2rem, bold, primary-blue
- Card Title (h3): 1.1rem - 1.3rem, semibold, #10b981
- Body: 0.85rem - 1rem, line-height: 1.4-1.6
```

### 6. Buttons
```
Primary Button:
- background: linear-gradient(135deg, #7c2d12, #991b1b)
- color: white
- padding: 8px 16px / 10px 20px
- borderRadius: 20px - 25px
- fontWeight: 600
- boxShadow: 0 4px 12px rgba(124, 45, 18, 0.3)
- hover: transform translateY(-2px)

Outline Button:
- background: rgba(255, 255, 255, 0.2)
- border: 1px solid rgba(255, 255, 255, 0.3)
- backdropFilter: blur(10px)
```

### 7. Footer
```
- Background: dark (#1f2937 or darker)
- Color: white/gray
- Sections: Logo, Links, Contact, Social
- Copyright + "Made by INFINITI ANALYTICS"
```

## Page Templates

### Home
✅ Already implemented correctly

### About Us
- Hero: About QNC title
- Section 1: Company profile card
- Section 2: Mission & Values grid
- Section 3: Team members carousel/grid
- Section 4: Core values with icons

### Services
✅ Recently updated (simplified)
- Hero: Our Services
- Grid: Service cards with images
- Each card: Title, description, book button
- CTA section at bottom

### Contact
- Hero: Contact Us
- Two columns: Form + Contact info + Map
- Social media links
- Call to action

### Careers
- Hero: Join Our Team
- Section 1: Why work with us
- Section 2: Open positions (if any)
- Section 3: Application process
- CTA: Apply now

## Components to Create

### 1. PageHero Component
```jsx
<PageHero 
  title="Page Title"
  subtitle="Page description"
  backgroundImage="/images/bg.jpg"
/>
```

### 2. GlassCard Component
```jsx
<GlassCard>
  <content>
</GlassCard>
```

### 3. ServiceCard Component
```jsx
<ServiceCard
  image="/path"
  title="Service"
  description="..."
  icon="🏥"
/>
```

## Implementation Priority

1. ✅ Home page (already good)
2. ✅ Services page (recently updated)
3. 🔄 About page (needs refinement)
4. ⏳ Contact page (needs update)
5. ⏳ Careers page (needs update)

## Key Design Principles

1. **Consistency**: Same hero style, same card style, same buttons
2. **Glass Morphism**: Frosted glass effect on cards
3. **Gradient Overlays**: On hero images for readability
4. **White Space**: Generous padding and margins
5. **Smooth Animations**: Hover effects, transitions
6. **Mobile First**: Responsive grids and layouts
7. **Professional**: Clean, modern, trustworthy

## Next Steps

To apply this design to all pages:
1. Create reusable components (PageHero, GlassCard)
2. Update each page to use consistent styling
3. Ensure responsive behavior on all screen sizes
4. Test on mobile, tablet, and desktop
