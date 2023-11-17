import { Link } from "react-router-dom";

type BreadcrumbsType = {
  path: string;
  name: string;
};
const data: BreadcrumbsType[] = [
  {
    path: "price",
    name: "Услуги и цены",
  },
  {
    path: "doctors",
    name: "Врачи",
  },
  {
    path: "clinic",
    name: "Клиника",
  },
  {
    path: "contacts",
    name: "Контакты",
  },
];

export default function Breadcrumbs() {
  const numberOfPath = window.location.pathname
    .split("/")
    .filter((e) => e !== "").length;

  const secondParams = window.location.pathname
    .split("/")
    .filter((e) => e !== "")[0];

  const secPath = data.filter((e) => e.path === secondParams)[0].name;

  let thirdParams: string;
  let thirdPath: string;
  if (numberOfPath > 1) {
    thirdParams = window.location.pathname
      .split("/")
      .filter((e) => e !== "")[1];

    thirdPath = data.filter((e) => e.path === thirdParams)[0].name;
  }

  return (
    <div className="mt-[30rem] flex flex-row gap-[10rem] text-[20rem]">
      <Link to="/" className="">
        Главная
      </Link>
      <div>/</div>
      <Link to={`/${secondParams}`} className="">
        {secPath}
      </Link>
      {numberOfPath > 1 && (
        <div className="flex flex-row gap-[10rem] text-[20rem]">
          <div>/</div>
          <Link to={`/${thirdParams!}`} className="">
            {thirdPath!}
          </Link>
        </div>
      )}
    </div>
  );
}
