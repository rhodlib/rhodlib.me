import Card from "../components/Card";

const Projects = ({ ...props }) => {
  return (
    <div {...props}>
      <h2 className="text-white text-5xl text-center">Proyectos</h2>
      <div className="flex w-full justify-around mt-10 items-center">
        <span className="text-primary text-8xl mx-5">{`<`}</span>
        <Card
          title="Proyecto 1"
          date="22/3/2022"
          containerProps={{
            className:
              "w-80 h-96 m-10 flex flex-col justify-center items-center bg-slate rounded-lg",
          }}
        />
        <Card
          title="Proyecto 2"
          date="22/3/2022"
          containerProps={{
            className:
              "w-80 h-96 m-10  flex flex-col justify-center items-center bg-slate rounded-lg",
          }}
        />
        <Card
          title="Proyecto 3"
          date="22/3/2022"
          containerProps={{
            className:
              "w-80 h-96 m-10  flex flex-col justify-center items-center bg-slate rounded-lg",
          }}
        />
        <span className="text-primary text-8xl mx-5">{`>`}</span>
      </div>
    </div>
  );
};

export default Projects;
