import { useMediaQuery } from "react-responsive";

const DesktopUp = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 1200 });
  return isMobile ? children : null;
};

const DesktopDown = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 1199 });
  return isMobile ? children : null;
};

const TabletUp = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 992 });
  return isMobile ? children : null;
};

const TabletDown = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  return isMobile ? children : null;
};

const MobileUp = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 768 });
  return isMobile ? children : null;
};

const MobileDown = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

export { DesktopUp, DesktopDown, TabletUp, TabletDown, MobileUp, MobileDown };
