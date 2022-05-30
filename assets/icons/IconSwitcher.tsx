import { DeliveryIcon } from "./DeliveryIcon";
import { ExploreIcon } from "./ExploreIcon";
import { useTheme } from "styled-components";

export default function IconSwitcher({
  icon_type,
  icon_class,
  strokeWidth,
  className = "icons-svg",
}: any) {
  const theme = useTheme();
  return icon_type === "DELIVERY_MAN" ? (
    <DeliveryIcon
      fill={icon_class === "primary" ? "#ffffff": Object.assign(theme).lightMode?.secondaryColor}
      stroke={icon_class === "primary" ? "#ffffff": Object.assign(theme).lightMode?.secondaryColor}
      strokeWidth={strokeWidth}
      className={className}
    />
  ) : (
    <ExploreIcon
      fill={icon_class === "primary" ? Object.assign(theme).lightMode?.primaryColor: Object.assign(theme).lightMode?.secondaryColor}
      stroke={icon_class === "primary" ? Object.assign(theme).lightMode?.primaryColor: Object.assign(theme).lightMode?.secondaryColor}
      strokeWidth={strokeWidth}
      className={className}
    />
  );
}
