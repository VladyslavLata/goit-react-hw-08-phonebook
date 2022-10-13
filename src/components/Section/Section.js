import { Box } from 'components/Box/Box';
import PropTypes from 'prop-types';
import { SectionTitle } from './Sectio.styled';

export const Section = ({ title, children }) => (
  <Box
    as="section"
    px={4}
    pb={4}
    pt="80px"
    mx="auto"
    // width="400px"
    position="relative"
    // zIndex="-8"
  >
    {title && <SectionTitle>{title}</SectionTitle>}
    {children}
  </Box>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
