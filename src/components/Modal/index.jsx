import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";



export const Modal = ({ showModal, setShowModal, planeta }) =>{
    return(
        <>
        {showModal ? (
            <S.Background>
                <S.ModalWrapper>
                    <S.ModalContent>
                    <h1>Informações sobre "{planeta?.name}"</h1>
                    <h2>Duração da orbita solar: {planeta?.features.orbitalPeriod[0]}</h2>
                    <h2>Velolcidade orbital: {planeta?.features.orbitalSpeed}</h2>
                    <h2>Velolcidade de rotação: {planeta?.features.rotationDuration}</h2>
                    <h2>Raio: {planeta?.features.radius}</h2>
                    <h2>Diametro: {planeta?.features.Diameter}</h2>
                    <h2>Distancia até o Sol: {planeta?.features.sunDistance}</h2>
                    <h2>Temperatura: {planeta?.features.temperature}</h2>
                    </S.ModalContent>
                    <S.CloseModalButton 
                    aria-label='Close modal'
                    onClick={() => setShowModal(prev => !prev)}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </S.CloseModalButton>
                </S.ModalWrapper>
            </S.Background>
        ) : null}
        </>
    )
}
