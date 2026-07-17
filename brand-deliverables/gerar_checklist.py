#!/usr/bin/env python3
"""Gera checklist.md a partir de checklist_items.json.

Rode de novo sempre que editar checklist_items.json (item novo, formato
novo, etc). Este script NAO verifica o que ja foi recebido -- ele so
(re)cria o checklist em branco. Quem checa o estado real e o
validar_entregaveis.py.
"""
import json
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
ITEMS_FILE = BASE_DIR / "checklist_items.json"
OUTPUT_FILE = BASE_DIR / "checklist.md"

PRIORIDADE_LABEL = {
    "essencial": "ESSENCIAL",
    "recomendado": "recomendado",
    "opcional": "opcional",
}


def main():
    data = json.loads(ITEMS_FILE.read_text(encoding="utf-8"))

    lines = []
    lines.append("# Checklist de Entregáveis de Branding — Haëra")
    lines.append("")
    lines.append(
        "Marque `- [ ]` para `- [x]` conforme cada item for produzido e "
        "colocado na pasta correspondente. Este arquivo é mantido "
        "manualmente; para uma checagem automática do que já está nas "
        "pastas, rode `python3 validar_entregaveis.py` (gera um relatório "
        "à parte, sem mexer neste arquivo)."
    )
    lines.append("")
    lines.append(f"> {data['negocio']}")
    lines.append("")

    total = 0
    essencial_total = 0
    for cat in data["categorias"]:
        lines.append(f"## {cat['categoria']}")
        lines.append("")
        for item in cat["itens"]:
            total += 1
            prioridade = PRIORIDADE_LABEL.get(item["prioridade"], item["prioridade"])
            if item["prioridade"] == "essencial":
                essencial_total += 1
            formatos = ", ".join(item["formatos"])
            lines.append(
                f"- [ ] **{item['item']}** — formato `{formatos}` — "
                f"pasta `{item['pasta']}/` — {prioridade}"
            )
            if item.get("observacao"):
                lines.append(f"      _{item['observacao']}_")
        lines.append("")

    lines.append("---")
    lines.append("")
    lines.append(
        f"**Total: {total} itens** ({essencial_total} marcados como essencial). "
        "Itens essenciais faltando bloqueiam o uso seguro/legal da marca — "
        "priorize cobrar esses primeiro."
    )
    lines.append("")

    OUTPUT_FILE.write_text("\n".join(lines), encoding="utf-8")
    print(f"checklist.md gerado com {total} itens em {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
