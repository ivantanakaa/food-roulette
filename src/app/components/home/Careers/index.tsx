import Link from "next/link";
import careers from "./careers.json";

export default function Careers() {
  return (
    <div className="xl:p-6 p-4  flex flex-col justify-center items-center">
      <h1 className="text-txt-dark mb-4 text-4xl pb-4 border-b-4 px-4 w-fit border-txt-dark">
        Careers
      </h1>
      <div className="flex flex-col">
        {careers.map((career, index) => {
          const startDate = new Date(career.start_date)
            .toLocaleDateString("en-GB", {
              month: "short",
              year: "numeric",
            })
            .replace(" ", ". ");
          const endDate =
            career.end_date &&
            new Date(career.end_date)
              .toLocaleDateString("en-GB", {
                month: "short",
                year: "numeric",
              })
              .replace(" ", ". ");
          return (
            <div
              className="flex flex-col justify-start my-4"
              key={`career-${index}`}
            >
              <h2 className=" font-medium text-2xl mb-2 w-fit">
                <Link
                  className="text-blue-500 hover:text-blue-700 hover:transition-all delay-150"
                  href={career.corporate_link}
                  target={"_blank"}
                  rel={"noreferrer noopener"}
                >
                  {career.corporate}
                </Link>
                <span className=" border-l-4 ml-4 pl-4 h-100 border-[#3d3d3d]">
                  {career.position}
                </span>
              </h2>
              <div>
                <span>
                  {startDate} - {endDate ? endDate : <i>Present</i>}
                </span>
              </div>
              <div className="mt-4 pl-1 max-w-[700px]">
                <ul className="list-disc">
                  {career.jobs.map((job, index) => {
                    return (
                      <li
                        key={`job-${index}`}
                        dangerouslySetInnerHTML={{ __html: job }}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
