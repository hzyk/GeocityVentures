
import { IconType } from 'react-icons';

export interface Service {
  title: string;
  description: string;
  longDescription?: string;
  icon?: IconType;
  imageUrl: string;
}

export interface NavLink {
  name: string;
  path: string;
}
