import { ArrowDropDown, Favorite, ShoppingCart } from '@mui/icons-material';
import { Badge, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavContainer, Navs, Logo, SearchContainer } from './style';
function Header() {
    const [navBar, setNavBar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    };
    window.addEventListener('scroll', changeBackground);
    return (
        <div
            className={
                navBar
                    ? 'h-20 z-10 top-0 sticky transition-all items-center border-solid flex align-middle bg-gray-700 text-white'
                    : 'h-20 z-10 top-0 sticky transition-all  items-center border-solid flex align-middle bg-transparent text-white'
            }
        >
            <Logo>
                <Link
                    style={{
                        textDecoration: 'none',
                        color: 'white'
                    }}
                    to="/"
                >
                    <Typography variant="h3">Molla</Typography>
                </Link>
            </Logo>

            <NavContainer>
                <Navs>
                    Home <ArrowDropDown />
                </Navs>
                <Navs>
                    <Link
                        style={{
                            textDecoration: 'none',
                            color: 'white'
                        }}
                        to="/shoppage"
                    >
                        {' '}
                        Shop
                    </Link>

                    <ArrowDropDown />
                </Navs>
                <Navs>
                    Products
                    <ArrowDropDown />
                </Navs>
                <Navs>
                    Pages
                    <ArrowDropDown />
                </Navs>
                <Navs>
                    Blog
                    <ArrowDropDown />
                </Navs>
            </NavContainer>
            <SearchContainer>
                <TextField
                    style={{
                        color: 'red',
                        borderBottom: '1px solid white'
                    }}
                    label="Search"
                    variant="standard"
                />
                <Favorite />
                <Badge badgeContent={4} color="primary">
                    <Link
                        style={{
                            textDecoration: 'none',
                            color: 'white'
                        }}
                        to="cart"
                    >
                        <ShoppingCart />
                    </Link>
                </Badge>
            </SearchContainer>
        </div>
    );
}

export default Header;
