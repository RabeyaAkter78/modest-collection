export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white px-4">
      <main className="mx-auto max-w-md py-8">{children}</main>
    </div>
  );
}
