import { Box, Button, useTheme } from "@mui/material";
import { Header } from "../../components";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataInvestor } from "../../data/mockData";
import { tokens } from "../../theme";

const Investor = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const ContactButton = (id) => {
    // Navigate to the profile page with the user's ID
    navigate(`/contact/${id}`);
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "investments",
      headerName: "Investments",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "challengesCreated",
      headerName: "Challenges Created",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "organisations",
      headerName: "Organisations",
      flex: 1,
    },
    {
      field: "interested",
      headerName: "Interested",
      flex: 1,
    },
    {
      field: "contact",
      headerName: "Contact",
      flex: 1,
      renderCell: (params) => (
        <Button
          variant="contained"
          sx={{
            backgroundColor: colors.greenAccent[500], // Set button color to green
            "&:hover": {
              backgroundColor: colors.greenAccent[600], // Hover effect
            },
          }}
          onClick={() => {
            // Add functionality for contacting the person here
            ContactButton(params.rows.id);
          }}
        >
          Contact
        </Button>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="All Investors"
        subtitle="List of Available Investors"
      />
      <Box
        mt="40px"
        height="75vh"
        maxWidth="100%"
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.gray[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataInvestor}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
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

export default Investor;
