import ItemList from "./ItemList";

const RestaurantCategory = ({data}) =>{
    console.log(data);
    return(
        <div>
            <h1>{data.tital} ({data.itemCards.length})</h1>
            <ItemList items={data.itemCards}/>
        </div>
        
    );
};

export default RestaurantCategory;