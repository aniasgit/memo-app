"use client";
import { TableColumn } from "react-data-table-component";
import {
  BestResultPageContainerStyled,
  H1Styled,
  TableContainerStyled,
  TableStyled,
} from "./page.styled";
import { Result, convertTime } from "../libs";
import { useEffect, useState } from "react";

export default function BestResults() {
  const [results, setResults] = useState<Result[] | []>([]);

  const columns: TableColumn<any>[] = [
    {
      name: "Place",
      selector: (row, index) => (index !== undefined ? `${index + 1}.` : ""),
      width: "60px",
      center: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Time",
      selector: (row) => (row.time ? convertTime(row.time) : "-"),
      width: "80px",
      hide: 768,
      center: true,
      sortable: true,
    },
    {
      name: "Moves",
      selector: (row) => row.moves,
      width: "80px",
      center: true,
      sortable: true,
    },
  ];

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("results") || "[]");
    setResults(data);
  }, []);

  console.log(results);

  return (
    <BestResultPageContainerStyled>
      <H1Styled>Results</H1Styled>
      <TableContainerStyled>
        <TableStyled columns={columns} data={results} pagination />
      </TableContainerStyled>
    </BestResultPageContainerStyled>
  );
}
