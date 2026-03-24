import MuiPagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useTheme } from "/src/context/ThemeProvider";

function Pagination({ currentPage, setCurrentPage, totalPages }) {
  const { darkMode } = useTheme();

  const isDesktop = useMediaQuery("(min-width: 1440px)");
  const isTablet = useMediaQuery("(min-width: 768px)");

  const handleChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Stack spacing={2} alignItems="center">
      <MuiPagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        size={isDesktop ? "large" : isTablet ? "medium" : "small"}
        sx={{
          "& .MuiPaginationItem-root": {
            fontFamily: "'Nunito Sans', sans-serif"
          },
          ...(darkMode && {
            "& .MuiPaginationItem-root": {
              color: "white"
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "white",
              color: "black"
            },
            "& .MuiPaginationItem-root.Mui-disabled": {
              color: "#777"
            },
            "& .MuiPaginationItem-root:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "white"
            },
            "& .MuiSvgIcon-root": {
              color: "white"
            }
          })
        }}
      />
    </Stack>
  );
}

export default Pagination;