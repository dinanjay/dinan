import pidTuningImg from "@/assets/images/blog/pid-tuning.jpg";
import type { BlogPost } from "./index";

export const pidTuningPost: BlogPost = {
  slug: "pid-tuning-line-follower",
  title: "PID Tuning for a Line-Following Robot: Lessons from the Track",
  date: "2025-12-15",
  tags: ["Robotics", "Embedded Systems"],
  excerpt: "How I tuned a PID controller for my line-following robot and what I learned about control theory in practice.",
  coverImage: pidTuningImg,
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
};
