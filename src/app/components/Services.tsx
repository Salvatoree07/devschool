'use client';


function cardComponets(path:string, title:string, content:string){
    return(
        <div className="flex items-start space-x-4 py-5">
            <img src={path} alt="" className="rounded-3xl" />
            <div>
                <p className="font-bold py-2 " >{title}</p>
                <p className="leading-8">{content}
                </p>
            </div>
        </div>
    );
}
function Services(){
    
    return(
        
            <div className="flex flex-col lg:flex-row py-24 xl:px-72">
                <div className="py-4 my-12 mx-8 lg:mx-1">
                    <img src="/img/speak-image.jpg" alt="" className=""  />
                </div>
                <div className="px-8">
                    <h2 className="font-bold text-4xl py-6 ">Our Core Services</h2>
                    <p>Our technology solutions are perfectly designed to ensure the virtual
                    world meets your needs. </p>
                    {cardComponets("/img/web-dev.png", "Web Development", "We convert any design file: PSD, Sketch, Figma, Adobe XD to pixel-perfect, semantic, and standard-compliant HTML/CSS templates.")}
                    {cardComponets("/img/wordpress.png", "Mobile Applications", "We do highly customizable, easy-to-manage, and extendable WordPress solutions. Plugins, themes, or an eCommerce. We can do it.")}
                    {cardComponets("/img/shopify.png", "Shopify & Woo Commerce Development", "We know the ins and outs of Shopify & WooCommerce and we can help you get your eCommerce site running in a matter of weeks.")}
                    {cardComponets("/img/vue.png", "Vue - React Development & Email Template Coding", "Performance, Scalability, Reusable Components, One Way Data Flow - the perfect ingredients for building websites or web apps; also high class coding for email marketing.")}
                </div>
            </div>
        
    );
}

export default Services;