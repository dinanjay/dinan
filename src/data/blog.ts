export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
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
    content: `## The Challenge\n\nBuilding a line-following robot sounds simple until you actually try to make it fast and reliable. My first attempt used a basic bang-bang controller — the robot oscillated wildly and flew off the track at every curve.\n\n## Enter PID Control\n\nPID (Proportional-Integral-Derivative) control is the bread and butter of control systems engineering. The idea is elegant: correct errors based on their current magnitude (P), their accumulated history (I), and their rate of change (D).\n\n## Tuning Process\n\nI used the Ziegler-Nichols method as a starting point, then fine-tuned manually. The key insight was that the derivative term needed to be much higher than textbook values suggested, because of the sensor noise from the IR array.\n\n## Results\n\nAfter 3 days of tuning, the robot completed complex tracks at 1.2 m/s with a 98% success rate. The biggest improvement came from adding a low-pass filter on the derivative term.`,
  },
  {
    slug: "ros2-nav-stack-guide",
    title: "Getting Started with ROS2 Navigation: A Practical Guide",
    date: "2025-11-28",
    tags: ["Robotics", "AI"],
    excerpt: "A step-by-step walkthrough of setting up autonomous navigation with ROS2 Nav2 on a TurtleBot3.",
    content: `## Why ROS2?\n\nROS2 (Robot Operating System 2) is the de facto standard for robotics middleware. If you're serious about robotics engineering, learning ROS2 is non-negotiable.\n\n## Setting Up the Environment\n\nI used Ubuntu 22.04 with ROS2 Humble. The Nav2 stack provides everything you need: SLAM, path planning, obstacle avoidance, and behavior trees.\n\n## SLAM Mapping\n\nThe first step is creating a map of your environment. I used slam_toolbox with a LIDAR sensor to generate an occupancy grid map of our lab.\n\n## Path Planning\n\nNav2 uses a behavior tree architecture for navigation. The default planner (NavFn) works well for most cases, but I switched to SMAC Planner for better performance in tight spaces.\n\n## Key Takeaways\n\nROS2 has a steep learning curve, but the payoff is enormous. Once you understand the node-topic-service architecture, everything clicks into place.`,
  },
  {
    slug: "kicad-first-pcb",
    title: "Designing My First PCB in KiCad: From Schematic to Fabrication",
    date: "2025-10-14",
    tags: ["Embedded Systems", "CAD"],
    excerpt: "The complete journey of designing, ordering, and assembling a custom motor driver PCB using KiCad 8.",
    content: `## Why Custom PCBs?\n\nBreadboards are great for prototyping, but they fail at higher currents and frequencies. For my robot's motor drivers, I needed something reliable.\n\n## Schematic Design\n\nI designed a dual H-bridge using IRF540N MOSFETs with bootstrap drivers. KiCad's schematic editor made it straightforward to lay out the circuit.\n\n## PCB Layout\n\nThe layout was the hardest part. Routing high-current traces requires careful consideration of trace width, thermal relief, and ground planes.\n\n## Fabrication\n\nI ordered from JLCPCB — 5 boards for under $10 including shipping. The turnaround was about 2 weeks.\n\n## Assembly and Testing\n\nSoldering SMD components was challenging but rewarding. The board worked on the first try, delivering clean 12V/5A power to each motor channel.`,
  },
  {
    slug: "solidworks-fea-gripper",
    title: "Using FEA in SolidWorks to Design a Better Robotic Gripper",
    date: "2025-09-20",
    tags: ["CAD", "Robotics"],
    excerpt: "How finite element analysis helped me optimize a compliant gripper design before 3D printing.",
    content: `## The Problem\n\nTraditional rigid grippers struggle with irregularly shaped objects. Compliant mechanisms use material flexibility instead of joints, but designing them requires careful stress analysis.\n\n## FEA Setup\n\nSolidWorks Simulation let me apply forces and constraints to my gripper model. I used nonlinear static analysis because of the large deformations involved.\n\n## Iteration\n\nThe first design had stress concentrations at the finger roots that exceeded TPU's yield strength. I added fillets and reduced the wall thickness in the flexure zones.\n\n## 3D Printing\n\nPrinted in NinjaFlex TPU at 0.2mm layer height. The compliant fingers could conform to objects from 20mm to 80mm diameter.\n\n## Performance\n\nThe optimized gripper could handle 500g loads without permanent deformation, a 3x improvement over the initial design.`,
  },
  {
    slug: "mechatronics-vs-mechanical",
    title: "Mechatronics vs. Mechanical Engineering: Which Should You Choose?",
    date: "2025-08-05",
    tags: ["General"],
    excerpt: "My perspective on choosing Mechatronics over traditional Mechanical Engineering and what it means for your career.",
    content: `## The Modern Engineer\n\nThe line between hardware and software is blurring. Modern products — from drones to surgical robots — require engineers who understand both domains.\n\n## What Mechatronics Offers\n\nMechatronics combines mechanical design, electronics, control systems, and programming. You learn to think about the entire system, not just one component.\n\n## The Curriculum Difference\n\nWhere ME students take advanced thermodynamics, we take embedded systems. Where they study fluid dynamics, we study signal processing. Both paths are valid — the question is what excites you.\n\n## Career Prospects\n\nMechatronics graduates are in high demand in robotics, automation, automotive, and consumer electronics. The interdisciplinary skillset is increasingly valuable.\n\n## My Advice\n\nIf you love building things that move, sense, and respond — choose Mechatronics. If you're passionate about materials, structures, and thermal systems — choose Mechanical. Either way, learn to code.`,
  },
];
