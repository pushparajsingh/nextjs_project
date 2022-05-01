import React from "react";
import { ListingLoading } from "../../Loading/Loading";

export const TableListNotFound = ({ colSpan, loading }) => {
  return (
    <tr>
      <td colSpan={colSpan} className="text-center">
        {loading ? <ListingLoading /> : "No record found"}
      </td>
    </tr>
  );
};
