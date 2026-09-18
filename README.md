# Mô Dulo — page d'accueil

Site statique (HTML / CSS / JS) implémentant la page "Home" de la maquette Figma.

## Lancer le site

Ouvrir `index.html` dans un navigateur, ou servir le dossier avec un petit serveur local :

```
python3 -m http.server 8000
```

puis ouvrir http://localhost:8000

## Images à remplacer

Le téléchargement des visuels depuis Figma n'était pas possible depuis cet environnement.
Les fichiers suivants dans `assets/img/` sont des **placeholders** à remplacer par les vrais
visuels (mêmes dimensions, même nom de fichier) :

| Fichier | Dimensions | Contenu attendu | Node Figma |
|---|---|---|---|
| `hero.svg` | 1440×1350 | Photo du repas en extérieur devant le Mô Dulo | 1:14 |
| `landscape-band.svg` | 1440×400 | Photo du Mô Dulo dans un paysage | 1:89 |
| `studio-illustration.svg` | 885×792 | Illustration en coupe du Mô Dulo Studio | 1:68 |
| `wood-texture.svg` | 668×858 | Photo du bardage bois | 1:76 |
| `window-photo.svg` | 668×858 | Photo de la baie vitrée | 1:78 |

`logo.svg` est le vrai logo (recréé en SVG, pas un placeholder).
