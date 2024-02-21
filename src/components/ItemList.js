import { CDN_URL } from "../utils/constants";
const ItemList = ({items}) => {
    console.log(items);
    return(
        <div>
            {items.map((item) => (
                <div key={item.card.info.id}>
                    <div>
                        <span>{item.card.info.name}</span>
                        <span>{item.card.info.price}</span>
                    </div>
                    <p>{item.card.info.description}</p>
                    <img src="CDN_URL + item.card.info.imageId"/>
                </div>
            ))}
        </div>
    );
};

export default ItemList;