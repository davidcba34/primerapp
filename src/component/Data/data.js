import image0 from '../../img/CUT.jpg';
import image1 from "../../img/Sirios.jpg";
import image2 from "../../img/velasVariasFormas.jpg";
import image3 from "../../img/Gel.jpg";
import image4 from "../../img/velasEnVasijas.webp";
import image5 from "../../img/Spa.jpg";
import { CartContext } from '../CartContext';


const {Provider} = CartContext
const velas = [
    {  
        item:{

            nombre:"Velas largas lisas",
            stock: 10,
            precio: 200,
            description:"vela a base de parafina",
            id:0,
            img: image0
        },
        quantity: 5
    },
    {   
        item:{

            nombre:"Sirios",
            stock: 10,
            precio: 200,
            id:1,
            description:"Velas a base de cera de miel",
            img: image1
        },
        quantity: 5
    },
    {   item:{

        nombre:"Velas con formas",
        stock: 10,
        precio: 200,
        id:2,
        description:"Velas de formas variadas",
        img: image2
        },
        quantity: 5
    },
    {
        item: {

            nombre:"Velas a base de gel",
            stock: 10,
            precio: 200,
            id:3,
            description:"Velas a base de gel de calidad y durabilidad",
            img: image3
        },
        quantity: 5
    },
   
    {   
        item:{

            nombre:"Velas a base de soja",
            stock: 10,
            precio: 200,
            id:4,
            description:"Velas a vbase de cera de soja, un producto completamente ecologico y duradero",
            img: image4
        },
        quantity: 5
    },
    {   
        item: {

            nombre:"Velas para spa",
            stock: 10,
            precio: 200,
            id:5,
            description:"velas de varios aromas, ideales para terapias varias",
            img: image5
        },
        quantity: 5
    }
]
 export default Provider;