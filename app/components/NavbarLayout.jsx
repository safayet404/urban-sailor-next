"use client";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { FaBars } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import Link from "next/link";
// Define the data for each section
const navListMenuItems = {
  news: [
    { id: "latest", title: "Latest News", description: ["Read the latest updates", "and articles."] },
    { id: "trending", title: "Trending", description: ["Check out trending topics", "and stories."] },
  ],
  men: [
    { id: "clothing", title: "Clothing", description: ["Shirt", "Pant","T-shirt", "Blazer"] },
    { id: "accessories", title: "Accessories", description: ["Watch", "Wallet", "Belt"] },
  ],
  woman: [
    { id: "clothing", title: "Clothing", description: ["Dress", "Tops", "Skirts"] },
    { id: "accessories", title: "Accessories", description: ["Necklace", "Handbag", "Scarf"] },
  ],
  kids: [
    { id: "clothing", title: "Clothing", description: ["T-shirt", "Shorts", "Sweater"] },
    { id: "toys", title: "Toys", description: ["Action Figures", "Board Games", "Puzzles"] },
  ],
  sale: [
    { id: "discounts", title: "Discounts", description: ["Winter Sale", "Clearance", "Flash Deals"] },
    { id: "flash-sales", title: "Flash Sales", description: ["Limited Time Offers", "Daily Deals"] },
  ],
};

function MenuSection({ label, menuItems }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);


  const renderItems = menuItems.map(({ id, title, description }) => (
    <MenuItem key={id}  className="flex  gap-3" >
      <div>
        <Typography variant="h6" color="blue-gray" className="text-sm text-black font-bold">
          {title} 
        </Typography>
        <div>

          

          {description.map((item,index)=>(
        <Typography key={index} variant="paragraph" className="text-xs !font-medium text-blue-gray-500 text-black">
         <ul>
         <Link href={`/nav-product/${label.toLowerCase()}/${item}`} passHref>
          <li className="list-disc space-y-3 mt-2 ml-4"> {item}</li>
          </Link>
         </ul>
        </Typography>

          ))}

         

        </div>
      </div>
    </MenuItem>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
          <Link href={`/nav-product/${label.toLowerCase()}`} passHref>
              <ListItem
                className="flex items-center gap-2 py-2 pr-4 hover:underline font-medium text-gray-900"
                selected={isMenuOpen || isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((cur) => !cur)}
              >
                {label}
              </ListItem>
            </Link>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 text-black uppercase">
      <MenuSection label="News" menuItems={navListMenuItems.news}  />
      <MenuSection label="men" menuItems={navListMenuItems.men}  />
      <MenuSection label="Woman" menuItems={navListMenuItems.woman}  />
      <MenuSection label="Kids" menuItems={navListMenuItems.kids}  />
      <MenuSection label="Sale" menuItems={navListMenuItems.sale}  />
    </List>
  );
}

export default function MegaMenuWithHover() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);



  return (
    <div>
      <Navbar className="mx-auto max-w-screen-xl shadow-none px-4 py-2">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="hidden lg:block">
            <NavList  />
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? <HiXMark className="h-6 w-6 text-black" strokeWidth={2} /> : <FaBars className="h-6 w-6 text-black" strokeWidth={2} />}
          </IconButton>
        </div>
      </Navbar>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>

     
    
    </div>
  );
}