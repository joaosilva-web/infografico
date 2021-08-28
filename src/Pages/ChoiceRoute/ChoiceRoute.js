import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./ChoiceRoute.css";

function ChoiceRoute() {
  const { register, handleSubmit } = useForm();
  const [planetToGo, setPlanetToGo] = useState("");
  const onSubmit = (data) => setPlanetToGo(JSON.stringify(data.planeta));

  let pageToGo = planetToGo.replace(/^"(.+(?="$))"$/, "$1");

  return (
    <div className="ChoiceRoute">
      <Canvas>
        <OrbitControls />
        <Stars />
      </Canvas>
      <div className="panel">
        <h2>Esolha Seu Destino:</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="select">
            <select {...register("planeta")} id="selectPlanetas">
              <option selected disabled value="null">
                Selecion o destino
              </option>
              <option value="Sol">Sol</option>
              <option value="Mercurio">Mercúrio</option>
              <option value="Venus">Vênus</option>
              <option value="Terra">Terra</option>
              <option value="Marte">Marte</option>
              <option value="Saturno">Saturno</option>
              <option value="Urano">Urano</option>
              <option value="Netuno">Netuno</option>
              <option value="Plutao">Plutão</option>
            </select>
            <span className="custom-arrow"></span>
          </div>

          <button>Salvar destino</button>
        </form>
        <Link to={pageToGo}>Viajar para planeta {planetToGo}</Link>
      </div>
    </div>
  );
}

export default ChoiceRoute;
