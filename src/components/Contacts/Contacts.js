import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import * as SC from './Contacts.styled';
import { ButtonDelete } from 'components/ButtonDelete/ButtonDelete';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
// import { AiOutlineDelete } from 'react-icons/ai/index.esm';
import { VscClose } from 'react-icons/vsc/index.esm';

export const Contacts = ({ onRemoveContact }) => {
  const visibleContacts = useSelector(selectVisibleContacts);
  return (
    <Box as="ul" py={4}>
      {visibleContacts.map(({ name, number, id }) => (
        <SC.ContactCard key={id}>
          <div>
            <h3>{name}</h3>
            <SC.Number>{number}</SC.Number>
          </div>
          <ButtonDelete onRemoveContact={onRemoveContact} id={id}>
            <VscClose />
          </ButtonDelete>
        </SC.ContactCard>
      ))}
    </Box>
  );
};

Contacts.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
};
