import Link from "next/link";

export const metadata = { title: "Conditions générales de vente | Fantômes" };

export default function Page() {
  return (
    <main style={{ maxWidth: 640, margin: "0 auto", padding: 24, fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <Link href="/">← Retour à l'accueil</Link>
      <h1>Conditions générales de vente</h1>
      <p>Dernière mise à jour : octobre 2026.</p>

      <h2>1. Vendeur</h2>
      <p>
        [À COMPLÉTER : prénom et nom], entrepreneur individuel, SIRET
        [À COMPLÉTER], contact : sorenroca@gmail.com. Voir les mentions légales.
      </p>

      <h2>2. Service vendu</h2>
      <p>
        L'« Audit Fantômes » est un service ponctuel. À partir du relevé
        bancaire que tu nous envoies, nous t'envoyons par email : la liste de
        tes prélèvements récurrents classés par coût annuel, une lettre de
        résiliation pour chacun et le total économisable sur l'année.
      </p>

      <h2>3. Prix et paiement</h2>
      <p>
        Le prix est de 19 € (TVA non applicable, article 293 B du CGI), payable
        en une fois par carte via Stripe. Aucun abonnement n'est souscrit.
      </p>

      <h2>4. Livraison</h2>
      <p>
        Après le paiement, tu envoies ton relevé bancaire (PDF ou CSV) à
        sorenroca@gmail.com. L'audit t'est envoyé par email dans un délai de
        48 heures suivant la réception du relevé.
      </p>

      <h2>5. Garantie satisfait ou remboursé</h2>
      <p>
        Tu disposes de 14 jours à compter du paiement pour demander le
        remboursement intégral, sans avoir à te justifier. Écris à
        sorenroca@gmail.com avec « Remboursement » dans l'objet. Le
        remboursement est effectué sous 5 jours ouvrés, sur le moyen de
        paiement utilisé.
      </p>

      <h2>6. Limites du service</h2>
      <p>
        L'audit repose sur le relevé que tu fournis. Il t'aide à repérer des
        prélèvements, mais c'est toi qui décides lesquels résilier. Il ne
        constitue ni un conseil financier, ni un conseil juridique.
      </p>

      <h2>7. Données personnelles</h2>
      <p>
        Le traitement de ton relevé est décrit dans la politique de
        confidentialité.
      </p>

      <h2>8. Médiation</h2>
      <p>
        En cas de litige, tu peux d'abord nous écrire. Tu peux ensuite saisir
        gratuitement le médiateur de la consommation :
        [À COMPLÉTER : nom et coordonnées du médiateur].
      </p>

      <h2>9. Droit applicable</h2>
      <p>Les présentes conditions sont soumises au droit français.</p>
    </main>
  );
}
