import { ArrowDropDown, Favorite, ShoppingCart } from '@mui/icons-material';
import { Badge, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, NavContainer, Navs, Logo, SearchContainer } from './style';
function Header() {
    return (
        <Container>
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
        </Container>
    );
}

export default Header;
