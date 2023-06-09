import Image from 'next/image';

function ProductList({ products, setSelectedProduct }) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="group relative cursor-pointer rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          onClick={(e) => {
            e.preventDefault(); // prevent the default behavior of the hyperlink
            setSelectedProduct(product);
          }}
        >
          <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <Image
              src={product.imageSrc}
              alt={product.imageAlt}
              width={400}
              height={500}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>

          <div className="mt-4 px-4 pb-2 flex justify-between">
            <div>
              <h3 className="text-md text-gray-700 font-semibold">
                <a href={product.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.description}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">{product.step}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
