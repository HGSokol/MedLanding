import { ReviewsType } from "../Layouts/Reviews";

export default function ReviewCard({ name, date, image, text }: ReviewsType) {
  return (
    <div className="p-[24rem] bg-[#FFF] w-[346rem] rounded-[32rem] flex flex-col gap-[16rem]">
      <div className="flex flex-row">
        <div className="mr-[16rem]">
          <img
            src={image}
            alt="user"
            className="rounded-full w-[48rem] h-[48rem]"
          />
        </div>
        <div className="mr-[44rem] flex flex-col">
          <div className="text-[16rem] text-[#242E49] font-semibold leading-[160%]">
            {name}
          </div>
          <div className="text-[14rem] text-[#808A99] font-medium leading-[160%]">
            {date}
          </div>
        </div>
        <div>
          <svg
            className="w-[22rem] h-[22rem]"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <g clip-path="url(#clip0_408_510)">
              <path
                d="M21.3744 9.01798C21.5026 9.75629 21.5666 10.5044 21.5655 11.2537C21.5655 14.6005 20.3693 17.4302 18.2875 19.3456H18.2903C16.4697 21.0272 13.9672 22.0007 11 22.0007C8.08262 22.0007 5.28473 20.8418 3.22183 18.7789C1.15893 16.716 0 13.9181 0 11.0007C0 8.08335 1.15893 5.28545 3.22183 3.22255C5.28473 1.15965 8.08262 0.000725844 11 0.000725844C13.7307 -0.0312544 16.3678 0.994621 18.359 2.86348L15.2185 6.00398C14.0833 4.92182 12.5682 4.32921 11 4.35398C8.13037 4.35398 5.6925 6.28998 4.8235 8.89698C4.36275 10.263 4.36275 11.7425 4.8235 13.1086H4.82762C5.70075 15.7115 8.1345 17.6475 11.0041 17.6475C12.4864 17.6475 13.7596 17.268 14.7469 16.597H14.7428C15.316 16.2172 15.8064 15.7252 16.1842 15.1507C16.5621 14.5762 16.8197 13.9311 16.9414 13.2544H11V9.01935L21.3744 9.01798Z"
                fill="#DEE1E5"
              />
            </g>
            <defs>
              <clipPath id="clip0_408_510">
                <rect width="22" height="22" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div className="text-[16rem] text-[#242E49] font-medium leading-[160%]">
        {text}
      </div>
    </div>
  );
}
