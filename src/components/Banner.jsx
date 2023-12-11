export default function Banner() {
  const images = [
    "https://i.ibb.co/gJLpy4v/roselyn-tirado-GDWmu0b-Ff-S4-unsplash.jpg",
    "https://i.ibb.co/tQcSgsf/markus-spiske-p-ASHRAKi-De-U-unsplash.jpg",
    "https://i.ibb.co/SK3qFMc/kenny-eliason-v9-Z6-u-Jxk4-unsplash.jpg",
    "https://i.ibb.co/HKhzzg8/hugo-b-o-Mq-It9-Jwk-Vs-unsplash.jpg",
  ];
  return (
    <div className=" my-6 max-w-6xl mx-auto h-1/2">
      <div className="carousel h-[412px]  rounded-md ">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={images[0]} className="w-full" />
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
          <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
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
