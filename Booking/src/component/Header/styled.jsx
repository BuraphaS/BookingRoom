import styled from 'styled-components'

export const NavCon = styled.nav`
    display : flex;
    justify-content : space-between;
    border-bottom : 4px solid #253976; 
    background-color : #ffff;
    
`

export const HeaderCon = styled.section`
    background-color : #8888;
`

export const Menu = styled.ul`
    display : flex;
    margin-right : 2rem;
    font-family: 'Sarabun', sans-serif;
    li{
        margin : 0 1.2rem;
        list-style-type : none;
        display: flex;
        align-items: center;
        
        a{
            color : #253976;
            text-decoration : none;
            font-size : 1.3rem;
            position: relative;
            z-index: 1;
        }
        a:after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 4px;
            transform: scaleX(0);
            transform-origin: bottom left;
            background: #344578;
            z-index: -1;
            transition: transform 0.3s;
            border-radius : 20px;
        }
        
        a:hover::after {
            transform: scaleX(1);
        }
    }
`
