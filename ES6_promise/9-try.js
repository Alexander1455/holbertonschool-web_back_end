export default function guardrail(mathFunction) {
  // Creamos un array llamado queue.
  const queue = [];

  try {
  // Ejecutamos la función mathFunction y agregamos su resultado al array queue.
  const result = mathFunction();
  queue.push(result);
  } catch (error) {
  // Si ocurre un error, agregamos el mensaje de error al array queue.
  queue.push(error.message);
  } finally {
  // Siempre agregamos el mensaje "Guardrail was processed" al array queue.
  queue.push('Guardrail was processed');
  }

  // Devolvemos el array queue.
  return queue;
}
