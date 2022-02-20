import styled from 'styled-components';
import SearchIcon from '../../../assets/img/search-ico.png';

const StyledHeader = styled.header`
    max-width: 1110px;
    margin: 0 auto;

    font-size: ${({ theme }) => theme.font.upperbase};
`;

const SearchMenuWrap = styled.div`
    margin-top: 30px;
    padding: 0 20px;

    display: flex;
    justify-content: space-between;
`;

const SearchForm = styled.form`
    position: relative;
`;

const SearchIconSpan = styled.span`
    background-image: url(${SearchIcon});
    background-repeat: no-repeat;

    display: block;
    position: absolute;

    top: 5px;
    left: 0;
    width: 27px;
    height: 27px;
`;

const SearchInput = styled.input`
    margin-left: 45px;
    width: 250px;
    height: 33px;

    font-family: inherit;

    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.grey1};

    &::placeholder {
        opacity: 1;
        color: ${({ theme }) => theme.color.grey1};
    }

    &:focus {
        outline: none;
    }
`;

const SearchMenuIcons = styled.img``;

const Logo = styled.a`
    margin-top: 40px;
`;

const Image = styled.img``;

const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
`;

const Links = styled.ul`
    list-style: none;
    width: 430px;
    margin: 0;
    padding: 0 20px;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-end;
`;

const LinkItem = styled.li``;

const Link = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.color.grey1};
    text-transform: uppercase;

    &:focus,
    &:hover {
      color: ${({ theme }) => theme.color.black};
    }
`;

export {
    StyledHeader,
    SearchMenuWrap,
    Logo,
    Image,
    Navigation,
    Links,
    LinkItem,
    Link,
    SearchForm,
    SearchInput,
    SearchIconSpan,
    SearchMenuIcons
};
