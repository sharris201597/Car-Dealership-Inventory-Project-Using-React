import React from 'react';
import { styled } from '@mui/system';
import { Button} from '@mui/material';
import car_image from '../../assets/images/car_poster.jpg'
import { Link } from 'react-router-dom';

interface Props{
    title: string;
}

const Root = styled("div")({
    padding: 0,
    margin: 0
})
const NavbarContainer = styled('div')( {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})
const Logo = styled('h1')({
    margin: '0 0 0 0.45em'
})
const LogoA = styled('a')( {
    color: 'rgb(28,24,22)',
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none'
})
const LogoNavigation = styled('ul')( {
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'flex'
})

const NavA = styled(Link)({
    display: 'block',
    padding: '1em',
    color: 'black'
})
const Main = styled('main')( {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${car_image});`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
})
const MainText = styled('div')({
    textAlign: 'center',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white'
})

export const Home = (props:Props) => {
    return (
        <Root>
            <NavbarContainer>
                <Logo>
                    <LogoA>Brand</LogoA>
                </Logo>
                <LogoNavigation>
                    <li>
                        <NavA to="./Home">Home</NavA>
                    </li>
                    <li>
                        <NavA to="./Dashboard">Profile</NavA>
                    </li>
                    <li>
                        <NavA to="#">About</NavA>
                    </li>
                    <li>
                        <NavA to="#">Learn More</NavA>
                    </li>
                </LogoNavigation>
            </NavbarContainer>
            <Main>
                <MainText>
                    <h1>{props.title}</h1>
                    <p>Cars Cars Cars!!!!</p>
                    <Button color='primary' variant='contained' component={Link} to='./Dashboard'>See The Cars</Button>
                </MainText>
            </Main>
        </Root>
    )

}