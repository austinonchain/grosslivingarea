// Tiny inline renderer for content strings: **bold** and [text](url).
// Internal links (starting with /) use next/link; external open in a new tab.
import Link from 'next/link';

const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

export function Inline({ text }) {
  const parts = text.split(TOKEN).filter(Boolean);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>;
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (m) {
      const [, label, href] = m;
      if (href.startsWith('/')) return <Link key={i} href={href}>{label}</Link>;
      return <a key={i} href={href} target="_blank" rel="noopener noreferrer">{label}</a>;
    }
    return <span key={i}>{part}</span>;
  });
}

// A body section: { heading?, paragraphs?: [], list?: [], ordered?: bool, table?: { head: [], rows: [[]] } }
export function Section({ section, level = 2 }) {
  const H = level === 3 ? 'h3' : 'h2';
  return (
    <section>
      {section.heading && <H>{section.heading}</H>}
      {(section.paragraphs || []).map((para, j) => <p key={j}><Inline text={para} /></p>)}
      {section.list && (section.ordered
        ? <ol>{section.list.map((li, j) => <li key={j}><Inline text={li} /></li>)}</ol>
        : <ul>{section.list.map((li, j) => <li key={j}><Inline text={li} /></li>)}</ul>)}
      {section.table && (
        <div className="table-wrap">
          <table>
            <thead><tr>{section.table.head.map((h, j) => <th key={j}>{h}</th>)}</tr></thead>
            <tbody>
              {section.table.rows.map((row, j) => (
                <tr key={j}>{row.map((cell, k) => <td key={k}><Inline text={cell} /></td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {(section.after || []).map((para, j) => <p key={`a${j}`}><Inline text={para} /></p>)}
    </section>
  );
}
