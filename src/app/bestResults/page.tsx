"use client";
import { TableColumn } from "react-data-table-component";
import {
  BestResultPageContainerStyled,
  H1Styled,
  TableContainerStyled,
  TableStyled,
} from "./page.styled";
import { Result } from "../libs";
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
      sortable: true,
    },
    {
      name: "Time",
      width: "70px",
      hide: 769,
    },
    {
      name: "Moves",
      selector: (row) => row.moves,
      width: "65px",
      center: true,
    },
  ];

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("results") || "[]");
    setResults(data);
  }, []);

  console.log(results);

  return (
    <BestResultPageContainerStyled>
      <H1Styled>Top 10 results</H1Styled>
      <TableContainerStyled>
        <TableStyled columns={columns} data={results} />
      </TableContainerStyled>
    </BestResultPageContainerStyled>
  );
}
