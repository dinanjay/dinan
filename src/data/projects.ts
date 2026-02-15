export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  sourceUrl: string;
  demoUrl: string;
}

export const projects: Project[] = [
  {
    id: "line-follower",
    title: "Autonomous Line-Following Robot",
    description: "Arduino-based robot using IR sensors and PID control to navigate complex line tracks at variable speeds. Achieved 98% track completion rate in competition.",
    tags: ["Arduino", "C++", "PID Control", "Sensors"],
    image: "/placeholder.svg",
    sourceUrl: "#",
    demoUrl: "#",
  },
  {
    id: "matlab-simulation",
    title: "6-DOF Robotic Arm Simulation",
    description: "MATLAB/Simulink simulation of a 6-degree-of-freedom robotic arm with forward and inverse kinematics, trajectory planning, and collision avoidance.",
    tags: ["MATLAB", "Simulink", "Kinematics", "Robotics"],
    image: "/placeholder.svg",
    sourceUrl: "#",
    demoUrl: "#",
  },
  {
    id: "ros-navigation",
    title: "ROS2 Navigation Stack",
    description: "Implemented autonomous navigation for a TurtleBot3 using ROS2 Nav2 stack with SLAM, path planning, and obstacle avoidance in a simulated warehouse.",
    tags: ["ROS2", "Python", "SLAM", "Navigation"],
    image: "/placeholder.svg",
    sourceUrl: "#",
    demoUrl: "#",
  },
  {
    id: "pcb-design",
    title: "Custom Motor Driver PCB",
    description: "Designed and fabricated a dual H-bridge motor driver PCB using KiCad. Supports 12V/5A per channel with current sensing and thermal protection.",
    tags: ["KiCad", "PCB Design", "Electronics", "Power"],
    image: "/placeholder.svg",
    sourceUrl: "#",
    demoUrl: "#",
  },
  {
    id: "3d-gripper",
    title: "Adaptive 3D-Printed Gripper",
    description: "Designed a compliant robotic gripper in SolidWorks with FEA analysis. 3D printed with TPU flex material for adaptive grasping of irregular objects.",
    tags: ["SolidWorks", "3D Printing", "FEA", "CAD"],
    image: "/placeholder.svg",
    sourceUrl: "#",
    demoUrl: "#",
  },
  {
    id: "iot-dashboard",
    title: "IoT Sensor Dashboard",
    description: "Real-time monitoring dashboard for environmental sensors (temperature, humidity, air quality) using ESP32, MQTT, and a React frontend with live charts.",
    tags: ["ESP32", "MQTT", "React", "IoT"],
    image: "/placeholder.svg",
    sourceUrl: "#",
    demoUrl: "#",
  },
];
