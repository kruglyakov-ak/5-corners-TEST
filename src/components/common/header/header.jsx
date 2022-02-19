import logo from '../../../assets/img/logo.png';
import * as S from './header.styled';

const Header = () => (
    <S.StyledHeader>

        <S.Navigation>
            <S.Links>
                <S.LinkItem>
                    <S.Link href='#'>Страница 1</S.Link>
                </S.LinkItem>

                <S.LinkItem>
                    <S.Link href='#'>Страница 2</S.Link>
                </S.LinkItem>

                <S.LinkItem>
                    <S.Link href='#'>Страница 3</S.Link>
                </S.LinkItem>
            </S.Links>

            <S.Logo href='#'>
                <S.Image src={logo} alt="Логотип" width="160" height="50" />
            </S.Logo>

            <S.Links>
                <S.LinkItem>
                    <S.Link href='#'>Страница 4</S.Link>
                </S.LinkItem>

                <S.LinkItem>
                    <S.Link href='#'>Страница 5</S.Link>
                </S.LinkItem>

                <S.LinkItem>
                    <S.Link href='#'>Страница 6</S.Link>
                </S.LinkItem>
            </S.Links>
        </S.Navigation>

    </S.StyledHeader>
);

export default Header;
