import p1 from '../../public/images/p1.png'
import p2 from "../../public/images/p2.png";
import p3 from "../../public/images/p3.png";
import p4 from "../../public/images/p4.png";
import p5 from "../../public/images/p5.png";
import p7 from "../../public/images/p7.png";

const products = [
  {
    id: 1,
    name: "Vertical Stripped Shirt",
    image: p4,
    price: 120,
    oldPrice: null,
    discount: null,
    colors : [
        "green",
        "gray",
        "black",
        "white",
        "red"
    ],
    images : [
            p1, p2, p3, p4
        ],
    sizes : [
        "Small",
        "Medium",
        "Large",
        "X-Large",
        "XL-Large"
    ],
    rating: 4.5,
  },
  {
    id: 2,
    name: "Faded Skinny Jeans",
    image: p7,
    price: 240,
    oldPrice: 260,
    discount: "20%",
    colors : [
        "green",
        "gray",
        "black",
        "white",
        "red"
    ],
    images : [
            p1, p2, p3, p4
        ],
    sizes : [
        "Small",
        "Medium",
        "Large",
        "X-Large",
        "XL-Large"
    ],
    rating: 3.5,
  },
  {
    id: 3,
    name: "T-shirt with Tape Details",
    image: p3,
    price: 120,
    oldPrice: null,
    discount: null,
    colors : [
        "green",
        "gray",
        "black",
        "white",
        "red"
    ],
    images : [
            p1, p2, p3, p4
        ],
    sizes : [
        "Small",
        "Medium",
        "Large",
        "X-Large",
        "XL-Large"
    ],
    rating: 4.5,
  },
  {
    id: 4,
    name: "Courage Graphic T-shirt",
    image: p5,
    price: 130,
    oldPrice: 160,
    discount: "30%",
    colors : [
        "green",
        "gray",
        "black",
        "white",
        "red"
    ],
    images : [
            p1, p2, p3, p4
        ],
    sizes : [
        "Small",
        "Medium",
        "Large",
        "X-Large",
        "XL-Large"
    ],
    rating: 4.5,
  },
  {
    id: 5,
    name: "Sleeve Striped T-shirt",
    image: p2,
    price: 130,
    oldPrice: 160,
    discount: "30%",
    colors : [
        "green",
        "gray",
        "black",
        "white",
        "red"
    ],
    images : [
            p1, p2, p3, p4
        ],
    sizes : [
        "Small",
        "Medium",
        "Large",
        "X-Large",
        "XL-Large"
    ],
    rating: 4.5,
  },
  {
    id: 6,
    name: "Skinny Jeans Pant",
    image: p1,
    price: 130,
    oldPrice: 160,
    discount: "30%",
    colors : [
        "green",
        "gray",
        "black",
        "white",
        "red"
    ],
    images : [
            p1, p2, p3, p4
        ],
    sizes : [
        "Small",
        "Medium",
        "Large",
        "X-Large",
        "XL-Large"
    ],
    rating: 4.5,
  },
];

export default products;
