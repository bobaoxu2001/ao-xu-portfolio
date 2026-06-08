import React from "react";

// 极简 Markdown 渲染器（无外部依赖）——足以渲染本项目的资源文件：
// 支持 # / ## / ###、- 和 1. 列表、> 引用、--- 分割线、**粗体**、`代码`。

function renderInline(text: string, keyBase: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  // 先处理 **粗体** 与 `代码`
  const regex = /(\*\*([^*]+)\*\*|`([^`]+)`)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let i = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    if (match[2] !== undefined) {
      nodes.push(<strong key={`${keyBase}-b-${i}`}>{match[2]}</strong>);
    } else if (match[3] !== undefined) {
      nodes.push(<code key={`${keyBase}-c-${i}`}>{match[3]}</code>);
    }
    lastIndex = match.index + match[0].length;
    i++;
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}

export default function Markdown({ content }: { content: string }) {
  const lines = content.replace(/\r\n/g, "\n").split("\n");
  const blocks: React.ReactNode[] = [];
  let list: { ordered: boolean; items: string[] } | null = null;
  let key = 0;

  const flushList = () => {
    if (!list) return;
    const items = list.items.map((it, idx) => (
      <li key={`li-${key}-${idx}`}>{renderInline(it, `li-${key}-${idx}`)}</li>
    ));
    blocks.push(
      list.ordered ? (
        <ol key={`ol-${key++}`}>{items}</ol>
      ) : (
        <ul key={`ul-${key++}`}>{items}</ul>
      )
    );
    list = null;
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (line.trim() === "") {
      flushList();
      continue;
    }
    // 列表项
    const ulMatch = line.match(/^\s*[-*]\s+(.*)$/);
    const olMatch = line.match(/^\s*\d+\.\s+(.*)$/);
    if (ulMatch) {
      if (!list || list.ordered) {
        flushList();
        list = { ordered: false, items: [] };
      }
      list.items.push(ulMatch[1]);
      continue;
    }
    if (olMatch) {
      if (!list || !list.ordered) {
        flushList();
        list = { ordered: true, items: [] };
      }
      list.items.push(olMatch[1]);
      continue;
    }
    flushList();

    if (line.startsWith("### ")) {
      blocks.push(<h3 key={key++}>{renderInline(line.slice(4), `h3-${key}`)}</h3>);
    } else if (line.startsWith("## ")) {
      blocks.push(<h2 key={key++}>{renderInline(line.slice(3), `h2-${key}`)}</h2>);
    } else if (line.startsWith("# ")) {
      blocks.push(<h1 key={key++}>{renderInline(line.slice(2), `h1-${key}`)}</h1>);
    } else if (line.startsWith("> ")) {
      blocks.push(
        <blockquote key={key++}>{renderInline(line.slice(2), `q-${key}`)}</blockquote>
      );
    } else if (/^---+$/.test(line.trim())) {
      blocks.push(<hr key={key++} />);
    } else {
      blocks.push(<p key={key++}>{renderInline(line, `p-${key}`)}</p>);
    }
  }
  flushList();

  return <div className="prose-cn">{blocks}</div>;
}
