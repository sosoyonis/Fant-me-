export const metadata = {
  title: "Fantômes : débusque les abonnements que tu paies sans t'en servir",
  description:
    "Dépose ton relevé bancaire, vois ce que tes abonnements oubliés te coûtent par an.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
