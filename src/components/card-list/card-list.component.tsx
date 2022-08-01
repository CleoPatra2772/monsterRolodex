import { Component } from "react";
import { Monster } from '../../App';
import './card-list.styles.css';
import ActualCard from "../actual-card/actual-card.components";

type CardListProps ={
    monsters: Monster[];
};


const CardList =({ monsters }: CardListProps) =>{
        
        return (
            <div className = 'card-list'>
            {monsters.map((monster => {
            
            return(
                <ActualCard monster= {monster}/>
            );
            
            }))}
            </div>
            );
        };

export default CardList;

// class CardList extends Component {

//     render(){
//         const { monsters } = this.props;
        
//         return (
//             <div className = 'card-list'>
//             {monsters.map((monster => {
            
//             return(
//                 <ActualCard monster= {monster}/>
//             );
            
//             }))}
//             </div>
//             )
// }
// }
