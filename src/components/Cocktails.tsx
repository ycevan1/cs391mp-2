import styled from "styled-components";
import {Cocktail} from "../interfaces/Cocktails.ts";

const AllDrinksDiv=styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
`;

const SingleDrinkDiv=styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 40%;
    padding: 2%;
    margin: 1%;
    background-color: #2E4A3D;
    color: #E3B448;
    border: 3px #A7C17D solid;
    border-radius: 1.2vw;
    font: italic small-caps bold calc(2px + 1.5vw) Times New Roman, Serif;
    text-align: center;
    box-shadow: 0 0 0.35vw #2E4A3D;
`;

export default function Cocktails(props : { data:Cocktail[] } ) {
    console.log("test");
    return (
        <AllDrinksDiv>
            {
                props.data.map((drink: Cocktail) =>
                    <SingleDrinkDiv>
                        <h1>{drink.strDrink}</h1>
                        <h2>Glass Required: {drink.strGlass}</h2>
                        <p>{drink.strInstructions}</p>
                        <img src={drink.strDrinkThumb} alt={`image of ${drink.strDrink}`} />
                    </SingleDrinkDiv>
                )
            }
        </AllDrinksDiv>
    );
}