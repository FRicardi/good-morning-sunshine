const motivations = [
    "de motivação",
    "para amizades",
    "de positividade",
    "bem humorada",
    "de bênçãos",
    "que agradeça pelo dia que está por vir"
]

export default () => {
    const motivation = motivations[Math.round(Math.random() * motivations.length) - 1];
    return `Gere uma mensagem ${motivation} com no máximo 75 caracteres, desejando um bom dia `;
}