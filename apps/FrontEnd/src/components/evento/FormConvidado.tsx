import { Convidado } from "core/src";
import Input from "./Input";
import CompoSimNao from "../shared/CampoSimNao";

export interface FormConvidadoProps {
  convidado: Partial<Convidado>;
  convidadoMudou: (convidado: Partial<Convidado>) => void;
}

function FormConvidado({ convidado, convidadoMudou }: FormConvidadoProps) {
  return (
    <div className="flex flex-col gap-4">
      <Input
        label="Nome"
        value={convidado.nome ?? ""}
        type="text"
        onChange={(e) => convidadoMudou({ ...convidado, nome: e.target.value })}
      />
      <Input
        label="Email"
        value={convidado.email ?? ""}
        type="text"
        onChange={(e) =>
          convidadoMudou({ ...convidado, email: e.target.value })
        }
      />

      <div className="flex gap-5">
        <CompoSimNao
          label="Presença confirmada"
          value={convidado.confirmado ?? false}
          onChange={(valor) =>
            convidadoMudou({ ...convidado, confirmado: valor })
          }
          className="flex-1"
        />
        {convidado.confirmado && (
          <div className="flex-1 flex gap-5">
            <CompoSimNao
              label="Possue Acompanhates ?"
              value={convidado.possuiAcompanhante ?? false}
              onChange={(valor) =>
                convidadoMudou({ ...convidado, possuiAcompanhante: valor })
              }
              className="flex-1"
            />
            {convidado.possuiAcompanhante && (
              <Input
                label="Qtde de acompanhantes"
                type="number"
                min={1}
                value={convidado.qtdeAcompanhantes ?? 1}
                onChange={(e) =>
                  convidadoMudou({
                    ...convidado,
                    qtdeAcompanhantes: +e.target.value,
                  })
                }
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default FormConvidado;
