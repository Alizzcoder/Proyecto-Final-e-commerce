import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import {getFirestore, doc, getDoc} from "firebase/firestore";


const ItemDetailContainer= () => {
    const [singleProduct, setSingleProduct] = useState ({});
    const {id}= useParams ();

    const getProduct = () => {
        const db = getFirestore ();
        const querySnapshot = doc (db, "items", id);

        getDoc(querySnapshot)
        .then ((response)=>{
            console.log (response.id);
            console.log (response.data());
            setSingleProduct ({id:response.id, ...response.data()});
            
        })
        . catch((error) => {console.log (error)})
    }


    useEffect( () => {
     getProduct()
    }, );
     return (
     <div> <ItemDetail product={singleProduct} /></div>)
       
}

export default ItemDetailContainer;