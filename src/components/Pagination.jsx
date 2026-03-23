import MuiPagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";

function Pagination({ currentPage, setCurrentPage, totalPages }) {
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
            fontFamily: "'Nunito Sans', sans-serif",
          },
        }}
      />
    </Stack>
  );
}

export default Pagination;