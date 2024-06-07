import { Button, Card } from "flowbite-react";
import React, { Component } from "react";
import Slider from "react-slick"; // Import Slider from react-slick
import "slick-carousel/slick/slick.css"; // Import slick-carousel base styles
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme styles
import "./style.css";
import profil from "./assets/profil.jpg";
import ibuulfa from "./assets/ibuulfa.jpg";
class Fitur3 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };

    return (
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-100 h-100 gap-x-8 gap-y-16">
          <Slider {...settings} className=" w-full bg-gray-50 rounded-lg">
            <div className="flex justify-center items-center h-full">
              <div className="max-w-2xl lg:max-w-4xl">
                <figure className="mt-10">
                  <blockquote className="text-center text-gray-900">
                    <figcaption className="mt-10 text-center">
                      <img
                        className="mx-auto h-50 w-50 rounded-full"
                        src={profil}
                        alt="Judith Black"
                      />
                      <div className="mt-4 flex flex-col items-center space-x-3 text-base">
                        <div className="font-semibold text-gray-900">
                          Bayu Priambada
                        </div>
                        <div className="text-gray-600">
                          Guru web Development
                        </div>
                      </div>
                    </figcaption>
                    <p>
                      Saya merupakan guru pengajar teknologi pada SMK TI
                      Bazma,dengan mengajarkan silabus html,css, js, figma,
                      wordpress dasar dan tingkat lanjut, php, laravel.
                    </p>
                  </blockquote>
                </figure>
              </div>
            </div>

            {/* Add more slides as needed */}
            <div className="flex justify-center items-center h-full">
              <div className="max-w-2xl lg:max-w-4xl">
                <figure className="mt-10">
                  <blockquote className="text-center text-gray-900">
                    <figcaption className="mt-10 text-center">
                      <img
                        className="mx-auto h-50 w-50 rounded-full"
                        src={ibuulfa}
                        alt="Another person"
                      />
                      <div className="mt-4 flex flex-col items-center space-x-3 text-base">
                        <div className="font-semibold text-gray-900">
                          Ulfa Mujahidah
                        </div>
                        <div className="text-gray-600">Guru bahasa Ingris</div>
                      </div>
                    </figcaption>
                    <p>
                    Saya merupakan guru pengajar Bahasa Ingris pada SMK TI Bazma,dengan mengajarkan berbicara,membaca dan menulis Mata pelajaran Bahasa Ingris .
                    </p>
                  </blockquote>
                </figure>
              </div>
            </div>
          </Slider>

          <div className="col">
            <section>
              <div className="shadow">
                <div className="row">
                  <Card className="w-full p-6">
                    <form>
                      <div className="col-lg-12 mx-auto d-flex justify-content-center flex-column">
                        <h3 className="text-center h1">Contact us</h3>
                        <div
                          role="form"
                          id="contact-form"
                          method="post"
                          autoComplete="off"
                        >
                          <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                              <label
                                htmlFor="first_name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                First name
                              </label>
                              <input
                                type="text"
                                id="first_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                
                                required
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="last_name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Last name
                              </label>
                              <input
                                type="text"
                                id="last_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                
                                required
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="phone"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Phone number
                              </label>
                              <input
                                type="tel"
                                id="phone"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
     
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                required
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="website"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Website URL
                              </label>
                              <input
                                type="url"
                                id="website"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                
                                required
                              />
                            </div>
                          </div>
                          <div className="mb-4">
                            <label
                              htmlFor="email"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Email address
                            </label>
                            <input
                              type="email"
                              id="email"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Masukan Email"
                              required
                            />
                          </div>
                          <div className="input-group mb-4 input-group-static">
                            <label
                              htmlFor="message"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Your message
                            </label>
                            <textarea
                              id="message"
                              rows="4"
                              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Write your thoughts here..."
                            ></textarea>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-check form-switch mb-4 d-flex align-items-center">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="flexSwitchCheckDefault"
                                  defaultChecked
                                />
                                <label
                                  className="form-check-label ms-3 mb-0"
                                  htmlFor="flexSwitchCheckDefault"
                                >
                                  I agree to the{" "}
                                  <a href="javascript:;" className="text-dark">
                                    <u>Terms and Conditions</u>
                                  </a>
                                  .
                                </label>
                              </div>
                            </div>
                            <div className="btn-dark col-md-12">
                              <button
                                type="submit"
                                className="btn bg-gradient-dark w-100"
                              >
                                Send Message
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </Card>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Fitur3;
