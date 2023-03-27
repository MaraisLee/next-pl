import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import DevAni from "../components/DevAni";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              프론트엔드 개발자
              <br className="hidden lg:inline-block" />
              이예은
            </h1>
            <p className="mb-8 leading-relaxed">
              프랑시스 파란 이런 하나에 이네들은 별 있습니다. 헤일 이름과,
              지나가는 언덕 새워 벌써 어머님, 버리었습니다. 하나에 가을 가을로
              듯합니다. 책상을 별을 겨울이 오는 가을 동경과 별에도 있습니다.
              언덕 많은 나의 시와 멀듯이, 추억과 계집애들의 이름과, 계십니다.
              하나 별 어머님, 당신은 그리고 애기 사랑과 마디씩 이런 듯합니다.
              나의 강아지, 그리워 아름다운 거외다. 않은 무성할 이웃 둘 있습니다.
              잔디가 이름과, 비둘기, 애기 지나고 봅니다. 풀이 별빛이 별
              버리었습니다.
            </p>
            <div className="flex justify-center">
              <Link href="/portfolio">
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  Portfolio
                </button>
              </Link>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <DevAni />
          </div>
        </div>
      </section>
    </>
  );
}
