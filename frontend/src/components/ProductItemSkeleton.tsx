import Image from "next/image";

import imagePlaceHolderSVG from "@/assets/imagePlaceHolder.svg";

export default function ProductItemSkeleton() {
  return (
    <div
      role="status"
      className="m-auto flex w-full max-w-md animate-pulse flex-col rounded border border-gray-200 p-4 shadow md:flex-row md:p-6 dark:border-gray-700"
    >
      <div className="mx-auto h-44 w-52 border p-5 text-gray-200 dark:text-gray-600">
        <Image
          src={imagePlaceHolderSVG}
          alt="image place holder"
          width={500}
          height={300}
          className="mx-auto h-full w-full rounded-t-md object-contain object-center p-2"
        />
      </div>
      <div className="flex w-full flex-col p-4">
        <div className="mb-5 h-4 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      </div>
    </div>
  );
}
