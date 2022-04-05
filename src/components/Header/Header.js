import { ArrowDropDown, Favorite, ShoppingCart } from '@mui/icons-material';
import { Badge, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavContainer, Navs, Logo, SearchContainer } from './style';
function Header() {
    const [navBar, setNavColor] = useState(false);

    function usePageViews() {
        let location = useLocation();

        useEffect(() => {
            console.log(location);

            if (location.pathname === '/') {
                window.addEventListener('scroll', changeColor);
                changeColor();
            } else setNavColor(true);
            return () => {
                window.removeEventListener('scroll', changeColor);
            };
        }, [location]);
    }

    const changeColor = () => {
        if (window.scrollY >= 70) {
            setNavColor(true);
        } else setNavColor(false);
    };

    // useEffect(() => {
    //     return window.removeEventListener('scroll', changeColor);
    // }, []);
    usePageViews();

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
