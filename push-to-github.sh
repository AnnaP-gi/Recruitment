#!/usr/bin/env bash
# Inicjalizacja repozytorium Git i wypchnięcie na GitHub.
# Użycie:
#   1. Rozpakuj pobraną paczkę projektu i wejdź do katalogu.
#   2. Nadaj uprawnienia:  chmod +x push-to-github.sh
#   3. Uruchom:            ./push-to-github.sh
set -e

# --- KONFIGURACJA ---
# Zalecane: osobne repo lub nowa gałąź, aby nie nadpisać projektu "Student Portal" w AnnaP-gi/ALK.
REMOTE_URL="https://github.com/AnnaP-gi/ALK.git"
BRANCH="rekrutacja"
# --------------------

git init
git add .
git commit -m "Prototyp formularza rekrutacyjnego ALK (I i II stopnia, desktop + mobile)"
git branch -M "$BRANCH"
git remote add origin "$REMOTE_URL" 2>/dev/null || git remote set-url origin "$REMOTE_URL"
git push -u origin "$BRANCH"

echo ""
echo "Gotowe. Gałąź '$BRANCH' wypchnięta do $REMOTE_URL"
echo "W Vercel: Add New -> Project -> wybierz repo i gałąź '$BRANCH'."
echo "Framework: Other | Build Command: (puste) | Output Directory: ./"
