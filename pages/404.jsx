import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { HomeIcon } from "@heroicons/react/solid";

const pageNotFound = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>Rest Countries Api</title>
      </Head>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <div className="mx-auto p-5 w-full tablet:w-1/2 desktop:w-1/3">
          <Image src="/404.svg" width={100} height={50} layout="responsive" />
        </div>
        <p className="w-full mx-auto text-center text-h1 font-semibold mt-2">
          PAGE NOT FOUND
        </p>
        <Link href="/">
          <a className="flex flex-row items-start bg-blue-dark rounded-md text-white text-center p-3 mt-5 transition-opacity hover:opacity-80">
            <HomeIcon className="w-5 mr-2" />
            BACK HOME
          </a>
        </Link>
      </div>
    </>
  );
};

pageNotFound.layout = ({ children }) => <div>{children}</div>;

export default pageNotFound;
