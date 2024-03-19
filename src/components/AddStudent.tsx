"use client";
import { useState } from "react"
import getall from "../app/useStudent"
import { NavLink } from "react-router-dom"
import { useImageStore } from "../types/Student.type";



const AddStudent = () => {

    const setImage = useImageStore((state) => state.setImage);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setImage(file);
        }
    };


    const { post, getproducts } = getall()
    const [product, setproduct] = useState({
        name: '',
        title: '',

        description: '',
        price: '',
    })

    const addproduct = () => {
        post(product)
        setTimeout(() => {
            getproducts()
        }, 300)

    }

    return (
        <div>
            <div className="add__component container ">
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 mx-auto flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Add products</h2>
                            <div className="relative mb-4">
                                <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input onChange={(e) => setproduct({ ...product, name: e.target.value })} type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Title</label>
                                <input onChange={(e) => setproduct({ ...product, title: e.target.value })} type="text" id="text" name="text" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Price</label>
                                <input onChange={(e) => setproduct({ ...product, price: e.target.value })} type="number" id="text" name="text" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">adsgsdg</label>
                                <input accept="image/*" onChange={handleImageChange} type="file" id="text" name="file" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                {/* <img src={URL.createObjectURL(useImageStore((state) => state.image))} alt="Uploaded Image" /> */}

                            </div>

                            <NavLink to='/students'><button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={addproduct}>Add</button></NavLink>
                            <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                        </div>
                    </div>

                </section>


            </div>
        </div>
    )
}

export default AddStudent