import { Link, useParams } from 'react-router-dom';
import { GET_PROJECT } from "../queries/projectQueries"
import { useQuery } from "@apollo/client"
import Spinner from '../components/Spinner';
import ClientInfo from '../components/ClientInfo';
import DeleteProjectButton from '../components/DeleteProjectButton';

const Project = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id }
  })

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>

  return (
    <>
    {!loading && !error && (
      <div className='mx-auto w-75 card p-5'>
        <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">Back</Link>

        <h1>{data.project.name}</h1>
        <p>{data.project.description}</p>
        <p>Project Status: <strong>{data.project.status}</strong></p>

        <ClientInfo client={data.project.client} />

        <DeleteProjectButton id={data.project.id} />
      </div>
    )}
    </>
  )
}

export default Project