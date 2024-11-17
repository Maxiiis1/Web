(function () {
    // Функция для получения и отображения статистики загрузки страницы
    function displayPageLoadStats() {
        // Получение данных о времени загрузки страницы из Performance API
        const [navigationEntry] = performance.getEntriesByType("navigation");
        if (navigationEntry) {
            const pageLoadTime = navigationEntry.loadEventEnd - navigationEntry.startTime;
            // Проверка, что данные доступны
            if (pageLoadTime > 0) {
                // Создание элемента для вывода статистики
                const statsElement = document.createElement("div");
                statsElement.style.fontSize = "14px";
                statsElement.style.color = "#333";
                statsElement.style.padding = "10px 0";
                statsElement.textContent = `Время загрузки страницы: ${pageLoadTime} мс`;
                statsElement.className = "timeStatistic"

                // Добавление статистики в футер
                const footer = document.querySelector(".footer");
                if (footer) {
                    footer.appendChild(statsElement);
                } else {
                    console.warn("Элемент футера не найден.");
                }
            } else {
                console.warn("Данные о времени не найдены.");
            }
        }
    }

    // Подписка на событие загрузки страницы
    window.addEventListener("load", displayPageLoadStats);
})();
