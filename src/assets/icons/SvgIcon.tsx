import { SvgIconProps } from "../../types/interfaces";

export const SvgIcon = ({ src, width, height, className }: SvgIconProps) => (
  <img
    src={`/img/svg/${src}`}
    alt={src}
    width={width}
    height={height}
    className={className}
  />
);
