
# Generate Cover Images for Blog Posts and Project Cards

## Overview

Use the Lovable AI image generation API (Nano banana model) to create 11 unique cover images -- 5 for blog posts and 6 for project cards -- then save them to the project and update the data files to reference them.

## Images to Generate

### Blog Post Covers (5 images)
1. **PID Tuning** -- A line-following robot on a black track with IR sensors glowing, top-down view, technical/engineering style
2. **ROS2 Navigation** -- A TurtleBot3 navigating a warehouse with a LIDAR scan overlay, futuristic blue tones
3. **KiCad PCB** -- A close-up of a green PCB with copper traces and components, electronics photography style
4. **SolidWorks FEA Gripper** -- A robotic gripper with colorful FEA stress heatmap overlay, CAD render style
5. **Mechatronics vs Mechanical** -- A split image showing mechanical gears on one side and circuit boards/code on the other

### Project Card Covers (6 images)
1. **Line-Following Robot** -- Arduino robot with wheels and IR sensor array on a white track
2. **6-DOF Robotic Arm** -- A simulated robotic arm in MATLAB-style wireframe with joint axes shown
3. **ROS2 Navigation Stack** -- A bird's-eye occupancy grid map with a planned path drawn through it
4. **Custom Motor Driver PCB** -- A fabricated PCB board with MOSFETs and capacitors, macro photography
5. **Adaptive 3D-Printed Gripper** -- A flexible TPU gripper grasping an irregular object, studio lighting
6. **IoT Sensor Dashboard** -- A monitor showing live charts and sensor data with an ESP32 board nearby

## Technical Steps

### Step 1: Create an Edge Function for Image Generation
Create a Supabase edge function (or inline script) that calls the Lovable image generation API (`ai.gateway.lovable.dev`) with prompts for each image. The generated base64 images will be saved as files in the `public/images/` directory.

**Actually -- simpler approach**: Generate the images directly using the API within the build step, save them as static files in the project.

### Step 2: Save Images to Project
Save each generated image as a PNG file under:
- `public/images/blog/` -- for blog cover images
- `public/images/projects/` -- for project card images

### Step 3: Update Data Files
- **`src/data/blog.ts`** -- Update each post's `coverImage` from `"/placeholder.svg"` to the new path (e.g., `"/images/blog/pid-tuning.png"`)
- **`src/data/projects.ts`** -- Update each project's `image` from `"/placeholder.svg"` to the new path (e.g., `"/images/projects/line-follower.png"`)

## Implementation Approach

Since generating 11 images sequentially would be slow, I will batch them in parallel groups. Each image will be generated with a descriptive prompt styled for a neo-brutalist engineering portfolio -- clean, bold, technical illustrations.

## Files to Create
- `public/images/blog/pid-tuning.png`
- `public/images/blog/ros2-navigation.png`
- `public/images/blog/kicad-pcb.png`
- `public/images/blog/solidworks-fea.png`
- `public/images/blog/mechatronics-vs-mechanical.png`
- `public/images/projects/line-follower.png`
- `public/images/projects/robotic-arm.png`
- `public/images/projects/ros2-nav-stack.png`
- `public/images/projects/motor-driver-pcb.png`
- `public/images/projects/3d-gripper.png`
- `public/images/projects/iot-dashboard.png`

## Files to Modify
- `src/data/blog.ts` -- Update all 5 `coverImage` values
- `src/data/projects.ts` -- Update all 6 `image` values
