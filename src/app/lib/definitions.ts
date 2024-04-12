export type themes = {
  id: number;
  theme: string;
  start_time: Date;
  end_time: Date;
};

export type users = {
  id: number;
  name: string;
  answer: string;
  sum: number;
};
export interface OrderButtonProps {
  index: number;
  pageId: string;
  entry: { name: string, answer: string };
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  clickOrder: number[];
  setClickOrder: React.Dispatch<React.SetStateAction<number[]>>;
}