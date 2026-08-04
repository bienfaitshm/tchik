# Tchik

[![CI Build](https://github.com/bienfaitshm/tchik/actions/workflows/build.yml/badge.svg)](https://github.com/bienfaitshm/tchik/actions/workflows/build.yml)
[![Release](https://img.shields.io/github/v/release/bienfaitshm/tchik?color=blue&label=version)](https://github.com/bienfaitshm/tchik/releases/latest)
[![LICENSE](https://img.shields.io/github/license/bienfaitshm/tchik)](LICENSE)
[![Download](https://img.shields.io/github/downloads/bienfaitshm/tchik/total?color=green)](https://github.com/bienfaitshm/tchik/releases)
[![STARS](https://img.shields.io/github/stars/bienfaitshm/tchik)](https://github.com/bienfaitshm/tchik/stargazers)

<img align="right" width="110" src="https://github.com/bienfaitshm/tchik/blob/main/src-tauri/icons/icon.png?raw=true" alt="Tchik Logo">

**Tchik** est la solution desktop open source performante et légère qui réinvente la gestion administrative scolaire. Propulsée par **Tauri v2**, elle automatise les tâches chronophages comme la préparation des examens, la génération des listes d'émargement et la création de documents officiels. 

Sécurisée en local et sans dépendance internet, Tchik réduit les erreurs, élimine le superflu, simplifie votre quotidien et vous offre une souveraineté totale sur vos données.

---

## Téléchargement

Téléchargez la dernière version stable de **Tchik** pour votre système d'exploitation :

| Plateforme | Format | Lien de téléchargement direct |
| :--- | :--- | :--- |
| **Windows** | Installeur (`.exe` / `.msi`) | [Télécharger pour Windows (x64)](https://github.com/bienfaitshm/tchik/releases/latest/download/tchik_x64-setup.exe) |
| **macOS** | Image Disque (`.dmg`) | [Télécharger pour macOS (Universal / Apple Silicon / Intel)](https://github.com/bienfaitshm/tchik/releases/latest/download/tchik.dmg) |
| **Linux** | AppImage (`.AppImage`) | [Télécharger au format AppImage](https://github.com/bienfaitshm/tchik/releases/latest/download/tchik_amd64.AppImage) |
| **Linux** | Paquet Debian (`.deb`) | [Télécharger pour Ubuntu / Debian](https://github.com/bienfaitshm/tchik/releases/latest/download/tchik_amd64.deb) |

> 💡 **Mises à jour automatiques :** Grâce au module d'auto-update Tauri, l'application vous notifiera directement lorsqu'une nouvelle version sera publiée sur GitHub.

### Historique des releases

Vous pouvez consulter les notes de version (*changelogs*), les sommes de contrôle (checksums SHA256) ou télécharger des architectures spécifiques depuis la page des [GitHub Releases](https://github.com/bienfaitshm/tchik/releases).

---

## Pourquoi choisir Tchik pour votre établissement ?

* **Performances & Sobriété :** Conçue sur le moteur Tauri (Rust + Webview2/WebKit), Tchik consomme jusqu'à 10x moins de mémoire RAM qu'une application Electron classique.
* **Liberté Totale (Open Source) :** Aucun frais de licence, aucun abonnement caché. Vous possédez votre outil et vos données.
* **Fiabilité Hors Ligne :** Travaillez sereinement sans dépendre d'une connexion internet. Vos données restent stockées localement en toute sécurité sur votre machine.
* **Simplicité sans expertise :** Interface intuitive conçue pour les gestionnaires et secrétaires d'établissements. Obtenez des documents officiels instantanément.

---

## Les piliers de votre productivité

| Fonctionnalité | Ce que vous y gagnez |
| --- | --- |
| **Gestion des élèves** | Une base de données claire, centralisée et facile à mettre à jour. |
| **Moteur d'examens** | Placement et répartition automatique des élèves sans conflits d'horaires ou de salles. |
| **Génération de documents** | Listes d'émargement, convocations, cartes d'élèves et plans de salles en un clic. |
| **Import / Export** | Échanges de données fluides au format CSV/Excel. |

---

## Guide pour les Développeurs (Contribuer)

### Environnement recommandé

* **IDE :** [VS Code](https://code.visualstudio.com/) + extensions [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
* **Préréquis système :** Node.js 22+, Rust, pnpm (`corepack enable`).

### Configuration du projet

1. **Cloner le dépôt :**
   ```bash
   git clone [https://github.com/bienfaitshm/tchik.git](https://github.com/bienfaitshm/tchik.git)
   cd tchik