import styled from 'styled-components';

const StyledHeader = styled.header`
    max-width: 1110px;
    margin: 0 auto;
`;

const Logo = styled.a``;

const Image = styled.img``;

const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
`;

const Links = styled.ul`
    list-style: none;
    width: 400px;
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
    Logo,
    Image,
    Navigation,
    Links,
    LinkItem,
    Link
};
