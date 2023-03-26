import React from "react";
import '../../App.css'
import bruscheta from "../../assets/bruscheta.png"
import greeksalad from "../../assets/greeksalad.png"
import lemondessert from "../../assets/lemondessert.jpg"

function HighlightsSection(){
    const promoCards = [
        {
        img: greeksalad,
        title: "Greek salad",
        price: "$ 12.99",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        },
        {
        img: bruscheta,
        title: "Bruschetta",
        price: "$ 5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
        },
        {
        img: lemondessert,
        title: "Lemon dessert",
        price: "$ 5.00",
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        },
    ]
    return(
        <div className="highlights" id="onlineOrders">
            <div className="promoheading">
                <h1>This Weeks specials!</h1>
                <button>Online Menu</button>
            </div>
            <div className="promocard">
                {promoCards.map((promoCard)=>(
                    <article key={promoCard.title}>
                        <img src={promoCard.img} 
                        alt={promoCard.title} 
                        width={250}
                        height={200}></img>
                        <div className="promotitle">
                            <h1>{promoCard.title}</h1>
                            <h2>{promoCard.price}</h2>
                        </div>
                        <p>{promoCard.description}</p>
                        <button>Order delivery <i className="fa-solid fa-bicycle"></i></button>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default HighlightsSection;