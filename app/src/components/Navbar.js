import styled from 'styled-components';
import { Header } from '@aragon/ui';

const Navbar = styled(Header)`
  ul {
    list-style-type: none;
  }
  li {
    display: inline;
    margin-left: 1em;
  }
`;

export default Navbar;