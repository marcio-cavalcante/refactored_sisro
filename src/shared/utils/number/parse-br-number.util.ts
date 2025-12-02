export function parseBRNumber(value: string | null | undefined): number {

    if (!value) return 0;

    let v = value.trim();

    // Remove separadores de milhar
    v = v.replace(/\./g, '');

    // Troca vírgula decimal por ponto
    v = v.replace(',', '.');

    // Caso termine com ponto (ex.: "100.")
    if (v.endsWith('.')) {
        v = v.slice(0, -1);
    }

    const n = Number(v);
    return isNaN(n) ? 0 : n;
}