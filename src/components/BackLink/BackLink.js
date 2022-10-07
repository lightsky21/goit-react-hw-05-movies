import { StyledLink } from './BackLink.styled';
import PropTypes from 'prop-types';
export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      {/* <HiArrowLeft size="24" /> */}
      {children}
    </StyledLink>
  );
};
BackLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  children: PropTypes.string.isRequired,
};
