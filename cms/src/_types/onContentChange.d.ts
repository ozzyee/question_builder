export type OnContentChangeEvent = { id: string, content: string, component: string };

export type OnContentChange = ({id, content, component}: OnContentChangeEvent) => void;