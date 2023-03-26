import React from "react";
import '../../App.css'
import testimonial from "../../assets/testimonial.png"
import testimonial1 from "../../assets/testimonial1.png"
import testimonial2 from "../../assets/testimonial2.png"
import testimonial3 from "../../assets/testimonial3.png"
import testimonial4 from "../../assets/testimonial4.png"

function TestimonialsSection(){
    const reviewStar=testimonial
    const testimonials=[
        {
        name: "John Green",
        comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ligula ut dictum rhoncus.",
        src: testimonial1 ,
        alt:"customer 1"
        },
        {
        name: "Anna Granco",
        comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ligula ut dictum rhoncus." ,
        src: testimonial2,
        alt:"customer 2",
        },
        {
        name: "George Petersen",
        comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ligula ut dictum rhoncus." ,
        src: testimonial3,
        alt:"customer 3"
        },
        {
        name: "Kate Whithersoon",
        comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ligula ut dictum rhoncus." ,
        src: testimonial4,
        alt:"customer 4"
        }

    ]
    return(
        <div  className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <section className="testicards">
                    {testimonials.map((testimonial)=>(
                        <article key={testimonial.name}>
                            <div className="testititle">
                                <h1>Review</h1> 
                                <img src={reviewStar} alt="review star"></img>
                                <img src={reviewStar} alt="review star"></img>
                                <img src={reviewStar} alt="review star"></img>
                                <img src={reviewStar} alt="review star"></img>
                                <img src={reviewStar} alt="review star"></img> 
                            </div>
                            <div className="testicustomer">
                                <img src={testimonial.src} alt={testimonial.alt}></img>
                                <h2>{testimonial.name}</h2>
                            </div>
                            <p>{testimonial.comments}</p>
                       </article>
                                )
                    )}
            </section>
        </div>
    )
}

export default TestimonialsSection;