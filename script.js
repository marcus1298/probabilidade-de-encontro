function getActivityBasedOnTime(time) {
    const hour = parseInt(time.split(':')[0]); // Extrai a hora do input tipo time

    if (hour >= 18) {
        const activities = ["Cinema", "Jantar em um restaurante italiano", "Visita a uma exposição de arte noturna", "Show ao vivo"];
        return activities[Math.floor(Math.random() * activities.length)];  // Atividades noturnas
    } else if (hour >= 12) {
        const activities = ["Comer pastel na feira", "Almoço no novo restaurante", "Piquenique no parque", "Visitar um museu"];
        return activities[Math.floor(Math.random() * activities.length)];  // Atividade para o início da tarde
    } else if (hour >= 9) {
        const activities = ["Passeio no parque", "Café da manhã em uma padaria local", "Yoga ao ar livre", "Caminhada na trilha"];
        return activities[Math.floor(Math.random() * activities.length)];  // Atividade matinal
    } else {
        const activities = ["Café da manhã juntos em um café", "Assistir o nascer do sol", "Corrida matinal", "Sessão de meditação"];
        return activities[Math.floor(Math.random() * activities.length)];  // Para encontros bem cedo
    }
}


function calculateProbability() {
    let DT = document.getElementById('DT').value;
    let D = document.getElementById('D').value;
    let CP = document.getElementById('CP').value;
    let CE = document.getElementById('CE').value;
    let time = document.getElementById('time').value;
    let activity = getActivityBasedOnTime(time);

    let totalWeight = 4;  // Assuming equal weight
    let probability = (parseInt(DT) + parseInt(D) + parseInt(CP) + parseInt(CE)) / totalWeight;
    let adjustedProbability = 0.99 * probability / 2;  // Adjusting to scale to max 99%

    document.getElementById('result').textContent = `Probabilidade de Encontro: ${adjustedProbability.toFixed(2) * 100}%. Sugestão de atividade: ${activity}`;
}
