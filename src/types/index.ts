import {StaticImageData} from "next/image";

export type ServiceType = {
  category: string;
  description: string;
  skills: string[];
  bg: StaticImageData;
};
