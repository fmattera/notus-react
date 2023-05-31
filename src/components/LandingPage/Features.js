
import VideoPlayer from "components/VideoPlayer.jsx";

const Features = () => {
    return (

<div>
<section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-lightBlue-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                  Create distinctive product images!

                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                  NeoLocus generates top-notch product images within seconds by either uploading your own picture or describing the desired setting.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-lightbulb"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                      Produces marketing images
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      Our AI tool creates unique product images based on your description or uploaded picture, and even lets your clients visualize the product in their own space!
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sharp fa-solid fa-arrow-trend-up"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                      Reduce the entry barrier for SMBs
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      NeoLocus saves businesses money on costly photo shoots by efficiently generating a wide range of high-quality product images using AI, eliminating the need for expensive photographers and studio time
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        {/* <i className="fas fa-money-check-dollar"></i>   */}
                        {/* <i className="fas fa-money-bill-trend-up"></i> */}
                        <i className="fas fa-solid fa-hand-holding-dollar"></i>


                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Increase Conversion Rate</h6>
                      <p className="mb-4 text-blueGray-500">
                      NeoLocus enables users to visualize products in their own space, resulting in increased user interest, conversion rates, and reduced cart abandonment and bounce rates.
                      </p>
                    </div>
                  </div>
                  {/* <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Documentation
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Built by developers for developers. You will love how
                        easy is to to work with Notus React.
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-wrap items-center mt-20">
          <div className="w-full px-12 text-center">
            <h3 className="text-2xl mb-2 font-semibold leading-normal">
              Watch our demo video!
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              See how NeoLocus works and how you can get it
            </p>
          </div>
          <div className="w-full px-4 mr-auto ml-auto mt-5">
            <div className="relative flex flex-col min-w-0 w-full mb-6 mt-10 md:mt-0">
              <VideoPlayer/>
            </div>
          </div>
        </div>

    </section>
   
    </div>
    );
            };
export default Features;
