import RegistrationCountdown from "../components/RegristationCountdown";
import Sma from "../components/DaftarSma";
import Smp from "../components/DaftarSmp";
import SpecialCompetition from "../components/SpecialCompetition";
export default function Pendaftaran() {
  return (
    <>
      <div className="w-full  flex items-center justify-center flex-col">
        <RegistrationCountdown />
        <Sma />
        <Smp />
        <SpecialCompetition />
      </div>
    </>
  );
}
