function getActivityBasedOnTime(time, VE) {
    const hour = parseInt(time.split(':')[0]);

    // Expandindo as sugestões de atividades para cada faixa horária
    const activitiesMorning = [
        "Café da manhã numa padaria artesanal",
        "Corrida no parque",
        "Sessão de yoga matinal",
        "Assistir ao nascer do sol em um mirante",
        "Café com livros em uma livraria local",
        "Explorar o mercado local",
        "Tomar um brunch em um café hipster",
        "Passeio de bicicleta",
        "Sessão de fotos urbana",
        "Visita a um jardim botânico"
    ];
    const activitiesAfternoon = [
        "Almoço em um restaurante temático",
        "Caminhada ecológica",
        "Visita a um zoológico ou aquário",
        "Sessão de filmes cult no cinema",
        "Tour de arte de rua",
        "Workshop de culinária",
        "Encontro para jogar boliche",
        "Passeio em um parque de diversões",
        "Ida a um museu de ciências",
        "Shopping e sorvete"
    ];
    const activitiesEvening = [
        "Jantar em um bistrô charmoso",
        "Sessão de observação de estrelas",
        "Noite de jogos de tabuleiro",
        "Visita a uma feira gastronômica noturna",
        "Passeio noturno de barco",
        "Concerto ao ar livre",
        "Show de stand-up comedy",
        "Experiência de realidade virtual",
        "Degustação de vinhos",
        "Noite de dança em uma academia"
    ];
    const activitiesNight = [
        "Noite no Motel",
        "Festa em casa com amigos",
        "Ida a uma boate",
        "Noite de karaokê",
        "Assistir a um musical ou peça teatral",
        "Cocktails em um sky bar",
        "Sessão de cinema drive-in",
        "Passeio romântico na praia",
        "Festa temática em um clube",
        "Sessão de jogos de vídeo game"
    ];

    let activities;

    // Lógica de seleção baseada na Vontade de se Encontrar e horário
    if (VE >= 4) {
        if (hour >= 22) {
            activities = activitiesNight;
        } else if (hour >= 18) {
            activities = activitiesEvening;
        } else if (hour >= 12) {
            activities = activitiesAfternoon;
        } else {
            activities = activitiesMorning;
        }
    } else {
        if (hour >= 22) {
            activities = activitiesEvening; // Atividades mais reservadas para tarde da noite
        } else if (hour >= 18) {
            activities = activitiesAfternoon.concat(activitiesEvening);
        } else if (hour >= 12) {
            activities = activitiesMorning.concat(activitiesAfternoon);
        } else {
            activities = activitiesMorning; // Atividades tranquilas para a manhã
        }
    }

    // Retorna uma atividade aleatória da lista apropriada
    return activities[Math.floor(Math.random() * activities.length)];
}

function calculateProbability() {
    let DT = parseInt(document.getElementById('DT').value);
    let D = parseInt(document.getElementById('D').value);
    let CP = parseInt(document.getElementById('CP').value);
    let CE = parseInt(document.getElementById('CE').value);
    let VE = parseInt(document.getElementById('VE').value); // A vontade de se encontrar
    
    // Definindo os pesos para cada variável
    let pesoDT = 1;
    let pesoD = 1;
    let pesoCP = 1;
    let pesoCE = 1;
    let pesoVE = 1;

    // Calculando a soma ponderada dos valores
    let somaPonderada = (DT * pesoDT) + (D * pesoD) + (CP * pesoCP) + (CE * pesoCE) + (VE * pesoVE);

    // Calculando a soma dos pesos possíveis
    let somaPesos = (5 * pesoDT) + (5 * pesoD) + (5 * pesoCP) + (5 * pesoCE) + (5 * pesoVE);

    // Calculando a média ponderada
    let mediaPonderada = somaPonderada / somaPesos;

    // Ajustando a escala para que esteja entre 1% e 99%
    let adjustedProbability = mediaPonderada * 98 + 1;

    let activity = getActivityBasedOnTime(document.getElementById('time').value, VE);

    document.getElementById('result').textContent = `Probabilidade de Encontro: ${adjustedProbability.toFixed(2)}%. Sugestão de atividade: ${activity}`;
}


// Certifique-se de vincular esta função a um evento no botão calcular
document.querySelector('button').addEventListener('click', calculateProbability);
