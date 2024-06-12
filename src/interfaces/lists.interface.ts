import { IColor } from "./colors.interface";

export interface IList {
  id: number;
  name: string;
  color_id: number;
  color?: IColor;
}