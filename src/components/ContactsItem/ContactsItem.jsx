import PropTypes from 'prop-types';
export const ContactsItem = ({ name, number, id, deleteContact }) => {
  return (
    <li key={id}>
      <p>
        {name} : {number}
      </p>
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
