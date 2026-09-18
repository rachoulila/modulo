# Mô Dulo — site vitrine

Site statique (HTML / CSS / JS) implémentant la maquette Figma Mô Dulo.

## Pages

| Fichier | Contenu |
|---|---|
| `index.html` | Accueil |
| `notre-approche.html` | La démarche / le concept Mô Dulo |
| `votre-modulo.html` | Hub de choix Particuliers / Professionnels |
| `votre-modulo-particulier.html` | 3 réalisations : Studio, Burô, Duo |
| `votre-modulo-pro.html` | 2 réalisations : Studio Hôtel, Studio Hôtel 2+2 |

Le fichier Figma contient aussi `/page`, `/page-2`, `/about-me`, `/votre-modulo-particulier-2`
et `/votre-modulo-pro-2` : ce sont des brouillons vides ou des doublons sans texte (juste des
rectangles image), donc ils n'ont pas été repris ici.

## Lancer le site

Ouvrir `index.html` dans un navigateur, ou servir le dossier avec un petit serveur local :

```
python3 -m http.server 8000
```

puis ouvrir http://localhost:8000

## Images

La quasi-totalité des visuels proviennent maintenant des exports de la maquette Figma
(Home, Notre approche, Votre modulo Particuliers/Pro).

Il reste quelques **placeholders** (fichiers `.svg` générés) en attendant leurs exports :
- `assets/img/approche-hero.svg`
- `assets/img/approche-gallery-3.svg`, `approche-gallery-4.svg`, `approche-gallery-5.svg`
- `assets/img/approche-design.svg`

Pour les remplacer : exporte les visuels depuis Figma (sélection multiple + export PNG 2x),
puis dépose les fichiers dans `assets/img/` en gardant les mêmes noms (ou mets à jour les
balises `<img>` correspondantes si tu préfères d'autres noms).
