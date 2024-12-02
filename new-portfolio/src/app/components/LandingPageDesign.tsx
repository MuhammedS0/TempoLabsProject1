import React from "react";

const LandingPageDesign: React.FC = () => {
  return (
    <div className="w-[1440px] h-[846px] justify-center items-end gap-[71px] inline-flex">
      {/* Left Section */}
      <div className="flex-col justify-start items-start gap-6 inline-flex">
        <div className="w-9 h-9 justify-center items-center inline-flex">
          <div className="w-9 h-9 relative">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M12.135 17.4452H5.1C5.22 10.4402 6.6 9.2852 10.905 6.7352C11.4 6.4352 11.565 5.8052 11.265 5.2952C10.98 4.8002 10.335 4.6352 9.84 4.9352C4.77 7.9352 3 9.7652 3 18.4802V26.5652C3 29.1302 5.085 31.2002 7.635 31.2002H12.135C14.775 31.2002 16.77 29.2052 16.77 26.5652V22.0652C16.77 19.4402 14.775 17.4452 12.135 17.4452Z"
                  fill="#344054"
                />
                <path
                  d="M28.3648 17.4452H21.3298C21.4498 10.4402 22.8298 9.2852 27.1348 6.7352C27.6298 6.4352 27.7948 5.8052 27.4948 5.2952C27.1948 4.8002 26.5648 4.6352 26.0548 4.9352C20.9848 7.9352 19.2148 9.7652 19.2148 18.4952V26.5802C19.2148 29.1452 21.2998 31.2152 23.8498 31.2152H28.3498C30.9898 31.2152 32.9848 29.2202 32.9848 26.5802V22.0802C32.9998 19.4402 31.0048 17.4452 28.3648 17.4452Z"
                  fill="#344054"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="text-[#344053] text-xl font-medium font-['Lufga']">
          Jenny’s Exceptional product design ensures our website’s success.
          Highly Recommended
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex-col justify-start items-center gap-2.5 inline-flex">
        <div className="w-[1017.91px] h-[688.48px] pt-[76.42px] pb-[507.53px] justify-center items-center inline-flex">
          <div className="grow shrink basis-0 h-[82px] p-2.5 bg-white/10 rounded-[50px] border-2 border-white backdrop-blur-[15px] justify-center items-center gap-2.5 inline-flex">
            <div className="h-[62px] px-5 py-2.5 bg-[#fd8439] rounded-[60px] border border-[#cfd4dc] justify-center items-center flex">
              <div className="text-white text-[25.69px] font-medium font-['Lufga']">
                Portfolio
              </div>
            </div>
            <div className="grow shrink basis-0 h-[54px] px-5 py-2.5 rounded-[60px] justify-center items-center gap-2.5 flex">
              <div className="text-white text-[25.69px] font-light font-['Lufga']">
                Hire me
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-[952.40px] h-[636px]"
          src="https://s3-alpha-sig.figma.com/img/ff87/50b0/ee38089da872910b623b1d3a4aaf4535?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZfxlGu39praBl7it2zEHATupGELLOF03FHmxTqz3wYFvf1zpC~oZFEZ76qAqZkebOo0AOJGzNb1Pt6--F9HoU7rBOfLQ1e0VJnFMrUybf7sYhjo3JRSZhBvtuqpBETmMMtX1Obqjipq~JoEoocshVD66vESgI5TlDskbFXJ~tSr~2UUy4NGFeTAeB7htsYrM7OCQWqkQ1lu4~E-bZ~CNML4~htm3cimmnfbWqIu-lHOg9qX1oBladEqYSKN~IuY5Vptv6WtxpBqkcxubkRJHCBBd6yjVJEb~EHtqDA1ISxyEpRUiEM8vw~g3eoZsnXzzkV82epZWLvKKTZ81Mgs48A__"
          alt="Jenny's Portfolio"
        />
      </div>

      {/* Right Section */}
      <div className="flex-col justify-start items-center inline-flex">
        <div className="flex-col justify-start items-center gap-2.5 flex">
          <div className="w-[127.49px] h-16 relative">
            <div className="h-[45px] px-[25.49px] py-[12.75px] left-0 top-[19px] absolute bg-white/10 rounded-[38.24px] border border-neutral-900 justify-center items-center gap-[6.37px] inline-flex">
              <div className="text-neutral-900 text-xl font-medium font-['Lufga']">
                Hello!
              </div>
            </div>
          </div>
          <div className="w-[913px] text-center">
            <span
              style={{
                color: "#344053",
                fontSize: "3rem",
                fontWeight: "semibold",
              }}
            >
              {'...'}
            </span>
            <span
              style={{
                color: "#fd8439",
                fontSize: "3rem",
                fontWeight: "semibold",
              }}
            >
              Jenny
            </span>
            <span
              style={{
                color: "#344053",
                fontSize: "3rem",
                fontWeight: "semibold",
              }}
            >
              , Product Designer
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex-col justify-start items-end gap-[21px] inline-flex">
        {/* Stars Section */}
        <div className="justify-center items-start inline-flex gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              width="28"
              height="26"
              viewBox="0 0 28 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M21.8912 16.0935C21.5459 16.4282 21.3872 16.9122 21.4659 17.3868L22.6512 23.9468C22.7512 24.5028 22.5165 25.0655 22.0512 25.3868C21.5952 25.7202 20.9885 25.7602 20.4912 25.4935L14.5858 22.4135C14.3805 22.3042 14.1525 22.2455 13.9192 22.2388H13.5578C13.4325 22.2575 13.3099 22.2975 13.1979 22.3588L7.29118 25.4535C6.99918 25.6002 6.66852 25.6522 6.34452 25.6002C5.55518 25.4508 5.02852 24.6988 5.15785 23.9055L6.34452 17.3455C6.42318 16.8668 6.26452 16.3802 5.91918 16.0402L1.10452 11.3735C0.70185 10.9828 0.56185 10.3962 0.74585 9.86683C0.924517 9.33883 1.38052 8.9535 1.93118 8.86683L8.55785 7.9055C9.06185 7.8535 9.50452 7.54683 9.73118 7.0935L12.6512 1.10683C12.7205 0.973496 12.8099 0.850829 12.9179 0.746829L13.0378 0.653496C13.1005 0.584163 13.1725 0.526829 13.2525 0.480163L13.3979 0.426829L13.6245 0.333496H14.1859C14.6872 0.385496 15.1285 0.685496 15.3592 1.1335L18.3179 7.0935C18.5312 7.5295 18.9459 7.83216 19.4245 7.9055L26.0512 8.86683C26.6112 8.94683 27.0792 9.3335 27.2645 9.86683C27.4392 10.4015 27.2885 10.9882 26.8779 11.3735L21.8912 16.0935Z"
                  fill="#FD853A"
                />
              </g>
            </svg>
          ))}
        </div>
        <div className="flex-col justify-start items-end gap-[5px] flex">
          <div className="text-center text-neutral-900 text-[47px] font-bold font-['Urbanist'] leading-[47px]">
            10 Years
          </div>
          <div className="text-center text-neutral-900 text-xl font-normal font-['Lufga'] leading-tight">
            Experience
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageDesign;
