import useEvento from "@/data/hooks/useEvento";
import Passos from "../shared/Passos";
import Input from "./Input";
import { Alias, Data } from "core/src/shared";

export default function FormEvento() {
  const labels = [
    "Identificação do evento",
    "Local e Data",
    "Informações finais",
  ];
  const { evento, salvarEvento, alterarEvento, aliasValido } = useEvento();

  const permiteProximoPasso = [
    !!evento!.alias && !!evento!.nome && aliasValido,
    !!evento!.data && !!evento!.local,
    !!evento!.descricao && !!evento!.imagem && !!evento!.imagemBackground,
  ];

  return (
    <div>
      <Passos
        labels={labels}
        labelAcao="Salvar"
        acao={salvarEvento}
      >
        <div className="flex flex-col gap-5">
          <Input
            label="Alias"
            description="Nome do Alias"
            value={Alias.formatar(evento?.alias ?? "")}
            erro={!aliasValido ? "Alias já utilizado" : ""}
            onChange={(e) =>
              alterarEvento({
                ...evento,
                alias: Alias.formatar(e.target.value),
              })
            }
          />
          <Input
            label="Nome"
            description="Nome do evento (ex: Festa do Ferreira)"
            value={evento?.nome ?? ""}
            onChange={(e) => alterarEvento({ ...evento, nome: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-5">
          <Input
            label="Data"
            description="Data e hora que o evento começa"
            type="datetime-local"
            value={Data.formatar(evento?.data ?? new Date())}
            onChange={(e) =>
              alterarEvento({
                ...evento,
                data: Data.desformatar(e.target.value),
              })
            }
          />
          <Input
            label="Local"
            description="Local onde o evento será realizado"
            type="text"
            value={evento?.local ?? ""}
            onChange={(e) =>
              alterarEvento({
                ...evento,
                local: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col gap-5">
          <Input
            label="Descrição"
            description="so entra se trouxer presente"
            type="text"
            value={evento?.descricao ?? ""}
            onChange={(e) =>
              alterarEvento({
                ...evento,
                descricao: e.target.value,
              })
            }
          />
          <Input
            label="Imagem"
            description="URL da imagem será exibida no convite"
            type="text"
            value={evento?.imagem ?? ""}
            onChange={(e) =>
              alterarEvento({
                ...evento,
                imagem: e.target.value,
              })
            }
          />
          <Input
            label="Background"
            description="URL da imagem de fundo"
            type="text"
            value={evento?.imagemBackground ?? ""}
            onChange={(e) =>
              alterarEvento({
                ...evento,
                imagemBackground: e.target.value,
              })
            }
          />
          <Input
            label="Publico esperado"
            description="URL da imagem de fundo"
            type="number"
            value={evento?.publicoEsperado ?? 1}
            onChange={(e) =>
              alterarEvento({
                ...evento,
                publicoEsperado: Number(e.target.value),
              })
              
            }
            min={1}
          />
          
        </div>
      </Passos>
    </div>
  );
}
