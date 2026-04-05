# Практична робота 7.2
## Варіант 5 — Робота з множинами

### Опис
У роботі реалізовано основні операції з множинами за допомогою масивів у JavaScript.

### Реалізовані алгоритми
1. Union — об'єднання без дублікатів
2. Intersection — перетин множин
3. Difference — різниця A - B
4. Symmetric Difference — симетрична різниця
5. Subset Check — перевірка, чи є A підмножиною B

### Вхідні дані
A = [1, 2, 3, 4, 5]  
B = [4, 5, 6, 7, 8]

### Результати
- Union: 1, 2, 3, 4, 5, 6, 7, 8
- Intersection: 4, 5
- Difference A-B: 1, 2, 3
- Symmetric Difference: 1, 2, 3, 6, 7, 8
- A є підмножиною B: false

### Використані методи
- Set
- filter()
- includes()
- every()
- spread operator (...)

### Складність
- Union: O(n + m)
- Intersection: O(n * m)
- Difference: O(n * m)
- Symmetric Difference: O(n * m)
- Subset Check: O(n * m)

### Як запустити
Відкрити файл `index.html` у браузері.

### Demo video
Сюди вставити посилання на відео

### Автор
Устич Максим  
Група alk-43
