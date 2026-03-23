import MuiPagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function Pagination({ currentPage, setCurrentPage, totalPages }) {

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
        variant="outlined"
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