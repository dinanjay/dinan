export interface TimelineEntry {
  date: string;
  title: string;
  description: string;
}

export const timelineEntries: TimelineEntry[] = [
  {
    date: "Sep 2022",
    title: "Started Mechatronics Engineering",
    description: "Enrolled at TU Munich in Mechatronics Engineering. First exposure to C programming, engineering mechanics, and technical drawing.",
  },
  {
    date: "Mar 2023",
    title: "First Robotics Competition",
    description: "Built a line-following robot for the university robotics competition. Learned Arduino, PID control, and sensor integration. Placed 3rd overall.",
  },
  {
    date: "Sep 2023",
    title: "Embedded Systems Deep Dive",
    description: "Advanced coursework in microcontrollers, FPGA programming, and real-time operating systems. Started contributing to the university's Formula Student electronics team.",
  },
  {
    date: "Feb 2024",
    title: "Internship — Robotics Startup",
    description: "6-month internship at a robotics startup. Worked on ROS2 navigation, computer vision for pick-and-place, and Python automation scripts.",
  },
  {
    date: "Oct 2024",
    title: "PCB Design & IoT Projects",
    description: "Designed custom PCBs using KiCad for motor drivers and sensor breakout boards. Built an IoT dashboard for real-time environmental monitoring.",
  },
  {
    date: "Present",
    title: "Final Year & Thesis Research",
    description: "Researching adaptive robotic grasping using compliant mechanisms. Combining SolidWorks FEA, 3D printing, and reinforcement learning for gripper optimization.",
  },
];
