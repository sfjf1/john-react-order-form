import React, { useState, useEffect } from 'react';


const Results = ({title, data}) => {

  const ConsoleLog = ({ children}) => {
    console.log("## [ConsoleLog] ", children);
    return false;
  }
  
  return (
    <div>
      <h2>{title}</h2>

      {
          <table>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
            </tr>
            {/* <ConsoleLog>Data: {data}</ConsoleLog> */}
            {
              data.map((row) =>
                <tr>
                  <td>{row.item}</td>
                  <td>{row.quantity}</td>
                </tr>
              )
            }
          </table>
      }
    </div>
  )
}

export default Results;
