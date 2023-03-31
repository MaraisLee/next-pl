import ProjectItem from "../../components/ProjectItem";
import { DATABASE_ID, TOKEN } from "../../config";

const Portfolio = ({ projects }) => {
  // console.log(projects);
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Portfolio : {projects.results.length}
              </h1>
              <div className="h-1 w-20 bg-green-800 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {projects.results.map((item) => (
              <ProjectItem key={item.id} data={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "title",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const projects = await res.json();
  // console.log(projects.results);

  return {
    props: { projects },
    revalidate: 10,
  };
}
