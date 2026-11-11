export interface TimelineEntry {
  date: string;
  title: string;
  description: string;
  location: string;
  coordinates: [number, number];
}

export const timelineEntries: TimelineEntry[] = [
  {
    date: "2025 - Present",
    title: "BSc Mechatronical Engineering",
    description: "Undergraduate studies focusing on robotics, automation, and innovative technology development. Applying technical expertise in Python, C, web development, and CAD design.",
    location: "Debrecen, Hungary",
    coordinates: [47.5536, 21.6208]
  },
  {
    date: "Nov 2026",
    title: "Erasmus+ Youth Exchange in Finland",
    description: "Represented Hungary in 'Trashformers – Turning Waste into Youth Power' (KA152-YOU), hosted by Tech Alliance. Collaborated with youth from 5 countries on zero-waste principles (the 5Rs), sustainable packaging, fast fashion upcycling, and youth-driven environmental impact.",
    location: "Finland",
    coordinates: [60.1699, 24.9384]
  },
  {
    date: "Sep 2026",
    title: "Erasmus+ Project in Sunny Beach",
    description: "Participated in 'Click to Participate – Digital Youth Work for a Stronger Democracy' hosted by Youth Senate Bulgaria. Explored digital youth participation, social media algorithms, AI-generated content, media literacy, and active citizenship alongside participants from 6 countries.",
    location: "Sunny Beach, Bulgaria",
    coordinates: [42.6951, 27.7104]
  },
  {
    date: "Apr 2026",
    title: "Erasmus+ Training Program in Segovia",
    description: "Wrapped up the “Access for All – Youth Work for Inclusion and Equality” program. This marked my first international mobility experience and first solo international trip.",
    location: "Segovia, Spain",
    coordinates: [40.9429, -4.1088]
  },
  {
    date: "Apr 2025 – Sep 2025",
    title: "BEng Tech, Engineering Technology",
    description: "Completed foundational engineering technology coursework at the University of Sri Jayewardenepura before transferring to Europe.",
    location: "Nugegoda, Sri Lanka",
    coordinates: [6.8528, 79.9036]
  },
  {
    date: "2023 - 2024",
    title: "Full-Stack & Embedded Projects",
    description: "Built 'Devoverflow', a full-stack Q&A platform using Next.js. Developed an Automated Bus Ticket System using ESP32 to automate passenger check-in and fare calculation.",
    location: "Colombo, Sri Lanka",
    coordinates: [6.9271, 79.8612]
  },
  {
    date: "2020 - 2023",
    title: "Engineering Tech & Leadership",
    description: "Completed A-Levels (3A's) in the Engineering Technology Stream at Nalanda College. Held leadership roles as Chief Organizer of the Computer Society and Secretary of the Robotics Society.",
    location: "Colombo, Sri Lanka",
    coordinates: [6.9190, 79.8733]
  },
  {
    date: "2022",
    title: "Sri Lanka Robotics Challenge",
    description: "Designed and built an autonomous robot using Arduino, integrating sensors and motor drivers to navigate obstacle courses.",
    location: "Moratuwa, Sri Lanka",
    coordinates: [6.7969, 79.9018]
  },
  {
    date: "2019",
    title: "First Autonomous Robot",
    description: "Built my first autonomous robot at the University of Moratuwa, sparking a deep, ongoing interest in mechatronics and control logic.",
    location: "Moratuwa, Sri Lanka",
    coordinates: [6.7969, 79.9018]
  }
];
