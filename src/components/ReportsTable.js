import React from "react";
import MaterialTable from "material-table";

const ReportsTable = () => {
  const columns = [
    {
      title: "Member ID",
      width: "10%",
    },
    {
      title: "First name",
    },
    {
      title: "Last name",
    },
    {
      title: "Date Started",
      type: "date",
    },
    {
      title: "Email",
    },
    {
      title: "Position",
      filter: true,
    },
    {
      title: "Club name",
    },
  ];

  return (
    <>
      <MaterialTable
        title="All users"
        columns={columns}
        onSelectionChange={(selectedRows) => console.log(selectedRows)}
        options={{
          sorting: true,
          search: true,
          searchFieldAlignment: "right",
          searchAutoFocus: true,
          searchFieldVariant: "standard",

          paging: true,
          pageSizeOptions: [5, 10, 25, 50, 100],
          pageSize: 5,
          paginationType: "normal",
          showFirstLastPageButtons: false,
          paginationPosition: "both",
          exportButton: true,
          exportAllData: true,
          exportFileName: "Users",
          actionsColumnIndex: -1,
          showSelectAllCheckbox: false,
          showTextRowsSelected: false,

          rowStyle: (data, index) =>
            index % 2 === 0 ? { background: "white" } : null,
          headerStyle: { background: "#d91b5c", color: "white" },
        }}
      />
      ;
    </>
  );
};

export default ReportsTable;
