

# Personal Portfolio — Neo-Brutalist Mechatronics Engineer

## Design System
- **Background:** Off-white (`#F5F5F0`) with Electric Blue (`#0066FF`) as the primary accent
- **Borders:** 3px solid black on all containers, buttons, cards, and images
- **Shadows:** Hard drop shadows (`4px 4px 0px #000`) — intensified on hover (`8px 8px 0px #000`)
- **Typography:** `Space Mono` for headings, system sans-serif for body text
- **Buttons:** Flat, blocky, no rounded corners — with slight translate + shadow shift on hover for a "physical press" feel
- **Cards:** Sharp corners (0 or 2px radius max), thick borders, high contrast

---

## Pages & Sections

### 1. Navigation Bar (Global)
- Fixed top bar with thick bottom border
- Logo/Name on the left
- Links: Home, Projects, Blog, Experience, Links, Contact
- Prominent **"Download CV"** button styled as a chunky blue block in the nav
- Mobile: hamburger menu with a full-screen overlay

### 2. Hero Section (Home — `/`)
- Large bold headline: **"Building the Bridge Between Hardware and Software."**
- Short subtitle introducing the Mechatronics student persona
- Call-to-action buttons: "View Projects" and "Get in Touch"
- **Tech Stack Grid** below the hero — a row of blocky cards/icons for Python, C++, MATLAB, CAD, ROS, and Circuit Design, each with thick borders and the blue accent on hover

### 3. Projects Showcase (`/projects`)
- Responsive grid (3 columns desktop, 1 column mobile)
- Each project card includes:
  - Thumbnail image area
  - Title, short description, and tech tags
  - "View Source" and "Live Demo" buttons
- Hover effect: card translates up-left and shadow grows
- 6 realistic placeholder projects (e.g., Line-Following Robot, MATLAB Simulation, ROS Navigation, PCB Design, 3D Printed Gripper, IoT Sensor Dashboard)

### 4. Blog Feed (`/blog`)
- Top bar with a **search input** (thick bordered) and **tag filter chips** (Robotics, Embedded Systems, AI, CAD, General)
- Blog post cards in a list layout with title, date, tags, and excerpt
- Clicking a card opens a detail view (`/blog/:slug`) with full article content
- 4-5 placeholder articles with realistic Mechatronics topics
- Data stored in a local TypeScript file — structured so it can easily be swapped for Supabase later

### 5. Experience Timeline (`/experience`)
- Vertical timeline with alternating left/right entries on desktop, single-column on mobile
- Thick connecting line with blue accent dots at each node
- Entries for: University start, key courses, first internship, major project milestones, current status
- Each node is a bordered card with date, title, and description

### 6. Linkpage (`/links`)
- Mobile-optimized, centered vertical layout
- Profile image/avatar at top with thick border
- Full-width stacked buttons: LinkedIn, GitHub, Resume Download, and 2-3 recent project links
- Each button uses the Neo-Brutalist block style with icon + label

### 7. Contact Page (`/contact`)
- Industrial-styled form: Name, Email, Message fields with thick borders and blue focus states
- Large, bold email address displayed above the form
- Submit button with chunky styling
- Form validates inputs client-side and shows a success toast on submission

---

## Responsive Design
- Mobile-first layout throughout
- Navigation collapses to a hamburger menu on small screens
- Project grid stacks to single column
- Timeline switches to single-column layout
- All touch targets sized for mobile usability

