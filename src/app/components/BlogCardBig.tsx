import React from "react";
 
function BlogCardBig(props:{title:string; description:string }){
    return(
        <div className="w-80 flex flex-col p-4">
            <img src="/img/cover-article.png" alt="" />
            <h3 className="font-bold text-lg text-green-500 mb-2">
                {props.title}
            </h3>
            <p className="leading-7 text-sm mb-2">
                {props.description}
            </p>
            <button className="w-fit px-2 py-1 bg-green-500 text-white rounded-md text-sm">Read more</button>
        </div>
    )
}

export default BlogCardBig;