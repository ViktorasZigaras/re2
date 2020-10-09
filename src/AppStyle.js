import React from "react";
import styled from 'styled-components';

const H3Child = (props) => 
    <h3 className={'list-astra__container__title '+ props.className}>
        LABAS
        <span> vakaras gg</span>
    </h3>;


const H3 = styled(H3Child)`
    background: gray;
    span {
        color: black;
    }
`;


export default function App() {
  return (
    <section className="list-astra">
        <div className="list-astra__container">
            <H3/>
         </div>
    </section>
  );
}
