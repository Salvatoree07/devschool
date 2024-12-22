import React from "react";
import Author from "../components/Author";
import Card2blog from "../components/Card2blog";
import Header from "../components/Header";
import Footer from "../components/Footer";

function BlogPage(){
    return (
        <div>
            <Header/>
            <div className="p-4 lg:p-20 flex flex-row space-x-14 underline text-blue-900">
                <a href="" className="">Insiparation</a>
                <a href="" className="">Design</a>
            </div>
            <h1 className="p-4 lg:px-20  text-3xl text-[#000D2F] font-bold">8 UX/UI Trends That Will Dominate The Web Design World
            in 2022</h1>
            
            
            <div className="flex felx-row space-x-7">
                <div className="p-4 lg:px-20 pb-20 lg:w-4/6 md:w-3/4">
                    <div className="py-16">
                        <Author/>
                    </div>
                    <img src="/img/blog-cover-img.png" alt="" className="mb-10 mx-auto" />
                    <p className="text-[#000D2F] leading-8 ">2021 is slowly reaching its end. This year’s UI design trends and UX trends will gently move aside to let
                    next year’s winners take their place.<br/><br/>
                    Quality design is paramount when it comes to creating an attractive website that generates traffic and
converts visitors into customers. Whether your brand offers a service or product, consumers will judge
your company based not only on the quality of your product but also on the quality of your design.
Poorly designed sites are often ignored, regardless of how beneficial they are. The only way to acquire
customers and distinguish yourself from the competition is by improving your UX/UI design.<br/><br/>And don’t get me wrong, you might have one of the top user interface designs of the past, but if you don’t
update it, you’ll most likely end up with an old website.
                    </p>
                </div>
                <div className="hidden md:block mt-6 flex-col space-y-3 lg:w-4/12 ">
                    <Card2blog/>
                    <Card2blog/>
                    
                </div>
            </div>
            <Footer/>
        </div>
        

    )
}

export default BlogPage;