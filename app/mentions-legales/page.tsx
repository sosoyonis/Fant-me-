import Link from "next/link";

export const metadata = { title: "Mentions légales | Fantômes" };

export default function Page() {
  return (
    <main style={{ maxWidth: 640, margin: "0 auto", padding: 24, fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <Link href="/">← Retour à l'accueil</Link>
      <h1>Mentions légales</h1>

      <h2>Éditeur du site</h2>
      <p>
        Fantômes est édité par [À COMPLÉTER : prénom et nom], entrepreneur
        individuel (micro-entreprise).<br />
        Adresse : [À COMPLÉTER : adresse postale]<br />
        SIRET : [À COMPLÉTER : numéro à 14 chiffres]<br />
        Email : sorenroca@gmail.com<br />
        Directeur de la publication : [À COMPLÉTER : prénom et nom]
      </p>
      <p>TVA non applicable, article 293 B du Code général des impôts.</p>

      <h2>Hébergeur</h2>
      <p>
        Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
        Site : vercel.com
      </p>

      <h2>Paiement</h2>
      <p>
        Les paiements sont traités par Stripe Payments Europe Ltd. Nous ne
        voyons ni ne conservons ton numéro de carte.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        Les textes et éléments du site sont la propriété de l'éditeur. Toute
        reproduction sans autorisation est interdite.
      </p>
    </main>
  );
}
