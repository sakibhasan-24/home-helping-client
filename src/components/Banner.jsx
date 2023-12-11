export default function Banner() {
  const images = [
    "https://i.ibb.co/gJLpy4v/roselyn-tirado-GDWmu0b-Ff-S4-unsplash.jpg",
    "https://i.ibb.co/tQcSgsf/markus-spiske-p-ASHRAKi-De-U-unsplash.jpg",
    "https://i.ibb.co/SK3qFMc/kenny-eliason-v9-Z6-u-Jxk4-unsplash.jpg",
    "https://i.ibb.co/HKhzzg8/hugo-b-o-Mq-It9-Jwk-Vs-unsplash.jpg",
  ];
  return (
    <div className=" my-6 max-w-6xl mx-auto h-1/2">
      <div className="carousel h-[512px]  rounded-md ">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={images[0]} className="w-full" />
          <div
            className="h-full absolute  top-0 left-0  space-y-6 px-6 w-1/3
            text-white bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0])"
          >
            <h2 className="text-6xl font-bold mt-8">Best Cleaning Home</h2>
            <p className="text-lg font-semibold">
              we clean Every Place of your Home.Our best team member is always
              ready to give you service
            </p>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide4"
              className="btn btn-circle mr-4 text-white bg-red-500"
            >
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={images[1]} className="w-full" />
          <div
            className="h-full absolute  top-0 left-0  space-y-6 px-6 w-1/3
            text-white bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0])"
          >
            <h2 className="text-6xl font-bold mt-8">Best Cleaning Garden</h2>
            <p className="text-lg font-semibold">
              we clean Every Place of your Garden.Our best team member is always
              ready to give you service
            </p>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide1"
              className="btn btn-circle mr-4 text-white bg-red-500"
            >
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={images[2]} className="w-full" />
          <div
            className="h-full absolute  top-0 left-0  space-y-6 px-6 w-1/3
            text-white bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0])"
          >
            <h2 className="text-6xl font-bold mt-8">
              Best Car Garage Cleaning
            </h2>
            <p className="text-lg font-semibold">
              we clean Every Place of your Garden.Our best team member is always
              ready to give you service
            </p>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide2"
              className="btn btn-circle mr-4 text-white bg-red-500"
            >
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={images[3]} className="w-full" />
          <div
            className="h-full absolute  top-0 left-0  space-y-6 px-6 w-1/3
            text-white bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0])"
          >
            <h2 className="text-6xl font-bold mt-8">Best Car Cleaning </h2>
            <p className="text-lg font-semibold">
              Our best team member is always ready to give you service
            </p>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide3"
              className="btn btn-circle mr-4 text-white bg-red-500"
            >
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
