import React from 'react';

const InfoCard = () => {
  return (
    <div 
      className="relative h-[371px] w-[633px] rounded-xl bg-cover" 
      style={{ backgroundImage: `url(https://s3-alpha-sig.figma.com/img/b272/1aa9/386e9bebe15dd2ab9ff16844a3ed1129?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RdH9g~xTxvl7giyB33eufW9ulYAbINg9DrBuzXoO7K2NRxXzfyiI-DGMf2P7aeuW3rEdKxEIVAy~mG6RNIbijlBo7SvvJWKhqFV~0U1zWRClRBKu8TeIPhMg4PGvpQ1c80cCdSIC5NimooBS94khqmJxLeix40jNLdhzPj~AuwOrLgCXm7Eyebwk7ldd6nHxgdyd8ASghSYqt~TCEVphaRCRYJ-Z4ErUYn49dw01ztE4DYfidKtNFr2k6fEIE8GjH25wMnrlSHV0T3gO72SwmXzKcc-R~BGKeakAQ-9DIrbHuNyCBZTzam9Xpybjc5xbjP2TpdACBINPdFHQYjouvw__)` }}
    >
      <div className="group absolute z-10 flex h-full w-full flex-col justify-between rounded-xl p-3">
        {/* <!-- TOP ROW --> */}
        <div className="flex w-full flex-row-reverse">
          {/* <!-- BUTTON --> */}
          <button className="group flex h-14 w-14 items-center justify-center rounded-full border-2 border-amber-600 bg-transparent group-hover:bg-amber-600">
            {/* <!-- ICON --> */}
            <svg width="34" height="34" viewBox="0 0 34 34" className="fill-amber-600 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg">
              <g id="UI icon/arrow_down/light">
                <path id="Union" d="M5.66667 15.5833C4.88426 15.5833 4.25 16.2176 4.25 17C4.25 17.7824 4.88426 18.4167 5.66667 18.4167L25.6215 18.4167L18.8316 25.2066C18.2784 25.7598 18.2784 26.6568 18.8316 27.2101C19.3848 27.7633 20.2818 27.7633 20.8351 27.2101L29.0417 19.0035C30.1481 17.897 30.1482 16.103 29.0417 14.9965L20.8351 6.78993C20.2818 6.23669 19.3848 6.23669 18.8316 6.78993C18.2784 7.34318 18.2784 8.24016 18.8316 8.7934L25.6215 15.5833L5.66667 15.5833Z" />
              </g>
            </svg>
          </button>
        </div>
     
     
        {/* <!-- BOTTOM ROW --> */}
        <div className="w-full space-y-4 rounded-xl bg-transparent p-1.5 transition group-hover:translate-y-0 group-hover:bg-black/10 group-hover:p-3 group-hover:backdrop-blur-lg">
          <h3 className="text-6xl font-extrabold text-white">Calathea</h3>
          <p className="hidden text-md text-white group-hover:block">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it.</p>
        </div>
      </div>
     
     
      <div className="z-0 flex h-full w-full flex-col justify-between rounded-xl bg-gradient-to-t from-slate-700 to-transparent to-50% p-3 opacity-80"></div>
     </div>
  );
};

export default InfoCard;