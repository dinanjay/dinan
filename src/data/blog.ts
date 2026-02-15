export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  coverImage: string;
  content: string;
}

export const blogTags = ["Robotics", "Embedded Systems", "AI", "CAD", "General"] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "pid-tuning-line-follower",
    title: "PID Tuning for a Line-Following Robot: Lessons from the Track",
    date: "2025-12-15",
    tags: ["Robotics", "Embedded Systems"],
    excerpt: "How I tuned a PID controller for my line-following robot and what I learned about control theory in practice.",
    coverImage: "/placeholder.svg",
    content: `## The Challenge

Building a line-following robot sounds simple until you actually try to make it fast and reliable. My first attempt used a basic bang-bang controller — the robot oscillated wildly and flew off the track at every curve.

## Enter PID Control

PID (Proportional-Integral-Derivative) control is the bread and butter of control systems engineering. The idea is elegant: correct errors based on their **current magnitude** (P), their **accumulated history** (I), and their **rate of change** (D).

> The beauty of PID is that three simple terms, properly tuned, can handle remarkably complex dynamic systems.

## Tuning Process

I used the **Ziegler-Nichols method** as a starting point, then fine-tuned manually. The key insight was that the derivative term needed to be much higher than textbook values suggested, because of the sensor noise from the IR array.

Here's the core PID implementation:

\`\`\`cpp
double kp = 1.2, ki = 0.01, kd = 0.8;
double lastError = 0, integral = 0;

void updateMotors(double error) {
  integral += error;
  double derivative = error - lastError;
  double output = kp * error + ki * integral + kd * derivative;
  lastError = error;
  setMotorSpeed(BASE_SPEED + output, BASE_SPEED - output);
}
\`\`\`

## Results

After 3 days of tuning, the robot completed complex tracks at **1.2 m/s** with a **98% success rate**. The biggest improvement came from adding a low-pass filter on the derivative term.

Key takeaways:
- Derivative term needed more weight than expected
- Low-pass filtering on D term was critical
- Start with Ziegler-Nichols, then tune by hand
- Test on multiple track layouts to avoid overfitting`,
  },
  {
    slug: "ros2-nav-stack-guide",
    title: "Getting Started with ROS2 Navigation: A Practical Guide",
    date: "2025-11-28",
    tags: ["Robotics", "AI"],
    excerpt: "A step-by-step walkthrough of setting up autonomous navigation with ROS2 Nav2 on a TurtleBot3.",
    coverImage: "/placeholder.svg",
    content: `## Why ROS2?

ROS2 (Robot Operating System 2) is the de facto standard for robotics middleware. If you're serious about robotics engineering, learning ROS2 is **non-negotiable**.

## Setting Up the Environment

I used Ubuntu 22.04 with ROS2 Humble. The Nav2 stack provides everything you need:

- SLAM (Simultaneous Localization and Mapping)
- Path planning
- Obstacle avoidance
- Behavior trees

\`\`\`bash
sudo apt install ros-humble-navigation2 ros-humble-nav2-bringup
sudo apt install ros-humble-slam-toolbox
\`\`\`

## SLAM Mapping

The first step is creating a map of your environment. I used \`slam_toolbox\` with a LIDAR sensor to generate an occupancy grid map of our lab.

\`\`\`bash
ros2 launch slam_toolbox online_async_launch.py
\`\`\`

## Path Planning

Nav2 uses a **behavior tree architecture** for navigation. The default planner (NavFn) works well for most cases, but I switched to SMAC Planner for better performance in tight spaces.

## Key Takeaways

ROS2 has a steep learning curve, but the payoff is enormous. Once you understand the **node-topic-service** architecture, everything clicks into place.

1. Start with tutorials on the official ROS2 docs
2. Use simulation (Gazebo) before real hardware
3. Join the ROS Discourse community for help`,
  },
  {
    slug: "kicad-first-pcb",
    title: "Designing My First PCB in KiCad: From Schematic to Fabrication",
    date: "2025-10-14",
    tags: ["Embedded Systems", "CAD"],
    excerpt: "The complete journey of designing, ordering, and assembling a custom motor driver PCB using KiCad 8.",
    coverImage: "/placeholder.svg",
    content: `## Why Custom PCBs?

Breadboards are great for prototyping, but they fail at higher currents and frequencies. For my robot's motor drivers, I needed something **reliable**.

## Schematic Design

I designed a dual H-bridge using **IRF540N MOSFETs** with bootstrap drivers. KiCad's schematic editor made it straightforward to lay out the circuit.

Key components:
- 4x IRF540N N-channel MOSFETs per channel
- IR2110 bootstrap gate drivers
- ACS712 current sense ICs
- TVS diodes for ESD protection

## PCB Layout

The layout was the hardest part. Routing high-current traces requires careful consideration of:

- **Trace width** — 2mm minimum for 5A paths
- **Thermal relief** — Proper pad connections to ground plane
- **Ground planes** — Solid copper fill for heat dissipation

\`\`\`
Design Rules:
  Track width (signal): 0.25mm
  Track width (power):  2.0mm
  Clearance:            0.2mm
  Via size:             0.8mm / 0.4mm drill
\`\`\`

## Fabrication

I ordered from JLCPCB — **5 boards for under $10** including shipping. The turnaround was about 2 weeks.

## Assembly and Testing

Soldering SMD components was challenging but rewarding. The board worked on the first try, delivering clean **12V/5A** power to each motor channel.`,
  },
  {
    slug: "solidworks-fea-gripper",
    title: "Using FEA in SolidWorks to Design a Better Robotic Gripper",
    date: "2025-09-20",
    tags: ["CAD", "Robotics"],
    excerpt: "How finite element analysis helped me optimize a compliant gripper design before 3D printing.",
    coverImage: "/placeholder.svg",
    content: `## The Problem

Traditional rigid grippers struggle with irregularly shaped objects. **Compliant mechanisms** use material flexibility instead of joints, but designing them requires careful stress analysis.

## FEA Setup

SolidWorks Simulation let me apply forces and constraints to my gripper model. I used **nonlinear static analysis** because of the large deformations involved.

> Compliant mechanisms trade joint complexity for material stress analysis. You need to know your material limits intimately.

## Iteration

The first design had stress concentrations at the finger roots that exceeded TPU's yield strength. I made several changes:

1. Added generous fillets at stress concentration points
2. Reduced wall thickness in the flexure zones
3. Optimized the finger profile for even stress distribution

## 3D Printing

Printed in **NinjaFlex TPU** at 0.2mm layer height. The compliant fingers could conform to objects from 20mm to 80mm diameter.

## Performance

The optimized gripper could handle **500g loads** without permanent deformation, a **3x improvement** over the initial design.

| Metric | V1 | V2 (Optimized) |
|--------|-----|-----------------|
| Max load | 170g | 500g |
| Grip range | 30-60mm | 20-80mm |
| Weight | 45g | 38g |`,
  },
  {
    slug: "mechatronics-vs-mechanical",
    title: "Mechatronics vs. Mechanical Engineering: Which Should You Choose?",
    date: "2025-08-05",
    tags: ["General"],
    excerpt: "My perspective on choosing Mechatronics over traditional Mechanical Engineering and what it means for your career.",
    coverImage: "/placeholder.svg",
    content: `## The Modern Engineer

The line between hardware and software is blurring. Modern products — from drones to surgical robots — require engineers who understand **both domains**.

## What Mechatronics Offers

Mechatronics combines:
- Mechanical design
- Electronics
- Control systems
- Programming

You learn to think about the **entire system**, not just one component.

## The Curriculum Difference

Where ME students take advanced thermodynamics, we take **embedded systems**. Where they study fluid dynamics, we study **signal processing**. Both paths are valid — the question is what excites you.

## Career Prospects

Mechatronics graduates are in high demand in:
- Robotics and automation
- Automotive (especially EVs)
- Consumer electronics
- Medical devices
- Aerospace

The interdisciplinary skillset is increasingly valuable as products become more integrated.

## My Advice

If you love building things that **move, sense, and respond** — choose Mechatronics. If you're passionate about materials, structures, and thermal systems — choose Mechanical. Either way, **learn to code**.`,
  },
];
