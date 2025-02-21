import Cocktails from "./components/Cocktails.tsx"
import styled from "styled-components";
import {useState, useEffect} from "react";
import {Cocktail} from "./interfaces/Cocktails.ts"

const ParentDiv = styled.div`
    width: 80vw;
    margin: 5vw auto;
    border: 5px #8C6239 solid;
    background-color: #F4E3C1;
    border-radius: 1.5vw;
`;

const StyledTitle=styled.h1`
    display: block;
    text-align: center;
    color: sienna;
    font: italic small-caps bold calc(2px + 2.5vw) Papyrus, fantasy;
`;


export default function App() {
    const [data, setData] = useState<Cocktail[]>([]);
        useEffect(() => {
            async function fetchData(): Promise<void> {
                const rawData = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
                const {drinks} : {drinks: Cocktail[]} = await rawData.json();
                setData(drinks);
            }
            fetchData()
                .then(() => console.log("Data fetches successfully"))
                .catch((e : Error) => console.log("There was the error:: " + e));
        }, [data.length]);

    return (
        <ParentDiv>
            <StyledTitle>Cocktail Recipes</StyledTitle>
            <Cocktails data={data}/>
        </ParentDiv>
    )
}