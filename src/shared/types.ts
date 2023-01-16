export interface OrderType {
  item?: string;
  quantity?: number;
  table_no?: number;
  note?: string;
  id?: number;
  key?: number;
  completedTime?: number | undefined;
  updateCompletionTime?: (id: number, completedTime: number) => void;
}
