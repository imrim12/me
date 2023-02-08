import { defineStore } from "pinia";

export const useRootStore = defineStore("root", {
  state: () => ({
    availableDirectories: [
      {
        name: "About",
        path: "about",
      },
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
      },
    ] as Array<Directory>,
    openedDirectories: [] as Array<Directory>,
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

  actions: {
    addOpenedDirectory(directory: Directory) {
      this.openedDirectories = [directory, ...this.openedDirectories];
    },
    removeOpenedDirectory(directory: Directory) {
      this.openedDirectories = this.openedDirectories.filter((dir) => dir.path !== directory.path);
    },
    swapOpenedDirectories(index1: number, index2: number) {
      const _dirs = this.openedDirectories;

      [_dirs[index1], _dirs[index2]] = [_dirs[index2], _dirs[index1]];
    },
  },
});
