type TrainingType = {
  year: string;
  text: string;
};

export type TeamCardType = {
  image: string;
  name: string;
  position: string;
  experience?: string;
  department: string;
  specialization: string;
  training: TrainingType[];
};

export type ServiceType = {
  serviceName: string;
  price: string;
};
export type DataServicesType = {
  name: string;
  services: ServiceType[];
};

export type DataTabsType = {
  name: string;
};
