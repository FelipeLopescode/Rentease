"use strict";

const STORAGE_KEY = "renteaseFlats";
let storageMessage = "";

function loadFlats() {
  storageMessage = "";

  try {
    // 1. Lê STORAGE_KEY com localStorage.getItem()
    const raw = localStorage.getItem(STORAGE_KEY);

    // 2. Se a chave não existir, devolve []
    if (raw === null) {
      return [];
    }

    // 3. Converte a string com JSON.parse()
    const parsed = JSON.parse(raw);

    // 4. Confirma que o resultado é um array
    if (!Array.isArray(parsed)) {
      storageMessage =
        "Os dados guardados estão corrompidos. A começar com uma lista vazia.";
      return [];
    }

    return parsed;
  } catch (error) {
    // 5. Se ocorrer um erro, define storageMessage e devolve []
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
