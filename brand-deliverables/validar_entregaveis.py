#!/usr/bin/env python3
"""Valida quais entregaveis de branding ja foram produzidos e colocados
nas pastas deste diretorio.

Uso:
    python3 validar_entregaveis.py

O que faz:
  1. Le checklist_items.json (a lista de itens esperados).
  2. Para cada item, olha dentro da pasta correspondente e verifica:
       - OK              -> tem pelo menos 1 arquivo no formato esperado
       - FALTANDO        -> pasta vazia (ignorando .gitkeep/arquivos ocultos)
       - FORMATO INCORRETO -> tem arquivo(s), mas nenhum no formato esperado
  3. Imprime um resumo no terminal.
  4. Grava relatorio_validacao.md (relatorio completo, com o que falta
     produzir ainda).

Nao precisa de nenhuma biblioteca alem da instalacao padrao do Python 3.
"""
import json
from datetime import datetime
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
ITEMS_FILE = BASE_DIR / "checklist_items.json"
REPORT_FILE = BASE_DIR / "relatorio_validacao.md"

IGNORAR = {".gitkeep", ".ds_store"}

STATUS_OK = "OK"
STATUS_FALTANDO = "FALTANDO"
STATUS_FORMATO_INCORRETO = "FORMATO INCORRETO"

PRIORIDADE_LABEL = {
    "essencial": "ESSENCIAL",
    "recomendado": "recomendado",
    "opcional": "opcional",
}


def listar_arquivos(pasta: Path):
    if not pasta.exists():
        return []
    arquivos = []
    for f in sorted(pasta.iterdir()):
        if f.is_file() and f.name.lower() not in IGNORAR and not f.name.startswith("."):
            arquivos.append(f)
    return arquivos


def avaliar_item(item):
    pasta = BASE_DIR / item["pasta"]
    formatos_esperados = [f.lower() for f in item["formatos"]]
    arquivos = listar_arquivos(pasta)

    if not arquivos:
        return STATUS_FALTANDO, []

    encontrados = [f for f in arquivos if f.suffix.lower() in formatos_esperados]
    if encontrados:
        return STATUS_OK, encontrados

    return STATUS_FORMATO_INCORRETO, arquivos


def main():
    data = json.loads(ITEMS_FILE.read_text(encoding="utf-8"))
    agora = datetime.now().strftime("%d/%m/%Y %H:%M")

    resultados = []  # (categoria, item_dict, status, arquivos_encontrados)
    for cat in data["categorias"]:
        for item in cat["itens"]:
            status, arquivos = avaliar_item(item)
            resultados.append((cat["categoria"], item, status, arquivos))

    contagem = {STATUS_OK: 0, STATUS_FALTANDO: 0, STATUS_FORMATO_INCORRETO: 0}
    for _, _, status, _ in resultados:
        contagem[status] += 1

    pendencias = [r for r in resultados if r[2] != STATUS_OK]
    pendencias_essenciais = [r for r in pendencias if r[1]["prioridade"] == "essencial"]

    # ---- terminal ----
    print(f"Validacao de entregaveis Haera -- {agora}")
    print("=" * 60)
    categoria_atual = None
    for categoria, item, status, arquivos in resultados:
        if categoria != categoria_atual:
            categoria_atual = categoria
            print(f"\n{categoria}")
        prioridade = PRIORIDADE_LABEL.get(item["prioridade"], item["prioridade"])
        marcador = "  " if status == STATUS_OK else ">>"
        print(f"{marcador} [{status:<18}] {item['item']}  ({prioridade})")
        if status == STATUS_FORMATO_INCORRETO:
            nomes = ", ".join(f.name for f in arquivos)
            esperado = ", ".join(item["formatos"])
            print(f"      encontrado: {nomes}  |  esperado: {esperado}")

    print("\n" + "=" * 60)
    print(
        f"Resumo: {contagem[STATUS_OK]} OK  |  "
        f"{contagem[STATUS_FALTANDO]} faltando  |  "
        f"{contagem[STATUS_FORMATO_INCORRETO]} em formato incorreto"
    )
    if pendencias_essenciais:
        print(f"ATENCAO: {len(pendencias_essenciais)} item(ns) ESSENCIAL(is) pendente(s) de produzir.")
    print(f"\nRelatorio completo em: {REPORT_FILE.name}")

    # ---- relatorio_validacao.md ----
    linhas = []
    linhas.append("# Relatório de Validação — Entregáveis Haëra")
    linhas.append("")
    linhas.append(f"Gerado em {agora}")
    linhas.append("")
    linhas.append(
        f"**{contagem[STATUS_OK]} OK** · **{contagem[STATUS_FALTANDO]} faltando** · "
        f"**{contagem[STATUS_FORMATO_INCORRETO]} em formato incorreto**"
        + (f" · **{len(pendencias_essenciais)} pendência(s) essencial(is)**" if pendencias_essenciais else "")
    )
    linhas.append("")

    categoria_atual = None
    for categoria, item, status, arquivos in resultados:
        if categoria != categoria_atual:
            categoria_atual = categoria
            linhas.append(f"## {categoria}")
            linhas.append("")
        prioridade = PRIORIDADE_LABEL.get(item["prioridade"], item["prioridade"])
        linhas.append(f"- **[{status}]** {item['item']} _(​{prioridade})_")
        linhas.append(f"  - pasta: `{item['pasta']}/`")
        linhas.append(f"  - formato esperado: `{', '.join(item['formatos'])}`")
        if status == STATUS_OK:
            linhas.append(f"  - encontrado: {', '.join(f.name for f in arquivos)}")
        elif status == STATUS_FORMATO_INCORRETO:
            linhas.append(f"  - encontrado (formato errado): {', '.join(f.name for f in arquivos)}")
        if item.get("observacao"):
            linhas.append(f"  - obs: {item['observacao']}")
        linhas.append("")

    REPORT_FILE.write_text("\n".join(linhas), encoding="utf-8")


if __name__ == "__main__":
    main()
