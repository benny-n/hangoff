import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

export const useDeviceType = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  return { isMobile, isTablet, isDesktop };
};
