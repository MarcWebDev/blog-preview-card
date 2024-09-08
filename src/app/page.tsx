import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[100vw] min-h-[100vh] relative flex items-center justify-center">
      <div className="mx-6 max-w-[384px] sm:w-[384px] h-fit bg-white flex flex-col items-start rounded-[20px] border border-black shadow-[8px_8px_0px_0px_#000]">
        <Image src="/illustration-article.svg" alt="Article Illustration" width={336} height={200} className="m-6 rounded-[10px] w-[calc(100%-48px)]" />
          <p className="bg-[#F4D04E] mx-6 mb-3 font-extrabold text-[14px] leading-[150%] px-3 py-1 rounded-[4px] text-[#111]">Learning</p>
          <p className="text-[#111] mx-6 mb-3 text-[14px] font-medium leading-[150%]">Published 21 Dec 2023</p>
          <h1 className="text-[#111] text-[24px] font-extrabold mx-6 mb-3 leading-[150%] cursor-pointer transition duration-200 ease-in-out hover:text-[#F4D04E]">HTML & CSS foundations</h1>
          <p className="text-[#6B6B6B] mx-6 mb-6 text-[16px] font-medium">These languages are the backbone of every website, defining structure, content, and presentation.</p>
          <div className="flex items-center mx-6 mb-6">
              <Image src="/image-avatar.webp" alt="Author Avatar" width={32} height={32} />
              <p className="ml-3 text-[14px] font-extrabold leading-[150%] text-[#111]">Greg Hooper</p>
          </div>
      </div>
    </div>
  );
}
