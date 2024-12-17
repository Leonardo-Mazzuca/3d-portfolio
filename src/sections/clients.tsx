import { clientReviews } from "../constants"




const Clients = () => {

  return (

    <section className="c-space my-20">

        <h3 className="head-text">
            O que estão falando de mim?
        </h3>

        <div className="client-container">

            {clientReviews.map(({id,img,name,position,review})=> (

                <div className="client-review" key={id}>

                        <div>

                            <p className="text-white font-light">
                                {review}
                            </p>

                            <div className="client-content">
                                <div className="flex gap-3">
                                    <img 
                                        src={img}
                                        className="w-12 h-12 rounded-full"
                                        alt={name}
                                    />
                                    <div className="flex flex-col">
                                        <p className="font-semibold text-white-800">
                                            {name}
                                        </p>
                                        <p className="md:text-base text-sm font-light text-white-500">
                                            {position}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex self-end items-center gap-2">
                                    {Array.from({length:5}).map((_,index)=> (
                                        <img 
                                            key={index}
                                            src="/assets/star.png"
                                            alt="star"
                                            className="w-5 h-5"
                                        />
                                    ))}
                                </div>
                            </div>

                         </div>

                </div>

            ))}

        </div>

    </section>

  )
}

export default Clients