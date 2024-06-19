import { Card, Button } from "flowbite-react";
import React, { Component } from "react";
import hero from "./assets/hero.jpg";
import gambar from "./assets/images.jpg";
import poster from "./assets/poster.jpg";
import gambar2 from "./assets/IOT.jpg";
import gambar3 from "./assets/Khatmil.jpg";
import gambar4 from "./assets/KegianaAoT.jpg";
import gambar5 from "./assets/Fikry.jpg";
import gambar6 from "./assets/NetSe.jpg";
import "./style.css";

class Fitur3 extends Component {
  render() {
    return (
      <div className="container">
        <div className="h1">
          <div>Kegiatan Sekolah</div>
          <hr className="my-6 border lg:my-8" />
        </div>
        <div className="card bg-dark shadow white:bg-gray-900 p-4">
          <div className="row">
            <div className="col order-5">
              <div className="row">
                <div className="col-container">
                  <a
                    href="#"
                    className="flex flex-col items-center rounded-lg md:flex-row md:max-w-xl"
                  >
                    <img
                      className="animated-image object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                      src={gambar}
                      alt="gambar"
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal text-white">
                      <p className="mb-3 font-normal h6">
                        <div className="h4">Pemilu 2024</div>
                        Kegiatan pemilihan umum siswa diadakan setiap tahun
                        untuk mengajarkan nilai-nilai demokrasi dan partisipasi
                        aktif dalam masyarakat sekolah.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="row pt-2">
                <div className="col-container">
                  <a
                    href="#"
                    className="flex flex-col items-center rounded-lg md:flex-row md:max-w-xl"
                  >
                    <img
                      className="animated-image object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                      src={gambar2}
                      alt="gambar"
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal text-white">
                      <p className="mb-3 font-normal h6">
                        <div className="h4">
                          Workshop Internet Of Things Kelas XI
                        </div>
                        Workshop ini memperkenalkan konsep dan aplikasi Internet
                        of Things (IoT) kepada siswa kelas XI, membantu mereka
                        memahami teknologi yang sedang berkembang ini.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="row pt-2">
                <div className="col-container">
                  <a
                    href="#"
                    className="flex flex-col items-center rounded-lg md:flex-row md:max-w-xl"
                  >
                    <img
                      className="animated-image object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                      src={gambar3}
                      alt="gambar"
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal text-white">
                      <p className="mb-3 font-normal h6">
                        <div className="h4">
                          Khatmil Qur'an di Bulan Ramadhan
                        </div>
                        Kegiatan Khatmil Qur'an diadakan setiap bulan Ramadhan
                        untuk mempererat kebersamaan dan meningkatkan
                        spiritualitas siswa.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <br />
            </div>
            <div className="col order-5">
              <div className="row">
                <div className="col-container">
                  <a
                    href="#"
                    className="flex flex-col items-center rounded-lg md:flex-row md:max-w-xl"
                  >
                    <img
                      className="animated-image object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                      src={gambar4}
                      alt="gambar"
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal text-white">
                      <p className="mb-3 font-normal h6">
                        <div className="h4">
                          Workshop Internet Of Things Kelas XII
                        </div>
                        Workshop lanjutan untuk siswa kelas XII yang mendalami
                        lebih jauh teknologi IoT, melibatkan proyek praktis dan
                        presentasi.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="row pt-2">
                <div className="col-container">
                  <a
                    href="#"
                    className="flex flex-col items-center rounded-lg md:flex-row md:max-w-xl"
                  >
                    <img
                      className="animated-image object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                      src={gambar5}
                      alt="gambar"
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal text-white">
                      <p className="mb-3 font-normal h6">
                        <div className="h4">PPDB TP 2024-2025</div>
                        Penerimaan Peserta Didik Baru untuk tahun ajaran
                        2024-2025, memberikan informasi lengkap tentang prosedur
                        pendaftaran dan seleksi.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="row pt-2">
                <div className="col-container">
                  <a
                    href="#"
                    className="flex flex-col items-center rounded-lg md:flex-row md:max-w-xl"
                  >
                    <img
                      className="animated-image object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                      src={gambar6}
                      alt="gambar"
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal text-white">
                      <p className="mb-3 font-normal h6">
                        <div className="h4">Workshop Network Security</div>
                        Workshop tentang keamanan jaringan yang diadakan untuk
                        siswa kelas XI dan XII, memberikan pengetahuan tentang
                        perlindungan data dan infrastruktur IT.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              <br />
            </div>          <div className="col-md-4 order-5">
            <img className="h-auto w-100" src={poster} alt="Hero" />
          </div>
          </div>{" "}

        </div>
      </div>
    );
  }
}

export default Fitur3;
