import interact from "interactjs";

export const useWindowInteraction = () => {
  const windowResizeableContainerRef = ref<HTMLElement>();
  const windowResizableSidebarRef = ref<HTMLElement>();
  const windowDraggableHeaderRef = ref<HTMLElement>();

  let windowResizeableContainerInteractable: Interact.Interactable | null = null;
  let windowResizableSidebarInteractable: Interact.Interactable | null = null;
  let windowDraggableHeaderInteractable: Interact.Interactable | null = null;

  const vm = getCurrentInstance()?.proxy;

  const initWindowInteraction = () => {
    const position = { x: 0, y: 0 };

    if (windowResizeableContainerRef.value) {
      windowResizeableContainerInteractable = interact(windowResizeableContainerRef.value)
        .on("tap", () => {
          vm?.$emit("mousedown");
        })
        .resizable({
          edges: { top: true, left: true, bottom: true, right: true },
          listeners: {
            start() {
              vm?.$emit("mousedown");
            },
            move(event) {
              let { x, y } = event.target.dataset;

              x = (parseFloat(x) || 0) + event.deltaRect.left;
              y = (parseFloat(y) || 0) + event.deltaRect.top;

              Object.assign(event.target.style, {
                width: `${event.rect.width <= 200 ? 200 : event.rect.width}px`,
                height: `${event.rect.height <= 200 ? 200 : event.rect.height}px`,
                transform: `translate(${position.x + x}px, ${position.y + y}px)`,
              });

              Object.assign(event.target.dataset, { x, y });
            },
          },
        });
    }

    if (windowResizableSidebarRef.value) {
      windowResizableSidebarInteractable = interact(windowResizableSidebarRef.value).resizable({
        edges: { right: true },
        listeners: {
          start() {
            vm?.$emit("mousedown");
          },
          move(event) {
            Object.assign(event.target.style, {
              width: `${event.rect.width <= 100 ? 100 : event.rect.width}px`,
            });
          },
        },
      });
    }

    if (windowDraggableHeaderRef.value) {
      windowDraggableHeaderInteractable = interact(windowDraggableHeaderRef.value).draggable({
        cursorChecker: () => "default",
        listeners: {
          start() {
            vm?.$emit("mousedown");
          },
          move(event) {
            position.x += event.dx;
            position.y += event.dy;

            if (windowResizeableContainerRef.value) {
              windowResizeableContainerRef.value.style.transform = `translate(${position.x}px, ${position.y}px)`;
            }
          },
        },
      });
    }
  };

  const removeWindowInteraction = () => {
    windowResizeableContainerInteractable?.unset();
    windowResizableSidebarInteractable?.unset();
    windowDraggableHeaderInteractable?.unset();
  };

  onMounted(initWindowInteraction);
  onUnmounted(removeWindowInteraction);

  return {
    windowResizeableContainerRef,
    windowDraggableHeaderRef,
    windowResizableSidebarRef,
  };
};
