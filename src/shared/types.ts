export interface OrderType {
  item?: string;
  quantity?: number;
  table_no?: number;
  note?: string;
  id?: number;
  orderKey: number;
  completedTime?: number | null;
  updateCompletionTime: (id: number, completedTime: number) => void;
}

export interface CopiedOrderType {
  item?: string;
  quantity?: number;
  table_no?: number;
  note?: string;
}

export interface TrackerType {
  totalOrdersCompleted: number;
}
