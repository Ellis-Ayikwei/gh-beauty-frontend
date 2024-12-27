export interface IButton {
  name: string;
  classNames: string;
  onClick: (event?: MouseEvent) => any;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
}

export interface ICard {
  jobs: string;
  title: string;
  subTitle: string;
  newJobs: string;
  cardImg: string;
}

export interface IJobsCard {
  jobs: string;
  title: string;
  subTitle: string;
  newJobs: string;
  cardImg: string;
}

export interface IJobsAndServiceCard {
  img: string;
  otherClassNames?: string;
  header: string;
  desc: string;
  price: number;
}

export interface IMobileMenuItem {
  icon: string;
  label: string;
  badge?: string;
  href?: any;
  onSelect: () => void;
}

export interface IAccordion {
  id: number;
  title: string;
  content: string;
}

export interface IAccordionItems {
  items: IAccordion[];
}

export interface ICategoriesCard {
  icon: string;
  label: string;
}

export interface IRecentReviewsCard {
  nameAvatar: string;
  name: string;
  time: string;
  image: string;
  title: string;
  description: string;
  passage: string;
  starsRating: any;
}

export interface IDropdown {
  options: string[];
  placeholder?: string;
  onSelect: (value: string) => void;
}

export interface IDropdownButton {
  label: string;
  onClick: () => void;
}
