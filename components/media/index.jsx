import dynamic from "next/dynamic";

const DesktopUp = dynamic(
  () => import("./media").then((module) => module.DesktopUp),
  { ssr: false }
);
const DesktopDown = dynamic(
  () => import("./media").then((module) => module.DesktopDown),
  { ssr: false }
);
const TabletUp = dynamic(
  () => import("./media").then((module) => module.TabletUp),
  { ssr: false }
);
const TabletDown = dynamic(
  () => import("./media").then((module) => module.TabletDown),
  { ssr: false }
);

const MobileUp = dynamic(
  () => import("./media").then((module) => module.MobileUp),
  { ssr: false }
);
const MobileDown = dynamic(
  () => import("./media").then((module) => module.MobileDown),
  { ssr: false }
);

export { DesktopUp, DesktopDown, TabletUp, TabletDown, MobileUp, MobileDown };
