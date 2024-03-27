import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useGetMenuGetMenusQuery } from '@/redux/endpoints/content_menu';
import SubMenuPopup from "./SubMenuPopup";


const MainMenu = () => {
  const currentPath= usePathname();
  const [activeMenu, setActiveMenu] = useState<number>(-1);
  
  const { data: getMenuRespone } = useGetMenuGetMenusQuery({
    groupCode: 'MNGMainMenu'
  });

  return (
    <div className="relative h-[40px] leading-[40px] text-[14px] flex justify-center">
      <ul className="flex items-center">
        <li
          key={`menuContents_0`}

          onMouseLeave={()=>{

          }}
          onMouseMove={()=>{

          }}
        >
           <Link href='/' prefetch={false} className={`${
            currentPath === '/' 
              ? "text-[#ff6d2a]"
              : "text-[#666]"
          } px-[12px] font-semibold uppercase`}>
                Trang chủ
            </Link>
        </li>
        {getMenuRespone?.value?.menus?.map((item, index) => {
          return (
            <li
              key={`menu_${index}`}
              onMouseLeave={()=>{
                setActiveMenu(-1)
                console.log('Mouse left the menu');
              }}
              onMouseMove={()=>{
                setActiveMenu(index)
                console.log('Mouse moved over the menu');
              }}
            >
              <Link href={`/products/${item.url}`} 
                className={`${ currentPath === item.url || activeMenu == index
                  ? "text-[#ff6d2a]"
                  : "text-[#666]"
              } px-[12px] font-semibold uppercase`}>
                {item.menuName}
              </Link>
              <SubMenuPopup
                subMenus = {item.subMenus || []}
                isVisible = {activeMenu == index}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MainMenu;
