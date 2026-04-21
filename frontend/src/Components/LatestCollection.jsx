
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext.jsx';
import Title from './Title.jsx';
import ProductItem from './ProductItem.jsx';
import ProductDetailModal from './ProductDetailModal.jsx';

function LatestCollection() {
  const { products, currency } = useContext(ShopContext);
  const [latestProduct, setLatestProduct] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setLatestProduct(products.slice(0, 10));
  }, [products]);

  const handleQuickView = (product) => {
    setSelectedProduct({ ...product, currency });
    setModalOpen(true);
  };

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"Latest "} text2={"Collection"} />
        <p className="text-gray-600 w-3/4 m-auto text-xs sm:text-sm md:text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quis molestias, maiores animi enim molestiae explicabo, sequi iusto nobis illo fugiat rerum fuga? Nemo ullam voluptatem impedit explicabo sit reprehenderit?
        </p>
      </div>

      {/*rendering latest products*/}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 ">
        {latestProduct.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
            onQuickView={() => handleQuickView(item)}
          />
        ))}
      </div>

      <ProductDetailModal
        product={selectedProduct}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}

export default LatestCollection;