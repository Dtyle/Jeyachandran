import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function CustomTable({ header, list }) {
  return (
    <TableContainer className="mb-4">
      <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
        <TableHead
          className="thead"
          sx={{
            "& .MuiTableRow-root": {
              borderRadius: "8px", // Apply border-radius to the entire row
              overflow: "hidden", // Ensure border-radius is visible
              "& .MuiTableCell-root": {
                borderBottom: "none", // Remove bottom border of the header cells
                "&:first-of-type": {
                  borderTopLeftRadius: "8px", // Top-left corner
                  borderBottomLeftRadius: "8px", // Bottom-left corner
                },
                "&:last-of-type": {
                  borderTopRightRadius: "8px", // Top-right corner
                  borderBottomRightRadius: "8px", // Bottom-right corner
                },
              },
            },
          }}
        >
          <TableRow>
            {header.map((head, index) => (
              <TableCell
                key={index}
                className="f-12"
                align={index !== 0 ? "left" : "left"}
              >
                {head}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((item, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell className="f-12 py-2" component="th" scope="row">
                {item.license}{" "}
              </TableCell>
              <TableCell className="f-12 py-2 c-lightGrey">
                {item.time ? item.time : "-"}{" "}
              </TableCell>
              <TableCell className="f-12 py-2"> {item.state} </TableCell>
              <TableCell className="f-12 py-2"> {item.taluk} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
