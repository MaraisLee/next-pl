import Image from "next/image";
import samplePic from "../public/sample.png";

const ProjectItem = ({ data }) => {
  // console.log("===========");
  // console.log(data);
  const title = data.properties.title.rich_text[0].plain_text;
  const imgUrl = data.cover.file?.url || data.cover.external.url;

  return (
    <div className="project-card">
      <div className="btn-project">
        <a href="https://devgreact.github.io/hansalim/" target="_blank">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src={imgUrl}
            width="100"
            height="60"
            alt="content"
          />
        </a>
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
          SUBTITLE
        </h3>
        <h2 className="text-lg text-gray-900 dark:text-slate-600 font-medium title-font mb-4">
          {title}
        </h2>
        <p className="leading-relaxed text-base">
          Fingerstache flexitarian street art 8-bit waistcoat. Distillery
          hexagon disrupt edison bulbche.
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
