export type OnContentChangeEvent = { id: string, content: string, component: string, redirect?: string };

export type OnContentChange = ({id, content, component}: OnContentChangeEvent) => void;