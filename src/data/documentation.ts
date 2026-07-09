export interface DocImage {
  filename: string;
  caption: string;
  alt: string;
}

export interface DocPhase {
  number: number;
  title: string;
  subtitle: string;
  images: DocImage[];
}

export const phases: DocPhase[] = [
  {
    number: 1,
    title: "Phase 1: Planning",
    subtitle: "Vercel deployment, Git repository setup, and project configuration captured during initial setup.",
    images: [
      { filename: "planning-1.jpg", caption: "Setting up the production deployment on Vercel", alt: "Setting up the production deployment on Vercel" },
      { filename: "planning-2.jpg", caption: "Confirming deployment status and Git connection", alt: "Confirming deployment status and Git connection" },
      { filename: "planning-3.jpg", caption: "Configuring the Vite project during import", alt: "Configuring the Vite project during import" },
      { filename: "planning-4.jpg", caption: "Importing the GitHub repository into Vercel", alt: "Importing the GitHub repository into Vercel" },
      { filename: "planning-5.jpg", caption: "Documenting the project structure in the README", alt: "Documenting the project structure in the README" },
      { filename: "planning-6.jpg", caption: "Reviewing the repo setup at the workstation", alt: "Reviewing the repo setup at the workstation" },
    ],
  },
  {
    number: 2,
    title: "Phase 2: Development",
    subtitle: "Building the site with OpenCode CLI — sessions, iterations, and technical decisions.",
    images: [
      { filename: "dev-1.jpg", caption: "Pushing the initial project scaffold to GitHub", alt: "Pushing the initial project scaffold to GitHub" },
      { filename: "dev-2.jpg", caption: "Using OpenCode CLI to audit documentation images", alt: "Using OpenCode CLI to audit documentation images" },
      { filename: "dev-3.jpg", caption: "Reviewing the live site alongside the project spec", alt: "Reviewing the live site alongside the project spec" },
    ],
  },
  {
    number: 3,
    title: "Phase 3: Output",
    subtitle: "The final website — live screenshots of each page.",
    images: [
      { filename: "output-home.png", caption: "Home page — hero and week preview grid", alt: "Home page screenshot" },
      { filename: "output-about.png", caption: "About page with 3D background", alt: "About page screenshot" },
      { filename: "output-journey.png", caption: "Journey page — week-by-week reflections", alt: "Journey page screenshot" },
      { filename: "output-resources.png", caption: "Resources page", alt: "Resources page screenshot" },
      { filename: "output-documentation.png", caption: "Documentation page — build process gallery", alt: "Documentation page screenshot" },
      { filename: "output-dark.png", caption: "Dark mode — theme toggle active", alt: "Dark mode screenshot" },
    ],
  },
];