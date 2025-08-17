function Card({ item }) {
    const hasDiscount = item.price > 6000;
    const newprice = hasDiscount ? (item.price * 0.7) : item.price;
    return (
        <div className="relative card flex flex-col pb-4 p-2 shadow-lg  rounded-lg bg-gray-100
         transition transform hover:scale-105 duration-300 hover:bg-blue-100 shadow-md hover:shadow-2xl">
            <img src={item.img} className="w-full h-100 object-cover " alt={item.name} />
            <h3 className="text-2xl pl-4 font-bold text-black mt-5">{item.title}</h3>
            <h3 className="text-gray-700 text-lg mt-2 pl-4">
                {hasDiscount ? (
                    <>
                    <span className="text-blue-600 font-bold">Price:{newprice}$</span>
                    <span className="line-through text-gray-600 mr-2 p-3"> {item.price}$</span>
                    <span className="absolute left-80 font-bold text-white bg-red-500 p-1">Discount:30%</span>
                    </>
                ) : (
                    <span className="text-blue-600 font-bold">Price:{item.price}$</span>
                )}
            </h3>
            <p className="text-gray-600 mt-2 pt-3 pl-4">{item.decs}</p>
        </div>
    );
}
export default Card;
