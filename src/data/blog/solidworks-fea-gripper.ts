import solidworksFeaImg from "@/assets/images/blog/solidworks-fea.jpg";
import type { BlogPost } from "./types";

export const solidworksFeaGripperPost: BlogPost = {
  slug: "solidworks-fea-gripper",
  title: "Using FEA in SolidWorks to Design a Better Robotic Gripper",
  date: "2025-09-20",
  tags: ["CAD", "Robotics"],
  excerpt: "How finite element analysis helped me optimize a compliant gripper design before 3D printing.",
  coverImage: solidworksFeaImg,
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
};
