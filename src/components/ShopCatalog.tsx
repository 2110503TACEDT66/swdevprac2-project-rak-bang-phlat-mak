import { HospitalJson, HotelJson } from "../../interface";
import Card from "./Card";
import Link from "next/link";



export default async function HospitalCatalog({
  hospitalsJson,
}: {
  hospitalsJson: Promise<HotelJson>;
}) {

  const hospitalsJsonReady = await hospitalsJson;

  return (
    <>
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignContent: "space-around",
        }}
      >
        {hospitalsJsonReady.data.map((hospitalItem) => (
          <div className="w-full my-10">
            <Link href={`/hospital/${hospitalItem.id}`}>
              <Card
                hospitalName={hospitalItem.name}
                link={`/hospital/${hospitalItem.id}`}
                //imgSrc="/img/parlor.jpg"
              />{" "}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
