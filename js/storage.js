"use strict";

const STORAGE_KEY = "renteaseFlats";
let storageMessage = "";

function loadFlats() {
  storageMessage = "";

  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (raw === null) {
      return [];
    }

    const parsed = JSON.parse(raw);

    if (!Array.isArray(parsed)) {
      storageMessage =
        "Os dados guardados estão corrompidos. A começar com uma lista vazia.";
      return [];
    }

    return parsed;
  } catch (error) {
    storageMessage = "Não foi possível ler os apartamentos guardados.";
    return [];
  }
}

function saveFlats(flats) {
  try {
    // 1. Converte o array com JSON.stringify()
    const flatsAsText = JSON.stringify(flats);

    // 2. Guarda a string com localStorage.setItem()
    localStorage.setItem(STORAGE_KEY, flatsAsText);

    // 3. Devolve true quando a gravação termina
    return true;
  } catch (error) {
    // 4. Se ocorrer um erro, define storageMessage e devolve false
    storageMessage = "Não foi possível guardar os apartamentos.";
    return false;
  }
}

function getStorageMessage() {
  return storageMessage;
}

function formatCurrency(value) {
  return `${value.toFixed(2).replace(".", ",")} €`;
}

function formatDate(dateText) {
  const dateParts = dateText.split("-");

  if (dateParts.length !== 3) {
    return "Data inválida";
  }

  return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
}
