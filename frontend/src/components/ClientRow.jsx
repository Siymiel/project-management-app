import { useMutation } from '@apollo/client';
import { DELETE_CLIENT } from '../mutations/clientMutations';

import { FaTrash } from 'react-icons/fa'

const ClientRow = ({ client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    //refetchQueries: [{ query: GET_CLIENTS }], // Refecthes the query which can be expensive
    update(cache, { data: { deleteClient } }) {
      cache.modify({
        fields: {
          clients(existingClients, { readField }) {
            return existingClients.filter(
              (clientRef) => deleteClient.id !== readField('id', clientRef)
            );
          },
        },
      });
    },
  });

  return (
    <tr key={client.id}>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={deleteClient}>
            <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
