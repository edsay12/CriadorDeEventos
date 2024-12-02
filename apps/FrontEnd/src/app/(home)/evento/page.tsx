import QRCode from "react-qr-code";

function PaginaEvento() {
    return (  <div>
        <span>Evento</span>
        <div>
            <QRCode value="https://www.google.com" className="w-44 h-44" />
        </div>
    </div>);
}

export default PaginaEvento;