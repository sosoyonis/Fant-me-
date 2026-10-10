import Link from "next/link";

export const metadata = { title: "Politique de confidentialité | Fantômes" };

export default function Page() {
  return (
    <main style={{ maxWidth: 640, margin: "0 auto", padding: 24, fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <Link href="/">← Retour à l'accueil</Link>
      <h1>Politique de confidentialité</h1>
      <p>Dernière mise à jour : octobre 2026.</p>

      <h2>Qui est responsable de tes données ?</h2>
      <p>
        [À COMPLÉTER : prénom et nom], éditeur de Fantômes. Contact :
        sorenroca@gmail.com.
      </p>

      <h2>Quelles données, et pourquoi ?</h2>
      <p>
        Ton email et ton nom, pour te livrer l'audit et gérer le paiement.
        Ton relevé bancaire, uniquement pour repérer tes prélèvements
        récurrents et rédiger ton audit. Nous n'utilisons pas ces données pour
        autre chose, nous ne les vendons pas et nous ne les partageons pas à des
        fins publicitaires.
      </p>

      <h2>Combien de temps les garde-t-on ?</h2>
      <p>
        Ton relevé bancaire est supprimé dans les 7 jours suivant l'envoi de ton
        audit. Les données de paiement et de facturation sont conservées 10 ans,
        comme l'impose la loi comptable. Ton email est conservé pour répondre à
        tes demandes, puis supprimé sur demande.
      </p>

      <h2>Qui peut y avoir accès ?</h2>
      <p>
        Stripe traite le paiement. Vercel héberge le site. Notre messagerie
        (Google) reçoit les emails que tu envoies. Ces prestataires peuvent
        traiter des données hors de l'Union européenne, avec les garanties
        prévues par le RGPD.
      </p>

      <h2>Cookies</h2>
      <p>
        Ce site n'utilise aucun cookie publicitaire. Si nous ajoutons une mesure
        d'audience, elle sera respectueuse de la vie privée et cette page sera
        mise à jour.
      </p>

      <h2>Tes droits</h2>
      <p>
        Tu peux demander l'accès, la rectification ou la suppression de tes
        données, ou t'opposer à leur traitement, en écrivant à
        sorenroca@gmail.com. Nous répondons sous un mois. Tu peux aussi saisir
        la CNIL (cnil.fr).
      </p>
    </main>
  );
}
