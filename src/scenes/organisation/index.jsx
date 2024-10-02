import { Box , Button, useTheme } from "@mui/material";
import { Header } from "../../components";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataOrgnanisation } from "../../data/mockData";
import { tokens } from "../../theme";

const Organisation = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "sector",
      headerName: "Sector",
      flex: 1,
    },
    {
      field: "problemStatements",
      headerName: "Problem Statements",
      flex: 1,
    },
    {
      field: "investors",
      headerName: "Investors",
      flex: 1,
    },
    {
      field: "viewProblemStatements",
      headerName: "View Problem Statements",
      flex: 1,
      renderCell: () => {
        return (
          <Box display="flex" justifyContent="center" width="100%">
            <Button
              variant="contained"
              sx={{
                backgroundColor: colors.greenAccent[600], // Use theme color for background
                color: 'white', // Button text color
                minWidth: '120px', // Increase the button width
                '&:hover': {
                  backgroundColor: colors.greenAccent[700], // Darker shade on hover
                },
              }}
            >
              View
            </Button>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="All Organisations" subtitle="list of all active organisations" />
      <Box
        mt="40px"
        height="75vh"
        flex={1}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            border: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-iconSeparator": {
            color: colors.primary[100],
          },
        }}
      >
        <DataGrid
          rows={mockDataOrgnanisation}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          checkboxSelection={false} // Disable checkbox selection
        />
      </Box>
    </Box>
  );
};

export default Organisation;
