import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import React, { useState, useEffect } from "react";
import Astronaut from "../../Astronaut1";
import { Modal } from "../../components/Modal";
import Earth from "../../Earth";
import api from "../../components/Api/api"



function Terra() {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    const [info, setInfo] = useState();

    useEffect(() => {
      api
        .get(`/find/Terra`)
        .then(response => {
          setInfo(response.data);
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    },[]);
  
    

    return(
        <>
        {info?.map(
           (planeta) =>
            <Modal showModal={showModal} setShowModal={setShowModal} planeta={planeta}/>
            )}
            <Canvas>
                <OrbitControls/>
                <Stars/>
            <directionalLight intensity={1} />
            <ambientLight intensity={0.9} /> 
            <Suspense>
                <Astronaut position={[-6, -1, 0]} rotation={[0, 1.5, 0]}/>
                <Earth position={[7, 0, 2]} onClick={() => {openModal()}}/>
            </Suspense>
            
            </Canvas>
    </>
    )
}

export default Terra;