export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col items-center p-24">
        <h1 className="text-lg">Hola Mundo</h1>
        {children}
    </main>
  );
}
