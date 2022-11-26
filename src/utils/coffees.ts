import tradicional from "../assets/coffees/expresso.png";
import americano from "../assets/coffees/americano.png";
import arabe from "../assets/coffees/arabe.png";
import cafeComLeite from "../assets/coffees/cafe-com-leite.png";
import cafeGelado from "../assets/coffees/cafe-gelado.png";
import capuccino from "../assets/coffees/capuccino.png";
import chocolateQuente from "../assets/coffees/chocolate-quente.png";
import cubano from "../assets/coffees/cubano.png";
import expressoCremoso from "../assets/coffees/expresso-cremoso.png";
import havaiano from "../assets/coffees/havaiano.png";
import irlandes from "../assets/coffees/irlandes.png";
import latte from "../assets/coffees/latte.png";
import macchiato from "../assets/coffees/macchiato.png";
import mochaccino from "../assets/coffees/mochaccino.png";

export const coffees = [
    {
        id: 1,
        name: 'Expresso Tradicional',
        price: 9.90,
        image: tradicional,
        altImg: "café tradicional",
        description:"O tradicional café feito com água quente e grãos moídos",
        tags: [
            "TRADICIONAL"
        ],
    },
    {
        id: 2,
        name: 'Expresso Americano',
        price: 9.90,
        image: americano,
        altImg: "café americano",
        description:"Expresso diluído, menos intenso que o tradicional",
        tags: [
            "TRADICIONAL"
        ],
    },
    {
        id: 3,
        name: 'Expresso Cremoso',
        price: 9.90,
        image: expressoCremoso,
        altImg: "café expresso cremoso",
        description:"Café expresso tradicional com espuma cremosa",
        tags: [
            "TRADICIONAL"
        ],
    },
    {
        id: 4,
        name: 'Expresso Gelado',
        price: 9.90,
        image: cafeGelado,
        altImg: "café expresso gelado",
        description:"Bebida preparada com café expresso e cubos de gelo",
        tags: [
            "TRADICIONAL",
            "GELADO"
        ],
    },
    {
        id: 5,
        name: 'Café com Leite',
        price: 9.90,
        image: cafeComLeite,
        altImg: "café com leite",
        description:"Meio a meio de expresso tradicional com leite vaporizado",
        tags: [
            "TRADICIONAL",
            "COM LEITE"
        ],
    },
    {
        id: 6,
        name: 'Latte',
        price: 9.90,
        image: latte,
        altImg: "café latte",
        description:"Uma dose de café expresso com o dobro de leite e espuma cremosa",
        tags: [
            "TRADICIONAL",
            "COM LEITE"
        ],
    },
    {
        id: 7,
        name: 'Capuccino',
        price: 9.90,
        image: capuccino,
        altImg: "café capuccino",
        description:"Bebida com canela feita de doses iguais de café, leite e espuma",
        tags: [
            "TRADICIONAL",
            "COM LEITE"
        ],
    },
    {
        id: 8,
        name: 'Macchiato',
        price: 9.90,
        image: macchiato,
        altImg: "café macchiato",
        description:"Café expresso misturado com um pouco de leite quente e espuma",
        tags: [
            "TRADICIONAL",
            "COM LEITE"
        ],
    },
    {
        id: 9,
        name: 'Mocaccino',
        price: 9.90,
        image: mochaccino,
        altImg: "café mochaccino",
        description:"Café expresso com calda de chocolate, pouco leite e espuma",
        tags: [
            "TRADICIONAL",
            "COM LEITE"
        ],
    },
    {
        id: 10,
        name: 'Chocolate Quente',
        price: 9.90,
        image: chocolateQuente,
        altImg: "chocolate quente",
        description:"Bebida feita com chocolate dissolvido no leite quente e café",
        tags: [
            "ESPECIAL",
            "COM LEITE"
        ],
    },
    {
        id: 11,
        name: 'Cubano',
        price: 9.90,
        image: cubano,
        altImg: "café cubano",
        description:"Drink gelado de café expresso com rum, creme de leite e hortelã",
        tags: [
            "ESPECIAL",
            "ALCOOLICO",
            "GELADO"
        ],
    },
    {
        id: 12,
        name: 'Havaiano',
        price: 9.90,
        image: havaiano,
        altImg: "café havaino",
        description:"Bebida adocicada preparada com café e lete de coco",
        tags: [
            "ESPECIAL"
        ],
    },
    {
        id: 13,
        name: 'Árabe',
        price: 9.90,
        image: arabe,
        altImg: "café arabe",
        description:"Bebida preparada com grãos de café árabe e especiarias",
        tags: [
            "ESPECIAL"
        ],
    },
    {
        id: 14,
        name: 'Irlandês',
        price: 9.90,
        image: irlandes,
        altImg: "café irlandes",
        description:"Bebida a base de café, uísque irlandês, açucar e chantilly",
        tags: [
            "ESPECIAL",
            "ALCOOLICO"
        ],
    }
];