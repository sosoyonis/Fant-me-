import { Fraunces, DM_Sans } from "next/font/google";

const titre = Fraunces({ subsets: ["latin"], display: "swap" });
const texte = DM_Sans({ subsets: ["latin"], display: "swap" });

const LIEN_PAIEMENT = "#"; // sera remplacé par le lien Stripe
const EMAIL = "sorenroca@gmail.com"; // à remplacer

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
.p{background:linear-gradient(165deg,#0B0B12 0%,#2E0B5E 35
