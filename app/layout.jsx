export const metadata = {
  title: "HYLE",
  description: "Sistemi decisionali per contesti complessi."
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
