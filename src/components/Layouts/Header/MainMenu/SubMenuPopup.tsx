import React from "react";
import {SubMenu1Model}  from "@/redux/endpoints/content_menu";
import Link from "next/link";
interface SubMenuPopupPropsType {
  subMenus: SubMenu1Model[];
  isVisible?: boolean;
}

const SubMenuPopup = ({
  subMenus,
  isVisible = false,
}: SubMenuPopupPropsType) => {
  return (
    <div
      className={`absolute z-[1000] top-[100%] left-[0] w-full rounded-[4px] p-[25px] shadow-[1px_3px_5px_rgba(0,0,0,0.05)]
        bg-[#ffffff] border border-[rgba(215,215,215,0.80)]
        ${isVisible ? "" : "hidden"}`}
    >
      <div className="grid grid-cols-3 gap-x-[50px] gap-y-[30px]">
        {subMenus.map((item, index) => {
          return (
            <div className="leading-[20px] text-[14px] text-[#666]" key={`subMenu1_${index}`}>
              <Link href={item.url??'/'} className="break-words font-semibold hover:text-[#ff6d2a]">
                {item.name}
              </Link>
              <div className="h-[1px] bg-[#ff6d2a] mt-[5px] mb-[15px]" />
              <div className="grid grid-cols-2 gap-x-[5px] gap-y-[13px]">
              {item.subMenus?.map((item2, index2) => {
                return (
                  <div className="leading-[20px]" key={`subMenu2_${index2}`}>
                      <Link href={item2.url??'/'} className="break-words hover:text-[#ff6d2a]">
                        {item2.name}
                      </Link>
                  </div>   
                )
              })}
              </div>
          </div>);
        })}
      </div>
    </div>
  );
};

export default SubMenuPopup;
