import DataTable from "react-data-table-component";
import styled from "styled-components";

export const BestResultPageContainerStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: calc(100vh - 110px);
  overflow-y: auto;
`;

export const H1Styled = styled.h1`
  margin: 20px 0;
  color: #042e53;
`;

export const TableContainerStyled = styled.div`
  width: 320px;
  padding: 0 8px;
  margin-bottom: 8px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 8px;
  box-shadow: 2px 2px 2px lightgray;

  @media (min-width: 768px) {
    width: 700px;
    padding: 12px 24px;
  }
`;

export const TableStyled = styled(DataTable)`
  .rdt_Table {
    width: 300px;

    @media (min-width: 768px) {
      width: 650px;
    }
  }

  .rdt_TableCol {
    padding: 0 4px;
    color: #042e53;
    font-weight: bold;
    border-bottom: 2px solid #042e53;

    @media (min-width: 768px) {
      padding: 0 12px;
    }
  }

  .rdt_TableCell {
    padding: 0 4px;

    @media (min-width: 768px) {
      padding: 0 16px;
    }
  }
`;
