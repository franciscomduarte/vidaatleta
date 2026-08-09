export function formatTempo(centesimos: number): string {
  const minutos = Math.floor(centesimos / 6000);
  const segundos = Math.floor((centesimos % 6000) / 100);
  const cent = centesimos % 100;
  const segStr = segundos.toString().padStart(minutos > 0 ? 2 : 1, "0");
  const centStr = cent.toString().padStart(2, "0");
  return minutos > 0 ? `${minutos}:${segStr}.${centStr}` : `${segStr}.${centStr}`;
}

export function formatData(iso: string): string {
  const [ano, mes, dia] = iso.split("-");
  return `${dia}/${mes}/${ano}`;
}

export function formatDeltaTempo(centesimos: number): string {
  const sinal = centesimos > 0 ? "+" : centesimos < 0 ? "−" : "";
  const abs = Math.abs(centesimos);
  return `${sinal}${(abs / 100).toFixed(2)}s`;
}

export function idade(nascimento: string, referencia = new Date()): number {
  const nasc = new Date(nascimento);
  let anos = referencia.getFullYear() - nasc.getFullYear();
  const aindaNaoFezAniversario =
    referencia.getMonth() < nasc.getMonth() ||
    (referencia.getMonth() === nasc.getMonth() && referencia.getDate() < nasc.getDate());
  if (aindaNaoFezAniversario) anos -= 1;
  return anos;
}
