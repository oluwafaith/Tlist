export interface Item {
  packed: boolean;
  id: string;
  description: string;
  quantity: number;
}

export interface ItemProps {
  item: Item;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
  onClearList?: (id: string) => void;
}
export interface ItemProps1 {
  items?: Item[];
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
  onClearList?: () => void;
}

export type Items = Item[];

export type AddItem = {
  onAddItems: (item: Item) => void;
};
