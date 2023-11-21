import { doc, setDoc } from "firebase/firestore";
import { db } from '../../../Services/firebaseConfig.js';  // Importe o db aqui


// Função para salvar as informações do usuário no Firestore
export const saveUserInfoToFirestore = async (userId, userInfo) => {
  const userDocRef = doc(db, "users", userId);

  try {
    await setDoc(userDocRef, userInfo, { merge: true });
    console.log("Informações do usuário salvas no Firestore com sucesso!");
  } catch (error) {
    console.error("Erro ao salvar informações do usuário:", error);
  }
};
