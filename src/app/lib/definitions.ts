export type themes = {
  id: number;
  theme: string;
  start_time: Date;
  end_time: Date;
  vote_time: Date;
};

export type users = {
  id: number;
  name: string;
  answer: string;
  sum: number;
  rand: number;
};
export interface OrderButtonProps {
  index: number;
  entry: {id: number, name: string, answer: string };
  num: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  clickOrder: number[];
  setClickOrder: React.Dispatch<React.SetStateAction<number[]>>;
  rank: { id: number, rank: number }[];
  setRank: React.Dispatch<React.SetStateAction<{ id: number, rank: number }[]>>;
  flag: boolean;
  setFlag: React.Dispatch<React.SetStateAction<boolean>>;
}