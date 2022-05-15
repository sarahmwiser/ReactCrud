import React from "react";
import { Cat } from "./Cat";
import { catsApi } from "./CatsApi";
import { NewCatForm } from "./NewCatForm";


export class CatList extends React.Component {
    state = {
        cats:[]
    };

    componentDidMount() {
        this.fetchCats();
    }

    fetchCats = async () => {
        const cats = await catsApi.get();
        this.setState({cats});
        console.log(cats);
    }; 

    addNewCat = async (onSubmit) => {
        await catsApi.put(onSubmit);
        this.fetchCats();
    };

    render() {
        return(
            <div className='cat-list'>
                {this.state.cats.map((cat) =>(
                    <Cat
                        cat = {cat}
                        key = {cat.id}
                        addNewCat = {this.addNewCat}
                        />
                    
                ))}
            </div>
        )
    }
}