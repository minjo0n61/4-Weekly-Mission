import Link from 'next/link';

const tempStyle = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '32px',
  fontSize: '27px',
};

export default function Main() {
  return (
    <main>
      <div style={tempStyle}>
        <Link href="/shared">Shared</Link>
        <Link href="/folder">Folder</Link>
      </div>
    </main>
  );
}
