import { Button, Card } from "flowbite-react";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
                      Saya merupakan guru pengajar Bahasa Ingris pada SMK TI
                      Bazma,dengan mengajarkan berbicara,membaca dan menulis
                      Mata pelajaran Bahasa Ingris .
                    </p>
                  </blockquote>
                </figure>
              </div>
            </div>
          </Slider>

          <Card className="col-contact">
            <section className="dark:bg-gray-900">
              <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                  Contact Us
                </h2>
                <form action="#" className="space-y-8">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="nama@gmail.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Ada yang bisa kami bantu?"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      rows="6"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Tinggalkan komentar..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn bg-gray-800 py-3 px-5 text-sm font-medium text-white rounded-lg sm:w-fit hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </section>
          </Card>
        </div>
      </div>
    );
  }
}

export default Fitur3;
