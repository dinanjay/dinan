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

import { pidTuningPost } from "./pid-tuning-line-follower";
import { ros2NavStackPost } from "./ros2-nav-stack-guide";
import { kicadFirstPcbPost } from "./kicad-first-pcb";
import { solidworksFeaGripperPost } from "./solidworks-fea-gripper";
import { mechatronicsVsMechanicalPost } from "./mechatronics-vs-mechanical";

export const blogPosts: BlogPost[] = [
  pidTuningPost,
  ros2NavStackPost,
  kicadFirstPcbPost,
  solidworksFeaGripperPost,
  mechatronicsVsMechanicalPost,
];
