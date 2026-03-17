export type Project = {
  id: string;
  technologies: string;
  deployUrl?: string;
  repoUrl?: string;
  imageUrl: string;
};

type ProjectGroup = {
  academicProjects: Project[];
  realProjects: Project[];
};

export const projects: ProjectGroup = {
  academicProjects: [
    {
      id: "miVaqita",
      technologies: "Frontend: Vitejs, Tailwind, Axios, Backend: Nodejs, Express, BD: PostgreSQL",
      deployUrl: "https://mi-vaquita-app.vercel.app",
      repoUrl: "https://github.com/Bethsyf/mi-vaquita-app",
      imageUrl:
        "https://res.cloudinary.com/dmaviub4l/image/upload/v1723161937/b7sjwmqkjv7nfm7dxfxs.png",
    },
    {
      id: "futureWorld",
      technologies: "Nextjs, SASS, Typescript, Graphql, Sanitize-html, Zustand.",
      deployUrl: "https://nextjs14-project.vercel.app/",
      repoUrl: "https://github.com/Bethsyf/nextjs14-project",
      imageUrl:
        "https://res.cloudinary.com/dmaviub4l/image/upload/v1708026934/c6ybktmuivfsjzgpgxli.png",
    },
    {
      id: "portfolio",
      technologies: "Nextjs, SASS, Typescript",
      deployUrl: "https://portfolio-bfb.vercel.app",
      repoUrl: "https://github.com/Bethsyf/portfolio",
      imageUrl:
        "https://res.cloudinary.com/dmaviub4l/image/upload/v1723161553/eokdssx9zb9u7uhpsbxe.png",
    },
  ],

  realProjects: [
    {
      id: "mepapp",
      technologies: "Next.js, TypeScript, NextUI",
      deployUrl: "https://metalmecanicasportal.vercel.app",
      imageUrl:
        "https://res.cloudinary.com/dmaviub4l/image/upload/v1732224921/ngpqazkz2uzragbxdk9u.png",
    },
  ],
};
