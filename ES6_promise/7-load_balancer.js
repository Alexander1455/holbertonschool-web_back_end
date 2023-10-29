export default function loadBalancer(chinaDownload, USDownload) {
  // Usamos Promise.race para esperar al primero que se resuelva.
  return Promise.race([chinaDownload, USDownload]);
}
