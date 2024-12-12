import { Evento } from "core/src/index";
import QRCode from "react-qr-code";
import { json } from "stream/consumers";

export interface AcessarViaQrCodeProps {
  evento: Evento;
}

function AcessarViaQrCode({ evento }: AcessarViaQrCodeProps) {
  return (
    <div className="flex flex-col gap-2 border items-center justify-center border-zinc-800 px-6 py-3 rounded-lg">
      <span
        className="text-sm font-light
       text-zinc-400"
      >
        Acessar via Mobile
      </span>
      <QRCode
        value={`${JSON.stringify({
          id: evento.id,
          senha: evento.senha,
        })}`}
        className="w-40 h-40"
      />
    </div>
  );
}

export default AcessarViaQrCode;
