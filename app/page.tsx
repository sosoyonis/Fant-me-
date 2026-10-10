import { Fraunces, DM_Sans } from "next/font/google";

const titre = Fraunces({ subsets: ["latin"], display: "swap" });
const texte = DM_Sans({ subsets: ["latin"], display: "swap" });

const LIEN_PAIEMENT = "https://buy.stripe.com/test_00weVfcn7ggKcI61picQU00";
const EMAIL = "sorenroca@gmail.com";

const lignes = [
  ["Essai streaming jamais résilié", "107,88 €"],
  ["Appli de sport remplacée", "155,88 €"],
  ["Stockage cloud activé une fois", "35,88 €"],
  ["Option « assurance téléphone »", "78,00 €"],
];

const faq = [
  ["Ça marche pour mon cas ?", "Oui si tu as un compte bancaire français avec des prélèvements ou paiements par carte récurrents. Il me faut ton relevé en PDF ou CSV, sur 3 à 12 mois."],
  ["Combien de temps ça me prend ?", "Environ 5 minutes pour m'envoyer ton relevé. Ton audit arrive sous 48 h."],
  ["Et si je veux arrêter ?", "Il n'y a rien à arrêter : c'est un paiement unique de 19 €, sans abonnement caché."],
  ["À quoi sert ce que je paie ?", "À une liste de tes abonnements oubliés classés par coût annuel, une lettre de résiliation prête pour chacun, et le total que tu économises. Ton relevé est supprimé de mon côté une fois l'audit envoyé."],
];

const css = `
.p{background:linear-gradient(165deg,#0B0B12 0%,#2E0B5E 35%,#6D28D9 75%,#9D2FD6 100%);color:#fff;min-height:100vh;padding-bottom:96px;line-height:1.5;font-size:17px}
.w{max-width:640px;margin:0 auto;padding:0 20px}
.p h1,.p h2{font-weight:800;line-height:1.1;margin:0;color:#fff;text-shadow:0 0 24px rgba(255,255,255,.35)}
.p h1{font-size:36px;padding-top:32px}
.p h2{font-size:26px;margin-bottom:12px}
.p section{padding:28px 0;border-top:1px solid rgba(255,255,255,.2)}
.btn{display:block;text-align:center;background:linear-gradient(90deg,#FF3EA5,#C026D3);color:#fff;font-weight:700;padding:18px 20px;border-radius:12px;text-decoration:none;box-shadow:0 0 24px rgba(255,62,165,.55)}
.bar{position:fixed;left:0;right:0;bottom:0;padding:12px 20px calc(12px + env(safe-area-inset-bottom));background:rgba(11,11,18,.95);border-top:1px solid rgba(255,62,165,.5)}
.tk{background:#0B0B12;border:1px solid rgba(255,62,165,.7);border-radius:8px;padding:16px;font-family:ui-monospace,monospace;font-size:14px;color:#fff}
.tk div{display:flex;justify-content:space-between;gap:12px;padding:6px 0}
.s{background:linear-gradient(#FF3EA5,#FF3EA5) no-repeat 0 55%/0 2px;animation:b .8s forwards}
@keyframes b{to{background-size:100% 2px}}
.tot{border-top:1px dashed rgba(255,255,255,.4);margin-top:6px;font-weight:700;color:#FF7AC6}
.p details{border-top:1px solid rgba(255,255,255,.2);padding:12px 0}
.p summary{font-weight:700;cursor:pointer;color:#fff}
.p ul{padding-left:20px;margin:0}
.p li{margin-bottom:8px}
`;

export default function Home() {
  return (
    <main className={`p ${texte.className}`}>
      <style>{css}</style>
      <div className={titre.className}>
        <div className="w">
          <h1>Tu paies des abonnements que tu n'utilises plus.</h1>
        </div>
      </div>
      <div className="w">
        <p>
          Ils sont petits, donc invisibles sur ton relevé. Ils tournent pendant des
          années. Envoie-nous ton relevé : on débusque les prélèvements oubliés, on
          les classe par coût annuel et on te donne la lettre pour résilier.
        </p>
        <a className="btn" href={LIEN_PAIEMENT}>Obtenir mon audit : 19 €</a>
        <p style={{ fontSize: 14, opacity: 0.85 }}>
          Paiement unique. Audit livré par email sous 48 h.
        </p>

        <section>
          <h2 className={titre.className}>Ils ne font pas de bruit.</h2>
          <div className="tk">
            <div><b>EXEMPLE : relevé de l'année</b></div>
            {lignes.map(([nom, prix], i) => (
              <div key={nom}>
                <span className="s" style={{ animationDelay: `${0.5 + i * 0.5}s` }}>{nom}</span>
                <span>{prix}</span>
              </div>
            ))}
            <div className="tot"><span>Total oublié</span><span>377,64 €</span></div>
          </div>
          <p>Cet exemple coûte 20 fois le prix de l'audit, chaque année.</p>
        </section>

        <section>
          <h2 className={titre.className}>Ce que tu reçois</h2>
          <ul>
            <li><b>La liste</b> de tes prélèvements réguliers, classée par coût annuel.</li>
            <li><b>Une lettre de résiliation</b> prête à envoyer pour chacun.</li>
            <li><b>Le total</b> que tu économises sur l'année.</li>
          </ul>
        </section>

        <section>
          <h2 className={titre.className}>Comment ça se passe</h2>
          <ul>
            <li>Tu paies 19 €.</li>
            <li>Tu reçois un email : tu réponds avec ton relevé.</li>
            <li>Tu reçois ton audit sous 48 h.</li>
          </ul>
        </section>

        <section>
          <h2 className={titre.className}>Satisfait ou remboursé, 14 jours</h2>
          <p>
            Pas satisfait ? Écris à {EMAIL} avec « Remboursement » dans l'objet.
            Tu es remboursé intégralement sous 5 jours ouvrés, sans justification.
          </p>
        </section>

        <section>
          <h2 className={titre.className}>Questions fréquentes</h2>
          {faq.map(([q, r]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{r}</p>
            </details>
          ))}
        </section>
      </div>

      <div className="bar">
        <a className="btn" href={LIEN_PAIEMENT}>Obtenir mon audit : 19 €</a>
      </div>
    </main>
  );
}
