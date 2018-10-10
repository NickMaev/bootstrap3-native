export = BSN;
export as namespace BSN;

declare module BSN {

    class Modal {
        constructor(element: HTMLElement);
        show(): void;
        hide(): void;
        toggle(): void;
        setContent(content: string): void;
        update(): void;
    }

    class Alert {
        constructor(element: HTMLElement);
        close(): void;
    }

    class Button {
        constructor(element: HTMLElement);
    }

    class Carousel {
        constructor(element: HTMLElement);
        cycle(): void;
        slideTo(next: number): void;
    }

    class Collapse {
        constructor(element: HTMLElement);
        toggle(): void;
        hide(): void;
        show(): void;
    }

    class Dropdown {
        constructor(element: HTMLAnchorElement);
        persist: boolean;
        toggle(): void;
    }

    class Popover {
        constructor(element: HTMLElement);
        toggle():void;
        show():void;
        hide(): void;
    }

    class ScrollSpy {
        constructor(element: HTMLElement);
        refresh(): void;
    }

    class Tab {
        constructor(element: HTMLElement);
        show(): void;
    }

    class Tooltip {
        constructor(element: HTMLElement);
        show(): void;
        hide(): void;
        toggle(): void;
    }

    function init(): void;
}