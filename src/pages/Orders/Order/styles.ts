import styled from 'styled-components'

export const OrderContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 0rem auto 0;
  padding: 0 1.5rem;
  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }
`
export const PrintButton = styled.button`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['green-700']};
    transition: background-color 0.2s;
  }
`
export const OrderList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: -2rem;
  margin-bottom: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;
      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }
    td {
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;
      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }
      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`

export const LabelPrint = styled.div`
  color: #000;
  width: 38.1mm;
  height: 21.2mm;
  display: inline-block;
  //border: 1px solid #333;
  padding: 3mm;
  box-sizing: border-box;
  page-break-inside: avoid;
  margin-right: 2.55mm;
  border-radius: 10px;
  p {
    padding: 1px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* start showing ellipsis when 3rd line is reached */
    white-space: pre-wrap; /* let the text wrap preserving spaces */
  }
  &:nth-child(5n) {
    margin-right: 0; /* remove margin from every 5th item */
  }
`

export const TablePrint = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 210mm; // Largura disponível para as etiquetas
  padding: 1.19cm 4mm; // Margens superior/inferior e lateral
`
