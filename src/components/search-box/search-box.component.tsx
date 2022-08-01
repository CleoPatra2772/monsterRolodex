import { Component } from "react";
import './search-box.styles.css';
import { ChangeEvent, ChangeEventHandler } from 'react';

// const name: string ='123456';
// const func: (a: string, b: number, c: boolean) => boolean = (a, b, c) =>{ return true}


//type

type SearchBoxProps ={
    className: string;
    placeholder?: string;
    //func: ChangeEventHandler;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
   // onChangeHandler: (a: string) => void;
}




const SearchBox =({
    className, 
    placeholder, 
    onChangeHandler}: SearchBoxProps) => (

    <input 
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
     />
)

export default SearchBox;

// class SearchBox extends Component{

//     render(){
//         return(
//             <input 
//             className={`search-box ${this.props.className}`}
//             type='search' 
//             placeholder={this.props.placeholder} 
//       onChange={this.props.onChangeHandler}

//       />
//         );
//     }
// }



// type CanadianAddress = {
//     street: string;
//     province: string;
// }

// type AmericanAddress = {
//     street: string;
//     state: string;
// }

// type NorthAmericanAddress = CanadianAddress | AmericanAddress;

// const Address: NorthAmericanAddress = {
//     street: 'eighteenth street',
//     //state: 'California',
//     province: 'Birtish Columbia',


// }


// interface ISearchBoxProps extends IChangeHandlerProps{
//     className: string;
//     placeholder?: string;
// }

// interface IChangeHandlerProps {
//     onChangeHandler: (a: string) => void
// }
