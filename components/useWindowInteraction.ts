import interact from "interactjs";

export const useWindowInteraction = () => {
  const windowResizeableContainerRef = ref<HTMLElement>();
  const windowDraggableHeaderRef = ref<HTMLElement>();

  onMounted(() => {
    const position = { x: 0, y: 0 };

    if (windowResizeableContainerRef.value) {
      interact(windowResizeableContainerRef.value).resizable({
        edges: { top: true, left: true, bottom: true, right: true },
        listeners: {
          move: function (event) {
            let { x, y } = event.target.dataset;

            x = (parseFloat(x) || 0) + event.deltaRect.left;
            y = (parseFloat(y) || 0) + event.deltaRect.top;

            Object.assign(event.target.style, {
              width: `${event.rect.width}px`,
              height: `${event.rect.height}px`,
              transform: `translate(${position.x + x}px, ${position.y + y}px)`,
            });

            Object.assign(event.target.dataset, { x, y });
          },
        },
      });
    }

    if (windowDraggableHeaderRef.value) {
      interact(windowDraggableHeaderRef.value).draggable({
        cursorChecker: () => "default",
        listeners: {
          start(event) {
            console.log(event.type, event.target);
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
  });

  return {
    windowResizeableContainerRef,
    windowDraggableHeaderRef,
  };
};
