import { Box, Button, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import for navigation
import { Header } from "../../components";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataDeveloper } from "../../data/mockData";
import { tokens } from "../../theme";

// Function to generate a random number between min and max (inclusive)
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const Developer = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate(); // Initialize navigate

  const handleViewProfile = (id) => {
    // Navigate to the profile page with the user's ID
    navigate(`/profile/${id}`);
  };

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "experience",
      headerName: "Experience",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "projects",
      headerName: "Projects",
      flex: 1,
    },
    {
      field: "profile",
      headerName: "Profile",
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
          onClick={(e) => {
            handleViewProfile(params.row.id); // Navigate to profile page
          }}
        >
          View Profile
        </Button>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="All Developers" subtitle="List of Developers" />
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
        }}
      >
        <DataGrid
          rows={mockDataDeveloper} // Use the modified data with random values
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

export default Developer;
