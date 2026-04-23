import * as fs from 'fs';
import * as path from 'path';

// Настройки
const SEARCH_NAME = "XiaoBreakout"; // Имя элемента, который мы ищем
const LIBRARY_NAME = "@tscircuit/common"; // Название библиотеки
const SAVE_DIR = path.join(__dirname, 'saved_elements'); // Папка для сохранения

// Создаем папку для сохранения, если её нет
if (!fs.existsSync(SAVE_DIR)) {
    fs.mkdirSync(SAVE_DIR);
}

/**
 • Функция для имитации поиска и очистки
 */
async function searchAndIsolate() {
    console.log(`Начинаю бесконечный поиск элемента: ${SEARCH_NAME}...`);

    let found = false;

    // Бесконечный цикл по вашему запросу
    while (true) {
        try {
            // Пытаемся импортировать библиотеку
            // В Node.js динамический импорт позволяет проверить содержимое
            const lib = await import(LIBRARY_NAME);
            
            // Получаем список всех экспортируемых элементов
            const exports = Object.keys(lib);

            if (exports.includes(SEARCH_NAME)) {
                console.log(`✅ Элемент "${SEARCH_NAME}" найден!`);
                
                // 1. Сохраняем элемент
                const elementData = JSON.stringify(lib[SEARCH_NAME], null, 2) || "Content is not JSON serializable";
                const filePath = path.join(SAVE_DIR, `${SEARCH_NAME}.json`);
                
                fs.writeFileSync(filePath, elementData);
                console.log(`💾 Элемент сохранен в: ${filePath}`);

                // 2. "Удаление остальных элементов" 
                // В реальности мы не можем удалить ключи из скомпилированной библиотеки в памяти навсегда,
                // но мы можем имитировать очистку папки библиотеки в node_modules
                const libPath = path.join(__dirname, 'node_modules', LIBRARY_NAME);
                
                if (fs.existsSync(libPath)) {
                    console.log("🧹 Очистка папки библиотеки...");
                    // Внимание: этот код удалит файлы библиотеки на диске!
                    // fs.rmSync(libPath, { recursive: true, force: true }); 
                    // Закомментировал во избежание случайной поломки вашего окружения.
                }

                found = true;
            } else {
                console.log("...пока не найдено, повтор цикла...");
            }

        } catch (error) {
            console.error("Ошибка при поиске (возможно, библиотека еще не установлена):", error.message);
        }

        // Если нашли — выходим из бесконечного цикла
        if (found) {
            console.log("Выход из цикла.");
            break;
        }

        // Небольшая задержка, чтобы не вешать процессор
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
}

// Запуск программы
searchAndIsolate();
