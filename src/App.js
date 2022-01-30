import React, { useState } from 'react'
import CytoscapeComponent from 'react-cytoscapejs';
import {mountDataJson} from './jsonLoader.js';
import cyData from './inputs/nodes.json'
import cyStyle from './inputs/style.json'
export default function App() {
 const dataMounted = mountDataJson();
  const [width, setWith] = useState("100%");
  const [height, setHeight] = useState("600px");
 // console.log(cyData)
//Adding elements here
  const [graphData, setGraphData] = useState(dataMounted);
return (
    <>
      <div>
        <h1>Testes</h1>
        <div
          style={{
            border: "1px solid",
            backgroundColor: "#f5f6fe"
          }}
        >
          <CytoscapeComponent
            elements={graphData}
            style={{ width: width, height: height }}
            //adding a layout
            layout={{
              name: 'breadthfirst',
              fit: true,
              directed: true,
              padding: 50,
              animate: true,
              animationDuration: 1000,
              avoidOverlap: true,
              nodeDimensionsIncludeLabels: false
            }}
            //adding style sheet
            stylesheet={cyStyle}
         />
        </div>
      </div>
    </>
  );
}