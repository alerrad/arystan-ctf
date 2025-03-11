"use client";

import MatrixBackground from "../components/MatrixBackground";
import CountdownTimer from "../components/CountdownTimer";
import MapWrapper from "../components/MapWrapper";
import Image from "next/image";
import { useEffect } from "react";
import { load } from "@2gis/mapgl";
import { Map } from "@2gis/mapgl/types";

export default function Home() {
  useEffect(() => {
    let map: Map;

    load().then((mapglAPI) => {
      map = new mapglAPI.Map("map-container", {
        center: [77.088896, 43.229397],
        zoom: 17,
        key: process.env.NEXT_PUBLIC_URBI_API_KEY,
        lang: "ru",
      });

      const marker = new mapglAPI.Marker(map, {
        coordinates: [77.088896, 43.229397],
        interactive: true,
      });
    });

    return () => map && map.destroy();
  }, []);

  return (
    <main className="min-h-screen bg-black text-green-500 font-mono">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0">
          <MatrixBackground />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>
        <div className="max-w-3xl mx-auto relative z-20">
          <h1
            className="text-4xl sm:text-5xl font-bold mb-6 glitch"
            data-text="Military CTF: Digital Fortress"
          >
            Military CTF: Digital Fortress
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-green-200">
            Филиал Общественного фонда «NNEF» «Специализированный лицей
            «Арыстан» и Военная кафедра Astana IT University приглашает 15 марта
            на Military CTF: Digital Fortress.
          </p>
          <CountdownTimer />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <h2 className="text-3xl font-bold mb-6 text-center">О мероприятии</h2>
        <div className="max-w-4xl mx-auto flex items-center flex-wrap justify-around">
          <Image
            src="CTF-event.webp"
            width={400}
            height={100}
            alt="about image"
            className="rounded-xl"
          />
          <div className="space-y-4 max-w-md text-green-200 mt-5 sm:mt-0">
            <p>
              ⚡️ 10 команд, состоящих из студентов и специалистов по
              информационной безопасности будут взламывать военную
              инфраструктуру на киберполигоне, реализовывать бизнес риски и
              решать разные задачи по кибербезопасности.
            </p>
            <p>
              ⚠️ Атакуйте военную инфраструктуру, захватывайте флаги и
              реализуйте риски!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Задачи</h2>
          <p className="text-lg mb-4 text-center text-green-200">
            📌 Категории задач с которыми столкнутся участники
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-full">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              Web приложения
            </div>
            <div className="flex items-center bg-yellow-500 text-black px-4 py-2 rounded-full">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              OSINT
            </div>
            <div className="flex items-center bg-purple-500 text-white px-4 py-2 rounded-full">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              Reverse Engineering
            </div>
            <div className="flex items-center bg-red-500 text-white px-4 py-2 rounded-full">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Криптография
            </div>
            <div className="flex items-center bg-green-500 text-white px-4 py-2 rounded-full">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
              Стеганография
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Призовой фонд</h2>
          <p className="text-4xl font-bold mb-4 ">🏆 750 000 тенге</p>
          <p className="text-lg mb-5 text-green-200">
            Спонсоры: Общественный фонд «NNEF» и Благотворительный фонд «Halyk».
          </p>
          <div className="max-w-xl flex flex-wrap items-center justify-around mx-auto">
            <Image
              src="./NNEF-logo.png"
              alt="NNEF logo"
              width={288}
              height={100}
            />
            <Image
              src="./halyk-logo.png"
              alt="Halyk logo"
              width={288}
              height={100}
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Когда и где</h2>
          <p className="text-lg text-green-200">🗓 15 марта 10:00 часов</p>
          <p className="mt-2 text-green-200">
            Алматинская область, Талгарский район, с. Бескайнар, филиал
            Общественного фонда «NNEF» «Специализированный лицей «Арыстан»
          </p>
        </div>
        <div className="max-w-6xl h-96 m-auto mt-6">
          <MapWrapper />
        </div>
      </section>

      <footer className="py-8 px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; 2025 Military CTF: Digital Fortress. All rights reserved.</p>
        <p>Designed & built by <a href="https://github.com/alerrad" className="text-green-100" target="_blank">Alerrad↗️</a></p>
      </footer>
    </main>
  );
}
