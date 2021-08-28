import styled from 'styled-components';
import { MdClose } from 'react-icons';

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: cente;
    align-items: center;
    z-index: 999;
`;

export const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffffff7b;
    color: #000;
    position: relative;
    z-index: 10;

    border-radius: 10px;
    backdrop-filter: blur(5px);
    background-color: rgba(240,244,245, 0.075);
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
    border: 2px rgba(255,255,255,0.4) solid;
    border-bottom: 2px rgba(40,40,40,0.35) solid;
    border-right: 2px rgba(40,40,40,0.35) solid;
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
    
    h1, h2 {
        text-align: center;
    }
`;

export const CloseModalButton = styled.div`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`;