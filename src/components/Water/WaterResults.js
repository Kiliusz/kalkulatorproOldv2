import React, { Component } from "react";
import styled from "styled-components";
import ButtonRemove from "../Basics/ButtonRemove";

const StyledTable = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  padding: 0.5rem 1rem;
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  thead {
    display: none;
    font-weight: bold;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
    ${({ theme }) => theme.mediaQ.tablet} {
      display: table-header-group;
    }
  }

  tbody {
    position: relative;
    ${({ theme }) => theme.mediaQ.tablet} {
      display: table-row-group;
    }
  }
  tr {
    margin-bottom: 0.5rem;
    ${({ theme }) => theme.mediaQ.tablet} {
      display: table-row;
    }
  }

  td,
  th {
    padding: 0.5rem 1rem;
    position: relative;
    font-size: 1.5rem;
    text-align: right;
    border: 1px solid ${({ theme }) => theme.graylight};
    ${({ theme }) => theme.mediaQ.tablet} {
      display: table-cell;
    }
  }

  tbody td:before {
    position: absolute;
    content: attr(data-label);
    top: 10px;
    left: 10px;
    ${({ theme }) => theme.mediaQ.tablet} {
      display: none;
    }
  }

  tbody td:after {
    position: absolute;
    content: attr(data-label2);
    top: 10px;
    left: 90px;
    ${({ theme }) => theme.mediaQ.tablet} {
      display: none;
    }
  }

  tr:nth-child(even) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  }

  tbody td:last-child {
    border: none;
    padding: 1rem;
    background-image: none;
    ${({ theme }) => theme.mediaQ.tablet} {
      border: 1px solid ${({ theme }) => theme.graylight};
    }
  }
`;

class WaterResults extends Component {
  render() {
    let tHead = this.props.tHeaders;
    let newArray = [[], tHead];
    tHead = Array.isArray(tHead[0]) ? tHead : newArray;
    let labelsMobile = [];

    return (
      <StyledTable>
        <thead>
          {tHead.map((object, index) => {
            return (
              <tr key={index}>
                {object.map((label, index) => {
                  labelsMobile.push(label);
                  return <th key={index}>{label}</th>;
                })}
              </tr>
            );
          })}
        </thead>

        <tbody>
          {this.props.tData.map((data, index) => {
            return (
              <tr key={index}>
                {data.map((val, index) => {
                  return (
                    <td
                      data-label={labelsMobile[index]}
                      data-label2={labelsMobile[index + labelsMobile.length / 2]}
                      key={index}
                    >
                      {val}
                    </td>
                  );
                })}
                <td key={index}>
                  <ButtonRemove onClick={() => this.props.onClick(data[0])} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    );
  }
}

export default WaterResults;
