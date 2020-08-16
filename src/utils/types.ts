export type AssetUrl = {
  publicURL: string;
};

export type MainPageImages = {
  background: string;
  hero: string;
  logo: string;
  projects_background: string;
  contact_background: string;
};

export type MenuIconsPaths = {
  github: string;
  home: string;
  contact: string;
  linkedin: string;
  about: string;
  projects: string;
};

export type SkillType = {
  id: string;
  technologyName: string;
  level: string;
  skills: { skillDescription: string; id: string }[];
  logo: {
    alt: string;
    url: string;
  };
};

export type ProjectType = {
  position: string;
  projectName: string;
  projectDescription: string;
  appLink: string;
  githubLink: string;
  credentials: [
    {
      password: string;
      username: string;
    }
  ];
  projectPreview: {
    alt: string;
    url: string;
  };
};
