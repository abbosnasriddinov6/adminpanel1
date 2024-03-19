import { useEffect } from "react"
import getall from "../app/useStudent"
import { NavLink } from "react-router-dom"
import Loader from "../components/Loader"
import { useImageStore } from "../types/Student.type";

const Students = () => {
  const { products, loading, getproducts, error, } = getall()

  const imageUrl = useImageStore((state) => state.imageUrl);

  useEffect(() => {
    getproducts()
  }, [])





  const handleDelete = async (id: number): Promise<void> => {
    try {
      // Perform delete operation
      await fetch(`https://65f7443bb4f842e8088565a2.mockapi.io/products/${id}`, {
        method: "DELETE",
      });
      // After successful deletion, fetch updated students list
      getproducts();
    } catch (err) {
      console.error("Error deleting student:", err);
    }
  };


  return (
    <>
      <div className='h1 bg-gray-100'>
        <h1 >Products</h1>
        <NavLink to='/add'><button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
          Add
        </button></NavLink>


      </div>
      <div className=' w-full  '>
        {loading ? <h2><Loader /></h2> : null}
        <div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg  ">
          <table
            className=" w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-y-scroll ...">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>

                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>

                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            {products.length > 0 ? products.map((product) =>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                  </td>

                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-[100px] h-[100px] rounded-full" src={product.category} alt="" />
                    {imageUrl && <img className="w-[100px] h-[100px] rounded-full" src={imageUrl} alt="Uploaded Image" />}
                    {/* {imageUrl && <img src={imageUrl} alt="Uploaded Image" style={{ maxWidth: '100%' }} />} */}
                  </th>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {product.name}
                  </th>

                  <td className="px-6 py-4">
                    {product.title}
                  </td>
                  <td className="px-6 py-4">
                    £ {product.price}
                  </td>

                  <td className="px-6 py-4 flex gap-5 items-center">




                    <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900">Edit</button>

                    <button onClick={() => handleDelete(product.id)} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>



                  </td>
                </tr>
              </tbody>
            ) : null}
          </table>
        </div>

        {error ? <h2>{error.message}</h2> : null}
      </div>
    </>
  );
};

export default Students;
