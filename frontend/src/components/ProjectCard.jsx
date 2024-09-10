const ProjectCard = ({ project }) => {
  return (
    <div key={project.id} className="col-md-6">
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5 className="card-title">{project.name}</h5>
              <p className="card-text small">Status: <strong>{project.status}</strong></p>
            </div>
            <a href={`/projects/${project.id}`} className="btn btn-primary">
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
