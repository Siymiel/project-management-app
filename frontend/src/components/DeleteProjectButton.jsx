import { useMutation } from "@apollo/client";
import { DELETE_PROJECT } from "../mutations/projectMutations";
import { GET_PROJECTS } from "../queries/projectQueries";
import { useNavigate } from "react-router-dom";

const DeleteProjectButton = ({ id }) => {

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id },
    update(cache, { data: { deleteProject } }) {
      const { projects } = cache.readQuery({ query: GET_PROJECTS });
      cache.writeQuery({
        query: GET_PROJECTS,
        data: {
          projects: projects.filter(
            (project) => project.id !== deleteProject.id
          ),
        },
      });
    },
  });

  const handleDelete = () => {
    deleteProject();
    // Redirect or perform any other necessary actions
    window.location.href = "/";
    // navigate('/')
  };

  return (
    <div className="mt-4">
      <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteProjectButton;
