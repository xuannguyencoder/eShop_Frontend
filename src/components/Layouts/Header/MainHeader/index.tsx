"use client"
import React from "react";
import { useEffect, useState } from "react";
import { Image, Input } from "antd";
import styles from "./index.module.scss";

const MainHeader = () => {
  
  const [searchText, setSearchText] = useState<string | undefined>();

  const [isFocus, setIsFocus] = useState<boolean>(false);

  //const { searchTextRef } = useMainLayoutContext();

//   useEffect(() => {
//     if (searchTextRef) {
//       setIsFocus(true);
//       setSearchText(searchTextRef);
//     }
//   }, [searchTextRef]);

  return (
    <div className="max-w-[1200px] mx-auto flex justify-between items-center h-[45px]">
      <div className="flex-[2]">
        <Image
          alt="icon logo"
          className="cursor-pointer object-contain"
          preview={false}
          src={"/icons/icon_logo_50.svg"}
        />
      </div>

      <div className="flex-[5] h-[100%] w-60">
        <div className={`${styles.inputSearch}`}>
          <Input
            onFocus={() => {
              setIsFocus(true);
            }}
            maxLength={20}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
            placeholder="Tìm kiếm sản phẩm."
            suffix={
              <Image alt="" preview={false} src="/icons/icon_search_25.svg" />
            }
          />
        </div>
      </div>
      
      <div className="flex-[2] flex justify-end items-center space-x-[20px]">
        <div
          className="flex flex-col items-center"
          onClick={() => {}}
          role="button"
          tabIndex={0}
        >
          <Image
            alt="icon login"
            preview={false}
            src="/icons/icon_bag_30.png"
          />
        </div>
        <div
          className="flex flex-col items-center"
          onClick={() => {}}
          role="button"
          tabIndex={0}
        >
          <Image
            alt="icon login"
            preview={false}
            src="/icons/icon_bag_30.png"
          />
        </div>
        <div
          className="flex flex-col items-center"
          onClick={() => {}}
          role="button"
          tabIndex={0}
        >
          <Image
            alt="icon login"
            preview={false}
            src="/icons/icon_login_30.png"
          />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
