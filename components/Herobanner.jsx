import React from 'react'

export const Herobanner = () => {
    return (
        <section className="sec1">
            <div className="container">
                <div className="row col2">
                    <div className="col img-col">
                        <img src="as-pic.png" alt="Herobanner" />

                    </div>
                    <div className="col">
                        {/* <div className="social-link">
                            <img  src="Instagram.webp" alt="Soccial-link-icon" />
                            <img src="Facebook.webp" alt="Soccial-link-icon" />
                            <img src="Linkdin.png" alt="Soccial-link-icon" />
                        </div> */}
                        <button className='btn'>Learn more</button>


                    </div>
                </div>
            </div>

        </section>
    )
}
