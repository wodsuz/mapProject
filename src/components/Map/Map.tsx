import { Map, Marker } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";

function MyMap() {
  return (
    <>
      <Map
        height={500}
        center={[59.334591, 18.06324]}
        defaultZoom={14}
        provider={osm}
      >
        <Marker width={50} anchor={[59.334591, 18.06324]} color={"black"} />
      </Map>
      <p className="m-5 text-base text-center text-black ">
        Latitude :59.334591, Longitude :18.06324
      </p>
    </>
  );
}
export default MyMap;
