import React from 'react'
import Title from './Share/Title'
import questionphoto from "../assets/image/Frame.png"

const Questions = () => {
  return (
    <div>
        <Title heading={"Frequently Asked Any Questions"} paragrap={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."} />

                        <div className=' grid lg:grid-cols-2 sm:grid-cols-1 gap-4 '>
                        <div className="join join-vertical w-full  gap-8">
                <div className="collapse collapse-plus join-item border-base-300 border bg-[#F3F3F3]">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-[#414040] text-xl font-extrabold "> 1. Are application fee waivers available?</div>
                    <div className="collapse-content">
                    <p className=' font-normal text-base pr-3 text-[#909090]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, . </p>
                    </div>
                </div>
                <div className="collapse collapse-plus join-item border-base-300 border bg-[#F3F3F3]">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-[#414040] text-xl font-extrabold "> 1. Are application fee waivers available?</div>
                    <div className="collapse-content">
                    <p className=' font-normal text-base pr-3 text-[#909090]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, . </p>
                    </div>
                </div>
                <div className="collapse collapse-plus join-item border-base-300 border bg-[#F3F3F3]">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-[#414040] text-xl font-extrabold "> 1. Are application fee waivers available?</div>
                    <div className="collapse-content">
                    <p className=' font-normal text-base pr-3 text-[#909090] '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, . </p>
                    </div>
                </div>

                <div className="collapse collapse-plus join-item border-base-300 border bg-[#F3F3F3]">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-[#414040] text-xl font-extrabold "> 1. Are application fee waivers available?</div>
                    <div className="collapse-content">
                    <p className=' font-normal text-base pr-3 text-[#909090] '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, . </p>
                    </div>
                </div>


              
                </div>



            {/* imgae add */}
            <div>
                <img src={questionphoto} alt="Questions photo" className=' max-w-lg  mx-auto max-h-[450px]' />

            </div>

        </div>
      
    </div>
  )
}

export default Questions
