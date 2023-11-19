type TrainingType = {
  year: string;
  text: string;
};

export type TeamCardType = {
  image: string;
  name: string;
  position: string;
  department: string;
  specialization: string;
  training: TrainingType[];
};
