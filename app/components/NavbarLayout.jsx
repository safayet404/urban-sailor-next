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
    { id: "latest", title: "Latest News", description: "Read the latest updates and articles." },
    { id: "trending", title: "Trending", description: "Check out trending topics and stories." },
  ],
  men: [
    { id: "clothing", title: "Clothing", description: "Explore men's fashion." },
    { id: "accessories", title: "Accessories", description: "Shop for men's accessories." },
  ],
  woman: [
    { id: "clothing", title: "Clothing", description: "Explore women's fashion." },
    { id: "accessories", title: "Accessories", description: "Shop for women's accessories." },
  ],
  kids: [
    { id: "clothing", title: "Clothing", description: "Discover clothing for kids." },
    { id: "toys", title: "Toys", description: "Browse fun toys for kids." },
  ],
  sale: [
    { id: "discounts", title: "Discounts", description: "Shop items on sale with discounts." },
    { id: "flash-sales", title: "Flash Sales", description: "Don't miss our flash sales." },
  ],
};

function MenuSection({ label, menuItems }) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleCategoryClick = (categoryLabel) => {
    router.push(`/nav-product/${categoryLabel}`);
  };

  const renderItems = menuItems.map(({ id, title, description }) => (
    <MenuItem key={id}  className="flex items-center gap-3" onClick={() => handleCategoryClick(label)}>
      <div>
        <Typography variant="h6" color="blue-gray" className="text-sm text-black font-bold">
          {title}
        </Typography>
        <Typography variant="paragraph" className="text-xs !font-medium text-blue-gray-500 text-black">
          {description}
        </Typography>
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