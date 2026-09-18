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

Les photos de la page d'accueil (`hero.jpg`, `landscape-band.jpg`, `studio-illustration.jpg`,
`wood-texture.jpg`, `window-photo.jpg`, `logo-icon.png`) proviennent des exports de la maquette Figma.

Toutes les autres images (`assets/img/approche-*.svg`, `particulier-*.svg`, `pro-*.svg`) sont
des **placeholders** en attendant les exports Figma correspondants. Pour les remplacer :
exporte les visuels depuis Figma (sélection multiple + export PNG 2x), puis renomme/dépose
les fichiers dans `assets/img/` en gardant les mêmes noms (ou mets à jour les balises `<img>`
si tu préfères d'autres noms).
