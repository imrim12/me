import { defineStore } from "pinia";

export const useRootStore = defineStore("root", {
  state: () => ({
    currentDirectory: {
      name: "Projects",
      path: "projects",
    },
    sidebarDirectory: {
      name: "Quick access",
      path: "quick-access",
      children: [
        {
          name: "Skills",
          path: "skills",
        },
        {
          name: "Experience",
          path: "experience",
        },
        {
          name: "Projects",
          path: "projects",
          children: [
            {
              name: "FormKL",
              path: "formkl",
            },
          ],
        },
      ],
    } as Directory,
  }),
});
