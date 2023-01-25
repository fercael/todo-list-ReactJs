import { ReactNode } from "react";

export interface IFlexbox {
  direction?: string,
  justify?: string,
  align?: string,
  gap?: string,
  width?: string,
  height?: string,
  padding?: string,
  children?: ReactNode
}