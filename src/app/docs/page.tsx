import Link from "next/link";

export default function DocsPage() {
  return (
    <>
      <div>Docs Main</div>
      <Link href={"/docs/cipher"}>cipher</Link>
    </>
  );
}
